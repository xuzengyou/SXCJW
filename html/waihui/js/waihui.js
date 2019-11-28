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
   


    // 初始化
   function Init() {
       $('a[data-toggle="tab"]').mousemove(function (e) {
           $(this).tab('show');
           e.preventDefault();
       });
       
   }
   Init();
   // 图文
   function imageText(){
      $.ajax({
          type: "get",
          url: "http://www.10xunc.com/WSHD/jiekou2/waihuizuo",
          data: {
              page:0,
              num:4
          },
          dataType: "JSON",
          success: function (res) {
            $('.itext').html(template('TW', res))
          }
      });
   }
   imageText();
   // 外汇要闻
//    function imNews(){
//       $.ajax({
//           type: "get",
//           url: "http://www.10xunc.com/WSHD/jiekou2/waihuizixun",
//           data: {
//               page:0,
//               num:10
//           },
//           dataType: "JSON",
//           success: function (res) {
//             // $('.currency_con').html(template('YW', res))
//           }
//       });
//    }
//    imNews();
 //   推荐
 function nominate(){
      $.ajax({
          type: "get",
          url: "http://www.10xunc.com/WSHD/jiekou2/waihuituijian",
          data: {
              page:0,
              num:9
          },
          dataType: "JSON",
          success: function (res) {
            $('.recommend_con').html(template('TJ', res))
          }
      });
   }
   nominate();
   //上海国际能源
   function energy(){
      $.ajax({
          type: "get",
          url: "http://www.10xunc.com/WSHD/shanghaienergy/list",
          dataType: "JSON",
          success: function (res) {
                $('.energy_con tbody').html(template('NY', res))
          }
      });
   }
   energy();
// 全球指数、国际黄金
function zhiShu() {
       $.ajax({
           type: "get",
           url: "http://www.10xunc.com/WSHD/jiekou/guijinshu",
           data: {
               page: 0,
               num: 5
           },
           dataType: "JSON",
           success: function (res) {
               for(var i=0;i<res.guojizhishu.length;i++){
                   str1= String(res.guojizhishu[i].changepercent);
                   res.guojizhishu[i].changepercent=str1.substring(0,str1.indexOf(".") +5);
               }
               $('.metal tbody').html(template('QQ', res))
               $('.offer tbody').html(template('JYS', res))

           }
       });
   }
   zhiShu();
   //  热门行情走势
   function zouShi() {
       $.ajax({
           type: "get",
           url: "http://www.10xunc.com/WSHD/jiekou/guijinshu",
           data: {
               page: 0,
               num: 6
           },
           dataType: "JSON",
           success: function (res) {
               $('.trend tbody').html(template('ZS', res))
           }
       });
   }
   zouShi();
   //货币分析、黄金、外汇、石油、24小时直播
   function headLine(){
       $.ajax({
           type: "get",
           url: "http://www.10xunc.com/WSHD/jiekou2/duanwen",
           data: {
               page:0,
               num:10
           },
           dataType: "JSON",
           success: function (res) {

               $('.analyze .bot_content').html(template('HB', res))
               $('.gold .bot_content').html(template('HJ', res))
               $('.exchange .bot_content').html(template('WH', res))
               $('.petroleum .bot_content').html(template('SY', res))
               // 截取时间戳
               for(var i=0;i<res.data.twentyfour.length;i++){
                  var str= res.data.twentyfour[i].addTime;
                   res.data.twentyfour[i].addTime=str.substr(11,5);
               }
               $('.flash_con').html(template('KX', res))
           }
       });
   }
   headLine();

 //  博主推荐
  function blogger(){
  $.ajax({
      type: "get",
      url: "http://www.10xunc.com/WSHD/bloggerGuidance/list",
      dataType: "JSON",
      success: function (res) {
          $('.blogger_con').html(template('BZ', res))
      }
  });
  }
  blogger();
//    EIA库存
 function inventory(){
  $.ajax({
      type: "get",
      url: "http://www.10xunc.com/WSHD/EIAstock/EIA",
      dataType: "JSON",
      success: function (res) {
       $('.repertory_con').html(template('EIA', res))
      }
  });
 }
  inventory();


  //K线图实现
    function KLine(id,param1,param2){
        
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou2/waihuibiao",
            data: {
               id:id,
               page:0,
               num:960
            },
            dataType: "JSON",
            success: function (obj) {
                var mdata={'data':obj.data,'name':obj.name}
                var mChart = echarts.init(document.getElementById(param1));
                    mChart.setOption(initMOption(mdata,'us'));
                // obj.zde=obj.data[obj.data.length-1][2];                稍后修改
                // obj.prcie=obj.data[obj.data.length-1][1];
                // obj.zdf=obj.data[obj.data.length-1][3];
                $(param2).html(template('ZJS',{list:obj}))
            }
        });
    }
    KLine(0,'MYZS','.k1');
    KLine(1,'M_R','.k2');
    KLine(2,'O_M','.k3');
    KLine(3,'Y_M','.k4');
    KLine(4,'M_i','.k5');
    KLine(5,'O_Y','.k6');
    KLine(6,'M_J','.k7');
    KLine(7,'A_M','.k8');
    KLine(8,'M_L','.k9');
    KLine(9,'M_X','.k10');
    KLine(10,'M_G','.k11');
    KLine(11,'Y_i','.k12');


    // 动画效果
    function Animate(){
        var int = setInterval( myInterval, 6000);//1000为1秒钟
        function myInterval(){
            var left = $(".Karrow").css('left');
            // console.log(left.slice(0,1));
            // var suffix = left.substr(-2);
            // console.log(suffix)
            // left = left.replace(suffix, '');
            // console.log(left)
            left = (left.slice(0,1) >= 0) ? -997 : 0;
            $(".Karrow").animate({left: left+'px'}, 1000);
          }
       $('.leftarrow').on('click', function(e){
          e.preventDefault();
          var left = $(".Karrow").css('left');
          if (left == '0px') {
            $(".Karrow").animate({left: '-997px'}, 1000);
          } else {
            $(".Karrow").animate({left: '0px'}, 1000);
          }
          clearInterval(int);
       });
       $('.rightarrow').on('click', function(e){
          e.preventDefault();
          var left = $(".Karrow").css('left');
          if (left == '-997px') {
            $(".Karrow").animate({left: '0px'}, 1000);
          } else {
            $(".Karrow").animate({left: '-997px'}, 1000);
          }
    
          clearInterval(int);
       });
    }
    Animate();




})
