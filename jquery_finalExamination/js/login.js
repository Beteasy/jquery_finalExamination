$(document).ready(function (e) {

    //下拉菜单实现
    $(".navbar-nav>li").mouseenter(function () {
        $(this).children("ul").stop().slideDown(600);
    });

    //下拉菜单回收
    $(".navbar-nav>li").mouseleave(function () {
        $(this).children("ul").stop().slideUp(600);
    });

    //****************************************************************************
    $(".txtb input").on("focus", function () {
        $(this).addClass("focus");
    })

    $(".txtb input").on("blur", function () {
        if ($(this).val() == ""){
            // $(".signUp-form span + div").text("不能为空");
            $(this).removeClass("focus");
        }
    })

    //******************************************************************************


//**********************************************************************************

    $("#username").blur(function () {
        var name = $("#username").val();     //获取输入框中的值

        //检查输入框中的内容是否为空
        if (name.length == 0){
            $("#usernameE").text("用户名不能为空");
        }


    })

//    输入框获得焦点时，将提示的内容隐藏
    $("#username").focus(function () {
        $("#usernameE").text("");
    })


//**********************************************************************************


    $("#password").blur(function () {
        var spassword = $("#password").val();     //获取输入框中的值
        // console.log(spassword.length);

        //检查输入框中的内容是否为空
        if (spassword.length == 0){
            $("#passwordE").text("密码不能为空");
        }

    })

//    输入框获得焦点时，将提示的内容隐藏
    $("#password").focus(function () {
        $("#passwordE").text("");
    })


//**********************************************************************************

    $(".sigbtn").on("click", function () {

        var name = $("#username").val();
        var spassword = $("#password").val();

        var msgClasses = "h3 text-center";

        if (name.length==0 || spassword.length==0){
            // $("#smsgSubmit").text("请填写上述表单");
            $("#msgSubmit").removeClass().addClass(msgClasses).text("请填写上述表单");
        }
        else {

                alert("登录成功");
                location.href='news_bk.html';
            }
            // $(window).attr("location","index_origin.html");
            // $(window).attr('location','http://www.jb51.net');
            // window.location.href="index_origin.html";


    })

})
