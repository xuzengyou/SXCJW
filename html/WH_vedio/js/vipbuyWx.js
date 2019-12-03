$(function(){
    //搜索功能
    $(".btn1").click(function(){
        var Word=$("#q").val();
        if(Word){
            window.location.href="http://img.10xunc.com/备用件/html/search.html?keyWord="+Word;
        }
        
    });
    $("#q").keyup(function(e){
        if(e.keyCode==13){
            var Word=$("#q").val();
            if(Word){
                window.location.href="http://img.10xunc.com/备用件/html/search.html?keyWord="+Word;
            }
        }
    });
    //选择支付方式
    $("div.ac .dian").css("color","#1AAD19");
    $(".payWay>div").click(function(){
        $("div.ac .dian").css("color","#ccc");
        $(this).addClass("ac").siblings().removeClass("ac");
        
        $("div.ac .dian").css("color","#1AAD19");
    })
    






})