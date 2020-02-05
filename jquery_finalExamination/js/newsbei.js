$(document).ready(function () {


    //*******图片预览放大****************
    var x = 10;
    var y = 20;
    var position = 0;
    $(window).mouseenter(function (e) {
        position = e.screenY;
        console.log(position);
    });

    $("a.tooltip").mouseover(function(e){
        this.myTitle = this.title;
        this.title = "";
        var imgTitle = this.myTitle? "<br/>" + this.myTitle : "";
        var tooltip = "<div id='tooltip' style='display: none'><img src='"+ this.href +"' alt='产品预览图' width='400px' height='400px'/>"+imgTitle+"<\/div>"; //创建 div 元素
        $("body").append(tooltip);	//把它追加到文档中
        if ((position-400)>0){
            $("#tooltip")
                .css({
                    "position": "relative",
                    "top": (e.pageY-400) + "px",
                    "left":  (e.pageX+x)  + "px",
                    "width": 10 + "px",
                    "height": 10 +  "px"
                }).show("fast");
        }else {
            $("#tooltip")
                .css({
                    "position": "relative",
                    "top": (e.pageY+y) + "px",
                    "left":  (e.pageX+x)  + "px",
                    "width": 10 + "px",
                    "height": 10 +  "px"
                }).show("fast") ;
        }
        // $("#tooltip")
        //     .css({
        //         "position": "relative",
        //         "top": (e.pageY+y) + "px",
        //         "left":  (e.pageX+x)  + "px",
        //         "width": 10 + "px",
        //         "height": 10 +  "px"
        //     }).show("fast");	  //设置x坐标和y坐标，并且显示
    }).mouseout(function(){
        this.title = this.myTitle;
        $("#tooltip").remove();	 //移除
    }).mousemove(function(e){
        if ((position-400)>0){
            $("#tooltip")
                .css({
                    "position": "relative",
                    "top": (e.pageY-400) + "px",
                    "left":  (e.pageX+x)  + "px",
                    "width": 10 + "px",
                    "height": 10 +  "px"
                }).show("fast");
        }else {
            $("#tooltip")
                .css({
                    "position": "relative",
                    "top": (e.pageY+y) + "px",
                    "left":  (e.pageX+x)  + "px",
                    "width": 10 + "px",
                    "height": 10 +  "px"
                }).show("fast") ;
        }

    });

    //*******搜索框***************
    $(".button").on("click",function() {
        $(".input").toggleClass("inclicked");
        $(".button").toggleClass("close");
    });

    $(".input").on("blur",function () {
        $(this).text("");
    })

    //点击新闻跳转到详情页
    $(".item").click(function(){
        location.href='newsDetail.html';

    });


    //********************轮播***************************************
    var allButtons = $('#buttons > button');

    for(let i=0; i<allButtons.length; i++){
        $(allButtons[i]).on('click',function(x){
            var index = $(x.currentTarget).index();
            var p = index * (-700);
            // if (index===allButtons.length-1){
            //
            // }
            $('#images').css({
                transform: 'translate(' + p + 'px)'
            })
            n = index;
            activeButton(allButtons.eq(n));
        })
    }
    // for(let i=allButtons.length; i>=0; i--){
    //         $(allButtons[i]).on('click',function(x){
    //             var index = $(x.currentTarget).index();
    //             var p = index * (-700);
    //             $('#images').css({
    //                 transform: 'translate(' + p + 'px)'
    //             })
    //             n = index;
    //             activeButton(allButtons.eq(n));
    //         })
    //     }

    var n = 0;
    var size = allButtons.length;
    playSlide(n%size);
    var timeId = setTimer();

    function playSlide(index){
        allButtons.eq(index).trigger('click')
    }

    function setTimer(){
        return setInterval( ()=> {
            n += 1;
            playSlide(n%size)
        },2000)
    }


    $('.images').on('mouseenter', function(){
        // window.clearInterval(timeId)
        window.clearInterval(timeId);

    });

    $('.images').on('mouseleave', function(){
        timeId = setTimer();
    });

    function activeButton($button){
        $button
            .addClass('active')
            .siblings().removeClass('active')
    }

    //*****箭头********
    // $(".window").each(function () {
    //     $(this).onmouseover(function () {
    //         $(this).find(".leftArrow").show()
    //     })
    //     $(this).onmouseover(function () {
    //         $(this).find(".rightArrow").show()
    //     })
    // })
    $(".window").mouseenter(function () {
        $(this).find(".leftArrow").show();
        $(this).find(".rightArrow").show();
    });
    $(".window").mouseleave(function () {
        $(this).find(".leftArrow").hide();
        $(this).find(".rightArrow").hide();
    });
    $(".leftArrow").on("click", function () {
        n--;
        allButtons.eq(n%size).trigger('click')
    });
    $(".rightArrow").on("click", function () {
        n++;
        allButtons.eq(n%size).trigger('click')
    });

    //*****无缝********
    var clone = $(".images").first().clone();
    $(".images").append(clone);
})