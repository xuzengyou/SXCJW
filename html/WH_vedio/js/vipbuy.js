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
    //选择老师
    $("div.list").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        $("div.list .dui").removeClass("ac");
        $("div.ac .dui").addClass("ac");
        var laoshi=$(this).attr("data-id");
        console.log(laoshi)
        $(laoshi).removeClass("yinc").siblings().addClass("yinc");
        $(laoshi).siblings().children().removeClass("ac");
        var text=$("div.ac .title").html();
        var price=$("div.ac .price").html();
        var ls=$("div.ac .lsvalue").html();
        $(".nr").html("");
        $(".nr").html(text);
        $(".jg").html("");
        $(".jg").html(price);
        $(".ls").html("");
        $(".ls").html(ls);
    })
    //选择具体课程
        var text=$("div.ac .title").html();
        var price=$("div.ac .price").html();
        var ls=$("div.ac .lsvalue").html();
        console.log(ls)
        $(".nr").html("");
        $(".nr").html(text);
        $(".jg").html("");
        $(".jg").html(price);
        $(".ls").html("");
        $(".ls").html(ls);
    $("div.card").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var text=$("div.ac .title").html();
        $(".nr").html("");
        $(".nr").html(text);
        var price=$("div.ac .price").html();
        $(".jg").html("");
        $(".jg").html(price);
    });
    //删除课程
    $(".delete").click(function(){
        $(".nr").html("");
        $(".jg").html("");
    });







})