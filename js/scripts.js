$("document").ready(function () {
    //jQuery code for all the page
    var main = $('#main'), second = $('#second'), third = $('#third'),thirdone = $('#thirdone'), fourth = $('#fourth'), fifth = $('#fifth'), logo = $("#logo");
    var dream = $("#dream"), design = $("#design"),  develop = $("#develop"),descri = $("#descri");
    var fbcolor = $('#fbColor'), twcolor = $('#twColor'), incolor = $('#inColor');

    logo.fadeIn(1000);
    descri.fadeIn(1000);
    dream.fadeIn(1400);
    design.fadeIn(2200);
    develop.fadeIn(2800);

    fbcolor.fadeIn(3900);
    twcolor.fadeIn(4200);
    incolor.fadeIn(4800);




    //Srolling to division functions.........................................
    $("#logo").click(function () {
        $('html, body').animate({
            scrollTop: third.offset().top
        }, 1200);
    });
    $("#aboutButton").click(function () {
        $('html, body').animate({
            scrollTop: thirdone.offset().top
        }, 1200);
    });
    $("#contButton").click(function () {
        $('html, body').animate({
            scrollTop: fourth.offset().top
        }, 2000);
    });

        $("#endCredit").click(function () {
        $('html, body').animate({
            scrollTop: main.offset().top
        }, 2000);
    });


    //       $("#social").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#fourth").offset().top
    //           }, 3000);
    //       });

//    $(window).scroll(function () {
//
//        if (main.visible() & thirdone.visible(true) == false) {
//
//        $('html, body').animate({
//            scrollTop: thirdone.offset().top
//        }, 2000);
//
//
//        }
//    });



    //Srolling to division functions.........................................
    $(window).scroll(function () {
        if (second.visible(true) && third.visible(true) && fourth.visible(true) === false) {
            fifth.css("display", "none");
        }
    });
    $(window).scroll(function () {
        if (main.visible(true) === true && third.visible(true) === false) {
            // console.log("showing");
            fifth.css("display", "none");
        } else {
            // console.log("not showing");
            if (third.visible(true) && fourth.visible(true)) {
                fifth.show();
            }
        }
    });
    //Social buttons color changes


    fbcolor.mouseover(function () {
        main.css("background-color", "#3b5998");
    });
    twcolor.mouseover(function () {
        main.css("background-color", "#00aced");
    });
    incolor.mouseover(function () {
        main.css("background-color", "#9b6954");
    });
    $('#btndiv').mouseout(function () {
        main.css("background-color", "#cf4646");
   });

    //PURE JS code for same mouse over event
//    var fbColors = document.getElementById('fbColor');
//    fbColors.addEventListener("mouseover", function (event) {
//        main.css("background-color", "#3b5998");
//        console.log("the event is " + Event);
//    });


    //---------------------------AJAX for tumblr API --------------------[START]---
    getJSONDataTumblr();
}); //End of Document Ready Function
//---------------------------AJAX for tumblr API --------------------[START]---
function getJSONDataTumblr () {
    var tumblrAPI = "https://api.tumblr.com/v2/blog/chkry.tumblr.com/posts/photo?callback=?";
    $.getJSON(tumblrAPI, {
        api_key: 'ivofJBCOeNzCg3quY2l7PxnMm0w1bCQb7e3X84erImRG9stL1X'
        , tags: "chkry"
        , limit: 21
    }, successFn);
}

function successFn(result) {
    console.log("Success function initated");
    console.log(result);
    $.each(result.response.posts, function (i, item) {
        console.log(result.response.posts);
        $.each(item.photos, function (j, item1) {
            var cdn = item1.alt_sizes[2].url;
            $("<img>").attr("src", cdn).appendTo("#tPhotos");
            //                console.log(item1.original_size.url);
        });
        //                if (i === 50) {
        //                        return false;
        //                    }
    });
}
//---------------------------AJAX for tumblr API --------------------[END]---
