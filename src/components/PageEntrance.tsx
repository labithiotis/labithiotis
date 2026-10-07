import { useLayoutEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const rise: Keyframe[] = [
  { opacity: 0, transform: 'translateY(16px)' },
  { opacity: 1, transform: 'translateY(0)' },
];
const fade: Keyframe[] = [{ opacity: 0.45 }, { opacity: 1 }];
const slide: Keyframe[] = [
  { opacity: 0, transform: 'translateX(18px)' },
  { opacity: 1, transform: 'translateX(0)' },
];
const chip: Keyframe[] = [
  { opacity: 0, transform: 'scale(0.95)' },
  { opacity: 1, transform: 'scale(1)' },
];

export function usePageEntrance() {
  const controller = useRef<ReturnType<typeof startPageEntrance>>(undefined);
  const visibleSections = useRef(new Set<HTMLElement>());
  const entranceExpired = useRef(false);
  const options = {
    threshold: 0,
    rootMargin: '0px',
    triggerOnce: true,
    fallbackInView: true,
    onChange: (inView: boolean, entry: IntersectionObserverEntry) => {
      const section = entry.target as HTMLElement;
      if (!inView) {
        visibleSections.current.delete(section);
        return;
      }
      visibleSections.current.add(section);
      controller.current?.reveal(section);
    },
  };
  const projects = useInView(options);
  const about = useInView(options);
  const stack = useInView(options);
  const contact = useInView(options);

  useLayoutEffect(() => {
    const root = document.documentElement;
    // Once the pre-hydration fallback exposes content, leave this visit static.
    const skipExpiredEntrance = () => {
      if (root.getAttribute('data-page-entrance') === 'expired') entranceExpired.current = true;
      if (!entranceExpired.current) return false;
      root.removeAttribute('data-page-entrance');
      return true;
    };
    if (skipExpiredEntrance()) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion && 'animate' in Element.prototype) root.setAttribute('data-page-entrance', 'pending');
    // Read section positions after the router has restored scroll for this page.
    const frame = requestAnimationFrame(() => {
      if (skipExpiredEntrance()) return;
      try {
        controller.current = startPageEntrance();
        for (const section of visibleSections.current) controller.current?.reveal(section);
      } catch (error) {
        controller.current?.cleanup();
        root.removeAttribute('data-page-entrance');
        throw error;
      }
    });
    return () => {
      cancelAnimationFrame(frame);
      controller.current?.cleanup();
      controller.current = undefined;
      root.removeAttribute('data-page-entrance');
    };
  }, []);

  return { projects: projects.ref, about: about.ref, stack: stack.ref, contact: contact.ref };
}

function startPageEntrance() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('animate' in Element.prototype)) {
    document.documentElement.removeAttribute('data-page-entrance');
    return;
  }
  // Start from the visitor's reading position, not an engine-dependent hydration deadline.
  const keyboardFocus = document.activeElement?.matches(':focus-visible') ?? false;
  const setupScrollY = window.scrollY;
  const playIntro = setupScrollY === 0 && !window.location.hash && !keyboardFocus;
  const linkedTarget = document.getElementById(window.location.hash.slice(1));
  const linkedSection =
    linkedTarget?.closest<HTMLElement>('[data-entrance-section]') ??
    (linkedTarget?.id === 'work' ? linkedTarget : undefined);
  const linkedBounds = linkedSection?.getBoundingClientRect();
  const playLinkedViewport = Boolean(
    !keyboardFocus && linkedBounds && linkedBounds.top >= 0 && linkedBounds.top < window.innerHeight,
  );
  const controller = createEntranceAnimations(playIntro || playLinkedViewport);
  const { state, run } = controller;
  const revealedSections = new WeakSet<HTMLElement>();
  animateIntro(run, playIntro, keyboardFocus);
  const { setupTime, initiallyVisible, initialDelays } = planSectionReveals(
    playIntro,
    playLinkedViewport,
    linkedSection,
    revealedSections,
  );
  state.schedulingIntro = false;

  const reveal = (section: HTMLElement) => {
    if (state.stopped || revealedSections.has(section)) return;
    revealedSections.add(section);
    section.setAttribute('data-entrance-revealed', '');
    const initialDelay = initialDelays.get(section);
    if (section.contains(document.activeElement) || (initiallyVisible.has(section) && initialDelay === undefined))
      return;
    const plannedStart = initialDelay === undefined ? state.introEnd : setupTime + initialDelay;
    const scrolling = window.scrollY !== setupScrollY || (initialDelay === undefined && window.scrollY > 0);
    const delay = scrolling ? 0 : Math.max(0, plannedStart - performance.now());
    state.schedulingIntro = (playIntro || playLinkedViewport) && delay > 0;
    animateSection(run, section, delay);
    state.schedulingIntro = false;
  };
  const cleanup = listenForEntranceChanges(controller, initialDelays, setupScrollY, reducedMotion);
  document.documentElement.setAttribute('data-page-entrance', 'active');
  return { reveal, cleanup };
}

