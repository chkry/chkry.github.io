   $(document).ready(function() {
       $("#dream").fadeIn(1400);
       $("#design").fadeIn(2200);
       $("#develop").fadeIn(2800);
       $("#descri").fadeIn(1000);
       $("#social").fadeIn(1000);

       //Srolling to division functions.........................................
       $("#logo").click(function() {
           $('html, body').animate({
               scrollTop: $("#third").offset().top
           }, 3000);
       });

       $("#blogButton").click(function() {
           $('html, body').animate({
               scrollTop: $("#fourth").offset().top
           }, 3000);
       });

       $("#descri").click(function() {
           $('html, body').animate({
               scrollTop: $("#fourth").offset().top
           }, 6000);
       });

       $("#social").click(function() {
           $('html, body').animate({
               scrollTop: $("#fourth").offset().top
           }, 3000);
       });

       //Srolling to division functions.........................................
       var n = $("#main div").length;
       var g = $("#second").length;
       var f = $("#third").length;




       $(window).scroll(function() {
           if ($('#second').visible(true) && $('#third').visible(true) && $("#fourth").visible(true) == false) {
               $("#fifth").css("display", "none");
           }
       });

       $(window).scroll(function() {
           if ($('#main').visible(true) == true && $('#third').visible(true) == false) {
               // console.log("showing");
               $("#fifth").css("display", "none");
           } else {
               // console.log("not showing");
               if ($('#third').visible(true) && $('#fourth').visible(true)) {
                   $("#fifth").show();
               }
           }
       });


   });
