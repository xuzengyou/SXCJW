$(function(){

    // 成功后返回原页面携带用户名
    window.location.search;
    var yurl=window.location.search.split("?")[1];
    

    var sjh,sjmm,sjyz,sjty;
    $('.option-radio').on('click',function(){
       if( $(this).hasClass('option-radio-sel')){
       $(this).removeClass('option-radio-sel')
       }else{
       $(this).addClass('option-radio-sel')
       }
       // 同意协议判断
       if($('.option-radio').hasClass('option-radio-sel')){
           // 同意协议
           $('.button-style').removeClass('btn-none');
           $('.button-style').attr('disabled',false);
       }else{
           // 不同意协议
           $('.button-style').addClass('btn-none');
           $('.button-style').attr('disabled',true);
       }
    });
   //  密码的显示和隐藏
    $(".password-eye").on("click",function(){
       if( $(this).hasClass('eye-active')){
       $(this).removeClass('eye-active');
       $(this).siblings().attr("type","text");
       }else{
       $(this).addClass('eye-active');
       $(this).siblings().attr("type","password");
       
       }
    });

    $(".input-box").on('click',function(){
       var input=$(".input")
      for(var i=0;i<input.length;i++){
        if(input[i].value!==''){
            $(input[i]).parents('.input-box').addClass("input-focus")
        }else{
           $(input[i]).parents('.input-box').removeClass("input-focus")
          
        }
       }
       $(this).addClass("input-focus");   
   });
   // 失去焦点判断
   $('#idPhone').on('blur',function(){
       var phone=$('#idPhone').val();
       if(!(/^1[3456789]\d{9}$/.test(phone))&&phone!==''){
       $(this).parent().parent().siblings('.err-text').css('display',"block");
       $('#idPhone').parent().parent().siblings('.err-text').html('帐号格式错误');  
       }else{
           $(this).parent().parent().siblings('.err-text').css('display',"none");
       }
   })
   // 非字母输入判断
   $('#idPhone').keyup(function(){
         var val = $(this).val();
         if(val.length==1){
             $('#idPhone').val(val.replace(/[^1-9]/g,''));
         }else{
             $('#idPhone').val(val.replace(/\D/g,''));
         }
   });
   //  密码输入时检测
   $('.password-input').on('input propertychange',function(){
       $('.tip-text').css('display',"block");
       $('.err_pass').css('display',"none");
   });
//判断手机号或者邮箱是否重复
$("input.xaidaim1").blur(function(){
    console.log($(this).val());
    var username=$(this).val();
    var shouji=/^1[3456789]\d{9}$/.test($(this).val())
    if(shouji){
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/register/RepeatPhone",
            data:{
                phone:username
            },
            dataType:"json",
            success:function(res){
                console.log(res)
                if(res.code==200){

                }else{
                    alert("该手机号已注册,请直接登录");
                    window.location.href="http://img.10xunc.com/备用件/html/index.html"
                }
            }
        })
    }else{
        alert("手机号码格式有误");
    }
        

});
$("input.email").blur(function(){
    console.log($(this).val());
    var username=$(this).val();
    var youxiang=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test($(this).val())
    if(youxiang){
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/register/RepeatMail",
            data:{
                email:username
            },
            dataType:"json",
            success:function(res){
                console.log(res)
                if(res.code==200){

                }else{
                    alert("该邮箱已注册,请直接登录");
                    window.location.href="http://img.10xunc.com/备用件/html/index.html";
                }
            }
        })
    }else{
        alert("邮箱格式有误");
    }
       
});
//判断用户名是否重复
$("input.sjhinput").blur(function(){
    console.log($(this).val());
    var username=$(this).val();
    if(username){
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/register/Repeat",
            data:{
                username:username
            },
            dataType:"json",
            success:function(res){
                console.log(res)
                if(res.code==200){

                }else{
                    alert("用户名已存在");
                    window.location.reload();
                }
            }
        })
    }else{
        alert("用户名不能为空");
    }
        

});
$("input.xaidaim").blur(function(){
    console.log($(this).val());
    var username=$(this).val();
    if(username){
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/register/Repeat",
            data:{
                username:username
            },
            dataType:"json",
            success:function(res){
                console.log(res)
                if(res.code==200){

                }else{
                    alert("用户名已存在");
                }
            }
        })
    }else{
        alert("用户名不能为空");
    }
       
});



