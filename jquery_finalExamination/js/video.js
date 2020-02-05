$(document).ready(function () {
    // $(window).onload(function () {
    //
    // });
    // var topVideo =  document.getElementById("topVideo");
    // topVideo.play();

    //左边导航栏
    // $(".leftContainer ul li").hover(function () {
    //     var hoverClass = {
    //         background:"#bdc3c7",
    //     }
    //     $(this).css(hoverClass);
    // })
    //failed to maintain the style after refreshing
    // $(".leftContainer a").each(function () {
    //     // $(this).siblings().removeClass("clickClass");
    //     // $(this).addClass("clickClass");
    //     // $this = $(this);
    //     if($($(this))[0].href==String(window.location)){
    //         // $(".leftContainer ul li").removeClass("clickClass");
    //         // $this.parent().addClass("clickClass");
    //         // $(this).parent().addClass('active');
    //     }
    // })


    //*********DANMU*********
    $(".DMButton").on("click", function () {
        var randomPos = Math.floor((parseInt($(".videoContent").innerHeight()) - 40) * Math.random()) - 20;
        var randomColor = "" + Math.floor(Math.random() * 255).toString(16) + Math.floor(Math.random() * 255).toString(16) + Math.floor(Math.random() * 255).toString(16);
        var text = $(".DMText").val();
        var $danmu = $("<p class='danmu'></p>");
        var moveWidth = $(".videoContent").width();
        $(".DMText").val("");
        $danmu.text(text);
        $danmu.css({
            "position": "absolute",
            "font-size": "20px",
            "right": "10px",
            "z-index": "2",
            "top": randomPos + "px",
            "color": "#" + randomColor
        });
        var textLength = text.length;
        var fontSize = $danmu.css("font-size");
        var totalLength = Number(textLength)*parseInt(fontSize);
        moveWidth += totalLength;
        // console.log("textLength:" + textLength);
        // console.log("fontSize:" + fontSize);
        // console.log("totalLength:"+totalLength);
        // console.log(moveWidth);
        $(".videoContent").append($danmu);
        $danmu.animate({left: -moveWidth}, 8000, function () {
            $(this).remove();
        });
    });

    //*****弹幕开关********
    $(".btnn").on("click", function () {
        var status = $(".btnn").attr("isopen");
        console.log(status);
        if (status == "true"){
            $(".videoContent p").hide();
            $(".DMButton").attr("disabled","True");
            $(".DMText").attr("disabled","True");
            $(".btnn").attr("isopen", "false").animate({left:'0px'});
            $(this).parent().css('background-color','#838383');
        }else {
            $(".videoContent p").show();
            $(".DMButton").removeAttr("disabled");
            $(".DMText").removeAttr("disabled");
            $(".btnn").attr("isopen", "true").animate({left:'36px'});
            $(this).parent().css('background-color','rgb(255, 192, 159)');
        }
    });


    //**************上方视频****************
    $(".special").each(function () {
        $(this).on("click", function () {
            var videoPath = $(this).attr("videoPath");
            console.log(videoPath);
            $("#topVideo").attr("src", videoPath);
        })
    })



    //**************下方视频****************

    $(".videoItem").each(function () {
        $(this).mouseenter(function () {
            $(this).find(".playButton").show();
        })
        $(this).mouseleave(function () {
            $(this).find(".playButton").hide();
        })
        $(this).click(function () {
            var videoCover = $(this).attr("videoCover");
            var videoPath = $(this).attr("videoPath");
            // console.log(cover);
            // var video = $("<video id=\"video\" poster='"+videoCover+"' style='width: 1024px' height='616px' src='"+videoPath+"' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video><img onClick=\"closeVideo()\" class=\"vclose\" src=\"close.png\" style='width:25px;height:25px'/>")
            var video = $("<video id='video' poster='" + videoCover + "' style='width:1024px;height:616px;' src='" + videoPath + "' preload='auto' controls='controls' autoplay='autoplay'></video><img onClick='closeVideo()' class='vclose' src='close.png' style='width:25px;height:25px'/>");
            // $('.outVideo').html("<video id=\"video\" poster='"+videoCover+"' style='width: 640px' src='"+videoPath+"' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video><img onClick=\"closeVideo()\" class=\"vclose\" src=\"close.png\" width=\"25\" height=\"25\"/>");
            // $(".outVideo").show();
            $(".outVideo").append(video);
            $(".outVideo").show();
        })
    })
})


function closeVideo() {
    var video = document.getElementById("video");
    $(".outVideo").hide();
    video.pause();
    // $(".outVideo").html();
    $("#video").remove();
}