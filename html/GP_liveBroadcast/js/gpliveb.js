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
    //确认已经登录
    var type=window.sessionStorage.getItem("type");
    
    console.log(type=="admin")
    




























    
})