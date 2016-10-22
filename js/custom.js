/* -- Page Slider
   -- src: https://github.com/davist11/jQuery-One-Page-Nav
   ---------------------------- */


$(document).ready(function() {

// Stellar Js Init
$(window).stellar();


});

$(window).load(function() {
      $('#photoslider').carousel({
        interval: 4000
        })
      });

/*$(function () {

      // Set Initial Screen Dimensions

      var screenWidth = $(window).width(),
       screenHeight = $(window).height();


      $("#home").css({
        width: screenWidth,
        height: screenHeight
      });
      

      
      // Every time the window is resized...

      $(window).resize( function () {

        // Fetch Screen Dimensions

        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";
        
        // Set Slides to new Screen Dimensions
        
        $("#home").css({
          width: screenWidth,
          height: screenHeight
        }); 
        
      });

  });
*/
