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
    $("div.con").scroll(function(){
        console.log($(this).scrollTop());
        console.log($(this).height());
        console.log($("div#two").height());
        if($(this).scrollTop()+$(this).height()>=$("div#two").height()){
            // alert(123);
            // $(html).insertAfter($(".elem").last());
        };
        if($(this).scrollTop()+$(this).height()>=$("div#one").height()){
            // alert(123);
            // $(html).insertAfter($(".elem").last());
        }
    })









})