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
    //tab栏鼠标经过切换
    $("div.mainRtot a").mouseenter(function(){
        $(this).parent().addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        $(id).addClass("ac").siblings().removeClass("ac");
    });

    //    分页操作
    $('.M-box11').pagination(
        {mode: 'fixed'});

     function loadData(page) {
           
        $.ajax({
            type: "post",
            url: "http://www.10xunc.com/WSHD/news/Foreignexchange_news_list",
            data: {
                page: page,
                limit: 8
            },
            dataType: "JSON",
            success: function (res) {

                console.log(res)
            var html="";
            for(var i in res.data){
                var url=res.data[i].http_url,id=res.data[i].id,tb=res.data[i].table_name,href=url+'?id='+id+'&tb='+tb;
                var mainLtc="mainLtc",mainLto="mainLto",mainLtt="mainLtt",srcimg=res.data[i].news_img;
                html+="<div class="+mainLtc+">";
                    html+="<div class="+mainLto+">";
                        html+="<a href="+href+">";
                            html+="<img src="+srcimg+">";
                        html+="</a>";
                    html+="</div>";
                    html+="<div class="+mainLtt+">";
                        html+="<ul>";
                            html+="<li>"
                                html+="<a href="+href+">"+res.data[i].news_title+"</a>";
                            html+="</li>";
                            html+="<li>"
                                html+="<span>"+res.data[i].news_time+"&nbsp;"+res.data[i].update_time+"</span>";
                            html+="</li>";
                            html+="<li>"
                                html+="<a href="+href+">"+res.data[i].news_introduction+"</a>";
                            html+="</li>";
                        html+="</ul>";
                    html+="</div>";
                html+="</div>";

                $("div.mainLt").html(html);
                
            };
                $('.M-box11').pagination({
                    totalData: res.count,
                    showData: res.data.length,
                    current:page,
                    callback:function (res){
                        $.ajax({
                            type: "post",
                            url: "http://www.10xunc.com/WSHD/news/Foreignexchange_news_list",
                            data: {
                                page:res.getCurrent(),
                                limit:8
                            },
                            dataType: "JSON",
                            success: function (res) {
                                console.log(res)
                                var html="";
                                for(var i in res.data){
                                    var url=res.data[i].http_url,id=res.data[i].id,tb=res.data[i].table_name,href=url+'?id='+id+'&tb='+tb;
                                    var mainLtc="mainLtc",mainLto="mainLto",mainLtt="mainLtt",srcimg=res.data[i].news_img;
                                    html+="<div class="+mainLtc+">";
                                        html+="<div class="+mainLto+">";
                                            html+="<a href="+href+">";
                                                html+="<img src="+srcimg+">";
                                            html+="</a>";
                                        html+="</div>";
                                        html+="<div class="+mainLtt+">";
                                            html+="<ul>";
                                                html+="<li>"
                                                    html+="<a href="+href+">"+res.data[i].news_title+"</a>";
                                                html+="</li>";
                                                html+="<li>"
                                                    html+="<span>"+res.data[i].news_time+"&nbsp;"+res.data[i].update_time+"</span>";
                                                html+="</li>";
                                                html+="<li>"
                                                    html+="<a href="+href+">"+res.data[i].news_introduction+"</a>";
                                                html+="</li>";
                                            html+="</ul>";
                                        html+="</div>";
                                    html+="</div>";
                    
                                    $("div.mainLt").html(html);
                                    
                                };
                            }
                        });
                    }
                })

            }
        });
    }
    loadData(1);
    //日排行
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/news/DailyRanking_list",
        data: {},
        dataType: "JSON",
        success: function (res) {
            console.log(res)
            var html="",j=0;
            for(var i in res.data){
                j++;
                var url=res.data[i].http_url,id=res.data[i].id,tb=res.data[i].table_name,href=url+'?id='+id+'&tb='+tb;
                html+="<li>";
                    html+="<a href="+href+">"+j+"</a>";
                    html+="<a href="+href+">"+res.data[i].news_title+"</a>";
                html+="</li>";


                $("ul#one").html(html);

            };
            //for循环结束
        }
    });
    //评论排行
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/news/CommentRanking_list",
        data: {},
        dataType: "JSON",
        success: function (res) {
            console.log(res)
            var html="",j=0;
            for(var i in res.data){
                j++;
                var url=res.data[i].http_url,id=res.data[i].id,tb=res.data[i].table_name,href=url+'?id='+id+'&tb='+tb;
                html+="<li>";
                    html+="<a href="+href+">"+j+"</a>";
                    html+="<a href="+href+">"+res.data[i].news_title+"</a>";
                html+="</li>";

                $("ul#two").html(html);

            };
            //for循环结束
        }
    });
    //7*24要闻直播
    $.ajax({
        type: "post",
        url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun2?id=0",
        data: {
            page:1,
            num:19
        },
        dataType: "JSON",
        success: function (res) {
            console.log(res)
            var html="",j=0;
            for(var i in res.data){
                j++;
                var href="../WH_kuaixun/waihuikx.html";
                html+="<li>";
                    html+="<a href="+href+">"+j+"</a>";
                    html+="<a href="+href+">"+res.data[i].title+"</a>";
                html+="</li>";

                $("ul#three").html(html);

            };
            //for循环结束
        }
    });






})