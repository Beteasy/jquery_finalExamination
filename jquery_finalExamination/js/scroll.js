$(document).ready(function () {
    $(window).scroll(function () {
        if($(window).scrollTop() >= 50){
            $("#scroll_top").slideDown(500);
        }
        else{
            $("#scroll_top").slideUp(500);
        }
    });

    $("#scroll_top").click(function () {
        $(this).animate({
            bottom: "100%",
        }, 1000);
        $("html,body").animate({
            scrollTop: "0px"
        },1000);
        setTimeout(function () {
            $("#scroll_top").removeAttr("style");
        },1200)
        // $("#scroll_top").animate({
        //     top: 0
        // },500)
    })

})