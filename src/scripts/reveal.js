const initReveal = () => {
  const elements =
    document.querySelectorAll < HTMLElement > '[data-reveal]:not(.is-visible)';

  if (!elements.length) return;

  // Fallback jika browser tidak mendukung Intersection Observer.
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => {
      element.classList.add('is-visible');
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
};

initReveal();
document.addEventListener('astro:page-load', initReveal);
