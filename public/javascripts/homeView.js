$(function(){
    $(".setting-btn:eq(1)").click(function(){
        var username = $("dd:eq(2) input").val();
        var data = {"uname":username};
        $.ajax({
            url:'/home',
            type:'post',
            data: data,
            success: function(data,status){
                if(status == 'success'){
                    location.href = 'login';
                }
            },
            error: function(data,status){
                if(status == 'error'){
                    location.href = 'home';
                }
            }
        });
    });
});
