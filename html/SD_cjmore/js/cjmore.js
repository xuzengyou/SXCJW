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
    //    分页操作
     var str= window.location.href;
    var id= str.split("=")[1];
    function loadData(id,page) {
       
        $.ajax({
            type: "post",
            url: "http://www.10xunc.com/WSHD/jiekou4/selectMore",
            data: {
                id:id,
                page: page,
                num: 12
            },
            dataType: "JSON",
            success: function (obj) {
                $('.crumbs').html(template('CR', {
                    list: obj
                }))
                $('.main_content').html(template('GD', {
                    list: obj.data
                }))
                $('.M-box11').pagination({
                    totalData: obj.sum,
                    showData: obj.data.length,
                    current:page,
                    callback:function (api){
                        $.ajax({
                            type: "post",
                            url: "http://www.10xunc.com/WSHD/jiekou4/selectMore",
                            data: {
                                id:id,
                                page:api.getCurrent(),
                                num:12
                            },
                            dataType: "JSON",
                            success: function (obj) {
                                $('.main_content').html(template('GD', {
                                    list: obj.data
                                  }))
                            }
                        });
                    }
                })

            }
        });
    }
    loadData(id,1);

})