
    //日历轮播效果
    window.onload = function(){
        //获取td集合
        var cells = document.getElementById('monitor').getElementsByClassName('navBotltto');
        //td集合长度7
        var clen = cells.length;
        var currentFirstDate;
        var formatDate = function(date){
            var year = date.getFullYear()+'年';
            var year1=date.getFullYear();
            var month = (date.getMonth()+1)+'/';
            var month1=(date.getMonth())>10?(date.getMonth()):"0"+(date.getMonth()+1);
            //获取1~31日
            var day = date.getDate();
            var day1=(date.getDate()+1)>10?(date.getDate()):"0"+(date.getDate());
            var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][date.getDay()];
            return '<p>'+week+'</p>'+'<p class="riqi">'+month+day+'</p>'+'<span>'+'</span>'+'<p>'+year1+month1+day1+'</p>'
            +'<p>'+year1+'-'+month1+'-'+day1+'</p>';
        };
        var addDate= function(date,n){       
            date.setDate(date.getDate()+n);        
            return date;
        };
        var setDate = function(date){
            var week = date.getDay()-1;
            if(week>=0){
            date = addDate(date,week*-1);
            currentFirstDate = new Date(date);
            for(var i = 0;i<clen;i++){
                cells[i].innerHTML = formatDate(i==0 ? date : addDate(date,1));
            }
            }else{
                // date = addDate(date,week*-1);
            currentFirstDate = new Date(date);
            for(var i = 0;i<clen;i++){
                cells[i].innerHTML = formatDate(i==0 ? date : addDate(date,1));
            }
            }
        };
        document.getElementById('last-week').onclick = function(){
            setDate(addDate(currentFirstDate,-7));         
        };
        document.getElementById('next-week').onclick = function(){
            //  console.log(132)
            setDate(addDate(currentFirstDate,7));
        };
        // document.getElementById('lz').onclick = function(){
        //      console.log(132);
        // };
        setDate(new Date());
    }


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
    //页面刷新获取日期
    var tdate=new Date();
    console.log(tdate.getDay())
    var fnum=tdate.getDay();
    if(fnum>0){
    $("div.navBotltt").children().eq(fnum-1).addClass("ac").siblings().removeClass("ac");
    }else{
        $("div.navBotltt").children().eq(0).addClass("ac").siblings().removeClass("ac");
    }
    $("span#time").html(time);
    //点击切换实现选中+获取日期内容
    $("div.navBotltto").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var date=$(this).children().eq(3).html();
        var time=$(this).children().eq(4).html();
        $("span#time").html(time);
        console.log(date);
        //先清空缓存
        $("div.mainO table tbody").html("");
        $("div.mainTt table tbody").html("");
        $("div.mainTht table tbody").html("");
        $("div.mainFt table tbody").html("");
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou/calendar?page=0&num=60&id=1",
            data: {
                date:date
            },
            dataType: "JSON",
            success: function (res) {
        
                console.log(res)
            var html="",html2="",html3="",html4="";
            for(var i in res.data.li1){
                if(res.data.li1[i].length==2){
                    
                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                    clas1=res.data.li1[i][1].importance==''?'black':'red';
                    var ac="ac";
                    console.log(clas+clas1);
                    console.log(styc)
                    html+="<tr class="+clas+">";
                        html+="<td rowspan="+2+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                        html+="<td rowspan="+2+">";
                            html+="<img src="+""+">";
                        html+="</td>";
                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas1+">";
                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    
                    }
                    else if(res.data.li1[i].length==1){
                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;";
                    var ac="ac";
                    console.log(clas+clas1);
                    console.log(styc)
                    html+="<tr class="+clas+">";
                        html+="<td rowspan="+1+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                        html+="<td rowspan="+1+">";
                            html+="<img src="+""+">";
                        html+="</td>";
                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    }
                    else if(res.data.li1[i].length==3){
                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red';
                        var ac="ac";
                        console.log(clas+clas1);
                        console.log(styc)
                        html+="<tr class="+clas+">";
                            html+="<td rowspan="+3+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                            html+="<td rowspan="+3+">";
                                html+="<img src="+""+">";
                            html+="</td>";
                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas1+">";
                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas2+">";
                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";

                    }else if(res.data.li1[i].length==4){
                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                        clas3=res.data.li1[i][3].importance==''?'black':'red';
                        var ac="ac";
                        console.log(clas+clas1);
                        console.log(styc)
                        html+="<tr class="+clas+">";
                            html+="<td rowspan="+4+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                            html+="<td rowspan="+4+">";
                                html+="<img src="+""+">";
                            html+="</td>";
                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas1+">";
                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas2+">";
                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas3+">";
                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>"
                            html+="<td></td>";
                        html+="</tr>";

                    }else if(res.data.li1[i].length==5){
                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red';
                        var ac="ac";
                        console.log(clas+clas1);
                        console.log(styc)
                        html+="<tr class="+clas+">";
                            html+="<td rowspan="+5+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                            html+="<td rowspan="+5+">";
                                html+="<img src="+""+">";
                            html+="</td>";
                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas1+">";
                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas2+">";
                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas3+">";
                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>"
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas4+">";
                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>"
                            html+="<td></td>";
                        html+="</tr>";

                    }else if(res.data.li1[i].length==6){
                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red',
                        clas5=res.data.li1[i][5].importance==''?'black':'red';
                        var ac="ac";
                        console.log(clas+clas1);
                        console.log(styc)
                        html+="<tr class="+clas+">";
                            html+="<td rowspan="+6+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                            html+="<td rowspan="+6+">";
                                html+="<img src="+""+">";
                            html+="</td>";
                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas1+">";
                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas2+">";
                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas3+">";
                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>"
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas4+">";
                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>"
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr class="+clas5+">";
                            html+="<td>"+res.data.li1[i][5].indicator+"</td>";
                            html+="<td>"+res.data.li1[i][5].prevalue+"</td>";
                            html+="<td>"+res.data.li1[i][5].predictvalue+"</td>";
                            html+="<td class="+ac+">"+res.data.li1[i][5].reportvalue+"</td>";
                            html+="<td>"+res.data.li1[i][5].importance+"</td>";
                            html+="<td>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][5].influenceDuo+"</span>";
                                html+="</p>";
                                html+="<p>";
                                    html+="<span>"+res.data.li1[i][5].influenceKong+"</span>";
                                html+="</p>";
                            html+="</td>"
                            html+="<td></td>";
                        html+="</tr>";

                    }
                    
                                    
                        };//for
                        $("div.mainO table tbody").html(html);
                        
                        for(var i in res.data.li2){
                            
                            html2+="<tr>";
                                html2+="<td>"+res.data.li2[i].time+"</td>";
                                html2+="<td>";
                                    html+="<img src="+""+">";
                                    html+="<span>"+res.data.li2[i].country+"</span>";
                                html+="</td>";
                                html2+="<td>"+res.data.li2[i].region+"</td>";
                                html2+="<td>"+res.data.li2[i].event+"</td>";
                            html2+="</tr>";
                            
                            $("div.mainTt table tbody").html(html2);
                        };
                        for(var i in res.data.li3){
                            var clo="#c30d23";
                            html3+="<tr>";
                                html3+="<td>"+res.data.li3[i].daytime+"</td>";
                                html3+="<td>";
                                    html3+="<img src="+">";
                                    html3+="<span>"+res.data.li3[i].country+"</span>";
                                html3+="</td>";
                                html3+="<td>"+res.data.li3[i].region+"</td>";
                                html3+="<td>";
                                    html3+="<span></span>";
                                html3+="</td>";
                                html3+="<td>";
                                    html3+="<a style=color:"+clo+">"+res.data.li3[i].event+"</a>";
                                html3+="</td>";
                            html3+="</tr>";

                            $("div.mainTht table tbody").html(html3);
                        };
                        for(var i in res.data.li4){
                            html4+="<tr>";
                                html4+="<td>"+res.data.li4[i].centralbank+"</td>";
                                html4+="<td>"+res.data.li4[i].interestrate+"</td>";
                                html4+="<td>";
                                    html4+="<p>"+res.data.li4[i].lastprice.split(" ")[0]+"</p>";
                                    html4+="<p>"+res.data.li4[i].lastprice.split(" ")[1]+"</p>";
                                html4+="</td>";
                                html4+="<td>"+res.data.li4[i].preprice+"</td>";
                                html4+="<td>";
                                    html4+="<p>"+res.data.li4[i].basispoints.split(" ")[0]+"</p>";
                                    html4+="<p>"+res.data.li4[i].basispoints.split(" ")[1]+"</p>";
                                html4+="</td>";
                                html4+="<td>";
                                    html4+="<p>"+res.data.li4[i].historichighs.split(" ")[0]+"</p>";
                                    html4+="<p>"+res.data.li4[i].historichighs.split(" ")[1]+"</p>";
                                html4+="</td>";
                                html4+="<td>";
                                    html4+="<p>"+res.data.li4[i].historiclows.split(" ")[0]+"</p>";
                                    html4+="<p>"+res.data.li4[i].historiclows.split(" ")[1]+"</p>";
                                html4+="</td>";
                                html4+="<td>";
                                    html4+="<p>"+res.data.li4[i].nextprice.split(" ")[0]+"</p>";
                                    html4+="<p>"+res.data.li4[i].nextprice.split(" ")[1]+"</p>";
                                html4+="</td>";
                                html4+="<td>"+res.data.li4[i].newcpi+"</td>";
                            html4+="";


                            $("div.mainFt table tbody").html(html4);
                        };

                        }//success
                    });

        
    });

