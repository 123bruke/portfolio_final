import { useEffect } from 'react';

/**
 * Initializes IntersectionObserver to trigger smooth transparent Fade-in and Zoom-in / Zoom-out
 * transitions dynamically both when scrolling down and scrolling up.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          el.classList.remove('is-zoomed-out');
        } else {
          // When out of viewport, gracefully zoom out and fade
          el.classList.remove('is-revealed');
          el.classList.add('is-zoomed-out');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: [0.08, 0.25],
    });

    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Re-check after images and dynamic layouts settle
    const timer = setTimeout(observeAll, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
