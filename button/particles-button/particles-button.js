$(document).ready(function() {
    /**
     * using each loop - if there are multiple particles buttons on same page
     */
    $(".particles-btn").each(function(index, particlesBtn) {
      $(particlesBtn).on("click", function() {
        /*get the data attributes on the html element*/
        let radius = $(this).attr("data-radius") || 20;
        let particles = $(this).attr("data-particles") || 20;
        let speed = $(this).attr("data-speed") || 20;
  
        for (let i = 0; i < particles; i++) {
          /** add the no of paritlces using for loop */
          $(this).append($("<span>").addClass("particle"));
        }
        /* find each particle and add the animation*/
        $(this)
          .find(".particle")
          .each(function(index, element) {
            $(element).animate(
              {
                opacity: 0,
                top: getRndInteger(-radius, radius),
                left: getRndInteger(-radius, radius),
                bottom: getRndInteger(-radius, radius),
                right: getRndInteger(-radius, radius)
              },
              (radius / particles) * speed,
              function() {
                // remove the element
                $(element).remove();
                /*after  remove active class*/
                $(particlesBtn).removeClass("active");
              }
            );
          }); //for each element
      }); /*on click*/
    }); // for each particles-btn
  });
  
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };