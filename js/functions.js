$( document ).ready(function() {
    
    $('.typed').typeIt({
        strings: ["entrepreneur.", "mathematician.", "machine learning engineer.", "full-stack web developer."],
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
});