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
    // var u=window.sessionStorage.getItem("user");
    // $(".u").html(u)
    $("button.yhdl").click(function(){
        // window.location.reload()
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
    
    
    //点击发言
    $(".askButton").click(function(){
        // alert(123)
        var askMessage=$("#req").val().trim();
        
        // alert(tiwen)
        if(answerMessage){
            $.ajax({
                type:"post",
                url:"http://www.10xunc.com/WSHD/jiekou8/answer",
                dataType:"json",
                data:{
                    id:id,
                    askMessage:askMessage
                },
                success:function(res){
                    console.log(res)
                    $("#req").val("")
                }
            })
        }else{
            alert("信息不能为空")
        }
        
    })









})