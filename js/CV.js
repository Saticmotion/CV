var images = {
   "pxl": ["pxl1.jpg", "pxl2.jpg", "pxl3.jpg"],
   "smaak": ["smaak1.jpg", "smaak2.jpg", "smaak3.jpg"]
};

var overlayActive = false;

$(function() {
   $(".dropdown").on("click", function(event) {
      if (!overlayActive) {
         var pos = $(this).offset();
         var height = $(this).outerHeight();
         var offset = {top: 5, left: 0};

         $("body").append("<div class=\"overlay\"></div>");
         $(".overlay").css({
            top: pos.top + height + offset.top + "px",
            left: pos.left + offset.left + "px"
         });

         images[event.target.id].forEach(function(value) {
            $(".overlay").append("<img src=\"../CV/img/" + value + "\" />");
         });
      } 
	  else {
         $(".overlay").remove();
      }

      overlayActive = !overlayActive;

      event.stopPropagation();
   });
});

$(function() {
   $(document).on('click', function(e) {
      var container = $(".overlay");

      if (!container.is(e.target) && container.has(e.target).length === 0 && overlayActive) {
         container.remove();
         overlayActive = false;
      }
   });
});