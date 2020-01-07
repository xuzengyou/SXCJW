$(function(){
    $(".mainTo p").click(function(){
        // alert(123)
        $(this).addClass("ac").siblings().removeClass("ac");
        if($(".change").hasClass("ac")){
            $(".change span:first-child").css("background-position","-139px -792px")
        }else{
            $(".change span:first-child").css("background-position","-5px -792px")
        }

    })
    //我的问答显示隐藏
    $(".change").click(function(){
        if($(this).hasClass("ac")){
            $(".reqAns").removeClass("yinc")
        }else{
            $(".reqAns").addClass("yinc")
        }


    });
    $(".guanz").click(function(){
        if($(this).hasClass("ac")){
            $(".reqAns").addClass("yinc");
            var id=$(this).attr("data-id");
            console.log(id)
            $(id).removeClass("yinc").siblings().addClass("yinc")

        }


    });
    $("div.reqAns span").click(function(){
        var id=$(this).attr("data-id");
        // alert(id)
        $(id).removeClass("yinc").siblings().addClass("yinc")


    })
    
    //判断是否已经登陆了
    var type=window.sessionStorage.getItem("type");
            
        console.log(type=="admin");
        if(type){
            

        }else{
            alert("请先登录");
            window.location.href="http://img.10xunc.com/备用件/html/gpliveb.html"
        }
    //获取登录账号
    var yonghu=window.sessionStorage.getItem("user");
    $(".myname").html(yonghu);
    //我的关注
    $.ajax({
        type:"post",
        url:"http://www.10xunc.com/WSHD/jiekou8/attentionNum",
        dataType:"json",
        data:{
            memberId:yonghu
        },
        success:function(res){
            console.log(res.attentionId)
            var html="",imgsrc="../../img/test.jpg";
            for(var i in res.attentionId.slice(1,10000000000)){
                html+="<div class=con>";
                    html+="<div class=mainTtl>";
                        html+="<img src="+imgsrc+" alt=加载失败>";
                        html+="<p><span>已关注</span></p>";
                        html+="<p><span>关注</span><span>449665465</span></p>";
                    html+="</div>";
                    html+="<div class=mainTtr style=margin-left: 5px;>";
                        html+="<p><span>"+res.attentionId.slice(1,10000000000)[i]+"</span></p>";
                        html+="<p><span>常常听老师常常听老师常常听老师常常听老师常常听老师</span></p>";
                        html+="<p>";
                            html+="<span>访问</span><span>2308333</span>";
                            html+="<span>直播数</span><span>2308333</span>";
                        html+="</p>";
                    html+="</div>";
                html+="</div>";

                $("#one").html(html);

            }



        }


    });
    //专家已回答
        var answerName=yonghu;
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou8/Answered",
            dataType:"json",
            data:{
                answerName:answerName,
                page:0,
                num:200
            },
            success:function(res){
                console.log(res)
                var html="",imgsrc="../../img/test.jpg";
                for(var i in res.data){
                    html+="<div class=card>";
                        html+="<p>";
                            html+="<span>问</span><span>"+res.data[i].askMessage+"</span>";
                        html+="</p>";
                        html+="<p>";
                            html+="<span>答</span>";
                            html+="<span>"+res.data[i].answerMessage+"</span>";
                        html+="</p>";
                        html+="<p>";
                            html+="<img src="+imgsrc+" alt="+"加载失败"+">";
                            html+="<span>"+res.data[i].senderId+"</span>";
                        html+="</p>";
                    html+="</div>";

                    $("#two").html(html)

                }
                

            }
        });
    //专家待回答
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou8/AnswerNot",
            dataType:"json",
            data:{
                answerName:answerName,
                page:0,
                num:200
            },
            success:function(res){
                console.log(res)
                var html="",imgsrc="../../img/test.jpg",cla="HFYC";
                for(var i in res.data){
                    html+="<div class=bcard>";
                        html+="<p>";
                            html+="<span>问</span><span>"+res.data[i].askMessage+"</span><button type=button class=answer>回复</button>";
                        html+="</p>";
                        html+="<p class="+cla+">";
                            html+="<textarea name=huiF id=huiF placeholder=请输入回复内容></textarea><button type=button class=submit data-id="+res.data[i].mid+">提交</button>";
                        html+="</p>";
                        html+="<p>"
                            html+="<img src="+imgsrc+" alt=加载失败>";
                            html+="<span>"+res.data[i].senderId+"</span>";
                        html+="</p>";
                        
                    html+="</div>";

                    $("#three").html(html)

                }
                //点击回复和提交
                $(".answer").click(function(){
                    if($(this).parent().next().hasClass("HFYC")){
                        // console.log(this)
                        $(this).parent().next().removeClass("HFYC")
                    }else{
                        // console.log($(this).parent().next())
                        $(this).parent().next().addClass("HFYC")
                    }


                });
                $(".submit").click(function(){
                    var answerMessage=$(this).prev().val().trim();
                    var id=$(this).attr("data-id");
                    console.log(answerMessage)
                    if(answerMessage){
                        $(this).parent().addClass("HFYC");
                        $(this).prev().val("");

                        $.ajax({
                            type:"post",
                            url:"http://www.10xunc.com/WSHD/jiekou8/answer",
                            dataType:"json",
                            data:{
                                id:id,
                                answerMessage:answerMessage
                            },
                            success:function(res){
                                console.log(res);
                               
                            }

                        })





                    }else{
                        alert("回复内容不能为空")
                    }


                });




            }


        })







})