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
    //    分页操作
    function loadData(page) {
           
        $.ajax({
            type: "post",
            url: "http://www.10xunc.com/WSHD/jiekou3/oil",
            data: {
                id:3,
                page: page,
                num: 7
            },
            dataType: "JSON",
            success: function (obj) {
                $('.main_content').html(template('SY', {
                    list: obj.data
                }))
                $('.M-box11').pagination({
                    totalData: obj.amount,
                    showData: obj.data.length,
                    current:page,
                    callback:function (api){
                        $.ajax({
                            type: "post",
                            url: "http://www.10xunc.com/WSHD/jiekou3/oil",
                            data: {
                                id:3,
                                page:api.getCurrent(),
                                num:7
                            },
                            dataType: "JSON",
                            success: function (obj) {
                                $('.main_content').html(template('SY', {
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

        var html="";
        for(var i in res.data.gold){
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

        var html="";
        for(var i in res.data.guzhi){
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
    //上海国际能源
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/shanghaienergy/list",
        data: {},
        dataType: "JSON",
        success: function (res) {

        var html="";
        for(var i in res.data){
        // html+=`
        //     <tr>
        //         <td><span>${item.name}</span></td>
        //         <td>${item.latest_price}</td>
        //         <td class="${item.ups_and_downs>0?'red':'green'}">${item.ups_and_downs}</td>
        //         <td class="${item.ups_and_downs>0?'red':'green'}">${item.quote_change}</td>
        //     </tr>
        //     `;
            var clas=res.data[i].ups_and_downs>0?'red':'green';
            html+="<tr>";
                html+="<td>";
                    html+="<span>"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>"+res.data[i].latest_price+"</td>";
                html+="<td class="+clas+">"+res.data[i].ups_and_downs+"</td>";
                html+="<td class="+clas+">"+res.data[i].quote_change+"</td>";
            html+="</tr>";
            $("div.mainRt table tbody").html(html);
        }

        }
    });
    //EFTC持仓
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/CFTCposition/list",
        data: {},
        dataType: "JSON",
        success: function (res) {

        var html="";
        for(var i in res.data){
        // html+=`
        // <li>
        //     <a href=${item.http_url+'?id='+item.id+'&tb='+item.table_name}>${item.title}</a>
        // </li>
        //     `;

            var url=res.data[i].http_url,id=res.data[i].id,tb=res.data[i].table_name,href=url+'?id='+id+'&tb='+tb;
            html+="<li>";
                html+="<a href="+href+">"+res.data[i].title+"</a>";
            html+="</li>";

            $("div.mainRtht ul").html(html);
        }

        }
    });





})