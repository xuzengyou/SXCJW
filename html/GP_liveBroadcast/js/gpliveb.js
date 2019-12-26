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
    //点击个人中心
    
    $(".grzx").click(function(){
        var type=window.sessionStorage.getItem("type");
            
        console.log(type=="admin");
        if(type){
            if(type=="admin"){
                window.location.href="./gpSpePerson.html";
            }else{
                window.location.href="./gpPerson.html";
            }
        }else{
            alert("请先登录")
        }
       

    });
    //图文直播列表
    $.ajax({
        type:"post",
        url:"http://192.168.0.171:8080/WSHD/jiekou8/answerByTime",
        dataType:"json",
        data:{
            page:0,
            num:3
        },
        success:function(res){
            console.log(res);
            var html="",href="./gpLiveDetail.html?",TPsrc="../../img/test.jpg";
            for(var i in res.data){

                html+="<div class=card>";
                    html+="<div class=cardL>";
                        html+="<a href="+href+res.data[i].answerId+"><img src="+TPsrc+" alt="+"加载失败"+"></a>";
                        html+="<p>";
                            html+="<span>+关注</span>";
                        html+="</p>";
                    html+="</div>";
                    html+="<div class=cardR>";
                        html+="<p><span>"+res.data[i].senderId+"</span></p>";
                        html+="<p><span>今天"+res.data[i].answerTime.split(" ")[1]+"</span></p>";
                        html+="<p><a href="+href+res.data[i].answerId+">网友提问：</a><span>"+res.data[i].askMessage+"</span></p>";
                        html+="<p><a href="+href+res.data[i].answerId+">老师回复：</a><span>"+res.data[i].answerMessage+"</span></p>";
                    html+="</div>";
                html+="</div>";

                $(".mThlto").html(html);

            }




        }
    });
    //加载更多
    $(".mThlth a").click(function(){
        // var total = parseInt($(this).attr('data-total'));
        var page  = parseInt($(this).attr('data-page'));
        var num=3;
        // console.log(page)
        $.ajax({
            type:"post",
            url:"http://192.168.0.171:8080/WSHD/jiekou8/answerByTime",
            dataType:"json",
            data:{
                page:page,
                num:3
            },
            success:function(res){
                console.log(res)
                var html="",href="./gpLiveDetail.html?",TPsrc="../../img/test.jpg";
                for(var i in res.data){

                    html+="<div class=card>";
                        html+="<div class=cardL>";
                            html+="<a href="+href+res.data[i].answerId+"><img src="+TPsrc+" alt="+"加载失败"+"></a>";
                            html+="<p>";
                                html+="<span>+关注</span>";
                            html+="</p>";
                        html+="</div>";
                        html+="<div class=cardR>";
                            html+="<p><span>"+res.data[i].senderId+"</span></p>";
                            html+="<p><span>今天"+res.data[i].answerTime.split(" ")[1]+"</span></p>";
                            html+="<p><a href="+href+res.data[i].answerId+">网友提问：</a><span>"+res.data[i].askMessage+"</span></p>";
                            html+="<p><a href="+href+res.data[i].answerId+">老师回复：</a><span>"+res.data[i].answerMessage+"</span></p>";
                        html+="</div>";
                    html+="</div>";

                    $(".mThlto").html(html);

                }
                $('.mThlto').append(html);
                
                $('.mThlth a').attr('data-page',page+1);
                $('.mThlth a').attr('data-total',Math.ceil(res.sum/num));
                if(page >= Math.ceil(res.sum/num)){
                    $('.mThlth').css("display","none")
                }

                

    
            }
    
    
        });




    })






























    
})