import { useLayoutEffect, useRef } from 'react';

export function LakeBackdrop() {
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      // Offset 80% of page scrolling so the lake moves upward at 20% of content speed.
      // Stop increasing the offset once the tallest backdrop (1350px) leaves the viewport.
      image.style.transform = `translate3d(0, ${Math.min(Math.max(window.scrollY, 0), 1350) * 0.8}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const syncMotion = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener('scroll', onScroll);
      if (reducedMotion.matches) {
        image.style.removeProperty('transform');
      } else {
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
      }
    };

    syncMotion();
    reducedMotion.addEventListener('change', syncMotion);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      reducedMotion.removeEventListener('change', syncMotion);
    };
  }, []);

  return (
    <div className="site-backdrop" aria-hidden="true">
      <img ref={imageRef} src="/images/refresh/lakeDay.webp" alt="" width="2400" height="1427" fetchPriority="high" />
    </div>
  );
}
