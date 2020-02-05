$(document).ready(function () {
    //下拉菜单实现
    $(".navbar-nav>li").mouseenter(function () {
        $(this).children("ul").stop().slideDown(600);
    });

    //下拉菜单回收
    $(".navbar-nav>li").mouseleave(function () {
        $(this).children("ul").stop().slideUp(600);
    });

    //分享
    $(".wechat").on("click",function () {
        var el = document.getElementById('share-area');
        var links = [{
            url: 'http://harttle.com',
            target: '_qrcode'
        }, {
            plugin: 'wechat',
            url: 'www.baidu.com'
        }, {
            plugin: 'weibo',
            args: {
                id: 'harttle'
            }
        }];
        window.socialShare(el, links);
    })

})