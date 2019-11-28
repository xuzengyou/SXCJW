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
    //点击刷新图片 刷新
    $(".main .mainT span:nth-child(4)").click(function(){
        // console.log(132);
        window.location.reload();
    });
    
    
    //定义倒计时的时间(倒计时60秒)
    var seconds = 59;
    function show(){
        seconds--;
        if(seconds==0){
            seconds = 59;
            console.log("我要发ajax请求啦")
            window.location.reload();
        }
        seconds = (seconds+"").length==1?"0"+seconds:seconds;
        $("#spanTime").html(seconds+"秒后刷新");


    }
    
    //开启定时器
    timer = setInterval(show,1000);


    //点击input事件
    $("#ms").change(function(){
        console.log($("#ms").is(':checked'))
        
        if(!$("#ms").is(':checked')){
            console.log(123);
            window.clearTimeout(timer);
                        
        }else{
            console.log($("#spanTime").html())
            timer = setInterval(show,1000);
        }
        
    });
    
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou4/kuaixun1?page=1&num=30",
        data: {},
        dataType: "JSON",
        success: function (res){
            if(res.code==200){
                console.log(res);
                var html="";
                for(var i in res.data){
                    // html+=`
                    //     <li>
                    //             <span>●</span>
                    //             <span>${item.time}</span>
                    //             <span><a>${item.content}</a></span>
                    //             <a><span></span></a>
                    //         </li>
                    //     `; 
                    html+="<li>";
                        html+="<span></span>";
                        html+="<span>"+res.data[i].time+"</span>";
                        html+="<span>"
                            html+="<a>"+res.data[i].content+"</a>";
                        html+="</span>";
                        html+="<a>";
                            html+="<span></span>";
                        html+="</a>";
                    html+="</li>";

                }
                $("div.mainBot ul").html(html);
            }
        }
    });




    


    
})