function createEntranceAnimations(schedulingIntro: boolean) {
  const easing =
    getComputedStyle(document.documentElement).getPropertyValue('--ease').trim() || 'cubic-bezier(0.23, 1, 0.32, 1)';
  const state = {
    animations: new Set<Animation>(),
    introAnimations: new Set<Animation>(),
    schedulingIntro,
    introEnd: performance.now(),
    stopped: false,
  };
  const run = (element: Element | null, keyframes: Keyframe[], delay: number, duration: number) => {
    if (!element || state.stopped) return;
    element.setAttribute('data-entrance-revealed', '');
    const animation = element.animate(keyframes, { delay, duration, easing, fill: 'backwards' });
    state.animations.add(animation);
    if (state.schedulingIntro) {
      state.introAnimations.add(animation);
      state.introEnd = Math.max(state.introEnd, performance.now() + delay + duration);
    }
    animation.onfinish = () => {
      animation.cancel();
      state.animations.delete(animation);
      state.introAnimations.delete(animation);
    };
  };
  const cancel = (owned = state.animations) => {
    for (const animation of owned) {
      animation.cancel();
      state.animations.delete(animation);
      state.introAnimations.delete(animation);
    }
  };
  return { state, run, cancel };
}

type EntranceAnimations = ReturnType<typeof createEntranceAnimations>;
type RunAnimation = EntranceAnimations['run'];

function listenForEntranceChanges(
  { state, cancel }: EntranceAnimations,
  initialDelays: Map<HTMLElement, number>,
  setupScrollY: number,
  reducedMotion: MediaQueryList,
) {
  const finish = () => {
    state.stopped = true;
    cancel();
    document.documentElement.removeAttribute('data-page-entrance');
  };
  const onMotionChange = () => {
    if (reducedMotion.matches) finish();
  };
  const finishIntro = () => {
    state.introEnd = performance.now();
    for (const section of initialDelays.keys()) initialDelays.set(section, 0);
    cancel(state.introAnimations);
  };
  const onScroll = () => {
    if (window.scrollY !== setupScrollY) finishIntro();
  };
  const onFocus = (event: FocusEvent) => {
    finishIntro();
    const target = event.target;
    if (!(target instanceof Element)) return;
    // Keep the focused content still without disabling reveals in other sections.
    cancel(
      new Set(
        [...state.animations].filter(({ effect }) => {
          if (!(effect instanceof KeyframeEffect) || !effect.target) return false;
          return effect.target.contains(target) || target.contains(effect.target);
        }),
      ),
    );
  };
  document.addEventListener('focusin', onFocus);
  reducedMotion.addEventListener('change', onMotionChange);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => {
    finish();
    document.removeEventListener('focusin', onFocus);
    reducedMotion.removeEventListener('change', onMotionChange);
    window.removeEventListener('scroll', onScroll);
  };
}

