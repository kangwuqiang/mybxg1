define(['jquery'],function($){
    //登录功能
    $('#loginBtn').click(function(){
            $.ajax({
                type:'post',
                url:'/api/login',
                data:$('#loginForm').serialize(),
                dataType:'json',
                success:function(data){
                    if(data.code == 200){
                        $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'})
                        //存储用户信息到cookie
                        location.href='/main/index';
                    }else{
                        alert ('用户名或密码错误');
                    }
                }
            })
            return false;
        })
})