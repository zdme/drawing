$(function(){
    $(document).on('scroll', function () {
        var nav_top=$('.nav').offset().top;
        if(nav_top>0){
              $('.nav').css('background','rgba(0,0,0,0.5)');
        }
        else{
            $('.nav').css('background','rgba(0,0,0,0)');
        }
    });
  //二维码显示
    $('.nav_right a:eq(1)').hover(function () {
        $('.float').stop(true, true).fadeIn(0);
    }, function () {
        $('.float').fadeOut(500, function () {
            $('.float').css("display", "none");
        });
    });
    //下拉菜单
    $('.nav_li').hover(function () {
        $(this).find('ul').stop(true, true).fadeIn(0);
    }, function () {
        $(this).find('ul').fadeOut(500, function () {
            $(this).find('ul').css("display", "none");
        });
    });
    //访问量自加
    var maxNum = 14461891;//设置一个最大数
    var gapSec = maxNum / 86400000;//平均分给没毫秒
    var time = new Date();//获取当前时间
    var num = parseInt((time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()) * 1000 * gapSec);//算出当前显示数值
    $(".Num").html(num);//把该现实的数值给特定标签
    function setNum() {
        num = num + gapSec;//设定一个变量
        if (num >= maxNum) {
            $(".Num").html(maxNum);
            return;//如果到最大值，从头开始
        } else {
            $(".Num").html(parseInt(num));//如果没到最大就给标签
        }
    }
    //定时器1毫秒给一次数
    setInterval(function() {
            setNum();
        },1);
   //页面切换
   $('.second').find('.a1').on('click',function(){
        var off=$('.change').css('display');
        if(off=='none'){
            $('.change').fadeIn(1000);
            $('.change_other').fadeOut(1000);
        }else if(off=='block'){
            $('.change').fadeOut(1000);
            $('.change_other').fadeIn(1000);
        }
    });
    $('.second').find('.a2').on('click',function(){
        var off=$('.change').css('display');
        if(off=='none'){
            $('.change').fadeIn(1000);
            $('.change_other').fadeOut(1000);
        }else if(off=='block'){
            $('.change').fadeOut(1000);
            $('.change_other').fadeIn(1000);
        }
    });
    $('.btn').find('span:eq(0)').on('mouseover',function(){
        $(this).css('background','red').siblings().css('background','');
        $('.five_change').animate({width:'toggle'},1346);
         $('.five_change1').animate({width:'toggle'},0);
    });
   $('.btn').find('span:eq(1)').on('mouseover',function(){
       $(this).css('background','red').siblings().css('background','');
        $('.five_change1').animate({width:'toggle'},1346);
        $('.five_change').animate({width:'toggle'},0);
           });
    $('.six').find('span:eq(0)').on('mouseover',function(){
        $('.six_change').slideDown(600);
        $('.six_change1').slideUp(600);
    });
    $('.six span:eq(1)').on('mouseover',function(){
        $('.six_change1').slideDown(600);
        $('.six_change').slideUp(600);
    });
});