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
        console.log(answerMessage)
        if(answerMessage){
            $(this).parent().addClass("HFYC");
            $(this).prev().val("");
        }else{
            alert("回复内容不能为空")
        }


    });
    //判断是否已经登陆了
    var type=window.sessionStorage.getItem("type");
            
        console.log(type=="admin");
        if(type){
            

        }else{
            alert("请先登录");
            window.location.href="./gpliveb.html"
        }







})