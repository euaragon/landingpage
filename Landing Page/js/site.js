window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
  
    // Fondo parallax
    let parallax = document.querySelector(".parallax-bg");
    parallax.style.transform = `translateY(${scrollY * -0.7}px)`; 
  
    // Separador
    let separador = document.querySelector(".separador");
    separador.style.transform = `translateY(${scrollY * -0.01}px)`; 
  });
  