//    非空判断和已注册判断
   $(".button-second").on('click',function(){
       if( $('#idPhone').val()==''){
           $('#idPhone').parent().parent().siblings('.err-text').css('display',"block"); 
           $('#idPhone').parent().parent().siblings('.err-text').html('手机号为空');
       }else{
            var password=$('.password-input').val();
           if(!(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,16}$/.test(password))){
               //不合规则
               $('.tip-text').css('display',"none");
              $('.err_pass').css('display',"block");
                
           }else{
                var phoneNum=$("input.xaidaim1").val();//获取value,根据后台数据做比较，如果不正确，显示“账号已注册，请直接登录”
               if(phoneNum){
                 //如果正确，实现倒计时功能
                     authCode(this)
                     
                     $.ajax({
                         type:"post",
                         url:"http://www.10xunc.com/WSHD/register/phoneSend",
                         dataType:"json",
                         data:{
                            phoneNum:phoneNum
                         },
                         success:function(res){
                            console.log(phoneNum+'发送短信验证码请求'); 
                         }
                     })
                }else{
                   $('#idPhone').parent().parent().siblings('.err-text').css('display',"block");
                    $('#idPhone').parent().parent().siblings('.err-text').html('账号已注册，请直接登录');
                }
                 
           }
       
       }      
   });
   // 倒计时实现
   var waitTime=60;
   function authCode(ele){
    if(waitTime==0){
       $(".button-second").html("获取验证码");
        ele.disabled=false;
        waitTime=60;
    }else{
        if(waitTime<10){
            waitTime='0'+waitTime
        }
        ele.disabled=true;
        $(".button-second").html(waitTime+'s重新获取')
        waitTime--;
        setTimeout(() => {
            authCode(ele);
        }, 1000);
    }
  

}

//点击手机注册
    $("input.sjhinput").focus(function(){
        $("div.sjuser").addClass("focus");
    });
    $("input.sjhinput").blur(function(){
        $("div.sjuser").removeClass("focus");
    });
   $('.button-style').on('click',function(){

        sjh=/^1[3456789]\d{9}$/.test($('#idPhone').val());
        sjmm=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,16}$/.test($('.password-input').val())
        sjyz=$('input.code').val()!=="";
        sjty=$("span.option-radio").hasClass("option-radio-sel");
        console.log(sjh+""+sjmm+""+sjyz+""+sjty);
            if(sjh&&sjmm&&sjyz&&sjty){
                var captchaCode=$('input.code').val();
                var phoneNum=$('#idPhone').val();
                var username=$('input.sjhinput').val();
                var password=$('.password-input').val();
                // var data2=JSON.stringify({
                //     captchaCode:captchaCode,
                //     phoneNum:phoneNum,
                //     username:username,
                //     password:password
                // })
                $.ajax({
                    type:"post",
                    url:"http://www.10xunc.com/WSHD/register/phoneCreate",
                    data:{
                        captchaCode:captchaCode,
                        phoneNum:phoneNum,
                        username:username,
                        password:password
                    },
                    dataType:"json",
                    success:function(res){
                        console.log(res);
                        var fhui=$("input.sjhinput").val();
                        window.sessionStorage.setItem("user",fhui);
                        window.location.href=yurl;
                    }

                })
            }else{
                alert("信息不完整");
            }
    

   });

//    邮箱注册
var mm,youxiang,tongy;
$("div.title span").click(function(){
    $(this).addClass("ac").siblings().removeClass("ac");
    var id=$(this).attr("data-id");
    $(id).removeClass("yc").siblings().addClass("yc");
})
$('input.ty').click(function(){
    
    var $radio = $(this);
    if ($radio.data('checked')){
      $radio.prop('checked', false);
      $radio.data('checked', false);
      
    } else {
      $radio.prop('checked', true);
      $radio.data('checked', true);
      
    };
    console.log($radio.data('checked'))
    // if($("button.zcb").hasClass("ac")){
    //     $("button.zcb").removeClass("ac");
    //   }else{
    //     $("button.zcb").addClass("ac");
    //   }
      tongy=$radio.data('checked');
});
//用户密码
var reg0=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,16}$/;
// ^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$
$("div.pwd input").blur(function(){
    var pwz=$("div.pwd input").val();
    console.log(pwz);
    console.log(reg0.test(pwz));
    if(reg0.test(pwz)){
        $("div.pwtsyc").addClass("pwtsyca");
    }else{
        $("div.pwtsyc").removeClass("pwtsyca");
    }
    mm=reg0.test(pwz);
})
//邮箱
var reg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
$("div.yx input").blur(function(){
    var yxz=$("div.yx input").val();
    console.log(yxz)
    console.log(reg.test(yxz))
    if(reg.test(yxz)){
        $("div.ts").addClass("tsyc");
    }else{
        $("div.ts").removeClass("tsyc");
    }
    youxiang=reg.test(yxz);
});



//邮箱点击注册
$("button.zcb").click(function(){
    console.log(mm+""+youxiang+""+tongy);
    console.log(mm&&youxiang&&tongy);
    var username=$("input.xaidaim").val();
    var pw=$("input.pw").val();
    var email=$("input.email").val();
    if(mm&&youxiang&&tongy){
        // $("button.zcb").attr("disabled",false);
        // alert("发请求开始 ");
        console.log(email+username+pw)
        if(username){
            
            $.ajax({
                type:"post",
                url:"http://www.10xunc.com/WSHD/register/emailSend",
                dataType:"json",
                data:{
                    email:email,
                    username:username,
                    password:pw
                },
                success:function(res){
                    alert("注册成功");
                    console.log(yurl);
                    var fhui=$("input.xaidaim").val();
                    window.sessionStorage.setItem("user",fhui);
                    window.location.href=yurl;
                }
            });
        }
            
        
    }else{
        
        alert("用户名、用户密码、邮箱有误或未勾选10讯服务协议")
    }
    
    
});



})