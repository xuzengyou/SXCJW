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
        


    })







})