document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector('.btn-top');

  window.addEventListener("scroll", () => {
    // Mostrar o botão após rolar 300px
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('.text-content', {
  origin: 'left',
  duration: 2000,
  distance: '50%'
});

sr.reveal('.imagem', {
  origin: 'right',
  duration: 2000,
  distance: '50%',
  delay: 500
});

sr.reveal('.subtitle', {
  rotate: { x: 100, y: 20, z: 0 },
  duration: 2000,
  scale: 0.5
});

sr.reveal('.p-text', {
  origin: 'left',
  duration: 2000,
  distance: '100%',
});

sr.reveal('.skills', {
  origin: 'bottom',
  duration: 2000,
  distance: '200px',
  delay: 500,
  scale: 1.2
});


sr.reveal('.box-container', {
  duration: 2000,
  distance: '100px',
  scale: 0.5
});

sr.reveal('.text-container', {
  origin: 'left',
  duration: 2000,
  distance: '50%'
});

sr.reveal('.form', {
  origin: 'right',
  duration: 2000,
  distance: '50%'
});