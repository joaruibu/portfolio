$(document).ready(function () {
    
  // Animación  scroll.

    
  $(window).scroll(function() {        
    var scroll = $(window).scrollTop();    
    if (scroll >= 10) {
       $(".contenedor-cabecera").addClass("contenedor-cabecera--sombra");    
    }else{
       $(".contenedor-cabecera").removeClass("contenedor-cabecera--sombra");
    }
});

 window.sr = ScrollReveal();

 sr.reveal('.contenedor-cabecera', {
     duration: 1000,delay:1000,
 })
 sr.reveal('.contenedor-portada', {
  duration: 1000, 
})

sr.reveal('.detalle1', {
  duration: 3000,
})
  
sr.reveal('.detalle2', {
  duration: 3000,
})
  
sr.reveal('.detalle3', {
  duration: 3000,
})
  
sr.reveal('.detalle4', {
  duration: 3000,
})
  
sr.reveal('.detalle5', {
  duration: 3000,
})
  
sr.reveal('.contacto', {
  duration: 3000,
})
  
 
})