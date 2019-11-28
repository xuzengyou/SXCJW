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
   //tab栏切换
    $("div.navBotl>a").mouseenter(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
        var id=$(this).attr("data-id");
        $(id).addClass("ac").siblings().removeClass("ac");
    });
    // $("div.navBotl>a:first-child").mouseout(function(){
    //     // window.location.reload();
    //     var id=$(this).attr("data-id");
    //     $(this).removeClass("ac").siblings().addClass("ac");
    //     $(id).removeClass("ac").siblings().addClass("ac");
    // })
    //鼠标进入tr图片显示
    $("table tbody tr").mouseenter(function(){
        // console.log(123)
        $(this).find("a.glyphicon").show();
        $(this).siblings().find("a.glyphicon").hide()
    });
    //底部弹框显示隐藏
    $("div.mrFo").click(function(){
        var show=$("div.db").css("display")
        if(show=='none'){
       
            $("div.db").fadeIn(1000);
        }else{
          
            $("div.db").fadeOut(1000);
        };
    });

    $("div.dbo span").click(function(){
      
        $("div.db").fadeOut(1000);
    });

    $("div.dbv button").click(function(){
       
        $("div.db").fadeOut(1000);
        window.location.reload();
    });
    //点击回顶部
        $("div.mrFt").click(function(){
            $("body,html").animate({scrollTop:0},1000)
        });
        $("div.mrFt a").click(function(){
            $("body,html").animate({scrollTop:0},1000)
        })
            

    
    //日历
    $("#date").selectDate()

    var tm=new Date();
    var y=tm.getFullYear();
    var m=(tm.getMonth()+1)>10?(tm.getMonth()+1):"0"+(tm.getMonth());//测试7月
    bym=y+m;
    console.log(bym);
    var ms=(tm.getMonth()+1)>10?(tm.getMonth()+1):"0"+(tm.getMonth());//测试6月
    sym=y+ms;
    console.log(sym);
    var mx=(tm.getMonth()+1)>10?(tm.getMonth()+1):"0"+(tm.getMonth());//测试5月
    xym=y+mx;
    console.log(xym);
    
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou4/touzirili?page=1&num=30",
        data: {
            date:bym
        },
        dataType: "JSON",
        success: function (res) {
            console.log(res);
            if(res.code==200){
            var html="";
            for(var i in res.data){

               if(res.data[i].event.length==3){
                        var bgsty="#c3e1f4;",ztsty="left;";
                        html+="<tr>";
                            html+="<td rowspan="+3+" style=background-color:"+bgsty+">";
                                html+="<p>"+res.data[i].date+"</p>";
                                html+="<p>"+res.data[i].week+"</p>";
                            html+="</td>";
                            html+="<td rowspan="+3+"></td>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[0]+"</a>";
                                // html+="<a class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[0]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[1]+"</a>";
                                // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[1]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[2]+"</a>";
                                // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[2]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";

                    }
                    else if(res.data[i].event.length==2){
                        var bgsty="#c3e1f4;",ztsty="left;";
                        html+="<tr>";
                            html+="<td rowspan="+2+" style=background-color:"+bgsty+">";
                                html+="<p>"+res.data[i].date+"</p>";
                                html+="<p>"+res.data[i].week+"</p>";
                            html+="</td>";
                            html+="<td rowspan="+2+"></td>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[0]+"</a>";
                                // html+="<a class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[0]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[1]+"</a>";
                                // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[1]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                    }
                    else if(res.data[i].event.length==1){
                        var bgsty="#c3e1f4;",ztsty="left;";
                        html+="<tr>";
                            html+="<td rowspan="+1+" style=background-color:"+bgsty+">";
                                html+="<p>"+res.data[i].date+"</p>";
                                html+="<p>"+res.data[i].week+"</p>";
                            html+="</td>";
                            html+="<td rowspan="+1+"></td>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[0]+"</a>";
                                // html+="<a class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[0]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                    }
                    else if(res.data[i].event.length==4){
                        var bgsty="#c3e1f4;",ztsty="left;";
                        html+="<tr>";
                            html+="<td rowspan="+4+" style=background-color:"+bgsty+">";
                                html+="<p>"+res.data[i].date+"</p>";
                                html+="<p>"+res.data[i].week+"</p>";
                            html+="</td>";
                            html+="<td rowspan="+4+"></td>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[0]+"</a>";
                                // html+="<a class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[0]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[1]+"</a>";
                                // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[1]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[2]+"</a>";
                                // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[2]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[3]+"</a>";
                                    // html+=<a href="#" class="glyphicon glyphicon-search"></a>
                                html+="</td>";
                                html+="<td>"+res.data[i].field[3]+"</td>";
                                html+="<td></td>";
                        html+="</tr>";
                            
                    }
                    else if(res.data[i].event.length==5){
                        var bgsty="#c3e1f4;",ztsty="left;";
                        html+="<tr>";
                            html+="<td rowspan="+5+" style=background-color:"+bgsty+">";
                                html+="<p>"+res.data[i].date+"</p>";
                                html+="<p>"+res.data[i].week+"</p>";
                            html+="</td>";
                            html+="<td rowspan="+5+"></td>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[0]+"</a>";
                                // html+="<a class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[0]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[1]+"</a>";
                                // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[1]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[2]+"</a>";
                                // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[2]+"</td>";
                            html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[3]+"</a>";
                                    // html+=<a href="#" class="glyphicon glyphicon-search"></a>
                                html+="</td>";
                                html+="<td>"+res.data[i].field[3]+"</td>";
                                html+="<td></td>";
                        html+="</tr>";
                        html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[4]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[4]+"</td>";
                                html+="<td></td>";
                        html+="</tr>";
                            
                    }

                    

                }//forjieshu 
                $("#two tbody").html(html)
            }   
        }
    });

    //上月
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/jiekou4/touzirili?page=1&num=30",
        data: {
            date:sym
        },
        dataType: "JSON",
        success: function (res) {
            console.log(res);
            if(res.code==200){
            var html="";
            for(var i in res.data){
                if(res.data[i].event.length==3){
                    var bgsty="#c3e1f4;",ztsty="left;";
                    html+="<tr>";
                        html+="<td rowspan="+3+" style=background-color:"+bgsty+">";
                            html+="<p>"+res.data[i].date+"</p>";
                            html+="<p>"+res.data[i].week+"</p>";
                        html+="</td>";
                        html+="<td rowspan="+3+"></td>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[0]+"</a>";
                            // html+="<a class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[0]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[1]+"</a>";
                            // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[1]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[2]+"</a>";
                            // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[2]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";

                }
                else if(res.data[i].event.length==2){
                    var bgsty="#c3e1f4;",ztsty="left;";
                    html+="<tr>";
                        html+="<td rowspan="+2+" style=background-color:"+bgsty+">";
                            html+="<p>"+res.data[i].date+"</p>";
                            html+="<p>"+res.data[i].week+"</p>";
                        html+="</td>";
                        html+="<td rowspan="+2+"></td>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[0]+"</a>";
                            // html+="<a class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[0]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[1]+"</a>";
                            // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[1]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                }
                else if(res.data[i].event.length==1){
                    var bgsty="#c3e1f4;",ztsty="left;";
                    html+="<tr>";
                        html+="<td rowspan="+1+" style=background-color:"+bgsty+">";
                            html+="<p>"+res.data[i].date+"</p>";
                            html+="<p>"+res.data[i].week+"</p>";
                        html+="</td>";
                        html+="<td rowspan="+1+"></td>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[0]+"</a>";
                            // html+="<a class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[0]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                }
                else if(res.data[i].event.length==4){
                    var bgsty="#c3e1f4;",ztsty="left;";
                    html+="<tr>";
                        html+="<td rowspan="+4+" style=background-color:"+bgsty+">";
                            html+="<p>"+res.data[i].date+"</p>";
                            html+="<p>"+res.data[i].week+"</p>";
                        html+="</td>";
                        html+="<td rowspan="+4+"></td>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[0]+"</a>";
                            // html+="<a class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[0]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[1]+"</a>";
                            // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[1]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[2]+"</a>";
                            // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[2]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[3]+"</a>";
                                // html+=<a href="#" class="glyphicon glyphicon-search"></a>
                            html+="</td>";
                            html+="<td>"+res.data[i].field[3]+"</td>";
                            html+="<td></td>";
                    html+="</tr>";
                        
                }
                else if(res.data[i].event.length==5){
                    var bgsty="#c3e1f4;",ztsty="left;";
                    html+="<tr>";
                        html+="<td rowspan="+5+" style=background-color:"+bgsty+">";
                            html+="<p>"+res.data[i].date+"</p>";
                            html+="<p>"+res.data[i].week+"</p>";
                        html+="</td>";
                        html+="<td rowspan="+5+"></td>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[0]+"</a>";
                            // html+="<a class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[0]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[1]+"</a>";
                            // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[1]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                        html+="<td style=text-align:"+ztsty+">";
                            html+="<a>"+res.data[i].event[2]+"</a>";
                            // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                        html+="</td>";
                        html+="<td>"+res.data[i].field[2]+"</td>";
                        html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[3]+"</a>";
                                // html+=<a href="#" class="glyphicon glyphicon-search"></a>
                            html+="</td>";
                            html+="<td>"+res.data[i].field[3]+"</td>";
                            html+="<td></td>";
                    html+="</tr>";
                    html+="<tr>";
                            html+="<td style=text-align:"+ztsty+">";
                                html+="<a>"+res.data[i].event[4]+"</a>";
                                // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                            html+="</td>";
                            html+="<td>"+res.data[i].field[4]+"</td>";
                            html+="<td></td>";
                    html+="</tr>";
                             
                     };
 
                 }//forjieshu 
                $("#one tbody").html(html)
            }   
        }
    });

    // $("#year").val(123)
    $("#month").click(function(e){
        e.stopPropagation();
        var year = $("#year option:selected").val()
        var month = $("#month option:selected").val();
        
        // var mv=$("#month").val();
        // var rq=year+'/'+month;
        // console.log(rq)
        $("div.navBotl a:first-child").css("display","none");
        
        $("div.navBotr").css("margin-left","600px")
        if(month<10&&month>0){
            
            var rq=year+'0'+month;
            console.log(rq);
            $.ajax({
                type: "get",
                url: "http://www.10xunc.com/WSHD/jiekou4/touzirili?page=1&num=30",
                data: {
                    date:rq
                },
                dataType: "JSON",
                success: function (res) {
                    console.log(res);
                    if(res.code==200){
                    var html="";
                    for(var i in res.data){
                        if(res.data[i].event.length==3){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+3+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+3+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[1]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[1]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[2]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[2]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
        
                        }
                        else if(res.data[i].event.length==2){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+2+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+2+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[1]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[1]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                        }
                        else if(res.data[i].event.length==1){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+1+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+1+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                        }
                        else if(res.data[i].event.length==4){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+4+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+4+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[1]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[1]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[2]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[2]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                    html+="<td style=text-align:"+ztsty+">";
                                        html+="<a>"+res.data[i].event[3]+"</a>";
                                        // html+=<a href="#" class="glyphicon glyphicon-search"></a>
                                    html+="</td>";
                                    html+="<td>"+res.data[i].field[3]+"</td>";
                                    html+="<td></td>";
                            html+="</tr>";
                                
                        }
                        else if(res.data[i].event.length==5){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+5+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+5+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[1]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[1]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[2]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[2]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                    html+="<td style=text-align:"+ztsty+">";
                                        html+="<a>"+res.data[i].event[3]+"</a>";
                                        // html+=<a href="#" class="glyphicon glyphicon-search"></a>
                                    html+="</td>";
                                    html+="<td>"+res.data[i].field[3]+"</td>";
                                    html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                    html+="<td style=text-align:"+ztsty+">";
                                        html+="<a>"+res.data[i].event[4]+"</a>";
                                        // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                    html+="</td>";
                                    html+="<td>"+res.data[i].field[4]+"</td>";
                                    html+="<td></td>";
                            html+="</tr>";
                                     
                             };
         
                         }//forjieshu 
                        $("#two tbody").html(html)
                    }   
                }
            });
        }else if(month>=10&&month<13){
            var rq=year+month;
            console.log(rq);
            $.ajax({
                type: "get",
                url: "http://www.10xunc.com/WSHD/jiekou4/touzirili?page=1&num=30",
                data: {
                    date:rq
                },
                dataType: "JSON",
                success: function (res) {
                    console.log(res);
                    if(res.code==200){
                    var html="";
                    for(var i in res.data){
                        if(res.data[i].event.length==3){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+3+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+3+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[1]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[1]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[2]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[2]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
        
                        }
                        else if(res.data[i].event.length==2){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+2+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+2+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[1]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[1]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                        }
                        else if(res.data[i].event.length==1){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+1+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+1+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                        }
                        else if(res.data[i].event.length==4){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+4+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+4+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[1]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[1]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[2]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[2]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                    html+="<td style=text-align:"+ztsty+">";
                                        html+="<a>"+res.data[i].event[3]+"</a>";
                                        // html+=<a href="#" class="glyphicon glyphicon-search"></a>
                                    html+="</td>";
                                    html+="<td>"+res.data[i].field[3]+"</td>";
                                    html+="<td></td>";
                            html+="</tr>";
                                
                        }
                        else if(res.data[i].event.length==5){
                            var bgsty="#c3e1f4;",ztsty="left;";
                            html+="<tr>";
                                html+="<td rowspan="+5+" style=background-color:"+bgsty+">";
                                    html+="<p>"+res.data[i].date+"</p>";
                                    html+="<p>"+res.data[i].week+"</p>";
                                html+="</td>";
                                html+="<td rowspan="+5+"></td>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[0]+"</a>";
                                    // html+="<a class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[0]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[1]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[1]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                html+="<td style=text-align:"+ztsty+">";
                                    html+="<a>"+res.data[i].event[2]+"</a>";
                                    // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                html+="</td>";
                                html+="<td>"+res.data[i].field[2]+"</td>";
                                html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                    html+="<td style=text-align:"+ztsty+">";
                                        html+="<a>"+res.data[i].event[3]+"</a>";
                                        // html+=<a href="#" class="glyphicon glyphicon-search"></a>
                                    html+="</td>";
                                    html+="<td>"+res.data[i].field[3]+"</td>";
                                    html+="<td></td>";
                            html+="</tr>";
                            html+="<tr>";
                                    html+="<td style=text-align:"+ztsty+">";
                                        html+="<a>"+res.data[i].event[4]+"</a>";
                                        // html+="<a href="#" class="glyphicon glyphicon-search"></a>";
                                    html+="</td>";
                                    html+="<td>"+res.data[i].field[4]+"</td>";
                                    html+="<td></td>";
                            html+="</tr>";
                                     
                             };
         
                         }//forjieshu 
                        $("#two tbody").html(html);
                    }   
                }
            });
        }
        



    })
    


    
})