function animateIntro(run: RunAnimation, playIntro: boolean, keyboardFocus: boolean) {
  if (playIntro) {
    run(document.querySelector('.site-header'), fade, 0, 300);
    run(document.querySelector('.hero-role'), fade, 0, 300);
    document.querySelectorAll('.hero-title-line').forEach((line, index) => {
      run(
        line,
        [
          { clipPath: 'inset(-0.25em -0.1em 100% -0.1em)', transform: 'translateY(12px)' },
          { clipPath: 'inset(-0.25em -0.1em -0.25em -0.1em)', transform: 'translateY(0)' },
        ],
        220 + index * 80,
        600,
      );
    });
    run(document.querySelector('.hero-summary'), rise, 700, 300);
    run(document.querySelector('.hero-buttons'), rise, 850, 300);
    run(
      document.querySelector('.hero-face'),
      [
        { transform: 'translateY(calc(100% - var(--hero-face-overlap)))', clipPath: 'inset(0 0 100%)' },
        { transform: 'translateY(0)', clipPath: 'inset(0 0 var(--hero-face-overlap))' },
      ],
      1350,
      800,
    );
    run(document.querySelector('.hero-location'), [{ opacity: 0 }, { opacity: 1 }], 2200, 300);
    run(
      document.querySelector('.experience-strip'),
      [
        { opacity: 0, transform: 'translateY(6px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      1050,
      300,
    );
    document.querySelectorAll('.experience-strip > *').forEach((item, index) => {
      run(item, rise, 1350 + index * 70, 300);
    });
    run(document.querySelector('#work .portfolio-section-heading'), slide, 1750, 350);
    document.querySelectorAll('.featured-card').forEach((card, index) => {
      run(card, rise, 1960 + index * 80, 500);
    });
  } else {
    document
      .querySelectorAll(
        '.site-header, .hero-role, .hero-title-line, .hero-summary, .hero-buttons, .hero-face, .hero-location, .experience-strip, .experience-strip > *, #work .portfolio-section-heading, .featured-card',
      )
      .forEach((element) => {
        element.setAttribute('data-entrance-revealed', '');
      });
    if (window.location.hash === '#work' && !keyboardFocus) {
      const bounds = document.getElementById('work')?.getBoundingClientRect();
      if (bounds && bounds.top >= 0 && bounds.top < window.innerHeight) {
        run(document.querySelector('#work .portfolio-section-heading'), slide, 0, 350);
        document.querySelectorAll('.featured-card').forEach((card, index) => {
          run(card, rise, 210 + index * 80, 500);
        });
      }
    }
  }
}

function animateSection(run: RunAnimation, section: HTMLElement, delay: number) {
  switch (section.dataset.entranceSection) {
    case 'projects':
      run(section.querySelector('.portfolio-section-heading'), slide, delay, 300);
      section.querySelectorAll('.independent-card').forEach((card, index) => {
        run(card, rise, delay + 80 + index * 70, 400);
      });
      break;
    case 'about':
      run(section, rise, delay, 500);
      run(
        section.querySelector('.about-face'),
        [{ transform: 'scale(0.96)' }, { transform: 'scale(1)' }],
        delay + 120,
        700,
      );
      run(section.querySelector('.about-details'), fade, delay + 260, 400);
      break;
    case 'stack':
      run(section.querySelector('h2'), slide, delay, 300);
      section.querySelectorAll('li').forEach((item, index) => {
        run(item, chip, delay + 80 + index * 45, 250);
      });
      break;
    case 'contact':
      run(
        section,
        [
          { opacity: 0.65, transform: 'translateY(6px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        delay,
        300,
      );
      break;
  }
}

function planSectionReveals(
  playIntro: boolean,
  playLinkedViewport: boolean,
  linkedSection: HTMLElement | undefined | null,
  revealedSections: WeakSet<HTMLElement>,
) {
  const linkedWorkDelay = 710 + Math.max(0, document.querySelectorAll('.featured-card').length - 1) * 80;
  let sectionDelay = playIntro ? 2300 : linkedSection?.id === 'work' ? linkedWorkDelay : 0;
  const setupTime = performance.now();
  const initiallyVisible = new Set<HTMLElement>();
  const initialDelays = new Map<HTMLElement, number>();
  document.querySelectorAll<HTMLElement>('[data-entrance-section]').forEach((section) => {
    const bounds = section.getBoundingClientRect();
    if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
    initiallyVisible.add(section);
    // Start a deep-link entrance at its target, not a clipped tail of the preceding section.
    if (
      playLinkedViewport &&
      linkedSection &&
      linkedSection.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_PRECEDING
    ) {
      return;
    }
    // Plan the choreography; useInView is the only trigger for section animations.
    if ((playIntro || playLinkedViewport) && !section.contains(document.activeElement)) {
      initialDelays.set(section, sectionDelay);
      sectionDelay += playIntro ? 350 : 120;
    }
  });
  // Preserve visible content immediately when this visit skips its entrance.
  for (const section of initiallyVisible) {
    if (initialDelays.has(section)) continue;
    revealedSections.add(section);
    section.setAttribute('data-entrance-revealed', '');
  }
  return { setupTime, initiallyVisible, initialDelays };
}
