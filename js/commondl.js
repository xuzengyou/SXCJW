//获取返回的用户名
fhuser=window.sessionStorage.getItem("user");
if(fhuser){

    var html="";
    html="<a class=yh>"+fhuser+"</a><span>|</span><a class=tchu>退出</a>";
    $("div.lgin").html(html);
}
//点击退出
$("a.tchu").click(function(){
   sessionStorage.clear();
   window.location.reload();

});

//登录注册
//遮罩层
$("a.dl").click(function(){
    $('.logIn').removeClass("yinc");//显示弹窗
    $('.zzc').css('display','block'); //显示遮罩层
    $('.zzc').css('height',document.body.clientHeight+'px'); //设置遮罩层的高度为当前页面高度
    
});
$(".close-us").click(function(){
    $("div.logIn").addClass("yinc");
    $('.zzc').css('display','none'); //显示遮罩层
});
//点击切换登录
$("div.logTab span").click(function(){
    $(this).addClass("ac").siblings().removeClass("ac");
    var id=$(this).attr("data-id");
    $(id).addClass("acc").siblings().removeClass("acc");
});
//判断用户名是否已经注册
var chongf=false;
$("input.user").blur(function(){
    var yhuser=$("form ul li:first-child input").val();
    $.ajax({
        type:'post',
        url:'http://www.10xunc.com/WSHD/register/Repeat',
        data:{
            username:yhuser
        },
        dataType:'json',
        success:function(res){
            console.log(res)
            if(res.code==200){
                
                alert("用户名未注册")
                console.log(chongf)
            }else{
                chongf=true;
                console.log(chongf)
            }
        }
    })
})
//点击登录

$("button.yhdl").click(function(){
    console.log(chongf)
    if(chongf){
        var yhuser=$("form ul li:first-child input").val();
        var yhpw=$("form ul li:last-child input").val();
        var lmcode=$("input.tPcodev").val();
        var che=$('input.xc').prop("checked");
        if(yhuser&&yhpw&&lmcode&&che){
            $.ajax({
                type:'post',
                url:'http://www.10xunc.com/WSHD/register/secretLogin',
                data:{
                    captchaCode:lmcode,
                    username:yhuser,
                    password:yhpw
                },
                dataType:'json',
                success:function(res){
                    console.log(res)
                    if(res.code==200){
                        
                        window.sessionStorage.setItem("user",yhuser);
                        window.sessionStorage.setItem("type",res.type);


                        // alert("即将登陆"+$('input.xc').prop("checked"));
                        $("div.logIn").addClass("yinc");
                        $('.zzc').css('display','none'); //隐藏遮罩层
                        var html="";
                        html="<a class=yh>"+yhuser+"</a><span>|</span><a class=tchu>退出</a>";
                        $("div.lgin").html(html);
                        //点击退出
                        $("a.tchu").click(function(){
                            sessionStorage.clear();
                            window.location.reload();

                        });
                    }else{
                        alert(res.data)
                    }
                }
            })
            

        }else{
            alert("信息不完整");
        }




    }else{
        alert("请先注册")
    }
    

   
});
 //点击退出
 $("a.tchu").click(function(){
    sessionStorage.clear();
    window.location.reload();

});
//获取乱码
$("input.pswd").blur(function(){
    $("div.tPcode").addClass("ac");
    var yhuser=$("form ul li:first-child input").val();
    var yhpw=$("form ul li:last-child input").val();
    if(yhuser&&yhpw){
        console.log(123)
        $("div.tPimg img").attr("src","http://www.10xunc.com/WSHD/register/secretLoginCode?username="+yhuser+"&password="+yhpw);
        //http://192.168.0.171:8080/WSHD/register/secretLoginCode?username=双方都&password=123

        // $.ajax({
        //     type:"post",
        //     url:"http://192.168.0.171:8080/WSHD/register/secretLoginCode",
        //     data:{
        //         username:yhuser,
        //         password:yhpw
        //     },
        //     dataType:"json",
        //     success:function(res){
        //         console.log(123)
        //         console.log(res)
        //     }
        // })
    }


})
//点击下次自动登录
$('input.xc').click(function(){
    // alert(123)
    var $radio = $(this);
    if ($radio.data('checked')){
      $radio.prop('checked', false);
      $radio.data('checked', false);
      
    } else {
      $radio.prop('checked', true);
      $radio.data('checked', true);
    };
});
$('input.xcc').click(function(){
    var $radio = $(this);
    if ($radio.data('checked')){
      $radio.prop('checked', false);
      $radio.data('checked', false);
      
    } else {
      $radio.prop('checked', true);
      $radio.data('checked', true);
      
    };
});
//验证手机号码
var regsj=/^[1][3,4,5,7,8][0-9]{9}$/;
var sjh;
var sjchongf=false;
$("input.puser").blur(function(){
    sjh=$("input.puser").val();
    if(regsj.test(sjh)){
        $("button.Getpw").attr("disabled",false);
        if($("div.errInfo").hasClass("yc")){
        }else{
            $("div.errInfo").addClass("yc")
        };
        $.ajax({
            type:'post',
            url:'http://www.10xunc.com/WSHD/register/RepeatPhone',
            data:{
                phone:sjh
            },
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code==500){
                    sjchongf=true;
                }else{
                    $("button.Getpw").attr("disabled",true);
                    alert("请先注册");
                    
                }
            }
        })
    }else{
        $("div.errInfo").removeClass("yc");
    };
    
});
$("input.puser").bind('input propertychange',function () {
    var dt=$(this).val();
    if(regsj.test(dt)){
        $("button.Getpw").attr("disabled",false);
    }else{
        $("button.Getpw").attr("disabled",true);
    }
});

