<template>
	<div id="main1">
		<div id="levealTop" class="overall-header-left" style="width: 500px">
			<vuetyped
				id="levealTop"
				:strings="[sec]"
				:loop="false"
				:typeSpeed="80"
				:smart-backspace="false"
				:showCursor="false"
			>
				<div class="typing"></div>
			</vuetyped>
			<!-- <vuetyped
				id="levealTop"
				:strings="'本次您预览总时长为' + sec + '秒'"
				:loop="false"
				:typeSpeed="80"
				:startDelay="1200"
				:showCursor="false"
				:smart-backspace="false"
			>
				<div class="typing" />
			</vuetyped>
			<vuetyped
				id="levealTop"
				:strings="['您最感兴趣的页面是']"
				:loop="false"
				:typeSpeed="80"
				:startDelay="2200"
				:showCursor="false"
				:smart-backspace="false"
			>
				<div class="typing" />
			</vuetyped>
			<vuetyped
				id="levealTop"
				:strings="['共预览秒，占总时长%']"
				:loop="false"
				:typeSpeed="80"
				:startDelay="3200"
				:showCursor="false"
				:smart-backspace="false"
			>
				<div class="typing" /> -->
		</div>
		<div id="chart"></div>
	</div>
</template>

<script setup lang="ts">
import { AxiosStatic } from "axios";
import * as echarts from "echarts";
import { ref, onMounted, inject } from "vue";

const time = sessionStorage.getItem("time");
const arr = [
	Number(sessionStorage.getItem("/hello")),
	Number(sessionStorage.getItem("/review/practice")),
	Number(sessionStorage.getItem("/review/works")),
	Number(sessionStorage.getItem("/review/about")),
	Number(sessionStorage.getItem("/review/thank")),
];
let data = [
	{ value: arr[0].toFixed(2), name: "主页浏览时长" },
	{ value: arr[1].toFixed(2), name: "'实习'页浏览时长" },
	{ value: arr[2].toFixed(2), name: "'工作'页浏览时长" },
	{ value: arr[3].toFixed(2), name: "'联系'页浏览时长" },
	{ value: arr[4].toFixed(2), name: "'感谢'页浏览时长" },
].sort(function (a, b) {
	return Number(b.value) - Number(a.value);
});
data = data.filter((item) => {
	return item.value != "0.00";
});
function one(arr) {
	let sum = 0;
	arr.map(function (item) {
		sum += Number(item.value);
	});
	return sum.toFixed(2);
}
let s = one(data);
let y = data[0].name.slice(0, data[0].name.indexOf("页") + 1);
let x = data[0].value;
let p = ((Number(x) * 100) / Number(s)).toFixed(2);
let sec = `<p>感谢您的预览</p><p>本次您预览总时长为${s}秒</p><p>您最感兴趣的页面是${y}</p><p>预览了${x}秒，占总时长${p}%</p>`;

const axios = inject<AxiosStatic>("$axios");
const params = {
	time,
	hello: arr[0],
	practice: arr[1],
	works: arr[2],
	about: arr[3],
	nownot: arr[4],
};
axios
	.get("http://103e094e.r2.vip.cpolar.cn/update", {
		params: {
			time,
			hello: arr[0],
			practice: arr[1],
			works: arr[2],
			about: arr[3],
			nownot: arr[4],
		},
	})
	.then((resp) => {
		console.log(resp.data);
	})
	.catch((err) => {
		console.log(err);
	});
onMounted(() => {
	let chartDom = document.getElementById("chart");
	let myChart = echarts.init(chartDom);
	let option;

	option = {
		color: ["#6C63F0", "#3AACFF", "#ED589D", "#FB466C", "#B750BE"],
		backgroundColor: "rgb(43, 51, 59)",
		label: {
			//不显示图例上的文字

			fontSize: 16, // 字体大小
			fontWeight: 800,
		},
		tooltip: {
			show: true, //设置是否显示提示框
			trigger: "item",
			textStyle: {
				fontSize: 14, // 字体大小
				fontWeight: 500,
			},
			axisPointer: {
				//指示器，就是你画上去时候的效果
				type: "cross", //样式 有 'line' 直线指示器，'shadow' 阴影指示器，'cross' 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。none就是没有
			},
			//自定义的重点用formatter自定义返回神马显示神马 它带有模板变量和回调函数这种形式折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
			// 模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。
			// 1. formatter: `姓名:{a}<br />保费:{c}`,
			// 2. 这个回调函数的方式比较喜欢。
			formatter: `{b}:<br />{c}秒;      占总时长{d}%`,
			// function (datas) {
			//     //datas 划上的当前行列的数据
			//     //datas.data  就是你在series.data里的数据{ value: 56, label: {}, itemStyle: {}, num: 4 }
			//     var res = "姓名：" + datas.name + '<br/>' + "开单数：" + datas.data.num + '<br/>' + "保单数：" + datas.value;
			//     return res;
			// }
		},
		series: [
			{
				name: "Nightingale Chart",
				type: "pie",
				radius: [50, 245],
				center: ["50%", "50%"],
				roseType: "area",
				itemStyle: {
					borderRadius: 8,
				},
				data,
			},
		],
	};

	option && myChart.setOption(option);
	window.onresize = () => {
		myChart.resize();
	};
});
</script>

<style lang="less" scoped>
#main1 {
	background-color: rgb(43, 51, 59);
	display: flex;
	justify-content: center;
	gap: 40px;
	color: #fff;
	font-size: 50px;
	height: 100%;
}
#chart {
	width: 825px;
	height: 100%;
	overflow: hidden;
}
.overall-header-left {
	align-self: center;
	justify-self: center;
	font-size: 28px; /* 要给容器设置font-size */
}
.typing {
	font-weight: 700;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 14px;
	/* font-size: 32px; */
}
#levealTop {
}
</style>
