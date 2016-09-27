/**
 * Created by DengZhihao on 2016/9/21.
 */
$(function(){
    $("#register0").click(function(){
        location.href = 'register';
    });
    $("#login0").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();
        var data = {"uname":username,"upwd":password};
        $.ajax({
            url:'/login',
            type:'post',
            data: data,
            success: function(data,status){
                if(status == 'success'){
                    location.href = 'main';
                }
            },
            error: function(data,status){
                if(status == 'error'){
                    location.href = 'login';
                }
            }
        });
    });
});
