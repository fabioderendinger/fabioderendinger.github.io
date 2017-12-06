$( document ).ready(function() {
    
      $(".button-collapse").sideNav();
          
      var $container = $('#masonry-grid');
      // initialize
      $container.masonry({
        columnWidth: '.col',
        itemSelector: '.col',
      });
});
    