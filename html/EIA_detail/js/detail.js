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

    //指定图标的配置和数据
 
   function makeKline(mdata){
   return {
   title:{},
   color: ['#ff7700'],
   tooltip:{
   axisPointer:{
         type:'cross'
         }
   },
   xAxis:[{
       data:mdata.time,
   name:"说明：横坐标代表指标公布时间（不适用于新增的对比线），节点显示的是指标周期！",
   nameLocation:'middle',
   nameGap:40,
   scale:true,
   axisTick:{show:false},
   }],
   yAxis:[{
   name:'单位：（万桶）',
   nameLocation:'middle',
   nameGap:35,
   type : 'value',
   axisLine:{
       show:true,
       lineStyle:{color:'#000'}
     },
   axisTick:{
       show:false,                        
   },          
   }],
   axisPointer: {
   show: true
   },
   series:[{
   name:'指标周期',
   type:'line',
   data:mdata.count,
   }]
    }
   }
   var str= window.location.href;
   var id=str.split('=')[1];
  function KLine(id){
      $.ajax({
          type: "get",
          url: "http://www.10xunc.com/WSHD/EIAstock/EIA_data",
          data:{
              type:id
          },
          dataType: "JSON",
          success: function (obj) {
             $('.main_top').html(template('ad',{list:obj.message}))
             //初始化echarts实例
              var mdata={'time':obj.map_time,'count':obj.map_data}
              var myChart = echarts.init(document.getElementById('chartmain'));
              myChart.setOption(makeKline(mdata));
           
              $('.his_con tbody').html(template('LS',{list:obj.history_data}))
              $('.pre_con tbody').html(template('HQ',{list:obj.marketforecast}))
              
          }
      });
     
  }
  KLine(id);
 
  
 })