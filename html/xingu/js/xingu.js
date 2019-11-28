$(function () {
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
    // 分页初始化
    //    分页操作
    function loadData(page) {
       
       $.ajax({
           type: "post",
           url: "http://www.10xunc.com/WSHD/news/Newstock_news_list",
           data: {
               page: page,
               limit: 12
           },
           dataType: "JSON",
           success: function (obj) {
               $('.main_content').html(template('XG', {
                   list: obj.data
               }))
               $('.M-box11').pagination({
                   totalData: obj.count,
                   showData: obj.data.length,
                   current:page,
                   callback:function (api){
                       $.ajax({
                           type: "post",
                           url: "http://www.10xunc.com/WSHD/news/Newstock_news_list",
                           data: {
                               page:api.getCurrent(),
                               limit:12
                           },
                           dataType: "JSON",
                           success: function (obj) {
                               $('.main_content').html(template('XG', {
                                   list: obj.data
                                 }))
                               
                           }
                       });
                   }
               })

           }
       });
   }
   loadData(1);

})