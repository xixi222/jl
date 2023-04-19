<template>
	<ul class="ul1">
		<li style="text-align: center; margin-bottom: 12px !important">
			<h3 style="font-size: 23px; display: inline-block">工作经历</h3>
		</li>

		<li>
			<h3><i> 公司名称 :</i> <span>云联网信</span></h3>
			<h3><i>在职时间 :</i> <span>2022/08 - 2023/05</span></h3>
			<h3>
				<i>负责项目 :</i>
				<!-- 镇江交通一张图、市中管理平台、模型支撑SaaS平台、可视化矿山、bim轻量化平台、三维设计支撑平台 -->
				<span>
					<span>项目名称:镇江交通一张图、市中管理平台、可视化矿山：</span>

					<span style="margin: 8px 0"
						>主要职责:地图标绘测量，及与地图有交互的页面编写。封装了模型加载管理工具文件，在首次加载和更换模型时速度明显提高。</span
					>
					<span
						>主要技术栈为:Vue、DC SDK、Cesium、ElementUI、ECharts、less</span
					>
					<hr style="margin: 5px 0" />
					<span>项目名称:三维设计支撑平台+模型SaaS平台：</span>

					<span style="margin: 8px 0"
						>主要职责:菜单管理、权限分配、用户管理、接入模型预览、加载文件进度页的编写。使用动态路由加指令完成从菜单到按钮级的分权限显示,按钮埋点智能推荐vip服务。</span
					>
					<span
						>主要技术栈为:Vue、ElementUI、jsencrypt、高德地图、DC
						SDK、Cesium、less</span
					>
					<hr style="margin: 5px 0" />

					<span> 项目名称:bim模型预览平台+厂区规划平台</span>
					<span style="margin: 8px 0"
						>主要职责:编写展示类标绘及其有交互的相应页面，各模型块点击的选中及属性预览、自定义标绘体块的绘制拉伸及移动，可动态检测多个标绘块之间的空间及时间上的冲突并实时发出对应警报。</span
					>
					<span>主要技术栈为:Vue、Cesium+turf、less、ElementUI、ECharts</span>
					<span
						style="color: #00a999; cursor: pointer; margin-top: 8px"
						@click="imgHandle('')"
						>项目图片预览</span
					>
				</span>
			</h3>
			<!-- <h3>
				<span>镇江交通一张图、可视化矿山：</span>
				<span>主要技术栈为:Vue、DC SDK、Cesium、ElementUI、ECharts</span>
				<span
					>主要职责:地图标绘测量，及与地图有交互的页面编写。封装了模型加载管理工具文件，在首次加载和更换模型时提高客观的效率。</span
				>
				<img
					src="@/assets/white-dot.png"
					alt="111"
					style="width: 20px; height: 20px"
					@click="imgHandle('')"
				/>
			</h3> -->
		</li>

		<Preview :urlList="arr2" v-model="visible"></Preview>
	</ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Preview from "vue3-preview";
const visible = ref(false);
const arr2 = [
	new URL("@/assets/works/1.png", import.meta.url),
	new URL("@/assets/works/2.png", import.meta.url),
	new URL("@/assets/works/3.png", import.meta.url),
	new URL("@/assets/works/4.png", import.meta.url),
	new URL("@/assets/works/5.png", import.meta.url),
	new URL("@/assets/works/11.png", import.meta.url),
	new URL("@/assets/works/6.png", import.meta.url),
	new URL("@/assets/works/7.png", import.meta.url),
	new URL("@/assets/works/8.png", import.meta.url),
	new URL("@/assets/works/9.png", import.meta.url),
	new URL("@/assets/works/10.jpg", import.meta.url),
	new URL("@/assets/works/12.png", import.meta.url),
	new URL("@/assets/works/13.png", import.meta.url),
	new URL("@/assets/works/14.png", import.meta.url),
];
let imgHandle = (url: string) => {
	visible.value = true;
	// console.log(preview.value);
	// preview.value?.open(url);
};
</script>

<style lang="less" scoped>
hr {
	border: 1px dashed;
}
.ul1 {
	user-select: none;
	width: 500px;
	height: 670px;
	background-color: rgba(250, 235, 215, 0);
	color: #d0c6c6;
	position: fixed;
	right: 150px;
	top: 50%;
	margin-top: -330px;
	li {
		font-size: 16px;
		margin-bottom: 30px;
		h3 {
			display: flex;
			font-weight: normal;
			margin-bottom: 16px;

			i {
				display: inline-block;
				height: 100%;
				line-height: 18px;
				width: 95px;
			}
			span {
				flex: 1;
				// line-height: 18px;
				display: inline-block;
			}
		}
	}
}
</style>
