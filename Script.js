// Resalta el enlace de navegación correspondiente a la sección visible
// y "enciende" el nodo del módulo activo, como un indicador de estado.

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.topbar__nav a');

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.topbar__nav a[href="#${id}"]`);
        const node = entry.target.querySelector('.node');

        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.style.color = '');
          if (link) link.style.color = 'var(--amber)';
          if (node) node.style.borderColor = 'var(--amber)';
        } else if (node) {
          node.style.borderColor = 'var(--cyan)';
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
});
