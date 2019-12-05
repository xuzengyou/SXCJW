$(function(){
    var price=$("div.ac").children().eq(2).html();
    $(".zhifu").html(price);
    $(".c>div").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var price=$("div.ac").children().eq(2).html();
        console.log(price)
        $(".zhifu").html(price);
    })




})