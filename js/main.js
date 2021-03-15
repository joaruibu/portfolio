



$(document).ready(function () {

  // Animación texto Joaquín Ruiz - J y scroll.
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".contenedor-cabecera").addClass("contenedor-cabecera--sombra");
    } else {
      $(".contenedor-cabecera").removeClass("contenedor-cabecera--sombra");
    }
  });
 

  // Cancelar link proyectos pendientes portfolo.




  $('.proyecto3').click(function (event) {
    event.preventDefault(); // cancel the event
  });




  const sr = ScrollReveal();

// PRINCIPAL
sr.reveal('.cabecera', {
  duration: 1000, 
})

sr.reveal('.animacion-portada', {
  duration: 17000,
  origin: 'left',
  //  delay: 1000,
  origin: 'left',
  distance: '-500px',
  opacity:'1'
})

sr.reveal('.contenedor-hero', {
  duration: 3000,

})


// PROYECTOS
sr.reveal('.contenedor-grid', {
  duration: 3000,

})

// ABOUT
sr.reveal('.contenedor-about', {
  duration: 3000, 
})

// contacto
sr.reveal('.link-container', {
  duration: 3000, 
})

})