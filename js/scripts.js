$(function () {
   $('.carousel').carousel({
      interval: 3000
   });

   $('.search').on('click', function () {
      $('.navbar-form').slideToggle();
   });

   $('#elastislide').elastislide();

});

$(window).load(function () {
   let carouselCaptionWidth = $('#carousel-sidebar .active img').width();
   $('#carousel-sidebar img').each(function () {
      $(this).attr('width', carouselCaptionWidth);
   });
   $('#carousel-sidebar .sidebar-carousel-caption')
      .css('max-width', carouselCaptionWidth + 'px');

   $('#sidebar-indicators .carousel-indicators')
      .css('max-width', carouselCaptionWidth + 'px');

});