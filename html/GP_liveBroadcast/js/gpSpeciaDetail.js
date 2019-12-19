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
    $("div.title span").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        $(id).addClass("act").siblings().removeClass("act");
    });
    //确认用户已经登录
    fhuser=window.sessionStorage.getItem("user");
    if(fhuser){
        $(".askButton").attr("disabled",false);
        
    }else{
        $(".askButton").css("color","#fff");
        $(".askButton").css("cursor","text");
        $(".askButton").attr("disabled",true);
        $("#req").attr("disabled",true);
    }









})