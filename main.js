// Animation d'apparition douce
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// Année dynamique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();
