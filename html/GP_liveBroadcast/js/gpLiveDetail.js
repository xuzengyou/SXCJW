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
        setTimeout(function(){

            var type=window.sessionStorage.getItem("type");
            
            console.log(type=="admin")
            if(type=="admin"){
                window.location.href="./gpSpeciaDetail.html";
            }else{
                window.location.href="./gpLiveDetail.html";
            }
            

        },100)


    });
    //点击个人中心
    $(".mainOt a").click(function(){

        var type=window.sessionStorage.getItem("type");
            
        console.log(type=="admin")
        if(type=="admin"){
            console.log("进入专家个人中心")
            window.location.href="./gpSpePerson.html";
        }else{
            console.log("进入普通用户个人中心")
            window.location.href="./gpPerson.html";
        }




    })
    
    //点击提问
    $(".askButton").click(function(){
        // alert(123)
        var askMessage=$("#req").val().trim();
        var asker=window.sessionStorage.getItem("user");
        var answer="admin3";
        // alert(tiwen)
        if(askMessage){
            $.ajax({
                type:"post",
                url:"http://192.168.0.171:8080/WSHD/jiekou8/ask",
                dataType:"json",
                data:{
                    asker:asker,
                    answer:answer,
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