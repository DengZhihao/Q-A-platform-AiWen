$(function(){ 
        $("#editor-post").click(function(){ 
            var title = $("#editor-title").val();
            var content=$(".simditor-body p").text();
            var time = 
new Date().toLocaleString();
            var data = {"qtitle":title,"qcontent":content,"qtime":time};
            $.ajax({ 
                url: '/introduce',
                type: 'post',
                data: data,
                success: function(data,status){ 
                    if(status == 'success'){ 
                        location.href = 'main';
                    }
                },
                error: function(data,err){ 
                        location.href = 'introduce';
                }
            }); 
        });
    });

