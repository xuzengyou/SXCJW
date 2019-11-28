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
     
    // setInterval(function(){
    //     console.log(123)
    // },1000)

    //左边tab栏切换
    $("div.mainL li").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        console.log(id);
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    //外汇牌价tab栏切换
    $("div.whpjTt ul li").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        console.log(id);
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    //导航栏第一部分--数据中心--热门商品
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=6",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data.guzhi){
            
            var wzsty=res.data.guzhi[i].pricechange>0?'red':'green';
            // console.log(wzsty);
            var mRotc="mRotc";
            html+="<div class="+mRotc+">";
                html+="<p>";
                    html+="<span>"+res.data.guzhi[i].name+"</span>";
                html+"</p>";
                html+="<p>";
                    html+="<span>"+res.data.guzhi[i].nowpri+"</span>";
                html+="</p>";
                html+="<p>";
                    html+="<span class="+wzsty+">"+res.data.guzhi[i].pricechange+"</span>";
                    html+="<span>|</span>";
                    html+="<span class="+wzsty+">"+res.data.guzhi[i].changepercent.toFixed(3)+"</span>";
                html+="</p>";
                html+="<p><span></span></p>";
            html+="</div>";


            $("div.mRot").html(html);
        }//for

        }//success

    });

    //导航栏第一部分--数据中心--国际外汇
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=5",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data.waihui){
            var srcimg=res.data.waihui[i].upsAndDowns>0?'../../img/up.png':'../../img/down.png',
            clas=res.data.waihui[i].upsAndDowns>0?'red':'green',wid1=res.data.waihui[i].nowTime,
            wid2=100-res.data.waihui[i].nowTime;
            console.log(srcimg+clas+wid1+wid2);
            html+="<tr>";
                html+="<td>";
                    html+="<img src="+srcimg+">";
                    html+="<span>"+"&nbsp;"+res.data.waihui[i].name+"</span>";
                html+="</td>";
                html+="<td>"+res.data.waihui[i].latestPrice+"</td>";
                html+="<td class="+clas+">"+res.data.waihui[i].upsAndDowns+"</td>";
                html+="<td class="+clas+">"+res.data.waihui[i].quoteChange+"</td>";
                html+="<td>"+res.data.waihui[i].highestPrice+"</td>";
                html+="<td>"+res.data.waihui[i].lowestPrice+"</td>";
                html+="<td>";
                    html+="<span style=width:"+wid1+"%></span>";
                    html+="<span style=width:"+wid2+"%></span>";
                html+="</td>";
            html+="</tr>";

            $("div.mRt table tbody").html(html);
        }//for

        }//success

    });

    //导航栏第一部分--数据中心--贵金属
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=5",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data.gold){
            var srcimg=res.data.gold[i].pricechange>0?'../../img/up.png':'../../img/down.png',
            clas=res.data.gold[i].pricechange>0?'red':'green';
            console.log(srcimg+clas);
            html+="<tr>";
                html+="<td>";
                    html+="<img src="+srcimg+">";
                    html+="<span>"+"&nbsp;"+res.data.gold[i].name+"</span>";
                html+="</td>";
                html+="<td>"+res.data.gold[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data.gold[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data.gold[i].changepercent+"</td>";
                html+="<td>"+res.data.gold[i].high+"</td>";
                html+="<td>"+res.data.gold[i].low+"</td>";
                html+="<td>";
                    html+="<span style=width:"+50+"%></span>";
                    html+="<span style=width:"+50+"%></span>";
                html+="</td>";
            html+="</tr>";

            $("div.mRth table tbody").html(html);
        }//for

        }//success

    });
    //导航栏第一部分--数据中心--能源期货
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=1&page=0&num=5",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var srcimg=res.data[i].pricechange>0?'../../img/up.png':'../../img/down.png',
            clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>";
                    html+="<img src="+srcimg+">";
                    html+="<span>"+"&nbsp;"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";


            $("div.mRf table tbody").html(html);
        }//for

        }//success

    });

    //导航栏第一部分--数据中心--商品指数
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=13&page=0&num=5",
        dataType:"JSON",
        data:{},
        success:function(res){
            console.log(res.data)
        var html="";
        for(var i in res.data){
            var srcimg=res.data[i].pricechange>0?'../../img/up.png':'../../img/down.png',
            clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>";
                    html+="<img src="+srcimg+">";
                    html+="<span>"+"&nbsp;"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";

            $("div.mRv table tbody").html(html);
        }//for

        }//success

    });

    //导航栏第一部分--数据中心--国际券市
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=12&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
            var clas2=res.data[2].pricechange>0?'red':'green',clas0=res.data[0].pricechange>0?'red':'green',
            clas3=res.data[3].pricechange>0?'red':'green',clas4=res.data[4].pricechange>0?'red':'green',
            clas5=res.data[5].pricechange>0?'red':'green';
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;美债2年收益率</span>";
                html+="</td>";
                html+="<td>"+res.data[2].nowpri+"</td>";
                html+="<td class="+clas2+">"+res.data[2].pricechange+"</td>";
                html+="<td class="+clas2+">"+res.data[2].changepercent+"</td>";
                html+="<td>"+res.data[2].high+"</td>";
                html+="<td>"+res.data[2].low+"</td>";
                html+="<td>"+res.data[2].prevclose+"</td>";
                html+="<td>"+res.data[2].time+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;美债5年收益率</span>";
                html+="</td>";
                html+="<td>"+res.data[0].nowpri+"</td>";
                html+="<td class="+clas0+">"+res.data[0].pricechange+"</td>";
                html+="<td class="+clas0+">"+res.data[0].changepercent+"</td>";
                html+="<td>"+res.data[0].high+"</td>";
                html+="<td>"+res.data[0].low+"</td>";
                html+="<td>"+res.data[0].prevclose+"</td>";
                html+="<td>"+res.data[0].time+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;美债10年收益率</span>";
                html+="</td>";
                html+="<td>"+res.data[3].nowpri+"</td>";
                html+="<td class="+clas3+">"+res.data[3].pricechange+"</td>";
                html+="<td class="+clas3+">"+res.data[3].changepercent+"</td>";
                html+="<td>"+res.data[3].high+"</td>";
                html+="<td>"+res.data[3].low+"</td>";
                html+="<td>"+res.data[3].prevclose+"</td>";
                html+="<td>"+res.data[3].time+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;美债30年收益率</span>";
                html+="</td>";
                html+="<td>"+res.data[4].nowpri+"</td>";
                html+="<td class="+clas4+">"+res.data[4].pricechange+"</td>";
                html+="<td class="+clas4+">"+res.data[4].changepercent+"</td>";
                html+="<td>"+res.data[4].high+"</td>";
                html+="<td>"+res.data[4].low+"</td>";
                html+="<td>"+res.data[4].prevclose+"</td>";
                html+="<td>"+res.data[4].time+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;日债10年收益率</span>";
                html+="</td>";
                html+="<td>"+res.data[5].nowpri+"</td>";
                html+="<td class="+clas5+">"+res.data[5].pricechange+"</td>";
                html+="<td class="+clas5+">"+res.data[5].changepercent+"</td>";
                html+="<td>"+res.data[5].high+"</td>";
                html+="<td>"+res.data[5].low+"</td>";
                html+="<td>"+res.data[5].prevclose+"</td>";
                html+="<td>"+res.data[5].time+"</td>";
            html+="</tr>";


            $("div.mRs table tbody").html(html);
        }//success

    });
    //导航栏第一部分--数据中心--银行牌价
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectBankAll",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
            
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;USD</span>";
                html+="</td>";
                html+="<td>"+res.data[0][0].toFixed(2)+"</td>";
                html+="<td>"+res.data[0][1].toFixed(2)+"</td>";
                html+="<td>"+res.data[0][2].toFixed(2)+"</td>";
                html+="<td>"+res.data[0][3].toFixed(2)+"</td>";
                html+="<td>"+res.data[0][4].toFixed(2)+"</td>";
                html+="<td>"+res.data[0][5].toFixed(2)+"</td>";
                html+="<td>"+res.data[0][6].toFixed(2)+"</td>";
                html+="<td>"+res.data[0][7].toFixed(2)+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;EUR</span>";
                html+="</td>";
                html+="<td>"+res.data[1][0].toFixed(2)+"</td>";
                html+="<td>"+res.data[1][1].toFixed(2)+"</td>";
                html+="<td>"+res.data[1][2].toFixed(2)+"</td>";
                html+="<td>"+res.data[1][3].toFixed(2)+"</td>";
                html+="<td>"+res.data[1][4].toFixed(2)+"</td>";
                html+="<td>"+res.data[1][5].toFixed(2)+"</td>";
                html+="<td>"+res.data[1][6].toFixed(2)+"</td>";
                html+="<td>"+res.data[1][7].toFixed(2)+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;GBP</span>";
                html+="</td>";
                html+="<td>"+res.data[2][0].toFixed(2)+"</td>";
                html+="<td>"+res.data[2][1].toFixed(2)+"</td>";
                html+="<td>"+res.data[2][2].toFixed(2)+"</td>";
                html+="<td>"+res.data[2][3].toFixed(2)+"</td>";
                html+="<td>"+res.data[2][4].toFixed(2)+"</td>";
                html+="<td>"+res.data[2][5].toFixed(2)+"</td>";
                html+="<td>"+res.data[2][6].toFixed(2)+"</td>";
                html+="<td>"+res.data[2][7].toFixed(2)+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;JPY</span>";
                html+="</td>";
                html+="<td>"+res.data[3][0].toFixed(2)+"</td>";
                html+="<td>"+res.data[3][1].toFixed(2)+"</td>";
                html+="<td>"+res.data[3][2].toFixed(2)+"</td>";
                html+="<td>"+res.data[3][3].toFixed(2)+"</td>";
                html+="<td>"+res.data[3][4].toFixed(2)+"</td>";
                html+="<td>"+res.data[3][5].toFixed(2)+"</td>";
                html+="<td>"+res.data[3][6].toFixed(2)+"</td>";
                html+="<td>"+res.data[3][7].toFixed(2)+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;CHF</span>";
                html+="</td>";
                html+="<td>"+res.data[4][0].toFixed(2)+"</td>";
                html+="<td>"+res.data[4][1].toFixed(2)+"</td>";
                html+="<td>"+res.data[4][2].toFixed(2)+"</td>";
                html+="<td>"+res.data[4][3].toFixed(2)+"</td>";
                html+="<td>"+res.data[4][4].toFixed(2)+"</td>";
                html+="<td>"+res.data[4][5].toFixed(2)+"</td>";
                html+="<td>"+res.data[4][6].toFixed(2)+"</td>";
                html+="<td>"+res.data[4][7].toFixed(2)+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;CAD</span>";
                html+="</td>";
                html+="<td>"+res.data[5][0].toFixed(2)+"</td>";
                html+="<td>"+res.data[5][1].toFixed(2)+"</td>";
                html+="<td>"+res.data[5][2].toFixed(2)+"</td>";
                html+="<td>"+res.data[5][3].toFixed(2)+"</td>";
                html+="<td>"+res.data[5][4].toFixed(2)+"</td>";
                html+="<td>"+res.data[5][5].toFixed(2)+"</td>";
                html+="<td>"+res.data[5][6].toFixed(2)+"</td>";
                html+="<td>"+res.data[5][7].toFixed(2)+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;AUD</span>";
                html+="</td>";
                html+="<td>"+res.data[6][0].toFixed(2)+"</td>";
                html+="<td>"+res.data[6][1].toFixed(2)+"</td>";
                html+="<td>"+res.data[6][2].toFixed(2)+"</td>";
                html+="<td>"+res.data[6][3].toFixed(2)+"</td>";
                html+="<td>"+res.data[6][4].toFixed(2)+"</td>";
                html+="<td>"+res.data[6][5].toFixed(2)+"</td>";
                html+="<td>"+res.data[6][6].toFixed(2)+"</td>";
                html+="<td>"+res.data[6][7].toFixed(2)+"</td>";
            html+="</tr>";
            html+="<tr>";
                html+="<td>";
                    html+="<span></span>";
                    html+="<span>&nbsp;CNY</span>";
                html+="</td>";
                html+="<td>"+res.data[7][0].toFixed(2)+"</td>";
                html+="<td>"+res.data[7][1].toFixed(2)+"</td>";
                html+="<td>"+res.data[7][2].toFixed(2)+"</td>";
                html+="<td>"+res.data[7][3].toFixed(2)+"</td>";
                html+="<td>"+res.data[7][4].toFixed(2)+"</td>";
                html+="<td>"+res.data[7][5].toFixed(2)+"</td>";
                html+="<td>"+res.data[7][6].toFixed(2)+"</td>";
                html+="<td>"+res.data[7][7].toFixed(2)+"</td>";
            html+="</tr>";


            $("div.mRg table tbody").html(html);
        // }//for

        }//success

    });







    // 导航栏第二部分--国际外汇--国际外汇
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data.waihui){
            var clas=res.data.waihui[i].upsAndDowns>0?'red':'green';
            html+="<tr>";
                html+="<td>"+res.data.waihui[i].name+"</td>";
                html+="<td>"+res.data.waihui[i].latestPrice+"</td>";
                html+="<td class="+clas+">"+res.data.waihui[i].upsAndDowns+"</td>";
                html+="<td class="+clas+">"+res.data.waihui[i].quoteChange+"</td>";
                html+="<td>"+res.data.waihui[i].highestPrice+"</td>";
                html+="<td>"+res.data.waihui[i].lowestPrice+"</td>";
                html+="<td>"+res.data.waihui[i].prePrice+"</td>";
                html+="<td>"+res.data.waihui[i].createTime+"</td>";
            html+="</tr>";

            
            $("div.tmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第二部分--国际外汇--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=1&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";

            $("div.tmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第三部分--国际外汇--国际黄金
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data.gold){
            var clas=res.data.gold[i].pricechange>0?'red':'green';
            
            html+="<tr>";
                html+="<td>"+res.data.gold[i].name+"</td>";
                html+="<td>"+res.data.gold[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data.gold[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data.gold[i].changepercent+"</td>";
                html+="<td>"+res.data.gold[i].high+"</td>";
                html+="<td>"+res.data.gold[i].low+"</td>";
                html+="<td>"+res.data.gold[i].prevclose+"</td>";
                html+="<td>"+res.data.gold[i].time+"</td>";
            html+="</tr>";

            
            $("div.thmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第三部分--国际外汇--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=2&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.thmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第五部分--IPE原油
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectThree?page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data.guzhi){
            var clas=res.data.guzhi[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data.guzhi[i].name+"</td>";
                html+="<td>"+res.data.guzhi[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data.guzhi[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data.guzhi[i].changepercent+"</td>";
                html+="<td>"+res.data.guzhi[i].high+"</td>";
                html+="<td>"+res.data.guzhi[i].low+"</td>";
                html+="<td>"+res.data.guzhi[i].prevclose+"</td>";
                html+="<td>"+res.data.guzhi[i].time+"</td>";
            html+="</tr>";

            $("div.vmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第五部分--IPE原油--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=3&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.vmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第六部分--NYMEX原油
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=1&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.smRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第六部分--NYMEX原油--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=4&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.smRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第七部分--虚拟货币
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=2&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.qimRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第七部分--虚拟货币--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=5&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.qimRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第八部分
    // 外汇牌价--工商银行
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectBank?id=1&page=0&num=15",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            // html+=`
            // <tr>
            //     <td><span>${item.name}</span></td>
            //     <td><span>${item.spotBuy}</span></td>
            //     <td><span>${item.cashBuy}</span></td>
            //     <td><span>${item.spotSell}</span></td>
            //     <td><span>${item.cashSell}</span></td>
            //     <td><span>${item.bankReference}</span></td>
            //     <td><span>${item.time}</span></td>
            // </tr>

            // `;
            html+="<tr>";
                html+="<td>";
                    html+="<span>"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].bankReference+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].time+"</span>";
                html+="</td>";
            html+="</tr>";

            $("table#o tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第八部分
    // 外汇牌价--中国银行
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectBank?id=2&page=0&num=15",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            // html+=`
            // <tr>
            //     <td><span>${item.name}</span></td>
            //     <td><span>${item.spotBuy}</span></td>
            //     <td><span>${item.cashBuy}</span></td>
            //     <td><span>${item.spotSell}</span></td>
            //     <td><span>${item.cashSell}</span></td>
            //     <td><span>${item.bankReference}</span></td>
            //     <td><span>${item.time}</span></td>
            // </tr>

            // `;
            html+="<tr>";
                html+="<td>";
                    html+="<span>"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].bankReference+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].time+"</span>";
                html+="</td>";
            html+="</tr>";

            $("table#t tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第八部分
    // 外汇牌价--农业银行
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectBank?id=3&page=0&num=15",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            // html+=`
            // <tr>
            //     <td><span>${item.name}</span></td>
            //     <td><span>${item.spotBuy}</span></td>
            //     <td><span>${item.cashBuy}</span></td>
            //     <td><span>${item.spotSell}</span></td>
            //     <td><span>${item.cashSell}</span></td>
            //     <td><span>${item.bankReference}</span></td>
            //     <td><span>${item.time}</span></td>
            // </tr>

            // `;
            html+="<tr>";
                html+="<td>";
                    html+="<span>"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].bankReference+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].time+"</span>";
                html+="</td>";
            html+="</tr>";
            $("table#th tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第八部分
    // 外汇牌价--交通银行
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectBank?id=4&page=0&num=15",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            // html+=`
            // <tr>
            //     <td><span>${item.name}</span></td>
            //     <td><span>${item.spotBuy}</span></td>
            //     <td><span>${item.cashBuy}</span></td>
            //     <td><span>${item.spotSell}</span></td>
            //     <td><span>${item.cashSell}</span></td>
            //     <td><span>${item.bankReference}</span></td>
            //     <td><span>${item.time}</span></td>
            // </tr>

            // `;
            html+="<tr>";
                html+="<td>";
                    html+="<span>"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].bankReference+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].time+"</span>";
                html+="</td>";
            html+="</tr>";
            $("table#f tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第八部分
    // 外汇牌价--建设银行
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectBank?id=5&page=0&num=15",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            // html+=`
            // <tr>
            //     <td><span>${item.name}</span></td>
            //     <td><span>${item.spotBuy}</span></td>
            //     <td><span>${item.cashBuy}</span></td>
            //     <td><span>${item.spotSell}</span></td>
            //     <td><span>${item.cashSell}</span></td>
            //     <td><span>${item.bankReference}</span></td>
            //     <td><span>${item.time}</span></td>
            // </tr>

            // `;
            html+="<tr>";
                html+="<td>";
                    html+="<span>"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].bankReference+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].time+"</span>";
                html+="</td>";
            html+="</tr>";
            $("table#fi tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第八部分
    // 外汇牌价--招商银行
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectBank?id=6&page=0&num=15",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            // html+=`
            // <tr>
            //     <td><span>${item.name}</span></td>
            //     <td><span>${item.spotBuy}</span></td>
            //     <td><span>${item.cashBuy}</span></td>
            //     <td><span>${item.spotSell}</span></td>
            //     <td><span>${item.cashSell}</span></td>
            //     <td><span>${item.bankReference}</span></td>
            //     <td><span>${item.time}</span></td>
            // </tr>

            // `;
            html+="<tr>";
                html+="<td>";
                    html+="<span>"+res.data[i].name+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashBuy+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].spotSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].cashSell+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].bankReference+"</span>";
                html+="</td>";
                html+="<td>";
                    html+="<span>"+res.data[i].time+"</span>";
                html+="</td>";
            html+="</tr>";
            $("table#s tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第九部分--上海金
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=3&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.shjmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第九部分--上海金--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=5&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.shjmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十部分--上海国际能源
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=4&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.shnymRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十部分--上海国际能源--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=6&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.shnymRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十一部分--伦敦金属
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=5&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.ljmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十一部分--伦敦金属--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=7&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.ljmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十二部分--纽约金属
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=6&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.njmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十二部分--纽约金属--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=8&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.njmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十三部分--纸黄金
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=7&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.zhjmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十三部分--纸黄金--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=9&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.zhjmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十四部分--实物黄金
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=7&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.swhjmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十四部分--实物黄金--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=9&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.swhjmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十五部分--纽约期货
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=8&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.nqmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十五部分--纽约期货--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=10&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.nqmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十六部分--上海期货
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=9&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.shqhmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十六部分--上海期货--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=11&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.shqhmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十七部分--国际债券
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=10&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.gjzqmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十七部分--国际债券--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=12&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.gjzqmRth table tbody").html(html);
        }//for

        }//success

    });

    // 导航栏第十八部分--商品指数
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectHangQing?id=11&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas=res.data[i].pricechange>0?'red':'green';

            html+="<tr>";
                html+="<td>"+res.data[i].name+"</td>";
                html+="<td>"+res.data[i].nowpri+"</td>";
                html+="<td class="+clas+">"+res.data[i].pricechange+"</td>";
                html+="<td class="+clas+">"+res.data[i].changepercent+"</td>";
                html+="<td>"+res.data[i].high+"</td>";
                html+="<td>"+res.data[i].low+"</td>";
                html+="<td>"+res.data[i].prevclose+"</td>";
                html+="<td>"+res.data[i].time+"</td>";
            html+="</tr>";
            $("div.spzsmRt table tbody").html(html);
        }//for

        }//success

    });
    // 导航栏第十八部分--商品指数--品种热力图
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou4/selectRed?id=13&page=0&num=10",
        dataType:"JSON",
        data:{},
        success:function(res){
            // console.log(res.data)
        var html="";
        for(var i in res.data){
            var clas1=res.data[i].m1o>res.data[i].nowprice?'re':'gre',clas2=res.data[i].m5o>res.data[i].nowprice?'re':'gre',
            clas3=res.data[i].m15o>res.data[i].nowprice?'re':'gre',clas4=res.data[i].d30o>res.data[i].nowprice?'re':'gre',
            clas5=res.data[i].h1o>res.data[i].nowprice?'re':'gre',clas6=res.data[i].h4o>res.data[i].nowprice?'re':'gre',
            clas7=res.data[i].d1o>res.data[i].nowprice?'re':'gre',clas8=res.data[i].w1o>res.data[i].nowprice?'re':'gre',
            clas9=res.data[i].d30o>res.data[i].nowprice?'re':'gre';
            html+="<tr>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].name+"</span>";
                    html+="</p>";
                    html+="<p>";
                        html+="<span>"+res.data[i].shortname+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td>";
                    html+="<p>";
                        html+="<span>"+res.data[i].nowprice+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas1+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas2+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m5o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas3+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].m15o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas4+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas5+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas6+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].h4o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas7+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas8+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].w1o+"</span>";
                    html+="</p>";
                html+="</td>";
                html+="<td class="+clas9+">";
                    html+="<p>";
                        html+="<span>"+res.data[i].d30o+"</span>";
                    html+"</p>";
                html+="</td>";
            html+="</tr>";
            $("div.spzsmRth table tbody").html(html);
        }//for

        }//success

    });

    //导航栏最后一部分
    //汇率计算器

































})