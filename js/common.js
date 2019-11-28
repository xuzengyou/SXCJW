$(function () {
    // 初始化
    function Tab(){
        $('.cost_title li').on('mousemove',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.cost_text>div').eq($(this).index()).addClass('show');
            $('.cost_text>div').eq($(this).index()).siblings().removeClass('show');
        })
        $('.fund li').on('mousemove',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.tablist1>div').eq($(this).index()).addClass('show');
            $('.tablist1>div').eq($(this).index()).siblings().removeClass('show');
        })
        $('.share li').on('mousemove',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.tablist2>div').eq($(this).index()).addClass('show');
            $('.tablist2>div').eq($(this).index()).siblings().removeClass('show');
        })
        // 登录
        $('.loginTab li').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.loginCon>div').eq($(this).index()).addClass('show');
            $('.loginCon>div').eq($(this).index()).siblings().removeClass('show');
        })
        $('.radio-icon').on('click',function(){
            if( $(this).hasClass('radio-icon-sel')){
                $(this).removeClass('radio-icon-sel')
            }else{
                $(this).addClass('radio-icon-sel')
            }
           
        });
        $("a.dl").click(function(){
            if($("div.BoxLogin").hasClass("yinc")){
                $("div.BoxLogin").removeClass("yinc");
            }else{
                $("div.BoxLogin").addClass("yinc");
            };
            
            
        });


    }
    Tab();
    //联系我们
    $("a.lianxi").click(function(){
        $('.zzc').css('display','block'); //显示遮罩层
        $('.zzc').css('height',document.body.clientHeight+'px'); //设置遮罩层的高度为当前页面高度
        if($("div.us-pop-wrapper").hasClass("yinc")){
            $("div.us-pop-wrapper").removeClass("yinc");
        }else{
            $("div.us-pop-wrapper").addClass("yinc");
        };
    });
    $(".close-us").click(function(){
        // $("div.lxwm").removeClass("yinc");
        $("div.us-pop-wrapper").addClass("yinc");
    })

    function biaoTi() {

        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou/allart",
            data: {
                id: 100,
                page: 0,
                num: 7
            },
            dataType: "JSON",
            success: function (res) {
                $('.new .new_content').html(template('XW', res))
                $('.gupiao .gupiao_content').html(template('GP', res))
                $('.waihui .new_content').html(template('WH', res))
                $('.shiyou .new_content').html(template('YY', res))
                $('.jijin .new_content').html(template('JJ', res))
                $('.huangjin .new_content').html(template('HJ', res))
                $('.hongguan .jr_con').html(template('HG', res))
                $('.gushi .jr_con').html(template('GS', res))
                $('.yinhang .jr_con').html(template('YH', res))
                $('.quanshang .jr_con').html(template('QS', res))
                $('.rewen .rewen_con').html(template('RW', res))
            }

        });
    }
    biaoTi();

    // 资金流入
    function fundFlow() {
     
            $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou/liuru",
            data: {
                page: 0,
                num: 5
            },
            dataType: "JSON",
            success: function (data) {
                $('#plateIn tbody').html(template('pi', data))
                $('#plateOut tbody').html(template('po', data))
                $('#shareIn tbody').html(template('si', data))
                $('#shareOut tbody').html(template('so', data))
            }
        });  
    }
    fundFlow();
    //   个股排行
    function inRank() {
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou/zijin",
            data: {
                page: 0,
                num: 5
            },
            dataType: "JSON",
            success: function (data) {
                  
                for(var i=0;i<data.zhangfu.length;i++){
                    str= String(data.zhangfu[i].changepercent);
                    data.zhangfu[i].changepercent=str.substring(0,str.indexOf(".") + 3);
                }
                for(var i=0;i<data.diefu.length;i++){
                    str= String(data.diefu[i].changepercent);
                    data.diefu[i].changepercent=str.substring(0,str.indexOf(".") + 3);
                }
                for(var i=0;i<data.gaojiaoyi.length;i++){
                    str1= String(data.gaojiaoyi[i].changepercent);
                     str2=data.gaojiaoyi[i].name;
                     data.gaojiaoyi[i].name=str2.substr(0,4);
                    data.gaojiaoyi[i].changepercent=str1.substring(0,str1.indexOf(".") + 3);
                }
                for(var i=0;i<data.dijiaoyi.length;i++){
                    str1= String(data.dijiaoyi[i].changepercent);
                    str2=data.dijiaoyi[i].name;
                     data.dijiaoyi[i].name=str2.substr(0,5);
                    data.dijiaoyi[i].changepercent=str1.substring(0,str1.indexOf(".") + 3);
                }
                $('#upList tbody').html(template('uplist', data))
                $('#dropList tbody').html(template('droplist', data))
                $('#rate tbody').html(template('RT', data))
                $('#increase tbody').html(template('IC', data))
                $('#outcrease tbody').html(template('OC', data))

            }
        });

    }
    inRank();
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
                num: 7
            },
            dataType: "JSON",
            success: function (res) {
                $('.trend tbody').html(template('ZS', res))
            }
        });
    }
    zouShi();
    //   专家说
    function expertSay() {
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/ExpertsSay/list",
            dataType: "JSON",
            success: function (res) {
                $('.expert .expert_con').html(template('ZJS', res))
            }
        });
    }
    expertSay();
    //新股申购
    function shenGou() {
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou/xingu",
            data: {
                page: 0,
                num: 7
            },
            dataType: "JSON",
            success: function (data) {
                $('.subscribe tbody').html(template('SG', {
                    list: data.data
                }))
            }
        });
    }
    shenGou();

    //  实时解盘
    function jiePan() {
        $.ajax({
            type: "post",
            url: "http://www.10xunc.com/WSHD/jiekou/stockArticle",
            data: {
                id: 9,
                page: 0,
                num: 10
            },
            dataType: "JSON",
            success: function (res) {
            for(var i=0;i<res.data.length;i++){
                res.data[i].addTime=res.data[i].addTime.trim().split(" ")[1]; 
            }
                $('.solution .solution_con').html(template('JP', {
                    list: res.data
                }))
            }
        });
    }
    jiePan();
    //  财经资讯
    function CJmessage() {
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/jiekou/caijingzixun",
            data: {
                page: 0,
                num: 9
            },
            dataType: "JSON",
            success: function (res) {
                $('.zixun').html(template('CJZX', {
                    list: res.data
                }))
            }
        });
    }
    CJmessage();
    //  10讯号推荐
    function tuiJian() {
        $.ajax({
            type: "get",
            url: "http://www.10xunc.com/WSHD/Recommend/push",
            dataType: "JSON",
            success: function (res) {
                $('.tuijian .tuijian_con').html(template('TJ', res))
            }
        });
    }
    tuiJian();


})