//点击获取验证码
$("button.Getpw").click(function(){
    $(this).addClass("hui")
    $("button.sjdl").attr("disabled",false);
    var seconds = 60;
    function show(){
        seconds--;
        seconds = (seconds+"").length==1?"0"+seconds:seconds;
        $("button.Getpw").html(seconds+"s获取验证码");
        $("button.Getpw").attr("disabled",true);
        if(seconds==0){
            $("button.Getpw").attr("disabled",false);
            $("button.Getpw").html("获取验证码");
            window.clearTimeout(timer);
            $("button.Getpw").removeClass("hui");
        }
    };
    //开启定时器
    timer = setInterval(show,1000);

    //获取验证码请求
    var phoneNum=$("input.puser").val();
    // if()
    $.ajax({
        type:'post',
        url:'http://www.10xunc.com/WSHD/register/phoneSend',
        data:{
            phoneNum:phoneNum
        },
        dataType:'json',
        success:function(res){

        }
    })
    //点击登录
    
    $("button.sjdl").click(function(){
        var yzm=$("input.yzm").val();
       
        if(sjchongf&&yzm){
            $.ajax({
                type:'post',
                url:'http://www.10xunc.com/WSHD/register/phoneLogin',
                data:{
                    captchaCode:yzm,
                    phoneNum:phoneNum
                },
                dataType:'json',
                success:function(res){
                    console.log(res)
                    if(res.code==200){
                        window.sessionStorage.setItem("user",res.summary);
                        window.sessionStorage.setItem("type",res.type);
                        // alert("即将登陆"+$('input.xc').prop("checked"));
                        $("div.logIn").addClass("yinc");
                        $('.zzc').css('display','none'); //隐藏遮罩层
                        var html="";
                        html="<a class=yh>"+res.summary+"</a><span>|</span><a class=tchu>退出</a>";
                        $("div.lgin").html(html);
                        //点击退出
                        $("a.tchu").click(function(){
                            sessionStorage.clear();
                            window.location.reload();

                        });
                    }else{
                        alert("登陆失败");
                        // window.location.reload();
                    }
                }
            })
        }else{
            alert("信息不完整")
        }
    });

});
$("button.Getpw").attr("disabled",true);
$("button.sjdl").attr("disabled",true);