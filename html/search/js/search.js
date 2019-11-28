$(function(){
    // http://www.10xunc.com/WSHD/news/Marketcomment_news_list
     //    分页操作

     $('.M-box11').pagination({mode: 'fixed'});

     function loadData(page) {
        var keyWord=decodeURI(window.location.search.split("?")[1].split("=")[1]);
        console.log(decodeURI(keyWord))
        $.ajax({
            type: "post",
            url: "http://192.168.0.171:8080/WSHD/es/select1",
            dataType: "JSON",
            data: {
                keyWord:keyWord,
                page:0,
                num:10
            },

            success: function (res) {
                console.log(res.data)
                var html="";
                for(var i in res.data){
                    var url="http://10xunc.com/WSHD/static/SXCJW/html/ZZYM/zzym.html",
                    id=res.data[i].aid,
                    tb=res.data[i].tableName,
                    href=url+'?id='+id+'&tb='+tb;
                    html+="<div class=mainLtc>";
                            html+="<ul>";
                                html+="<li><a href="+href+">"+res.data[i].title+"</a></li>";
                                html+="<li>";
                                    html+="<a href="+href+">"+res.data[i].intro+"</a>";
                                html+="</li>";
                                html+="<li>";
                                    html+="<span></span>";
                                    html+="<span>"+res.data[i].time+"</span>";
                                html+="</li>";
                            html+="</ul>";
                    html+="</div>";

                }
                $("div.mainLt").html(html);


            
                $('.M-box11').pagination({
                    totalData: res.count,
                    showData: res.data.length,
                    current:page,
                    pageCount: 2,
                    callback:function (res){
                        $.ajax({
                            type: "post",
                            url: "http://192.168.0.171:8080/WSHD/es/select1",
                            data: {
                                keyWord:keyWord,
                                page:0,
                                num:10
                            },
                            dataType: "JSON",
                            success: function (res) {
                                var html="";
                                for(var i in res.data){
                                    var url="http://10xunc.com/WSHD/static/SXCJW/html/ZZYM/zzym.html",
                                    id=res.data[i].aid,
                                    tb=res.data[i].tableName,
                                    href=url+'?id='+id+'&tb='+tb;
                                    html+="<div class=mainLtc>";
                                            html+="<ul>";
                                                html+="<li><a href="+href+">"+res.data[i].title+"</a></li>";
                                                html+="<li>";
                                                    html+="<a href="+href+">"+res.data[i].intro+"</a>";
                                                html+="</li>";
                                                html+="<li>";
                                                    html+="<span></span>";
                                                    html+="<span>"+res.data[i].time+"</span>";
                                                html+="</li>";
                                            html+="</ul>";
                                    html+="</div>";

                                }
                                $("div.mainLt").html(html);
                                
                            }
                        });
                    }
                })

            }
        });
    }
    loadData(1);

    //tab切换
    $("div.mainRfo span").mouseenter(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        console.log(id)
        $(id).addClass("ac").siblings().removeClass("ac");
    });

    //全球利率
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/globalinterestrate/globalinterestrate_list",
        data: {},
        dataType: "JSON",
        success: function (res){
            console.log(res);
            if(res.code==1){
                
                var html="";
                for(var i in res.data){
                //    html+=`
                //     <tr>
                //         <td>${item.country}</td>
                //         <td>${item.now_data}</td>
                //         <td>${item.announcement_date}</td>
                //     </tr>
                //    `; 
                    html+="<tr>";
                        html+="<td>"+res.data[i].country+"</td>";
                        html+="<td>"+res.data[i].now_data+"</td>";
                        html+="<td>"+res.data[i].announcement_date+"</td>";
                    html+="</tr>";
                    // console.log(i)
                    $("div.mainRt table tbody").html(html);
                }
                
                
            }
        }
    });
    //网友点击排行榜
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/Leaderboard/leaderboardlist",
        data: {
            page:1,
            limit:10
        },
        dataType: "JSON",
        success: function (res){
            if(res.code==1){
                console.log(res);
                var html="";
                
                for(var i in res.data){
                var url=res.data[i].http_url,id=res.data[i].id,tb=res.data[i].table_name,href=url+'?id='+id+'&tb='+tb;
                var title=res.data[i].title;
                var i=++i;
                
                html+="<li>"
                    html+="<span>"+i+"</span>";
                    html+="<a href="+href+">"+title+"</a>";
                html+="</li>";
                
                $("div.mainRth ul").html(html);

                }
            }
        }
    });
    //财经/股票/
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/news/financeandstock_news_list",
        data: {},
        dataType: "JSON",
        success: function (res){
            console.log(res.data1);
            if(res.code==1){
                    var html1="",html2="",html3="";
                    for(var i in res.data1.slice(0,4)){

                            var url=res.data1[i].http_url,id=res.data1[i].id,tb=res.data1[i].table_name,href=url+'?id='+id+'&tb='+tb;
                            html1+="<ul>";
                                    html1+="<li>";
                                        html1+="<a href="+href+">"+res.data1[i].news_title+"</a>";
                                    html1+="</li>";
                            html1+="</ul>";
                        };
                        $("#oo").html(html1);
                    var to=res.data1.slice(4,8);
                    for(var j in to){
                        var url=res.data1.slice(4,8)[j].http_url,id=res.data1.slice(4,8)[j].id,tb=res.data1.slice(4,8)[j].table_name,href=url+'?id='+id+'&tb='+tb;
                        html2+="<ul>";
                                html2+="<li>";
                                    html2+="<a href="+href+">"+res.data1.slice(4,8)[j].news_title+"</a>";
                                html2+="</li>";
                        html2+="</ul>";
                        // console.log(j)
                    }
                    $("#ot").html(html2);
                    for(var i in res.data1.slice(8,12)){
                        var url=res.data1.slice(8,12)[i].http_url,id=res.data1.slice(8,12)[i].id,tb=res.data1.slice(8,12)[i].table_name,href=url+'?id='+id+'&tb='+tb;
                        html3+="<ul>";
                                html3+="<li>";
                                    html3+="<a href="+href+">"+res.data1.slice(8,12)[i].news_title+"</a>";
                                html3+="</li>";
                        html3+="</ul>";
                    }
                    $("#oth").html(html3);
                 
                var html4="",html5="",html6="";
                    for(var i in res.data2.slice(0,4)){
                            var url=res.data2.slice(0,4)[i].http_url,id=res.data2.slice(0,4)[i].id,tb=res.data2.slice(0,4)[i].table_name,href=url+'?id='+id+'&tb='+tb;
                            html4+="<ul>";
                                    html4+="<li>";
                                        html4+="<a href="+href+">"+res.data2.slice(0,4)[i].news_title+"</a>";
                                    html4+="</li>";
                            html4+="</ul>";
                        };
                    for(var i in res.data2.slice(4,8)){
                        var url=res.data2.slice(4,8)[i].http_url,id=res.data2.slice(4,8)[i].id,tb=res.data2.slice(4,8)[i].table_name,href=url+'?id='+id+'&tb='+tb;
                        html5+="<ul>";
                                html5+="<li>";
                                    html5+="<a href="+href+">"+res.data2.slice(4,8)[i].news_title+"</a>";
                                html5+="</li>";
                        html5+="</ul>";
                    }
                    for(var i in res.data2.slice(8,12)){
                        var url=res.data2.slice(8,12)[i].http_url,id=res.data2.slice(8,12)[i].id,tb=res.data2.slice(8,12)[i].table_name,href=url+'?id='+id+'&tb='+tb;
                        html6+="<ul>";
                                html6+="<li>";
                                    html6+="<a href="+href+">"+res.data2.slice(8,12)[i].news_title+"</a>";
                                html6+="</li>";
                        html6+="</ul>";
                    }
                    $("#to").html(html4);$("#tt").html(html5);$("#tth").html(html6);
            }
        }
    });



    
    




    
})