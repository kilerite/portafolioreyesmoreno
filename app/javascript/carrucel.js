<script>
  // Inicializar el carrusel
  var carousel = document.querySelector('#carouselExample');
  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 2000, // Intervalo de tiempo entre las transiciones de las imágenes (en milisegundos)
    wrap: true, // Permite volver al principio después de llegar al final del carrusel
    touch: true // Permite la navegación táctil en dispositivos móviles
  });
</script>
