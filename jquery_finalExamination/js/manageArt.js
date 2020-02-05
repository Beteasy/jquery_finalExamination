$(document).ready(function () {
    // $(".articles").each(function () {
    //     $(this).find(".functionButton").on()
    // })
    $(".functionButton").on("click", function () {
        var status = $(".functionButton ul").attr("status");

        if (status == "hidden"){
            $(".functionButton ul").show();
            $(".functionButton ul").attr("status","show");
        } else {
            $(".functionButton ul").hide();
            $(".functionButton ul").attr("status","hidden");
        }

    });

    $(".heart").on("click", function() {
        console.log("1111");
        // var priseBig = $("<div class='priseBig'></div>");
        // $("body").append(priseBig);
        // $(".priseBig").toggleClass("is-active")
        $(this).toggleClass("is-active");
        console.log("111");
    });

    //*******搜索框***************
    $(".button").on("click",function() {
        $(".input").toggleClass("inclicked");
        $(".button").toggleClass("close");
    });

    $(".input").on("blur",function () {
        $(this).text("");
    })


    //评论
    $(".comment").on("click",function (e) {
        e.stopPropagation();
        var $temp = $(this).parent().parent();
        var target = $temp.next();
        console.log(target);


        var status = target.attr("status");
        if (status == "hidden"){
            target.stop().slideDown(600);
            target.attr("status","show");
        }else {
            target.stop().slideUp(600);
            target.attr("status","hidden");
        }

    })
})