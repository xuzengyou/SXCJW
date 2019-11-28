$(function(){
    
    // 顶部导航栏颜色点击切换
    $(".nav .navTop .navTop1 li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    })

    // 亚太股票切换
    $(".mainTop .mainTopr .mainToprt .mtRtt .mtRtto li a").mouseenter(function(e){
        // console.log("我要切换啦！")
        e.preventDefault();
        var id=$(this).attr("href");
        console.log(id);
        // console.log($("id"))
        $(id).addClass("active").siblings().removeClass("active");
    })
    // 板块行情tab栏切换
    $(".mainFlo li a").mouseenter(function(e){
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
        var id=$(this).attr("data-id");
        // console.log(id)
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    $(".mainFlt li a").mouseenter(function(e){
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
        var id=$(this).attr("data-id");
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    // 个股行情tab栏切换
    $(".mainFlth li a").mouseenter(function(e){
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
        var id=$(this).attr("data-id");
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    // AB股比价tab栏切换
    $(".mainFlf .mainFlfo li a").mouseenter(function(e){
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
        var id=$(this).attr("data-id");
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    //点击联系我们
    $("div.mainFrfth a").click(function(){
        $("body,html").animate({scrollTop:300},1000);
        $('#showdiv').show();  //显示弹窗
        $('#cover').css('display','block'); //显示遮罩层
        $('#cover').css('height',document.body.clientHeight+'px'); //设置遮罩层的高度为当前页面高度

    });
    $("span.gb").click(function(){
        $('#showdiv').hide();  //隐藏弹窗
        $('#cover').css('display','none');   //显示遮罩层
    })




})