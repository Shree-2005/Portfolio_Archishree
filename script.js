// Optional subtle scroll reveal animation
document.addEventListener('scroll', () => {
  document.querySelectorAll('.project-card, .project-overview, .project-gallery').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