//页面刷新发送请求
var tm=new Date();
var y=tm.getFullYear();
    var m=(tm.getMonth()+1)>10?(tm.getMonth()+1):"0"+(tm.getMonth()+1);//测试8月
    var d=tm.getDate()>10?tm.getDate():"0"+tm.getDate();//测试8月
    date=y+m+d;
    console.log(date)
    date1=y+"-"+m+"-"+d
    $("span#time").html(date1);

    //先清空缓存
    $("div.mainO table tbody").html("");
    $("div.mainTt table tbody").html("");
    $("div.mainTht table tbody").html("");
    $("div.mainFt table tbody").html("");
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou/calendar?page=0&num=60&id=1",
        data: {
            date:date
            
        },
        dataType: "JSON",
        success: function (res) {
    
            console.log(res)
        var html="",html2="",html3="",html4="";
        for(var i in res.data.li1){
            if(res.data.li1[i].length==2){
                
                var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                clas1=res.data.li1[i][1].importance==''?'black':'red';
                var ac="ac";
                console.log(clas+clas1);
                console.log(styc)
                html+="<tr class="+clas+">";
                    html+="<td rowspan="+2+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                    html+="<td rowspan="+2+">";
                        html+="<img src="+""+">";
                    html+="</td>";
                    html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                    html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                    html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                    html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                    html+="<td>"+res.data.li1[i][0].importance+"</td>";
                    html+="<td>";
                        html+="<p>";
                            html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                        html+="</p>";
                        html+="<p>";
                            html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                        html+="</p>";
                    html+="</td>";
                    html+="<td></td>";
                html+="</tr>";
                html+="<tr class="+clas1+">";
                    html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                    html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                    html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                    html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                    html+="<td>"+res.data.li1[i][1].importance+"</td>";
                    html+="<td>";
                        html+="<p>";
                            html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                        html+="</p>";
                        html+="<p>";
                            html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                        html+="</p>";
                    html+="</td>";
                    html+="<td></td>";
                html+="</tr>";
                
                }
                else if(res.data.li1[i].length==1){
                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;";
                var ac="ac";
                console.log(clas+clas1);
                console.log(styc)
                html+="<tr class="+clas+">";
                    html+="<td rowspan="+1+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                    html+="<td rowspan="+1+">";
                        html+="<img src="+""+">";
                    html+="</td>";
                    html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                    html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                    html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                    html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                    html+="<td>"+res.data.li1[i][0].importance+"</td>";
                    html+="<td>";
                        html+="<p>";
                            html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                        html+="</p>";
                        html+="<p>";
                            html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                        html+="</p>";
                    html+="</td>";
                    html+="<td></td>";
                html+="</tr>";
                }
                else if(res.data.li1[i].length==3){
                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                    clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red';
                    var ac="ac";
                    console.log(clas+clas1);
                    console.log(styc)
                    html+="<tr class="+clas+">";
                        html+="<td rowspan="+3+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                        html+="<td rowspan="+3+">";
                            html+="<img src="+""+">";
                        html+="</td>";
                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas1+">";
                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas2+">";
                        html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][2].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";

                }else if(res.data.li1[i].length==4){
                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                    clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                    clas3=res.data.li1[i][3].importance==''?'black':'red';
                    var ac="ac";
                    console.log(clas+clas1);
                    console.log(styc)
                    html+="<tr class="+clas+">";
                        html+="<td rowspan="+4+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                        html+="<td rowspan="+4+">";
                            html+="<img src="+""+">";
                        html+="</td>";
                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas1+">";
                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas2+">";
                        html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][2].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas3+">";
                        html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][3].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>"
                        html+="<td></td>";
                    html+="</tr>";

                }else if(res.data.li1[i].length==5){
                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                    clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                    clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red';
                    var ac="ac";
                    console.log(clas+clas1);
                    console.log(styc)
                    html+="<tr class="+clas+">";
                        html+="<td rowspan="+5+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                        html+="<td rowspan="+5+">";
                            html+="<img src="+""+">";
                        html+="</td>";
                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas1+">";
                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas2+">";
                        html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][2].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas3+">";
                        html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][3].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>"
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas4+">";
                        html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][4].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>"
                        html+="<td></td>";
                    html+="</tr>";

                }else if(res.data.li1[i].length==6){
                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                    clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                    clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red',
                    clas5=res.data.li1[i][5].importance==''?'black':'red';
                    var ac="ac";
                    console.log(clas+clas1);
                    console.log(styc)
                    html+="<tr class="+clas+">";
                        html+="<td rowspan="+6+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                        html+="<td rowspan="+6+">";
                            html+="<img src="+""+">";
                        html+="</td>";
                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas1+">";
                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas2+">";
                        html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][2].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas3+">";
                        html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][3].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>"
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas4+">";
                        html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][4].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>"
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr class="+clas5+">";
                        html+="<td>"+res.data.li1[i][5].indicator+"</td>";
                        html+="<td>"+res.data.li1[i][5].prevalue+"</td>";
                        html+="<td>"+res.data.li1[i][5].predictvalue+"</td>";
                        html+="<td class="+ac+">"+res.data.li1[i][5].reportvalue+"</td>";
                        html+="<td>"+res.data.li1[i][5].importance+"</td>";
                        html+="<td>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][5].influenceDuo+"</span>";
                            html+="</p>";
                            html+="<p>";
                                html+="<span>"+res.data.li1[i][5].influenceKong+"</span>";
                            html+="</p>";
                        html+="</td>"
                        html+="<td></td>";
                    html+="</tr>";

                }
                
                                
                    };//for
            $("div.mainO table tbody").html(html);
                
                for(var i in res.data.li2){
                    
                    html2+="<tr>";
                        html2+="<td>"+res.data.li2[i].time+"</td>";
                        html2+="<td>";
                            html+="<img src="+""+">";
                            html+="<span>"+res.data.li2[i].country+"</span>";
                        html+="</td>";
                        html2+="<td>"+res.data.li2[i].region+"</td>";
                        html2+="<td>"+res.data.li2[i].event+"</td>";
                    html2+="</tr>";
                    
                    $("div.mainTt table tbody").html(html2);
                };
                for(var i in res.data.li3){
                    var clo="#c30d23";
                    html3+="<tr>";
                        html3+="<td>"+res.data.li3[i].daytime+"</td>";
                        html3+="<td>";
                            html3+="<img src="+">";
                            html3+="<span>"+res.data.li3[i].country+"</span>";
                        html3+="</td>";
                        html3+="<td>"+res.data.li3[i].region+"</td>";
                        html3+="<td>";
                            html3+="<span></span>";
                        html3+="</td>";
                        html3+="<td>";
                            html3+="<a style=color:"+clo+">"+res.data.li3[i].event+"</a>";
                        html3+="</td>";
                    html3+="</tr>";

                    $("div.mainTht table tbody").html(html3);
                };
                for(var i in res.data.li4){
                    html4+="<tr>";
                        html4+="<td>"+res.data.li4[i].centralbank+"</td>";
                        html4+="<td>"+res.data.li4[i].interestrate+"</td>";
                        html4+="<td>";
                            html4+="<p>"+res.data.li4[i].lastprice.split(" ")[0]+"</p>";
                            html4+="<p>"+res.data.li4[i].lastprice.split(" ")[1]+"</p>";
                        html4+="</td>";
                        html4+="<td>"+res.data.li4[i].preprice+"</td>";
                        html4+="<td>";
                            html4+="<p>"+res.data.li4[i].basispoints.split(" ")[0]+"</p>";
                            html4+="<p>"+res.data.li4[i].basispoints.split(" ")[1]+"</p>";
                        html4+="</td>";
                        html4+="<td>";
                            html4+="<p>"+res.data.li4[i].historichighs.split(" ")[0]+"</p>";
                            html4+="<p>"+res.data.li4[i].historichighs.split(" ")[1]+"</p>";
                        html4+="</td>";
                        html4+="<td>";
                            html4+="<p>"+res.data.li4[i].historiclows.split(" ")[0]+"</p>";
                            html4+="<p>"+res.data.li4[i].historiclows.split(" ")[1]+"</p>";
                        html4+="</td>";
                        html4+="<td>";
                            html4+="<p>"+res.data.li4[i].nextprice.split(" ")[0]+"</p>";
                            html4+="<p>"+res.data.li4[i].nextprice.split(" ")[1]+"</p>";
                        html4+="</td>";
                        html4+="<td>"+res.data.li4[i].newcpi+"</td>";
                    html4+="";


                    $("div.mainFt table tbody").html(html4);
                };
    
        }//success
    });

    //点击回到页面顶部
    $(window).scroll(function() {
                    var scroll_len = $(window).scrollTop();
                    if(scroll_len > 20) {
                        $('.QZ-up').fadeIn();
                    }else{
                        $('.QZ-up').fadeOut();
                    };
                });
        
            $('.QZ-up').click(function(e){
                $("body,html").animate({scrollTop:0},1000);
            });
                    //点击全部
                    $("div.mianVt").click(function(){
                        var djtime=$("div.navBotltt div.ac").children().eq(3).html();
                        console.log(djtime)
                        $.ajax({
                            type: "get",
                            url: "http://www.10xunc.com/WSHD/jiekou/calendar?page=0&num=60&id=1",
                            data: {
                                date:djtime
                                
                            },
                            dataType: "JSON",
                            success: function (res) {
                        
                                console.log(res)
                            var html="",html2="",html3="",html4="";
                            for(var i in res.data.li1){
                                if(res.data.li1[i].length==2){
                                    
                                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                    clas1=res.data.li1[i][1].importance==''?'black':'red';
                                    var ac="ac";
                                    console.log(clas+clas1);
                                    console.log(styc)
                                    html+="<tr class="+clas+">";
                                        html+="<td rowspan="+2+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                        html+="<td rowspan="+2+">";
                                            html+="<img src="+""+">";
                                        html+="</td>";
                                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    html+="<tr class="+clas1+">";
                                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    
                                    }
                                    else if(res.data.li1[i].length==1){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;";
                                    var ac="ac";
                                    console.log(clas+clas1);
                                    console.log(styc)
                                    html+="<tr class="+clas+">";
                                        html+="<td rowspan="+1+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                        html+="<td rowspan="+1+">";
                                            html+="<img src="+""+">";
                                        html+="</td>";
                                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    }
                                    else if(res.data.li1[i].length==3){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+3+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+3+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==4){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+4+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+4+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==5){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+5+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+5+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas4+">";
                                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==6){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red',
                                        clas5=res.data.li1[i][5].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+6+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+6+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas4+">";
                                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas5+">";
                                            html+="<td>"+res.data.li1[i][5].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][5].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][5].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][5].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][5].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][5].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][5].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }
                                    
                                                    
                                    };//for
                                    $("div.mainO table tbody").html(html);
                                    
                                    for(var i in res.data.li2){
                                        
                                        html2+="<tr>";
                                            html2+="<td>"+res.data.li2[i].time+"</td>";
                                            html2+="<td>";
                                                html+="<img src="+""+">";
                                                html+="<span>"+res.data.li2[i].country+"</span>";
                                            html+="</td>";
                                            html2+="<td>"+res.data.li2[i].region+"</td>";
                                            html2+="<td>"+res.data.li2[i].event+"</td>";
                                        html2+="</tr>";
                                        
                                        $("div.mainTt table tbody").html(html2);
                                    };
                                    for(var i in res.data.li3){
                                        var clo="#c30d23";
                                        html3+="<tr>";
                                            html3+="<td>"+res.data.li3[i].daytime+"</td>";
                                            html3+="<td>";
                                                html3+="<img src="+">";
                                                html3+="<span>"+res.data.li3[i].country+"</span>";
                                            html3+="</td>";
                                            html3+="<td>"+res.data.li3[i].region+"</td>";
                                            html3+="<td>";
                                                html3+="<span></span>";
                                            html3+="</td>";
                                            html3+="<td>";
                                                html3+="<a style=color:"+clo+">"+res.data.li3[i].event+"</a>";
                                            html3+="</td>";
                                        html3+="</tr>";
            
                                        $("div.mainTht table tbody").html(html3);
                                    };
                                    for(var i in res.data.li4){
                                        html4+="<tr>";
                                            html4+="<td>"+res.data.li4[i].centralbank+"</td>";
                                            html4+="<td>"+res.data.li4[i].interestrate+"</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].lastprice.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].lastprice.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>"+res.data.li4[i].preprice+"</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].basispoints.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].basispoints.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].historichighs.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].historichighs.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].historiclows.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].historiclows.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].nextprice.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].nextprice.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>"+res.data.li4[i].newcpi+"</td>";
                                        html4+="";
            
            
                                        $("div.mainFt table tbody").html(html4);
                                    };
    
                                }//success
                            });
                    });
                    //点击重要
                    $("div.mianVth").click(function(){
                        var djtime=$("div.navBotltt div.ac").children().eq(3).html();
                        console.log(djtime)
                        $.ajax({
                            type: "get",
                            url: "http://www.10xunc.com/WSHD/jiekou/calendar?page=0&num=60&id=2",
                            data: {
                                date:djtime
                                
                            },
                            dataType: "JSON",
                            success: function (res) {
                        
                                console.log(res)
                            var html="",html2="",html3="",html4="";
                            for(var i in res.data.li1){
                                if(res.data.li1[i].length==2){
                                    
                                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                    clas1=res.data.li1[i][1].importance==''?'black':'red';
                                    var ac="ac";
                                    console.log(clas+clas1);
                                    console.log(styc)
                                    html+="<tr class="+clas+">";
                                        html+="<td rowspan="+2+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                        html+="<td rowspan="+2+">";
                                            html+="<img src="+""+">";
                                        html+="</td>";
                                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    html+="<tr class="+clas1+">";
                                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    
                                    }
                                    else if(res.data.li1[i].length==1){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;";
                                    var ac="ac";
                                    console.log(clas+clas1);
                                    console.log(styc)
                                    html+="<tr class="+clas+">";
                                        html+="<td rowspan="+1+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                        html+="<td rowspan="+1+">";
                                            html+="<img src="+""+">";
                                        html+="</td>";
                                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    }
                                    else if(res.data.li1[i].length==3){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+3+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+3+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==4){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+4+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+4+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==5){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+5+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+5+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas4+">";
                                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==6){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red',
                                        clas5=res.data.li1[i][5].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+6+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+6+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas4+">";
                                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas5+">";
                                            html+="<td>"+res.data.li1[i][5].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][5].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][5].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][5].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][5].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][5].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][5].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }
                                    
                                                    
                                    };//for
                                    $("div.mainO table tbody").html(html);
                                    
                                    for(var i in res.data.li2){
                                        
                                        html2+="<tr>";
                                            html2+="<td>"+res.data.li2[i].time+"</td>";
                                            html2+="<td>";
                                                html+="<img src="+""+">";
                                                html+="<span>"+res.data.li2[i].country+"</span>";
                                            html+="</td>";
                                            html2+="<td>"+res.data.li2[i].region+"</td>";
                                            html2+="<td>"+res.data.li2[i].event+"</td>";
                                        html2+="</tr>";
                                        
                                        $("div.mainTt table tbody").html(html2);
                                    };
                                    for(var i in res.data.li3){
                                        var clo="#c30d23";
                                        html3+="<tr>";
                                            html3+="<td>"+res.data.li3[i].daytime+"</td>";
                                            html3+="<td>";
                                                html3+="<img src="+">";
                                                html3+="<span>"+res.data.li3[i].country+"</span>";
                                            html3+="</td>";
                                            html3+="<td>"+res.data.li3[i].region+"</td>";
                                            html3+="<td>";
                                                html3+="<span></span>";
                                            html3+="</td>";
                                            html3+="<td>";
                                                html3+="<a style=color:"+clo+">"+res.data.li3[i].event+"</a>";
                                            html3+="</td>";
                                        html3+="</tr>";
            
                                        $("div.mainTht table tbody").html(html3);
                                    };
                                    for(var i in res.data.li4){
                                        html4+="<tr>";
                                            html4+="<td>"+res.data.li4[i].centralbank+"</td>";
                                            html4+="<td>"+res.data.li4[i].interestrate+"</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].lastprice.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].lastprice.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>"+res.data.li4[i].preprice+"</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].basispoints.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].basispoints.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].historichighs.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].historichighs.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].historiclows.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].historiclows.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].nextprice.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].nextprice.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>"+res.data.li4[i].newcpi+"</td>";
                                        html4+="";
            
            
                                        $("div.mainFt table tbody").html(html4);
                                    };
                        
                            }//success
                        });
                    });
                    //点击已公布
                    $("div.mianVf").click(function(){
                        var djtime=$("div.navBotltt div.ac").children().eq(3).html();
                        console.log(djtime)
                        $.ajax({
                            type: "get",
                            url: "http://www.10xunc.com/WSHD/jiekou/calendar?page=0&num=60&id=4",
                            data: {
                                date:djtime
                                
                            },
                            dataType: "JSON",
                            success: function (res) {
                        
                                console.log(res)
                            var html="",html2="",html3="",html4="";
                            for(var i in res.data.li1){
                                if(res.data.li1[i].length==2){
                                    
                                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                    clas1=res.data.li1[i][1].importance==''?'black':'red';
                                    var ac="ac";
                                    console.log(clas+clas1);
                                    console.log(styc)
                                    html+="<tr class="+clas+">";
                                        html+="<td rowspan="+2+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                        html+="<td rowspan="+2+">";
                                            html+="<img src="+""+">";
                                        html+="</td>";
                                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    html+="<tr class="+clas1+">";
                                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    
                                    }
                                    else if(res.data.li1[i].length==1){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;";
                                    var ac="ac";
                                    console.log(clas+clas1);
                                    console.log(styc)
                                    html+="<tr class="+clas+">";
                                        html+="<td rowspan="+1+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                        html+="<td rowspan="+1+">";
                                            html+="<img src="+""+">";
                                        html+="</td>";
                                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    }
                                    else if(res.data.li1[i].length==3){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+3+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+3+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==4){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+4+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+4+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==5){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+5+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+5+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas4+">";
                                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==6){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red',
                                        clas5=res.data.li1[i][5].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+6+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+6+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas4+">";
                                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas5+">";
                                            html+="<td>"+res.data.li1[i][5].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][5].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][5].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][5].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][5].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][5].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][5].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }
                                    
                                                    
                                    };//for
                                    $("div.mainO table tbody").html(html);
                                    
                                    for(var i in res.data.li2){
                                        
                                        html2+="<tr>";
                                            html2+="<td>"+res.data.li2[i].time+"</td>";
                                            html2+="<td>";
                                                html+="<img src="+""+">";
                                                html+="<span>"+res.data.li2[i].country+"</span>";
                                            html+="</td>";
                                            html2+="<td>"+res.data.li2[i].region+"</td>";
                                            html2+="<td>"+res.data.li2[i].event+"</td>";
                                        html2+="</tr>";
                                        
                                        $("div.mainTt table tbody").html(html2);
                                    };
                                    for(var i in res.data.li3){
                                        var clo="#c30d23";
                                        html3+="<tr>";
                                            html3+="<td>"+res.data.li3[i].daytime+"</td>";
                                            html3+="<td>";
                                                html3+="<img src="+">";
                                                html3+="<span>"+res.data.li3[i].country+"</span>";
                                            html3+="</td>";
                                            html3+="<td>"+res.data.li3[i].region+"</td>";
                                            html3+="<td>";
                                                html3+="<span></span>";
                                            html3+="</td>";
                                            html3+="<td>";
                                                html3+="<a style=color:"+clo+">"+res.data.li3[i].event+"</a>";
                                            html3+="</td>";
                                        html3+="</tr>";
            
                                        $("div.mainTht table tbody").html(html3);
                                    };
                                    for(var i in res.data.li4){
                                        html4+="<tr>";
                                            html4+="<td>"+res.data.li4[i].centralbank+"</td>";
                                            html4+="<td>"+res.data.li4[i].interestrate+"</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].lastprice.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].lastprice.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>"+res.data.li4[i].preprice+"</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].basispoints.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].basispoints.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].historichighs.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].historichighs.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].historiclows.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].historiclows.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].nextprice.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].nextprice.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>"+res.data.li4[i].newcpi+"</td>";
                                        html4+="";
            
            
                                        $("div.mainFt table tbody").html(html4);
                                    };
                        
                            }//success
                        });
                    });
                    //点击未公布
                    $("div.mianVv").click(function(){
                        var djtime=$("div.navBotltt div.ac").children().eq(3).html();
                        console.log(djtime)
                        $.ajax({
                            type: "get",
                            url: "http://www.10xunc.com/WSHD/jiekou/calendar?page=0&num=60&id=3",
                            data: {
                                date:djtime
                                
                            },
                            dataType: "JSON",
                            success: function (res) {
                        
                                console.log(res)
                            var html="",html2="",html3="",html4="";
                            for(var i in res.data.li1){
                                if(res.data.li1[i].length==2){
                                    
                                    var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                    clas1=res.data.li1[i][1].importance==''?'black':'red';
                                    var ac="ac";
                                    console.log(clas+clas1);
                                    console.log(styc)
                                    html+="<tr class="+clas+">";
                                        html+="<td rowspan="+2+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                        html+="<td rowspan="+2+">";
                                            html+="<img src="+""+">";
                                        html+="</td>";
                                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    html+="<tr class="+clas1+">";
                                        html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    
                                    }
                                    else if(res.data.li1[i].length==1){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;";
                                    var ac="ac";
                                    console.log(clas+clas1);
                                    console.log(styc)
                                    html+="<tr class="+clas+">";
                                        html+="<td rowspan="+1+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                        html+="<td rowspan="+1+">";
                                            html+="<img src="+""+">";
                                        html+="</td>";
                                        html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                        html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                        html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                        html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                        html+="<td>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                            html+="</p>";
                                            html+="<p>";
                                                html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                            html+="</p>";
                                        html+="</td>";
                                        html+="<td></td>";
                                    html+="</tr>";
                                    }
                                    else if(res.data.li1[i].length==3){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+3+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+3+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==4){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+4+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+4+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==5){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+5+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+5+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas4+">";
                                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }else if(res.data.li1[i].length==6){
                                        var clas=res.data.li1[i][0].importance==''?'black':'red',styc="black;",styf="normal;",
                                        clas1=res.data.li1[i][1].importance==''?'black':'red',clas2=res.data.li1[i][2].importance==''?'black':'red',
                                        clas3=res.data.li1[i][3].importance==''?'black':'red',clas4=res.data.li1[i][4].importance==''?'black':'red',
                                        clas5=res.data.li1[i][5].importance==''?'black':'red';
                                        var ac="ac";
                                        console.log(clas+clas1);
                                        console.log(styc)
                                        html+="<tr class="+clas+">";
                                            html+="<td rowspan="+6+" style=color:"+styc+"font-weight:"+styf+">"+res.data.li1[i][0].time+"</td>";
                                            html+="<td rowspan="+6+">";
                                                html+="<img src="+""+">";
                                            html+="</td>";
                                            html+="<td>"+res.data.li1[i][0].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][0].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][0].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][0].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][0].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas1+">";
                                            html+="<td>"+res.data.li1[i][1].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][1].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][1].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][1].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][1].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas2+">";
                                            html+="<td>"+res.data.li1[i][2].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][2].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][2].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][2].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][2].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>";
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas3+">";
                                            html+="<td>"+res.data.li1[i][3].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][3].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][3].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][3].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][3].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas4+">";
                                            html+="<td>"+res.data.li1[i][4].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][4].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][4].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][4].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][4].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                                        html+="<tr class="+clas5+">";
                                            html+="<td>"+res.data.li1[i][5].indicator+"</td>";
                                            html+="<td>"+res.data.li1[i][5].prevalue+"</td>";
                                            html+="<td>"+res.data.li1[i][5].predictvalue+"</td>";
                                            html+="<td class="+ac+">"+res.data.li1[i][5].reportvalue+"</td>";
                                            html+="<td>"+res.data.li1[i][5].importance+"</td>";
                                            html+="<td>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][5].influenceDuo+"</span>";
                                                html+="</p>";
                                                html+="<p>";
                                                    html+="<span>"+res.data.li1[i][5].influenceKong+"</span>";
                                                html+="</p>";
                                            html+="</td>"
                                            html+="<td></td>";
                                        html+="</tr>";
                
                                    }
                                    
                                                    
                                    };//for
                                    $("div.mainO table tbody").html(html);
                                    
                                    for(var i in res.data.li2){
                                        
                                        html2+="<tr>";
                                            html2+="<td>"+res.data.li2[i].time+"</td>";
                                            html2+="<td>";
                                                html+="<img src="+""+">";
                                                html+="<span>"+res.data.li2[i].country+"</span>";
                                            html+="</td>";
                                            html2+="<td>"+res.data.li2[i].region+"</td>";
                                            html2+="<td>"+res.data.li2[i].event+"</td>";
                                        html2+="</tr>";
                                        
                                        $("div.mainTt table tbody").html(html2);
                                    };
                                    for(var i in res.data.li3){
                                        var clo="#c30d23";
                                        html3+="<tr>";
                                            html3+="<td>"+res.data.li3[i].daytime+"</td>";
                                            html3+="<td>";
                                                html3+="<img src="+">";
                                                html3+="<span>"+res.data.li3[i].country+"</span>";
                                            html3+="</td>";
                                            html3+="<td>"+res.data.li3[i].region+"</td>";
                                            html3+="<td>";
                                                html3+="<span></span>";
                                            html3+="</td>";
                                            html3+="<td>";
                                                html3+="<a style=color:"+clo+">"+res.data.li3[i].event+"</a>";
                                            html3+="</td>";
                                        html3+="</tr>";
            
                                        $("div.mainTht table tbody").html(html3);
                                    };
                                    for(var i in res.data.li4){
                                        html4+="<tr>";
                                            html4+="<td>"+res.data.li4[i].centralbank+"</td>";
                                            html4+="<td>"+res.data.li4[i].interestrate+"</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].lastprice.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].lastprice.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>"+res.data.li4[i].preprice+"</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].basispoints.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].basispoints.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].historichighs.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].historichighs.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].historiclows.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].historiclows.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>";
                                                html4+="<p>"+res.data.li4[i].nextprice.split(" ")[0]+"</p>";
                                                html4+="<p>"+res.data.li4[i].nextprice.split(" ")[1]+"</p>";
                                            html4+="</td>";
                                            html4+="<td>"+res.data.li4[i].newcpi+"</td>";
                                        html4+="";
            
            
                                        $("div.mainFt table tbody").html(html4);
                                    };
                        
                            }//success
                        });
                    });

    



})