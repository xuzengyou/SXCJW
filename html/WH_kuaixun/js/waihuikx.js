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
        //点击回到页面顶部
        $(window).scroll(function() {
            var scroll_len = $(window).scrollTop();
            if(scroll_len > 220) {
                $('.QZ-up').fadeIn(1000);
            }else{
                $('.QZ-up').fadeOut(1000);
            };
        });
    
        $('.QZ-up').click(function(e){
            $("body,html").animate({scrollTop:0},500);
        })
        //鼠标进入箭头和数字间转换
        $(".main .mainHd").mouseover(function(e){
            e.stopPropagation();
            console.log(123)
            $(".main .mainHd span:first-child").removeClass("ac").siblings().addClass("ac");
            // $(".main .mainHd span:first-child").slideUp();
        });
        $(".main .mainHd").mouseout(function(e){
            e.stopPropagation();
            $(".main .mainHd span:last-child").removeClass("ac").siblings().addClass("ac");
        })
        
        //tab栏切换功能
        $(".nav .navBot .navBoto ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var id=$(this).attr("data-id");
            console.log(id);
            $(id).addClass("ac").siblings().removeClass("ac");

        });
        
        // 点击全部分页操作
    $('.M-box11').pagination(
        {mode: 'fixed'});

    
    function loadData(page) {
           
        $.ajax({
            type: "post",
            url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=0",
            data: {
                page: page,
                num: 20
            },
            dataType: "JSON",
            success: function (res) {

                console.log(res)
            var html="";
            for(var i in res.data){
                var clas=res.data[i].author==''?'black':'red';
                console.log(clas);
                html+="<li>";
                    html+="<span></span>";
                    html+="<span>"+res.data[i].createdtime+"</span>";
                    html+="<span>";
                        html+="<a class="+clas+">"+res.data[i].content+"</a>";
                    html+="</span>";
                    html+="<span><a></a></span>";
                html+="</li>";

                $("ul#one").html(html);

            }
                // $('.main_content').html()
                $('.M-box11').pagination({
                    totalData: res.count,
                    showData: res.data.length,
                    current:page,
                    callback:function (res){
                        $.ajax({
                            type: "post",
                            url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=0",
                            data: {
                                page:res.getCurrent(),
                                num: 20
                            },
                            dataType: "JSON",
                            success: function (res) {
                                console.log(res)
                                var html="";
                                for(var i in res.data){
                                    var clas=res.data[i].author==''?'black':'red';
                                    console.log(clas);
                                    html+="<li>";
                                        html+="<span></span>";
                                        html+="<span>"+res.data[i].createdtime+"</span>";
                                        html+="<span>";
                                            html+="<a class="+clas+">"+res.data[i].content+"</a>";
                                        html+="</span>";
                                        html+="<span><a></a></span>";
                                    html+="</li>";
                    
                    
                                    $("ul#one").html(html);
                    
                                };
                            }
                        });
                    }
                })

            }
        });
    }
    loadData(1);
    //原油点击产生分页
    $("div.navBoto ul li:nth-child(2) a").click(function(){
        console.log("我来啦")
        //产生分页
            $('.M-box11').pagination(
                {mode: 'fixed'});

            
            function loadData(page) {
                
                $.ajax({
                    type: "post",
                    url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=1",
                    data: {
                        page: page,
                        num: 20
                    },
                    dataType: "JSON",
                    success: function (res) {

                        console.log(res)
                    var html="";
                    for(var i in res.data){
                        var clas=res.data[i].author==''?'black':'red';
                        console.log(clas);
                        html+="<li>";
                            html+="<span></span>";
                            html+="<span>"+res.data[i].createdtime+"</span>";
                            html+="<span>";
                                html+="<a class="+clas+">"+res.data[i].content+"</a>";
                            html+="</span>";
                            html+="<span><a></a></span>";
                        html+="</li>";
        
        
                        $("ul#three").html(html);
        
                    };
                    
                        // $('.main_content').html()
                        $('.M-box11').pagination({
                            totalData: res.count,
                            showData: res.data.length,
                            current:page,
                            callback:function (res){
                                $.ajax({
                                    type: "post",
                                    url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=1",
                                    data: {
                                        page:res.getCurrent(),
                                        num: 20
                                    },
                                    dataType: "JSON",
                                    success: function (res) {
                                        console.log(res)
                                        var html="";
                                        for(var i in res.data){
                                            var clas=res.data[i].author==''?'black':'red';
                                            console.log(clas);
                                            html+="<li>";
                                                html+="<span></span>";
                                                html+="<span>"+res.data[i].createdtime+"</span>";
                                                html+="<span>";
                                                    html+="<a class="+clas+">"+res.data[i].content+"</a>";
                                                html+="</span>";
                                                html+="<span><a></a></span>";
                                            html+="</li>";
                            
                            
                                            $("ul#three").html(html);
                            
                                        };
                                    }
                                });
                            }
                        })

                    }
                });
            }
            loadData(1);
    });

    //贵金属点击产生分页
    $("div.navBoto ul li:nth-child(3) a").click(function(){
        console.log("我来啦")
        //产生分页
            $('.M-box11').pagination(
                {mode: 'fixed'});

            
            function loadData(page) {
                
                $.ajax({
                    type: "post",
                    url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=2",
                    data: {
                        page: page,
                        num: 20
                    },
                    dataType: "JSON",
                    success: function (res) {

                        console.log(res)
                    var html="";
                    for(var i in res.data){
                        var clas=res.data[i].author==''?'black':'red';
                        console.log(clas);
                        html+="<li>";
                            html+="<span></span>";
                            html+="<span>"+res.data[i].createdtime+"</span>";
                            html+="<span>";
                                html+="<a class="+clas+">"+res.data[i].content+"</a>";
                            html+="</span>";
                            html+="<span><a></a></span>";
                        html+="</li>";
        
        
                        $("ul#four").html(html);
        
                    };
                        // $('.main_content').html()
                        $('.M-box11').pagination({
                            totalData: res.count,
                            showData: res.data.length,
                            current:page,
                            callback:function (res){
                                $.ajax({
                                    type: "post",
                                    url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=2",
                                    data: {
                                        page:res.getCurrent(),
                                        num: 20
                                    },
                                    dataType: "JSON",
                                    success: function (res) {
                                        console.log(res)
                                        var html="";
                                        for(var i in res.data){
                                            var clas=res.data[i].author==''?'black':'red';
                                            console.log(clas);
                                            html+="<li>";
                                                html+="<span></span>";
                                                html+="<span>"+res.data[i].createdtime+"</span>";
                                                html+="<span>";
                                                    html+="<a class="+clas+">"+res.data[i].content+"</a>";
                                                html+="</span>";
                                                html+="<span><a></a></span>";
                                            html+="</li>";
                            
                            
                                            $("ul#four").html(html);
                            
                                        };
                                    }
                                });
                            }
                        })

                    }
                });
            }
            loadData(1);
            
    });
    
    //外汇点击产生分页
    $("div.navBoto ul li:nth-child(4) a").click(function(){
        console.log("我来啦")
        //产生分页
        $('.M-box11').pagination(
            {mode: 'fixed'});
    
        
        function loadData(page) {
               
            $.ajax({
                type: "post",
                url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=3",
                data: {
                    page: page,
                    num: 20
                },
                dataType: "JSON",
                success: function (res) {
    
                    console.log(res)
                var html="";
                for(var i in res.data){
                    var clas=res.data[i].author==''?'black':'red';
                    console.log(clas);
                    html+="<li>";
                        html+="<span></span>";
                        html+="<span>"+res.data[i].createdtime+"</span>";
                        html+="<span>";
                            html+="<a class="+clas+">"+res.data[i].content+"</a>";
                        html+="</span>";
                        html+="<span><a></a></span>";
                    html+="</li>";
    
                    $("ul#five").html(html);
    
                };
                    // $('.main_content').html()
                    $('.M-box11').pagination({
                        totalData: res.count,
                        showData: res.data.length,
                        current:page,
                        callback:function (res){
                            $.ajax({
                                type: "post",
                                url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=3",
                                data: {
                                    page:res.getCurrent(),
                                    num: 20
                                },
                                dataType: "JSON",
                                success: function (res) {
                                    console.log(res)
                                    var html="";
                                    for(var i in res.data){
                                        var clas=res.data[i].author==''?'black':'red';
                                        console.log(clas);
                                        html+="<li>";
                                            html+="<span></span>";
                                            html+="<span>"+res.data[i].createdtime+"</span>";
                                            html+="<span>";
                                                html+="<a class="+clas+">"+res.data[i].content+"</a>";
                                            html+="</span>";
                                            html+="<span><a></a></span>";
                                        html+="</li>";
                        
                                        $("ul#five").html(html);
                        
                                    };
                                }
                            });
                        }
                    })
    
                }
            });
        }
        loadData(1);
            
    });
    
    
           
        
        
        




})