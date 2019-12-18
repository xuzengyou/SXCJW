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
    //tab栏鼠标经过切换
    $("div.mainRtot a").mouseenter(function(){
        $(this).parent().addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        $(id).addClass("ac").siblings().removeClass("ac");
    });

    //获取视频列表
    $.ajax({
        type:"post",
        url:"http://192.168.0.171:8080/WSHD/VideoController/VideoAll",
        dataType:"json",
        data:{
            page:0,
            num:10
        },
        success:function(res){
            console.log(res.data);
            var html="",html2="",html3="",htmlR="",lj="./ordinary.html?";
                html+="<a href="+lj+res.data[1].vAddress+">"+res.data[1].vName+"</a>";
                html+="<a href="+lj+res.data[1].vAddress+"></a>";
                html+="<a href="+lj+res.data[1].vAddress+">";
                    html+="<img src="+res.data[1].vImage+">";
                html+="</a>";

                $(".one").html(html);

                html2+="<a href="+lj+res.data[2].vAddress+">"+res.data[2].vName+"</a>";
                html2+="<a href="+lj+res.data[2].vAddress+"></a>";
                html2+="<a href="+lj+res.data[2].vAddress+">";
                    html2+="<img src="+res.data[2].vImage+">";
                html2+="</a>";

                $(".two").html(html2);

                html3+="<a href="+lj+res.data[3].vAddress+">"+res.data[3].vName+"</a>";
                html3+="<a href="+lj+res.data[3].vAddress+"></a>";
                html3+="<a href="+lj+res.data[3].vAddress+">";
                    html3+="<img src="+res.data[3].vImage+">";
                html3+="</a>";
                    

                $(".three").html(html3);
           
            for(var i in res.data.slice(1,6)){
                htmlR+="<div class=new>";
                    htmlR+="<a href="+lj+res.data.slice(1,6)[i].vAddress+">";
                        htmlR+="<img src="+res.data.slice(1,6)[i].vImage+" alt="+"加载失败"+">";
                    htmlR+="</a>";
                    htmlR+="<a href="+lj+res.data.slice(1,6)[i].vAddress+"></a>";
                    htmlR+="<a href="+lj+res.data.slice(1,6)[i].vAddress+">"+res.data.slice(1,6)[i].vIntro+"</a>";
                htmlR+="</div>";


                $(".news").html(htmlR)

            }

            
        }
    })






})