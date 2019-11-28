var bgColor = "#fff";//背景#1f212d
var upColor="";//涨颜色#F9293E
var downColor="";//跌颜色#00aa3b

// ma  颜色
var ma5Color = "#39afe6";
var ma10Color = "#da6ee8";
var ma20Color = "#ffab42";
var ma30Color = "#00940b";

var get_m_data = function(m_data,type) {
	var priceArr = new Array();
	var avgPrice = new Array();
	var vol = new Array();
	var times = time_arr(type); 
	$.each(m_data.data, function(i, v) {
		priceArr.push(v[1]);
		avgPrice.push(v[2]);
		vol.push(v[3]); 
	})
	return {
		priceArr: priceArr,
		avgPrice: avgPrice,
		vol: vol,
		times: times
	}	
}
//数组处理
function splitData(rawData) {
	var datas = []; var times = [];var vols = []; 
	for (var i = 0; i < rawData.length; i++) {
		datas.push(rawData[i]);
		times.push(rawData[i].splice(0, 1)[0]);
		vols.push(rawData[i][4]); 
	}
	return {datas:datas,times:times,vols:vols};
}
//计算价格涨跌幅百分比
function ratioCalculate(price,yclose){
	return ((price-yclose)/yclose*100).toFixed(3);
}


function initMOption(m_data,type){
	var m_datas = get_m_data(m_data,type);
	
	return {
		tooltip: { 
			trigger: 'axis',
			position: [0, -45],
			axisPointer: {
				type: 'cross'
			},
			formatter: function(params, ticket, callback) {
				var i = params[0].dataIndex;
				var color;
				var html = '<div class="commColor" style="width:85px;"><div>当前价 <span  '+color+' >' + m_datas.priceArr[i] + '</span></div>';
				html += '<div>时间 <span  '+color+' >' + m_datas.times[i] + '</span></div></div>'
				return html;
			}
		},
		legend: { 
			icon: 'rect',
			type: 'scroll',
			itemWidth: 14,
			itemHeight: 2,
			left: 0,
			top: '-1%',
			textStyle: {
				fontSize: 12,
				color: '#0e99e2'
			}
		},
		axisPointer: {
			show: true
		},
		color: [ma5Color, ma10Color],
		grid: [{
				id: 'gd1',
				left: '4%',
				right: '8%',
				height: '67.5%', 
				top: '5%'
			},
			{
				id: 'gd2',
				left: '4%',
				right: '8%',
				height: '67.5%', 
				top: '5%'
			}
			, {
				id: 'gd3',
				left: '4%',
				right: '8%',
				top: '200%',
				height: '19%' 
			}
		],
		xAxis: [ //==== x轴
			{ //主图 
				// 坐标轴是否留白
				// boundaryGap:false,
				axisTick:{show:false},
				show:false,
				gridIndex: 0,
				data: m_datas.times,
				axisLabel: { 
					show: true,              
					fontSize: 10
				},
				splitLine: {
					show: false,    
				}
				,
				axisLine:{
					lineStyle:{
						color:"#ccc"
					}
				}
			},
			{
				axisTick:{show:false},
				show:true,       
				gridIndex: 1,
				data: m_datas.times,
				axisLabel: { //label文字设置
					show: false
				},
				splitLine: {
					show: false,
				},
				axisLine:{
					lineStyle:{
						color:"none"
					}
				}
			}, { //交易量图
				splitNumber: 2,
				type: 'category',
				gridIndex: 2,
				data: m_datas.times,
				axisLabel: { 
					color: '#9b9da9',
					fontSize: 10
				},
			}
		],
		yAxis: [ //y轴
			{
				axisTick:{show:false},
				gridIndex: 0,
				scale: true, 
				splitNumber: 1,  
				axisLabel: { 
					inside: true, 
					fontWeight:'bold',
					color:function(val){ 
						if(val==m_data.yestclose){
							return bgColor;
						}
						return val>m_data.yestclose? upColor:downColor;
					}
				},z:0,splitLine: { 
					show: true,
					lineStyle: {
						color: '#ccc'
						
					}
				}, 
				axisLine:{
					lineStyle:{
						color:"none"
					}
				}, 
			}, { 
				axisTick:{show:false},
				scale: true,  gridIndex: 1, splitNumber: 1,  
				position: 'right', z:0,
				axisLabel: { //label文字设置
					color:function(val){ 
						if(val==m_data.yestclose){
							return bgColor;
						}
						return val>m_data.yestclose? upColor:downColor; 
					},
					inside: true, 
					fontWeight:'bold',
					formatter:function(val){
						var resul=ratioCalculate(val,m_data.yestclose);
						return  Number(resul).toFixed(2)+' %'}
				},
				splitLine: { 
					show: false,
					lineStyle: {
						color: '#181a23'
					}
				},
				axisLine:{
					lineStyle:{
						color:"none"
					}
				},
				axisPointer:{show:false,
					label:{
						formatter:function(params){ //计算右边Y轴对应的当前价的涨幅比例
							return  ratioCalculate(params.value,m_data.yestclose)+'%';
						}
					}
				}
			} 
			, { //交易图
				gridIndex: 2,z:4,
				splitNumber: 3,
				axisLine: {
					onZero: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisLabel: { //label文字设置
					color: '#c7c7c7',
					inside: true, //label文字朝内对齐 
					fontSize: 8
				},
			}
		],
		dataZoom: [
	
		],
		//animation:false,//禁止动画效果
		backgroundColor: bgColor,
		blendMode: 'source-over',
		series: [{
				// name: '当前价',
				type: 'line',
				data: m_datas.priceArr,
				smooth: true,
				symbol: "circle", //中时有小圆点 
				lineStyle: {
					normal: {
						opacity: 0.8,
						color: '#39afe6',
						width: 1
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(0, 136, 212, 0.7)'
						}, {
							offset: 0.8,
							color: 'rgba(0, 136, 212, 0.02)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				}
			},
			{
				// name: '均价',
				type: 'line',
				// data: m_datas.avgPrice,
				smooth: true,
				symbol: "circle",
				lineStyle: { //标线的样式
					normal: {
						opacity: 0.8,
						color: '#da6ee8',
						width: 1
					}
				}
			},{  
				type: 'line', 
				data: m_datas.priceArr,
				smooth: true,
				symbol: "none",
				gridIndex: 1,
				xAxisIndex: 1,
				yAxisIndex: 1,
				lineStyle: { //标线的样式 
					normal: { 
						width: 0
					}
				}
			},
			{
				// name: 'Volumn',
				type: 'bar',
				gridIndex: 2,
				xAxisIndex: 2,
				yAxisIndex: 2,
				data: m_datas.vol,
				barWidth: '60%',
				itemStyle: {
					normal: {
						color: function(params) {
							var colorList;
							if (m_datas.priceArr[params.dataIndex] > m_datas.priceArr[params.dataIndex-1]) {
								colorList = upColor;
							} else {
								colorList = downColor;
							}
							return colorList;
						},
					}
				}
			}
		]
	};
}
var time_arr = function(type) { 
	if(type.indexOf('us')!=-1){//生成美股时间段
		var timeArr = new Array();
		timeArr.push('08:00')
		return getNextTime('08:00', '23:59', 1, timeArr);
	}
	if(type.indexOf('hs')!=-1){//生成沪深时间段
		var timeArr = new Array();
			timeArr.push('09:30');
			timeArr.concat(getNextTime('09:30', '11:29', 1, timeArr)); 
			timeArr.push('13:00');
			timeArr.concat(getNextTime('13:00', '15:00', 1, timeArr)); 
		return timeArr;
	}
	if(type.indexOf('hk')!=-1){//生成港股时间段
		var timeArr = new Array();
			timeArr.push('05:00');
			timeArr.concat(getNextTime('05:00', '11:59', 1, timeArr)); 
			timeArr.push('13:00');
			timeArr.concat(getNextTime('13:00', '16:00', 1, timeArr)); 
		return timeArr;
	}
	
}

//获取增加指定分钟数的
function getNextTime(startTime, endTIme, offset, resultArr) {
	var result = addTimeStr(startTime, offset);
	resultArr.push(result);
	if (result == endTIme) {
		return resultArr;
	} else {
		return getNextTime(result, endTIme, offset, resultArr);
	}
}
//时间格式
function addTimeStr(time,num){ 
	var hour=time.split(':')[0];
	var mins=Number(time.split(':')[1]);
	var mins_un=parseInt((mins+num)/60);
	var hour_un=parseInt((Number(hour)+mins_un)/24);
	if(mins_un>0){
		if(hour_un>0){
			var tmpVal=((Number(hour)+mins_un)%24)+"";
			hour=tmpVal.length>1? tmpVal:'0'+tmpVal;//判断是否是一位
		}else{
			var tmpVal=Number(hour)+mins_un+"";
			hour=tmpVal.length>1? tmpVal:'0'+tmpVal;
		}
		var tmpMinsVal=((mins+num)%60)+"";
		mins=tmpMinsVal.length>1? tmpMinsVal:0+tmpMinsVal;//分钟数为 取余60的数
	}else{
		var tmpMinsVal=mins+num+"";
		mins=tmpMinsVal.length>1? tmpMinsVal:'0'+tmpMinsVal;//不大于整除60
	} 
	return hour+":"+mins;
}