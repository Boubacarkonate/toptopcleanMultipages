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

 const images = [
        'images/nettoyage-hotte-professionnelle-restaurant.webp',
        'images/personne-qui-s-occupe-du-nettoyage-des-bureaux.jpg',
        'images/chantier.jpg',

    ];

   const circle = document.querySelector('.hero-image-circle');
    const INTERVAL = 6000;
    let idx = 0;

    function changeImage() {
        // Crée un nouvel élément img pour la transition
        const newImg = document.createElement('img');
        newImg.src = images[idx];
        newImg.style.opacity = '0';
        newImg.style.animation = 'kenburns 6s ease-in-out forwards';
        circle.appendChild(newImg);

        // Fade-in
        setTimeout(() => { newImg.style.opacity = '1'; }, 50);

        // Supprime l'ancien img après fade
        const oldImg = circle.querySelectorAll('img');
        if (oldImg.length > 1) {
            setTimeout(() => {
                oldImg[0].remove();
            }, 1200); // correspond à transition opacity
        }

        // Prépare l'index pour la prochaine image
        idx = (idx + 1) % images.length;
    }

    // Lance la première image
    changeImage();
    setInterval(changeImage, INTERVAL);

window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    const topbar = document.querySelector('.topbar');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        topbar.classList.add('scrolled');
        topbar.classList.add('.scrolled a');
    } else {
        header.classList.remove('scrolled');
        topbar.classList.remove('scrolled');
    }
});



