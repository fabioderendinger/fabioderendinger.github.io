$( document ).ready(function() {

  $(".button-collapse").sideNav();
    
  $('.typed').typeIt({
      strings: ["n entrepreneur.", " mathematician.", " machine learning engineer.", " full-stack web developer."],
      startDelete: true,
      speed: 80,
      startDelay: 4000,
      deleteSpeed: 40,
      deleteDelay: 5000,
      breakLines: false,
      autoStart: true,
      loop: true,
      loopDelay: 4000,
   });


   var $container = $('.masonry-grid-1');
   // initialize
   $container.masonry({
     columnWidth: '.col',
     itemSelector: '.col',
   });

   var $container = $('.masonry-grid-2');
   // initialize
   $container.masonry({
     columnWidth: '.col',
     itemSelector: '.col',
   });


});


