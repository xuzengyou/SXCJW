$(function(){
    //   网友点击排行榜
function userClick(){
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/Leaderboard/leaderboardlist",
        data: {
            page:1,
            limit:10
        },
        dataType: "JSON",
        success: function (res) {
            var arr=eval(res.data)
            console.log(arr);
            
          $('.net_con').html(template('DJ',{list:arr}))
        }
    });
}
userClick();
//   专题
function subject(){
  $.ajax({
      type: "get",
      url: "http://www.10xunc.com/WSHD/Leaderboard/specialtopiclist",
      data: {
          page:1,
          limit:8
      },
      dataType: "JSON",
      success: function (res) {
          
          $('.special_con').html(template('ZT',res))
      }
  });
}
subject();

       // 评论精华
function Comment(){
       $.ajax({
           type: "get",
           url: "http://www.10xunc.com/WSHD/Commentary/commentarylist",
           data:{
              page:1,
              limit:5
           },
           dataType: "JSON",
           success: function (res) {
              $('.essence_con').html(template('PL',res))
           }
       });
  }
  Comment();
})