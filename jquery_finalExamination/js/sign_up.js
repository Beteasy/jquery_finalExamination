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
    //输入框失去焦点时触发的事件，如果内容为空，则进行提示
    $("#email").on("blur",function () {
        var email = $("#email").val();     //获取输入框中的值

        //检查输入框中的内容是否为空
        if (email.length == 0){
            $("#emailE").text("邮箱不能为空");
        }
        else {
            if (!checkEmail(email)){
                $("#emailE").text("邮箱格式错误！");
            }

        }
    })
    // $("#email").blur(function () {
    //     var email = $("#email").val();     //获取输入框中的值
    //
    //     //检查输入框中的内容是否为空
    //     if (email.length == 0){
    //         $("emailE").text("邮箱不能为空");
    //     }
    //     else {
    //         if (!checkEmail(email)){
    //             $("#emailE").text("邮箱格式错误！");
    //         }
    //
    //     }
    //
    // })

//    输入框获得焦点时，将提示的内容隐藏
    $("#email").focus(function () {
        $("#emailE").text("");
    })

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


    $("#cpassword").blur(function () {
        var cpassword = $("#cpassword").val();     //获取输入框中的值
        var  password = $("#password").val();

        //检查输入框中的内容是否为空
        if (cpassword.length == 0){
            $("#cpasswordE").text("密码不能为空").css({
                color: "red"
            });
        }
        else {
            if (!checkPassword(password,cpassword)){
                $("#cpasswordE").text("两次输入的密码不一致");
            }
        }

    })

//    输入框获得焦点时，将提示的内容隐藏
    $("#cpassword").focus(function () {
        $("#cpasswordE").text("");
    })


//**********************************************************************************

    // $("#signUp-form").submit(function () {
    //     var email = $("#email").val();
    //     var name = $("#username").val();
    //     var spassword = $("#password").val();
    //     var cpassword = $("#cpassword").val();
    //     var msgClasses = "h3 text-center";
    //
    //     if (email.length==0 || name.length==0 || spassword.length==0 || cpassword.length==0){
    //         e.preventDefault();
    //         // $("#smsgSubmit").text("请填写上述表单");
    //         $("#msgSubmit").removeClass().addClass(msgClasses).text("请填写上述表单");
    //     }
    //     else {
    //         // $(window).attr("location","index_origin.html");
    //         // $(window).attr('location','http://www.jb51.net');
    //         // window.location.href="index_origin.html";
    //         alert("注册成功");
    //     }
    // })
    
    $(".sigbtn").on("click", function () {
            var email = $("#email").val();
            var name = $("#username").val();
            var spassword = $("#password").val();
            var cpassword = $("#cpassword").val();
            var msgClasses = "h3 text-center";

            if (email.length==0 || name.length==0 || spassword.length==0 || cpassword.length==0){
                // $("#smsgSubmit").text("请填写上述表单");
                $("#msgSubmit").removeClass().addClass(msgClasses).text("请填写上述表单");
            }
            else {
                if (!checkEmail(email)) {
                    $("#msgSubmit").removeClass().addClass(msgClasses).text("表单填写有误");
                }else {
                    alert("注册成功");
                    location.href='news_bk.html';
                }
                // $(window).attr("location","index_origin.html");
                // $(window).attr('location','http://www.jb51.net');
                // window.location.href="index_origin.html";

            }
    })








})

function checkEmail(email) {
    if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)){
        return false;
    }
    else {
        return true;
    }
}

function checkPassword(spassword, cpassword) {
    if (spassword == cpassword){
        return true;
    }
    else {
        return false;
    }
}