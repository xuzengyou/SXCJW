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
       
        window.location.search;
        console.log(window.location.search.split("?")[1].split("&"));
        var id=window.location.search.split("?")[1].split("&")[0].split("=")[1];
        var tb=window.location.search.split("?")[1].split("&")[1].split("=")[1];
        // 终端页面请求
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/newsContent/content",
            data: {
                id:id,
                tb:tb
            },
            dataType: "JSON",
            success: function (res){
                    console.log(res);
                    $("div.bt span").html(res.data.title);
                    $("div.zw").html(res.data.content);
                    $("div.lj span").html(res.data.copyfrom);
            }//success
        });


        //固定广告位
        $(window).scroll(function(){
                var $scroll=$(document).scrollTop();
                // console.log($scroll);
                if($scroll>2300){
                    $("div.mRs").addClass("ac");
                    $("div.mRse").addClass("ac");
                }else{
                    $("div.mRs").removeClass("ac");
                    $("div.mRse").removeClass("ac");
                };

            });
        
        //页面加载热文推荐
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou5/selectEnd-botton?page=0&num=10",
            data: {},
            dataType: "JSON",
            success: function (res){
                
                console.log(res);
                var html='';
                for(var i in res.rementuijian){
                    var url=res.rementuijian[i].httpUrl,id=res.rementuijian[i].aid,tb=res.rementuijian[i].tableName,href=url+'?id='+id+'&tb='+tb;
                    var mLggthc="mLggthc",mLggtho="mLggtho",mLggtht="mLggtht";
                    html+="<div class="+mLggthc+">";
                        html+="<div class="+mLggtho+">";
                            html+="<a href="+href+">";
                                html+="<img src="+res.rementuijian[i].thumb+">";
                            html+="</a>";
                        html+="</div>";
                        html+="<div class="+mLggtht+">";
                            html+="<p>";
                                html+="<a href="+href+">"+res.rementuijian[i].title+"</a>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.rementuijian[i].addTime+"</span>";
                                html+="<span>"+res.rementuijian[i].author+"</span>";
                                // html+="<span>女子</span>";
                                // html+="<span>|</span>";
                                // html+="<span>来源：</span>";
                                // html+="<a href="+'#'+">小维评车</a>";
                            html+="</p>";
                        html+="</div>";
                    html+="</div>";

                };
                $("div.mLggth").html(html);
            }//success
        });
        //页面加载24小时热文
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou5/selectEnd-botton?page=0&num=10",
            data: {},
            dataType: "JSON",
            success: function (res){
                
                console.log(res);
                var html='';
                for(var i in res.rewen.slice(0,7)){
                    // html+=`
                    // <div class="mRtht">
                    //     <div class="mRthto">
                    //         <a href=${item.httpUrl+"?id="+item.articleId+"&tb="+item.tableName}><img src=${item.thumb} alt=""></a>
                    //     </div>
                    //     <div class="mRthtt">
                    //         <p>
                    //             <a href=${item.httpUrl+"?id="+item.articleId+"&tb="+item.tableName}>
                    //                 ${item.title}
                    //             </a>
                    //         </p>
                    //         <p>
                    //             <span>${item.hits}万阅读</span>
                    //         </p>
                    //     </div>
                    // </div>
                    // `;
                    var url=res.rewen[i].httpUrl,id=res.rewen[i].articleId,tb=res.rewen[i].tableName,href=url+'?id='+id+'&tb='+tb;
                    var mRtht="mRtht",mRthto="mRthto",mRthtt="mRthtt";
                    html+="<div class="+mRtht+">";
                        html+="<div class="+mRthto+">";
                            html+="<a href="+href+">";
                                html+="<img src="+res.rewen[i].thumb+">";
                            html+="</a>";
                        html+="</div>";
                        html+="<div class="+mRthtt+">";
                            html+="<p>";
                                html+="<a href="+href+">"+res.rewen[i].title+"</a>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.rewen[i].aid+"阅读</span>";
                            html+="</p>";
                        html+="</div>";
                    html+="</div>";

                };
                $("div.hhh").html(html);
            }//success
        });
        //页面加载今日热点
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou5/selectEnd-botton?page=0&num=10",
            data: {},
            dataType: "JSON",
            success: function (res){
                
                console.log(res);
                var html='';
                for(var i in res.jinriredian.slice(0,6)){
                    
                    // html+=`
                    // <div class="mRft">
                    //     <div class="mRfto">
                    //         <a href=${item.httpUrl+"?id="+item.articleId+"&tb="+item.tableName}><img src=${item.thumb} alt=""></a>
                    //     </div>
                    //     <div class="mRftt">
                    //         <p>
                    //             <a href=${item.httpUrl+"?id="+item.articleId+"&tb="+item.tableName}>
                    //                 ${item.title}
                    //             </a>
                    //         </p>
                    //     </div>
                    // </div>
                    // `;
                    var url=res.jinriredian[i].httpUrl,id=res.jinriredian[i].articleId,tb=res.jinriredian[i].tableName,href=url+'?id='+id+'&tb='+tb;
                    var mRft="mRft",mRfto="mRfto",mRftt="mRftt";
                    html+="<div class="+mRft+">";
                        html+="<div class="+mRfto+">";
                            html+="<a href="+href+">";
                                html+="<img src="+res.jinriredian[i].thumb+">";
                            html+="</a>";
                        html+="</div>";
                        html+="<div class="+mRftt+">";
                            html+="<p>";
                                html+="<a href="+href+">"+res.jinriredian[i].title+"</a>";
                            html+="</p>";
                        html+="</div>";
                    html+="</div>";
                    html+="";


                };
                $("div.ggg").html(html);
            }//success
        });
        //页面热门图集
        $.ajax({
            type: "post",
            url: "http://www.10xunc.com/WSHD/jiekou/AllStock?page=0&num=4",
            data: {},
            dataType: "JSON",
            success: function (res){
                
                console.log(res);
                var html='';
                for(var i in res.data){

                    // html+=`
                    // <div class="mRttc">
                    //     <a href=${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}><img src=${item.thumb} alt=""></a>
                    //     <a href=${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName} class="wz">${item.title}</a>
                    // </div>
                    // `;
                    var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                    var mRttc="mRttc",wz="wz";
                    html+="<div class="+mRttc+">";
                        html+="<a href="+href+">";
                            html+="<img src="+res.data[i].thumb+">";
                        html+="</a>";
                        html+="<a href="+href+" class="+wz+">"+res.data[i].title+"</a>";
                    html+="</div>";

                };
                $("div.mRtt").html(html);
            }//success
        });



})