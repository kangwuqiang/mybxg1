 define(['jquery','cookie'], function ($) {
    //NProgress.start();
    //NProgress.done();

    //控制左侧导航菜单的折叠
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

    //实现退出功能
    $('#logout').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    location.href = '/main/login'
                }
            }
        })
        return false;
    });
     //验证是否登录
    var seesionId= $.cookie('PHPSESSID');
    if(!seesionId && location.pathname !='/main/login'){
        location.href='/main/login';
    }
     //获取用户登录信息
     var loginInfo= JSON.parse($.cookie('loginInfo'));
     $('.profile img').attr('src',loginInfo.tc_avatar);
     $('.profile h4').html(loginInfo.tc_name);
 });



