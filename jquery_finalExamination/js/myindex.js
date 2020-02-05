$(document).ready(function () {

    //下拉菜单实现
    $(".navbar_nav>li").mouseenter(function () {
        $(this).children("ul").stop().slideDown(600);
    });

    //下拉菜单回收
    $(".navbar_nav>li").mouseleave(function () {
        $(this).children("ul").stop().slideUp(600);
    });



//     //轮播实现
//     $('.index_banner').slick({
//         autoplay: true,
//         arrows: false,
//         dots: false,
//         infinite: true,
//         speed: 300,
//         autoplaySpeed: 3000,
//         fade: true,
//         pauseOnHover: false,
//     });
//
//     $('.index_banner').init(function(){
//         $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active')
//     });
//
// //    向前  向后按钮点击事件
//     $('.section1 .prev').click(function(){
//         $('.index_banner').slick('slickPrev')
//     });
//
//     $('.section1 .next').click(function(){
//         $('.index_banner').slick('slickNext');
//     });
//
//     $('.index_banner').on('afterChange',function(){
//         var index = $('.index_banner').slick('slickCurrentSlide');
//         $(".index_banner .inner").eq(index).slideDown(500);
//         // console.log(_index);
//         $('.section1 .number span').eq(index).addClass('active').siblings().removeClass('active');
//         var text = $('.section1 .index_banner .block_text').eq(index).show();
//
//     });
//
//     $(".index_banner").on(function () {
//         $(".index_banner").animate({
//             width:"50%",
//             height: "50%"
//         },3000)
//     })
//
//     $('.section1 .number span').click(function(){
//         var _index = $(this).index();
//         $('.index_banner').slick('slickGoTo',_index);
//         $(this).addClass("active").siblings().removeClass("active")
//     });
//
//     $(".index_banner")
});
