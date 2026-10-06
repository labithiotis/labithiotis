import { useLayoutEffect, useRef } from 'react';

export function LakeBackdrop() {
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const parallax = window.matchMedia(
      '(min-width: 701px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      // Offset 80% of page scrolling so the lake moves upward at 20% of content speed.
      image.style.transform = `translate3d(0, ${Math.min(Math.max(window.scrollY, 0), 1350) * 0.8}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const syncMotion = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener('scroll', onScroll);
      if (parallax.matches) {
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
      } else {
        image.style.removeProperty('transform');
      }
    };

    syncMotion();
    parallax.addEventListener('change', syncMotion);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      parallax.removeEventListener('change', syncMotion);
    };
  }, []);

  return (
    <div className="site-backdrop" aria-hidden="true">
      <img ref={imageRef} src="/images/refresh/lakeDay.webp" alt="" width="2400" height="1427" fetchPriority="high" />
    </div>
  );
}
