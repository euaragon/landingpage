window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
  
    // Fondo parallax
    let parallax = document.querySelector(".parallax-bg");
    parallax.style.transform = `translateY(${scrollY * -0.7}px)`; 
  
    // Separador
    let separador = document.querySelector(".separador");
    separador.style.transform = `translateY(${scrollY * -0.01}px)`; 
  });
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Muestra 1 imagen en móvil
    spaceBetween: 30, // Espacio entre las imágenes
    breakpoints: {
      // Cuando el ancho de la ventana sea 768px o más, muestra 3 imágenes
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });