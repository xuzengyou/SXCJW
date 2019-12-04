$(function(){
    $("div.Lth div").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        $(id).addClass("ac").siblings().removeClass("ac");
    })




})