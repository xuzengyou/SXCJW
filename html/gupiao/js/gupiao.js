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
        // nav 全球股市+固定
        $.ajax({
            url:"http://www.10xunc.com/WSHD/jiekou/globalIndex?page=0&num=10",
            type:"post",
            dataType:"json",
            data:{},
            success:function(res){
                
            var data=res.data.slice(0,5);
            var html="";
            for(var i in data){
                html+='<li>';
                
                html+='<a>'+data[i][1]+data[i][2]+data[i][4]+'</a>';
                html+='</li>';

            };

            $("div.navTop2>ul").html(html);

            var QQhtml="";
            console.log(data[i][3]>0);
            var str=data[i][3]>0?"↑":"↓";
            var str1=data[i][3]>0?'#c30d23':'#008406';
            console.log(str1);
            for(var i in data){
                QQhtml+='<div class="ti_news">';
                
                    QQhtml+='<span style="color: #4783BE">'+data[i][1]+'&nbsp;'+'</span>';
                    QQhtml+='<span style="color:#008406">'+ data[i][2] +'&nbsp;'+'</span>';
                    QQhtml+="<span style='color:"+str1+"'>"+str+'&nbsp;'+"</span>";
                    QQhtml+="<span style='color:"+str1+"'>"+data[i][3]+'&nbsp;'+"</span>";
                    QQhtml+="<span style='color:"+str1+"'>"+str+'&nbsp;'+"</span>";
                    QQhtml+="<span style='color:"+str1+"'>"+data[i][4]+'&nbsp;'+"</span>";
                    QQhtml+='<span style="color: #e6e6e6">'+'|'+'&nbsp;'+'</span>';

                QQhtml+='</div>';

            };

                $("div.ti_content").html(QQhtml);

            }
        });

        

        //轮播图下方新闻
        $.ajax({
            type:"get",
            url:"http://www.10xunc.com/WSHD/jiekou/AllStock?page=0&num=2",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
                // alert(res.data[0].author)
            var html="";
            for(var i in res.data){
                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                
                console.log(href);
                html+='<div class="mainToplto">';
                
                    html+="<a href="+href+">";
                        html+="<img src="+res.data[i].thumb+" alt="+res.data[i].thumb+" >";
                    html+="</a>";
                    html+="<a href="+href+">"+res.data[i].title+"</a>";

                html+='</div>';
                
                }
                $("div.mainToplt").html(html);
            }
        });

        //股票要闻
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/AllStock?page=0&num=12",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
               
                html+="<li>";
                    html+="<a href="+href+">"+res.data[i].title+"</a>";
                html+="</li>";
                }
                $("div.mainTopcto>ul").html(html);

            }
        });

        //财经日历
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/economyArticle?page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data.slice(0,5)){
                // html += `
                //     <li>
                //         <a href="../GP_rili/gupiaocjrl.html">${item.time}</a>
                //         <a href="../GP_rili/gupiaocjrl.html">${item.events}</a>
                //     </li>
                //     `;
                var url="../GP_rili/gupiaocjrl.html";
                html+="<li>";
                    html+="<a href="+url+">"+res.data[i].time+"</a>"
                    html+="<a href="+url+">"+res.data[i].events+"</a>";
                html+="</li>";
                }
                $("div.mainToprdd>ul").html(html);
            }
        });

        //个股行情
        //个股行情个股涨幅
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockByChange?id=1&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                console.log(res);
            var html="";
            for(var i in res.data){
                // html += `
                //     <tr>
                //         <td>${item[0]}</td>
                //         <td>${item[1]}</td>
                //         <td>${item[2]}</td>
                //         <td class=${item[3]>0?'red':'gre'}>${item[3]}</td>
                //         <td>6.41%</td>
                //     </tr>
                //     `;
                var str=res.data[i][3]>0?'red':'gre';
                console.log(str);
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td>"+res.data[i][2]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"</td>";
                    html+="<td>"+6.41+"%"+"</td>";
                html+="</tr>";
                $("#mflThtbo>tbody").html(html);
                }
                
            }
        });

        //个股行情
        //个股行情个股跌幅
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockByChange?id=2&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                console.log(str);
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td>"+res.data[i][2]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"</td>";
                    html+="<td>"+6.41+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mflThtbt>tbody").html(html);
            }
        });

        //个股行情
        //个股行情个股流入
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockByAmount?id=1&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                console.log(str);
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td>"+res.data[i][2]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"</td>";
                    html+="<td>"+6.41+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mflThtbth>tbody").html(html);
            }
        });

        //个股行情
        //个股行情个股流出
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockByAmount?id=2&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                console.log(str);
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td>"+res.data[i][2]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"</td>";
                    html+="<td>"+6.41+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mflThtbf>tbody").html(html);
            }
        });

        //个股行情
        //换手率
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/huanshou?page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                console.log(str);
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td>"+res.data[i][2]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"</td>";
                    html+="<td>"+6.41+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mflThtbv>tbody").html(html);
            }
        });

        //板块行情 第一部分
        //行业涨幅
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/industrystock?id=1&style=limit&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                var str2=res.data[i][7]>0?'red':'gre';
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"%"+"</td>";
                    html+="<td>"+res.data[i][6]+"</td>";
                    html+="<td class="+str2+">"+res.data[i][7]+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mainFlo>tbody").html(html);
            }
        });

        //行业跌幅
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/industrystock?id=2&style=limit&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                var str2=res.data[i][7]>0?'red':'gre';
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"%"+"</td>";
                    html+="<td>"+res.data[i][6]+"</td>";
                    html+="<td class="+str2+">"+res.data[i][7]+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mainFlt>tbody").html(html);
            }
        });

        //行业流入
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/industrystock?id=1&style=total&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                var str2=res.data[i][7]>0?'red':'gre';
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"%"+"</td>";
                    html+="<td>"+res.data[i][6]+"</td>";
                    html+="<td class="+str2+">"+res.data[i][7]+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mainFlth>tbody").html(html);
            }
        });
        
        //行业流出
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/industrystock?id=2&style=total&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                var str2=res.data[i][7]>0?'red':'gre';
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"%"+"</td>";
                    html+="<td>"+res.data[i][6]+"</td>";
                    html+="<td class="+str2+">"+res.data[i][7]+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mainFlf>tbody").html(html);
            }
        });

        //板块行情 第二部分
        //概念涨幅
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/industrystock?id=1&style=limit&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                var str2=res.data[i][7]>0?'red':'gre';
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"%"+"</td>";
                    html+="<td>"+res.data[i][6]+"</td>";
                    html+="<td class="+str2+">"+res.data[i][7]+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mflTone>tbody").html(html);
            }
        });

        //概念跌幅
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/industrystock?id=2&style=limit&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                var str2=res.data[i][7]>0?'red':'gre';
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"%"+"</td>";
                    html+="<td>"+res.data[i][6]+"</td>";
                    html+="<td class="+str2+">"+res.data[i][7]+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mflTtwo>tbody").html(html);
            }
        });

        //概念流入
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/industrystock?id=1&style=total&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                var str2=res.data[i][7]>0?'red':'gre';
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"%"+"</td>";
                    html+="<td>"+res.data[i][6]+"</td>";
                    html+="<td class="+str2+">"+res.data[i][7]+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mflTthree>tbody").html(html);
            }
        });
        
        //概念流出
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/industrystock?id=2&style=total&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var str=res.data[i][3]>0?'red':'gre';
                var str2=res.data[i][7]>0?'red':'gre';
                html+="<tr>";
                    html+="<td>"+res.data[i][0]+"</td>";
                    html+="<td>"+res.data[i][1]+"</td>";
                    html+="<td class="+str+">"+res.data[i][3]+"%"+"</td>";
                    html+="<td>"+res.data[i][6]+"</td>";
                    html+="<td class="+str2+">"+res.data[i][7]+"%"+"</td>";
                html+="</tr>";
                
                }
                $("#mflTfour>tbody").html(html);
            }
        });

        //AB股比价
        //上海沪市
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/ABstock/ABstock_shangzheng",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                // html += `
                //     <tr>
                //         <td>${item.bstock_name}</td>
                //         <td>${item.bstock_code}</td>
                //         <td>${item.astock_code}</td>
                //         <td>${item.abparity}</td>
                //     </tr>
                //     `;
                html+="<tr>";
                    html+="<td>"+res.data[i].bstock_name+"</td>";
                    html+="<td>"+res.data[i].bstock_code+"</td>";
                    html+="<td>"+res.data[i].astock_code+"</td>";
                    html+="<td>"+res.data[i].abparity+"</td>";
                html+="</tr>";
                }
                $("div#mflFoo table tbody").html(html);
            }
        });

        //AB股比价
        //深市
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/ABstock/ABstock_shenzheng",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res.data);
            var html="";
            for(var i in res.data){
                html+="<tr>";
                    html+="<td>"+res.data[i].bstock_name+"</td>";
                    html+="<td>"+res.data[i].bstock_code+"</td>";
                    html+="<td>"+res.data[i].astock_code+"</td>";
                    html+="<td>"+res.data[i].abparity+"</td>";
                html+="</tr>";
                }
                $("div#mflFot table tbody").html(html);
            }
        });


        //新三版行情
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/ThreeNewBoard/threenewboardlist",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res.data);
            var html="";
            for(var i in res.data){
                // html += `
                //     <tr>
                //         <td>${item.stock_code}</td>
                //         <td>${item.stock_name}</td>
                //         <td>${item.latest_price}</td>
                //         <td>${item.quote_change}</td>
                //     </tr>
                //     `;
                html+="<tr>";
                    html+="<td>"+res.data[i].stock_code+"</td>";
                    html+="<td>"+res.data[i].stock_name+"</td>";
                    html+="<td>"+res.data[i].latest_price+"</td>";
                    html+="<td>"+res.data[i].quote_change+"</td>";
                html+="</tr>";
                
                }
                $("div.mainFlvt table").html(html);
            }
        });

        //大盘评述
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockArticle?id=6&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            
            // for(item of res.data){
            //     html += `
            //         <li>
            //             <a href=${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}>•</a>
            //             <a href=${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}>${item.title}</a>
            //         </li>
            //         `;
            //     $("div.mainFcot>ul").html(html);
            //     }
            var html="";
            for(var i in res.data){
                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                html+="<li>";
                    html+="<a href="+href+">"+"•"+"</a>";
                    html+="<a href="+href+">"+res.data[i].title+"</a>";
                html+="</li>";
            }

            $("div.mainFcot>ul").html(html);

            }
        });

        //个股点评
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockArticle?id=7&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                // html += `
                //     <li>
                //         <a href="${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}">•</a>
                //         <a href="${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}">${item.title}</a>
                //     </li>
                //     `;
                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                html+="<li>";
                    html+="<a href="+href+">"+"•"+"</a>";
                    html+="<a href="+href+">"+res.data[i].title+"</a>";
                html+="</li>";
                
                }
                $("div.mainFctt>ul").html(html);
            }
        });

        //股市
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockArticle?id=8&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                // html += `
                //     <li>
                //         <a href="${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}">•</a>
                //         <a href="${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}">${item.title}</a>
                //         <span>${item.addTime.split(" ")[1]}</span>
                //     </li>
                //     `;
                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                html+="<li>";
                    html+="<a href="+href+">"+"•"+"</a>";
                    html+="<a href="+href+">"+res.data[i].title+"</a>";
                    html+="<span>"+res.data[i].addTime.split(" ")[1]+"</span>";
                html+="</li>";
                
                }
                $("div.mainFctht>ul").html(html);
            }
        });

        //宏观分析
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockArticle?id=9&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                // html += `
                //     <li>
                //         <a href="${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}">•</a>
                //         <a href="${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}">${item.title}</a>
                //         <span>${item.addTime.split(" ")[1]}</span>
                //     </li>
                //     `;
                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                html+="<li>";
                    html+="<a href="+href+">"+"•"+"</a>";
                    html+="<a href="+href+">"+res.data[i].title+"</a>";
                    html+="<span>"+res.data[i].addTime.split(" ")[1]+"</span>";
                html+="</li>";
                
                }
                $("div.mainFcft>ul").html(html);
            }
        });

        //公司要闻
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockArticle?id=5&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            
            for(var i in res.data){
                // html = `
                // <li><a href="${res.data[0].httpUrl+"?id="+res.data[0].aid+"&tb="+res.data[0].tableName}">${res.data[0].title}</a></li>
                // <li><a href="${res.data[1].httpUrl+"?id="+res.data[1].aid+"&tb="+res.data[1].tableName}">•</a><a href="${res.data[1].httpUrl+"?id="+res.data[1].aid+"&tb="+res.data[1].tableName}">${res.data[1].title}</a><span>${res.data[1].addTime.split(" ")[1]}</span></li>
                // <li><a href="${res.data[2].httpUrl+"?id="+res.data[2].aid+"&tb="+res.data[2].tableName}">•</a><a href="${res.data[2].httpUrl+"?id="+res.data[2].aid+"&tb="+res.data[2].tableName}">${res.data[2].title}</a><span>${res.data[2].addTime.split(" ")[1]}</span></li>
                // <li><a href="${res.data[3].httpUrl+"?id="+res.data[3].aid+"&tb="+res.data[3].tableName}">•</a><a href="${res.data[3].httpUrl+"?id="+res.data[3].aid+"&tb="+res.data[3].tableName}">${res.data[3].title}</a><span>${res.data[3].addTime.split(" ")[1]}</span></li>
                // <li><a href="${res.data[4].httpUrl+"?id="+res.data[4].aid+"&tb="+res.data[4].tableName}">•</a><a href="${res.data[4].httpUrl+"?id="+res.data[4].aid+"&tb="+res.data[4].tableName}">${res.data[4].title}</a><span>${res.data[4].addTime.split(" ")[1]}</span></li>
                // <li><a href="${res.data[5].httpUrl+"?id="+res.data[5].aid+"&tb="+res.data[5].tableName}">•</a><a href="${res.data[5].httpUrl+"?id="+res.data[5].aid+"&tb="+res.data[5].tableName}">${res.data[5].title}</a><span>${res.data[5].addTime.split(" ")[1]}</span></li>
                // <li><a href="${res.data[6].httpUrl+"?id="+res.data[6].aid+"&tb="+res.data[6].tableName}">•</a><a href="${res.data[6].httpUrl+"?id="+res.data[6].aid+"&tb="+res.data[6].tableName}">${res.data[6].title}</a><span>${res.data[6].addTime.split(" ")[1]}</span></li>
                // <li><a href="${res.data[7].httpUrl+"?id="+res.data[7].aid+"&tb="+res.data[7].tableName}">•</a><a href="${res.data[7].httpUrl+"?id="+res.data[7].aid+"&tb="+res.data[7].tableName}">${res.data[7].title}</a><span>${res.data[7].addTime.split(" ")[1]}</span></li>
                // <li><a href="${res.data[8].httpUrl+"?id="+res.data[8].aid+"&tb="+res.data[8].tableName}">•</a><a href="${res.data[8].httpUrl+"?id="+res.data[8].aid+"&tb="+res.data[8].tableName}">${res.data[8].title}</a><span>${res.data[8].addTime.split(" ")[1]}</span></li>
                // <li><a href="${res.data[9].httpUrl+"?id="+res.data[9].aid+"&tb="+res.data[9].tableName}">•</a><a href="${res.data[9].httpUrl+"?id="+res.data[9].aid+"&tb="+res.data[9].tableName}">${res.data[9].title}</a><span>${res.data[9].addTime.split(" ")[1]}</span></li>                
                //     `;
                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                
                html+="<li>"
                    html+="<a href="+href+">"+"•"+"</a>"+"<a href="+href+">"+res.data[i].title+"</a>"+"<span>"+res.data[i].addTime.split(" ")[1]+"</span>"
                html+="</li>";
                
                
               }
               $("div.mainFcvt>ul").html(html);
            }
        });

        //新手学习
        

        //24小时热文
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou/stockArticle?id=7&page=0&num=10",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data.slice(3,10)){
                // html += `
                //     <div class="mfRoo">
                //         <a href="${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}"><img src=${item.thumb}></a>
                //         <a href="${item.httpUrl+"?id="+item.aid+"&tb="+item.tableName}">${item.title}</a>
                //     </div>
                //     `;
                var url=res.data[i].httpUrl,id=res.data[i].aid,tb=res.data[i].tableName,href=url+'?id='+id+'&tb='+tb;
                var mfRoo="mfRoo";
                html+="<div class="+mfRoo+">";
                    html+="<a href="+href+">"
                        html+="<img src="+res.data[i].thumb+">"
                    html+="</a>";
                    html+="<a href="+href+">"+res.data[i].title+"</a>";
                html+="</div>";
                }
                $("div.mfRoc").html(html);
            }
        });

        //10讯号推荐
        $.ajax({
            type:"get",
            url:"http://www.10xunc.com/WSHD/Recommend/push",
            dataType:"json",
            data:{},
            success:function(res){
                // console.log(res);
            var html="";
            for(var i in res.data){
                var url=res.data[i].url,srcimg=res.data[i].img;
                var mainFrtht="mainFrtht",mfRthto="mfRthto",mfRthtt="mfRthtt";
                // html += `
                // <div class="mainFrtht">
                //     <div class="mfRthto">
                //         <a href=${item.url}><img src=${item.img} alt="10讯号推荐"></a>
                //     </div>
                //     <div class="mfRthtt">
                //         <ul>
                //             <li><a href="${item.url}">${item.web_name}</a></li>
                //             <li><a href="${item.url}">${item.summary}</a></li>
                //         </ul>
                //     </div>
                // </div>
                //     `;
                html+="<div class="+mainFrtht+">";
                    html+="<div class="+mfRthto+">";
                        html+="<a href="+url+">"
                            html+="<img src="+srcimg+">";
                        html+="</a>";
                    html+="</div>";
                    html+="<div class="+mfRthtt+">";
                        html+="<ul>";
                            html+="<li>";
                                html+="<a href="+url+">"+res.data[i].web_name+"</a>";
                            html+="</li>";
                            html+="<li>";
                                html+="<a href="+url+">"+res.data[i].summary+"</a>";
                            html+="</li>";
                        html+="</ul>";
                    html+="</div>";       
                html+="</div>";
                }
                $("div.mainFrthc").html(html);
            }
        });
        
        //点击联系我们
        $('input.radio').click(function(){
            var $radio = $(this);
            if ($radio.data('checked')){
              $radio.prop('checked', false);
              $radio.data('checked', false);
            } else {
              $radio.prop('checked', true);
              $radio.data('checked', true);
            }
          });

});
