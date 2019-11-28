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
    //tab栏鼠标经过切换
    $("div.mainRo table thead tr td").mouseenter(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        console.log(id);
        $(id).addClass("ac").siblings().removeClass("ac");

    });
    //tab栏鼠标经过切换发送请求
    //外汇
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=5",
        data: {},
        dataType: "JSON",
        success: function (res) {

            // console.log(res)
        var html="";
        for(var i in res.data.waihui){
            var clas=res.data.waihui[i].upsAndDowns>0?'red':'green';
            html+="<tr>";
                html+="<td>";
                    html+="<span>"+res.data.waihui[i].name+"</span>";
                html+="</td>";
                html+="<td>"+res.data.waihui[i].latestPrice+"</td>";
                html+="<td class="+clas+">"+res.data.waihui[i].upsAndDowns+"</td>";
                html+="<td class="+clas+">"+res.data.waihui[i].quoteChange+"</td>";
            html+="</tr>";

            $("tbody#one").html(html);
        }

        }
    });
    //贵金属
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=5",
        data: {},
        dataType: "JSON",
        success: function (res) {

            // console.log(res)
        var html="";
        for(var i in res.data.gold){
        // html+=`
        //     <tr>
        //         <td><span>${item.name}</span></td>
        //         <td>${item.nowpri}</td>
        //         <td class="${item.pricechange>0?'red':'green'}">${item.pricechange}</td>
        //         <td class="${item.pricechange>0?'red':'green'}">${item.changepercent}</td>
        //     </tr>
        //     `;
        var clas=res.data.gold[i].pricechange>0?'red':'green';
        html+="<tr>";
            html+="<td>";
                html+="<span>"+res.data.gold[i].name+"</span>";
            html+="</td>";
            html+="<td>"+res.data.gold[i].nowpri+"</td>";
            html+="<td class="+clas+">"+res.data.gold[i].pricechange+"</td>";
            html+="<td class="+clas+">"+res.data.gold[i].changepercent+"</td>";
        html+="</tr>";

            $("tbody#two").html(html);
        }

        }
    });
    //股指
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=5",
        data: {},
        dataType: "JSON",
        success: function (res) {

            // console.log(res)
        var html="";
        for(var i in res.data.guzhi){
        // html+=`
        //     <tr>
        //         <td><span>${item.name}</span></td>
        //         <td>${item.nowpri}</td>
        //         <td class="${item.pricechange>0?'red':'green'}">${item.pricechange}</td>
        //         <td class="${item.pricechange>0?'red':'green'}">${item.changepercent}</td>
        //     </tr>
        //     `;
        var clas=res.data.guzhi[i].pricechange>0?'red':'green';
        html+="<tr>";
            html+="<td>";
                html+="<span>"+res.data.guzhi[i].name+"</span>";
            html+="</td>";
            html+="<td>"+res.data.guzhi[i].nowpri+"</td>";
            html+="<td class="+clas+">"+res.data.guzhi[i].pricechange+"</td>";
            html+="<td class="+clas+">"+res.data.guzhi[i].changepercent+"</td>";
        html+="</tr>";
            $("tbody#three").html(html);
        }

        }
    });
    //国际黄金
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=5",
        data: {},
        dataType: "JSON",
        success: function (res) {

            // console.log(res)
        var html="";
        for(var i in res.data.gold){
        // html+=`
        //     <tr>
        //         <td><span>${item.name}</span></td>
        //         <td>${item.nowpri}</td>
        //         <td class="${item.pricechange>0?'red':'green'}">${item.pricechange}</td>
        //         <td class="${item.pricechange>0?'red':'green'}">${item.changepercent}</td>
        //     </tr>
        //     `;
        var clas=res.data.gold[i].pricechange>0?'red':'green';
        html+="<tr>";
            html+="<td>";
                html+="<span>"+res.data.gold[i].name+"</span>";
            html+="</td>";
            html+="<td>"+res.data.gold[i].nowpri+"</td>";
            html+="<td class="+clas+">"+res.data.gold[i].pricechange+"</td>";
            html+="<td class="+clas+">"+res.data.gold[i].changepercent+"</td>";
        html+="</tr>";
            $("div.mainRt table tbody").html(html);
        }

        }
    });
    //全球股指
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=5",
        data: {},
        dataType: "JSON",
        success: function (res) {

            // console.log(res)
        var html="";
        for(var i in res.data.guzhi){
        // html+=`
        //     <tr>
        //         <td><span>${item.name}</span></td>
        //         <td>${item.nowpri}</td>
        //         <td class="${item.pricechange>0?'red':'green'}">${item.pricechange}</td>
        //         <td class="${item.pricechange>0?'red':'green'}">${item.changepercent}</td>
        //     </tr>
        //     `;
        var clas=res.data.guzhi[i].pricechange>0?'red':'green';
        html+="<tr>";
            html+="<td>";
                html+="<span>"+res.data.guzhi[i].name+"</span>";
            html+="</td>";
            html+="<td>"+res.data.guzhi[i].nowpri+"</td>";
            html+="<td class="+clas+">"+res.data.guzhi[i].pricechange+"</td>";
            html+="<td class="+clas+">"+res.data.guzhi[i].changepercent+"</td>";
        html+="</tr>";
            $("div.mainRth table tbody").html(html);
        }

        }
    });
    
})

var LoadData;
function LoadData(){}
  //    分页操作
  LoadData.prototype.loadData=function (id,page) {  
    $.ajax({
        type: "post",
        url: "http://www.10xunc.com/WSHD/jiekou3/gold",
        data: {
           id:id,
            page: page,
            num: 7
        },
        dataType: "JSON",
        success: function (obj) {
            $('.main_content').html(template('HJ', {
                list: obj.data
            }))
            $('.M-box11').pagination({
                totalData: obj.amount,
                showData: obj.data.length,
                current:page,
                callback:function (api){
                    $.ajax({
                        type: "post",
                        url: "http://www.10xunc.com/WSHD/jiekou3/gold",
                        data: {
                            id:id,
                            page:api.getCurrent(),
                            num:7
                        },
                        dataType: "JSON",
                        success: function (obj) {
                            $('.main_content').html(template('HJ', {
                                list: obj.data
                              }))
                            
                        }
                    });
                }
            })

        }
    });
}














