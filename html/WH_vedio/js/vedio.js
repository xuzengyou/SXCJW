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

    //获取视频列表
    $.ajax({
        type:"post",
        url:"http://192.168.0.171:8080/WSHD/jiekou9/VideoFree",
        dataType:"json",
        data:{
            page:0,
            num:10
        },
        success:function(res){
            console.log(res.data);
            var html="",html2="",html3="",htmlR="",lj="./ordinary.html?";

                html+="<a href="+lj+res.data[1].videoId+">"+res.data[1].vName+"</a>";
                html+="<a href="+lj+res.data[1].videoId+"></a>";
                html+="<a href="+lj+res.data[1].videoId+">";
                    html+="<img src="+res.data[1].vImage+">";
                html+="</a>";

                $(".one").html(html);


                html2+="<a href="+lj+res.data[2].videoId+">"+res.data[2].vName+"</a>";
                html2+="<a href="+lj+res.data[2].videoId+"></a>";
                html2+="<a href="+lj+res.data[2].videoId+">";
                    html2+="<img src="+res.data[2].vImage+">";
                html2+="</a>";

                $(".two").html(html2);

                html3+="<a href="+lj+res.data[3].videoId+">"+res.data[3].vName+"</a>";
                html3+="<a href="+lj+res.data[3].videoId+"></a>";
                html3+="<a href="+lj+res.data[3].videoId+">";
                    html3+="<img src="+res.data[3].vImage+">";
                html3+="</a>";
                    

                $(".three").html(html3);

            //    轮播右边
            for(var i in res.data.slice(1,6)){
                htmlR+="<div class=new>";
                    htmlR+="<a href="+lj+res.data.slice(1,6)[i].videoId+">";
                        htmlR+="<img src="+res.data.slice(1,6)[i].vImage+" alt="+"加载失败"+">";
                    htmlR+="</a>";
                    htmlR+="<a href="+lj+res.data.slice(1,6)[i].videoId+"></a>";
                    htmlR+="<a href="+lj+res.data.slice(1,6)[i].videoId+">"+res.data.slice(1,6)[i].vIntro+"</a>";
                htmlR+="</div>";


                $(".news").html(htmlR)

            }
            //10讯视频栏
            var html10="";
            for(var i in res.data.slice(1,9)){
              
                html10+="<div class=Locl>";
                    html10+="<p>";
                        html10+="<a href="+lj+res.data.slice(1,9)[i].videoId+">";
                            html10+="<img src="+res.data.slice(1,9)[i].vImage+" alt="+"加载失败"+">";
                        html10+="</a>";
                        html10+="<a href="+lj+res.data.slice(1,9)[i].videoId+"></a>";
                    html10+="</p>";
                    html10+="<p>";
                    html10+="<a href="+lj+res.data.slice(1,9)[i].videoId+">"+res.data.slice(1,9)[i].vIntro+"</a>";
                    html10+="</p>";
                    html10+="<p>";
                        html10+="<span></span>";
                        html10+="<span>热度123123</span>";
                        html10+="<span>15小时前</span>";
                    html10+="</p>";
                html10+="</div>";

                $(".LocOO").html(html10)
            }
            //免费学习
            var htmlF="";
            for(var i in res.data.slice(1,9)){
              
                htmlF+="<div class=Locl>";
                    htmlF+="<p>";
                        htmlF+="<a href="+lj+res.data.slice(1,9)[i].videoId+">";
                            htmlF+="<img src="+res.data.slice(1,9)[i].vImage+" alt="+"加载失败"+">";
                        htmlF+="</a>";
                        htmlF+="<a href="+lj+res.data.slice(1,9)[i].videoId+"></a>";
                    htmlF+="</p>";
                    htmlF+="<p>";
                    htmlF+="<a href="+lj+res.data.slice(1,9)[i].videoId+">"+res.data.slice(1,9)[i].vIntro+"</a>";
                    htmlF+="</p>";
                    htmlF+="<p>";
                        htmlF+="<span></span>";
                        htmlF+="<span>热度123123</span>";
                        htmlF+="<span>15小时前</span>";
                    htmlF+="</p>";
                htmlF+="</div>";

                $(".LocTT").html(htmlF)
            }


        }
    });
    //名家学习
    $.ajax({
        type:"post",
        url:"http://192.168.0.171:8080/WSHD/jiekou9/VideoPrice",
        dataType:"json",
        data:{
            page:0,
            num:10
        },
        success:function(res){
            var htmlFa="",lj="./ordinary.html?";
            for(var i in res.data.slice(1,9)){
              
                htmlFa+="<div class=Locl>";
                    htmlFa+="<p>";
                        htmlFa+="<a href="+lj+res.data.slice(1,9)[i].videoId+">";
                            htmlFa+="<img src="+res.data.slice(1,9)[i].vImage+" alt="+"加载失败"+">";
                        htmlFa+="</a>";
                        htmlFa+="<a href="+lj+res.data.slice(1,9)[i].videoId+"></a>";
                    htmlFa+="</p>";
                    htmlFa+="<p>";
                    htmlFa+="<a href="+lj+res.data.slice(1,9)[i].videoId+">"+res.data.slice(1,9)[i].vIntro+"</a>";
                    htmlFa+="</p>";
                    htmlFa+="<p>";
                        htmlFa+="<span></span>";
                        htmlFa+="<span>热度123123</span>";
                        htmlFa+="<span>15小时前</span>";
                    htmlFa+="</p>";
                htmlFa+="</div>";

                $(".LocTHTH").html(htmlFa)
            }

        }


    });
    //加载更多
    $(".Lfour a").click(function(){
        // var total = parseInt($(this).attr('data-total'));
        var page  = parseInt($(this).attr('data-page'));
        var num=10;
        console.log(page)
        $.ajax({
            type:"post",
            url:"http://192.168.0.171:8080/WSHD/jiekou9/VideoPrice",
            dataType:"json",
            data:{
                page:page,
                num:10
            },
            success:function(res){
                console.log(res)
                var add="",lj="./ordinary.html?";
                for(var i in res.data.slice(1,9)){
                  
                    add+="<div class=Locl>";
                        add+="<p>";
                            add+="<a href="+lj+res.data.slice(1,9)[i].videoId+">";
                                add+="<img src="+res.data.slice(1,9)[i].vImage+" alt="+"加载失败"+">";
                            add+="</a>";
                            add+="<a href="+lj+res.data.slice(1,9)[i].videoId+"></a>";
                        add+="</p>";
                        add+="<p>";
                        add+="<a href="+lj+res.data.slice(1,9)[i].videoId+">"+res.data.slice(1,9)[i].vIntro+"</a>";
                        add+="</p>";
                        add+="<p>";
                            add+="<span></span>";
                            add+="<span>热度123123</span>";
                            add+="<span>15小时前</span>";
                        add+="</p>";
                    add+="</div>";
    
                    
                }
                $('.LocTHTH').append(add);
                
                $('.Lfour a').attr('data-page',page+1);
                $('.Lfour a').attr('data-total',Math.ceil(res.sum/num));
                if(page == Math.ceil(res.sum/num)){
                    $('.Lfour a').css("display","none")
                }

                
    

                

    
            }
    
    
        });






    })






})