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
    $("div.title span").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        $(id).addClass("act").siblings().removeClass("act");
    });
    //获取专家信息
    var spePerson=window.location.search.split("?")[1];
    if(!spePerson){window.location.href="./gpliveb.html";}
    console.log(spePerson)
    $(".u").html(spePerson)
    //确认用户已经登录
    fhuser=window.sessionStorage.getItem("user");
    if(fhuser){
        $(".askButton").attr("disabled",false);
        
    }else{
        $(".askButton").css("color","#fff");
        $(".askButton").css("cursor","text");
        $(".askButton").attr("disabled",true);
        $("#req").attr("disabled",true);
    };
    //确认登录专家还是普通
    
    $("button.yhdl").click(function(){
        setTimeout(function(){

            var type=window.sessionStorage.getItem("type");
            
            console.log(type=="admin")
            if(type=="admin"){
                window.location.href="http://img.10xunc.com/备用件/html/gpSpeciaDetail.html";
            }else{
                window.location.href="http://img.10xunc.com/备用件/html/gpLiveDetail.html";
            }
            

        },100)


    });
    if(spePerson==fhuser){
        $(".askButton").attr("disabled",true);
        $("#req").attr("disabled",true);
    }


    //点击个人中心
    $(".mainOt a").click(function(){

        var type=window.sessionStorage.getItem("type");
            
        console.log(type=="admin")
        if(type=="admin"){
            console.log("进入专家个人中心")
            window.location.href="http://img.10xunc.com/备用件/html/gpSpePerson.html";
        }else{
            console.log("进入普通用户个人中心")
            window.location.href="http://img.10xunc.com/备用件/html/gpPerson.html";
        }


    });
    //判斷是否已经关注
        var attentionId=window.sessionStorage.getItem("user");
        var attentionedId=spePerson;
        console.log(attentionId+attentionedId)
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou8/whetherAtt",
            dataType:"json",
            data:{
                attentionId:attentionId,
                attentionedId:attentionedId
            },
            success:function(res){
                console.log(res.data);
                window.sessionStorage.setItem("isFllow",res.data);
                if(res.data){
                    $(".guanzhu").addClass("ygz");
                    $(".guanzhu").html("已关注");
                }else{
                    $(".guanzhu").removeClass("ygz");
                    $(".guanzhu").html("+关注");
                }
                //查看某人被关注了多少次
                var memberId=spePerson;
                $.ajax({
                    type:"post",
                    url:"http://www.10xunc.com/WSHD/jiekou8/attentionNum",
                    dataType:"json",
                    data:{
                        memberId:memberId 
                    },
                    success:function(res){
                        console.log(res);
                        $(".attentionedNum").html(res.data.attentionedNum)
                    }
                })


            }




        });
    //点击关注取消关注功能
    $(".guanzhu").click(function(){
        
        var attentionId=window.sessionStorage.getItem("user");
        var attentionedId=$(this).prev().html().trim();
        console.log(attentionId+attentionedId)
        if(attentionId&&attentionedId){
            
            var isFllow=$(this).hasClass("ygz");
            console.log(isFllow)
            if(isFllow){
                $(this).removeClass("ygz");
                $(this).html("+关注");
                $.ajax({
                    type:"post",
                    url:"http://www.10xunc.com/WSHD/jiekou8/unfollow",
                    dataType:"json",
                    data:{
                        attentionId:attentionId,
                        attentionedId:attentionedId
                    },
                    success:function(res){
                        console.log(res)
                        
                        
                    }

                });
            }else{
                $(".guanzhu").addClass("ygz");
                $(".guanzhu").html("已关注");
                $.ajax({
                    type:"post",
                    url:"http://www.10xunc.com/WSHD/jiekou8/attention",
                    dataType:"json",
                    data:{
                        attentionId:attentionId,
                        attentionedId:attentionedId
                    },
                    success:function(res){
                        console.log(res)
                        

                    }

                });
            
                
            }

        }else{
            alert("请先登录")
        }
            


        
    });

    //
    //获取我的问答的内容
    function myanswer(){
        var asker=window.sessionStorage.getItem("user");
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou8/Allask",
            dataType:"json",
            data:{
                asker:asker,
                page:0,
                num:10
            },
            success:function(res){
                console.log(res);
                var html="",imgsrc="../../img/test.jpg";
                for(var i in res.data){
                    var style=res.data[i].answerMessage.trim()?"flex":"none";
                    html+="<div class=psCon>";
                        html+="<div class=Ptech style=display:"+style+">";
                            html+="<img src="+imgsrc+" alt="+"加载失败"+">";
                            html+="<ul>";
                                html+="<li>";
                                    html+="<span>"+res.data[i].answerId+"</span><span>"+res.data[i].answerTime.split(" ")[1]+"</span>";
                                html+="</li>";
                                html+="<li>";
                                    html+="<span>"+res.data[i].answerMessage+"</span>";
                                html+="</li>";
                            html+="</ul>";
                        html+="</div>";
                        html+="<div class=Pstudent>";
                            html+="<img src="+imgsrc+" alt="+"加载失败"+">";
                            html+="<ul>";
                                html+="<li>";
                                    html+="<span>"+res.data[i].senderId+"</span><span>"+res.data[i].askTime.split(" ")[1]+"</span>";
                                html+="</li>";
                                html+="<li>";
                                    html+="<span>"+res.data[i].askMessage+"</span>";
                                html+="</li>";
                            html+="</ul>";
                        html+="</div>";
                    html+="</div>";

                    $("#one").html(html)


                }


                
            }
        })




    }
    myanswer()
    


    //获取某个专家全部问答
    var speAllanswer=spePerson,speAllimg="../../img/test.jpg";
    function allanswer(page){
        
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou8/answerByTime",
            dataType:"json",
            data:{
                answer:speAllanswer,
                page:page,
                num:4
            },
            success:function(res){
                console.log(res)
                var html="",htmlL="";
                for(var i in res.data){
    
                    html+="<div class=reCard>";
                    html+="<div class=tech>";
                        html+="<img src="+speAllimg+" alt="+"加载失败"+">";
                        html+="<ul>";
                            html+="<li>";
                                html+="<span>"+res.data[i].answerId+"</span><span>"+res.data[i].answerTime.split(" ")[1]+"</span>";
                            html+="</li>";
                            html+="<li>";
                                html+="<span>"+res.data[i].answerMessage+"</span>";
                            html+="</li>";
                        html+="</ul>";
                    html+="</div>";
                    html+="<div class=student>";
                        html+="<img src="+speAllimg+" alt="+"加载失败"+">";
                        html+="<ul>";
                            html+="<li>";
                                html+="<span>"+res.data[i].senderId+"</span><span>"+res.data[i].askTime.split(" ")[1]+"</span>";
                            html+="</li>";
                            html+="<li>";
                                html+="<span>"+res.data[i].askMessage+"</span>";
                            html+="</li>";
                        html+="</ul>";
                    html+="</div>";
                html+="</div>";
    
                $("#two").html(html)    
    
                }
                
    
            }
    
        });



    }

    allanswer(0);

    //左边全部内容
    $.ajax({
        type:"post",
        url:"http://www.10xunc.com/WSHD/jiekou8/answerByTime",
        dataType:"json",
        data:{
            answer:speAllanswer,
            page:0,
            num:100000
        },
        success:function(res){
            var htmlL="";
            
            //左边问答列表
            for(var i in res.data){
                htmlL+="<div class=lst>";
                    htmlL+="<p>";
                        htmlL+="<span>今天"+res.data[i].answerTime.split(" ")[1]+"</span>";
                    htmlL+="</p>";
                    htmlL+="<div class=contain>";
                        htmlL+="<p>";
                            htmlL+="<span>网友提问：</span>";
                            htmlL+="<span>"+res.data[i].askMessage+"</span>";
                        htmlL+="</p>";
                        htmlL+="<p>";
                            htmlL+="<span>老师回复：</span>";
                            htmlL+="<span>"+res.data[i].answerMessage+"</span>";
                        htmlL+="</p>";
                    htmlL+="</div>";
                htmlL+="</div>";

                $(".lsts").html(htmlL)


            }


            

        }

    })

    //点击提问
    $(".askButton").click(function(){
        // alert(123)
        var askMessage=$("#req").val().trim();
        var asker=window.sessionStorage.getItem("user");
        var answer=spePerson;
        // alert(tiwen)
        if(askMessage){
            $("#req").val("")
            $.ajax({
                type:"post",
                url:"http://www.10xunc.com/WSHD/jiekou8/ask",
                dataType:"json",
                data:{
                    asker:asker,
                    answer:answer,
                    askMessage:askMessage
                },
                success:function(res){
                    console.log(res)
                    myanswer();
                }
            })
        }else{
            alert("信息不能为空")
        }
        
    });
    //全部问答滚动条触底触发事件
    
        $(".con").scroll(function(){
            if($("#two").hasClass("act")){
                var h1=$(this).height(),h2=$(this).scrollTop(),h3=$("#two").height();
                // console.log(h1+" "+h2+" "+h3)
                if(h1+h2>=h3){
                    var page=parseInt($("#two").attr("data-id"));
                    $.ajax({
                        type:"post",
                        url:"http://www.10xunc.com/WSHD/jiekou8/answerByTime",
                        dataType:"json",
                        data:{
                            answer:speAllanswer,
                            page:page,
                            num:4
                        },
                        success:function(res){
                            console.log(res);
                            $("#two").attr("data-id",page+1);
                            console.log(page)
                            var html="",htmlL="";
                            for(var i in res.data){
                
                                html+="<div class=reCard>";
                                html+="<div class=tech>";
                                    html+="<img src="+speAllimg+" alt="+"加载失败"+">";
                                    html+="<ul>";
                                        html+="<li>";
                                            html+="<span>"+res.data[i].answerId+"</span><span>"+res.data[i].answerTime.split(" ")[1]+"</span>";
                                        html+="</li>";
                                        html+="<li>";
                                            html+="<span>"+res.data[i].answerMessage+"</span>";
                                        html+="</li>";
                                    html+="</ul>";
                                html+="</div>";
                                html+="<div class=student>";
                                    html+="<img src="+speAllimg+" alt="+"加载失败"+">";
                                    html+="<ul>";
                                        html+="<li>";
                                            html+="<span>"+res.data[i].senderId+"</span><span>"+res.data[i].askTime.split(" ")[1]+"</span>";
                                        html+="</li>";
                                        html+="<li>";
                                            html+="<span>"+res.data[i].askMessage+"</span>";
                                        html+="</li>";
                                    html+="</ul>";
                                html+="</div>";
                            html+="</div>";
                
                            $("#two").append(html)    
                
                            }
                            if(page >= Math.ceil(res.sum/4)){
                                $("#two").attr("data-id",Math.ceil(res.sum/4)+1);
                            }
                
                        }
                
                    });

                }


            }//if
            //我的问答
            if($("#one").hasClass("act")){
                var h1=$(this).height(),h2=$(this).scrollTop(),h3=$("#one").height();
                console.log(h1+" "+h2+" "+h3)
                if(h1+h2>=h3){
                    var page=parseInt($("#one").attr("data-id"));
                    var asker=window.sessionStorage.getItem("user");
                    $.ajax({
                        type:"post",
                        url:"http://www.10xunc.com/WSHD/jiekou8/Allask",
                        dataType:"json",
                        data:{
                            asker:asker,
                            page:page,
                            num:10
                        },
                        success:function(res){
                            console.log(res);
                            $("#one").attr("data-id",page+1);
                            console.log(page)
                            var html="",imgsrc="../../img/test.jpg";
                            for(var i in res.data){
                                var style=res.data[i].answerMessage.trim()?"flex":"none";
                                html+="<div class=psCon>";
                                    html+="<div class=Ptech style=display:"+style+">";
                                        html+="<img src="+imgsrc+" alt="+"加载失败"+">";
                                        html+="<ul>";
                                            html+="<li>";
                                                html+="<span>"+res.data[i].answerId+"</span><span>"+res.data[i].answerTime.split(" ")[1]+"</span>";
                                            html+="</li>";
                                            html+="<li>";
                                                html+="<span>"+res.data[i].answerMessage+"</span>";
                                            html+="</li>";
                                        html+="</ul>";
                                    html+="</div>";
                                    html+="<div class=Pstudent>";
                                        html+="<img src="+imgsrc+" alt="+"加载失败"+">";
                                        html+="<ul>";
                                            html+="<li>";
                                                html+="<span>"+res.data[i].senderId+"</span><span>"+res.data[i].askTime.split(" ")[1]+"</span>";
                                            html+="</li>";
                                            html+="<li>";
                                                html+="<span>"+res.data[i].askMessage+"</span>";
                                            html+="</li>";
                                        html+="</ul>";
                                    html+="</div>";
                                html+="</div>";

                                $("#one").append(html)


                            }
                            if(page >= Math.ceil(res.sum/10)){
                                $("#one").attr("data-id",Math.ceil(res.sum/10)+1);
                            }

                            
                        }
                    })

                }






            }





        })

    
    









})