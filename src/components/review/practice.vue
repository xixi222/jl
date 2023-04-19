<template>
	<ul class="ul1">
		<li style="text-align: center; margin-bottom: 12px !important">
			<h3 style="font-size: 23px; display: inline-block">实习经历</h3>
		</li>
		<li>
			<h3><i>实习公司 :</i> <span> DXC(南京)</span></h3>
			<h3><i>在职时间 :</i> <span>2021/07/01 - 2022/06/01</span></h3>
			<h3>
				<i>负责项目 :</i>
				<span>
					<span> 项目名称:公司管理系统</span>
					<span style="margin: 8px 0; line-height: 22px; display: inline-block"
						>主要职责:项目说明、需求预算、可行性分析、财务等各类图文报表，权限管理、菜单管理、用户管理、角色管理等功能页</span
					>
					<span>主要技术栈为:Vue、ElementUI、ECharts、sass</span>
					<hr style="margin: 5px 0" />

					<span> 项目名称:低代码平台</span>
					<span style="margin: 8px 0; line-height: 22px; display: inline-block"
						>主要职责:视屏轮播，多按钮组合，echarts图表，时间等低代码组件及其属性设置界面开发</span
					>
					<span style="line-height: 22px; display: inline-block"
						>主要技术栈为:Vue、ElementUI、ECharts、HighChart、sass</span
					>
					<span
						style="color: #00a999; cursor: pointer; margin-top: 8px"
						@click="imgHandle('')"
						>项目图片预览</span
					></span
				>
			</h3>
		</li>

		<Preview :urlList="arr2" v-model="visible"></Preview>
	</ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Preview from "vue3-preview";
const visible = ref(false);
const arr2 = [
	new URL("@/assets/practice/1.png", import.meta.url),
	new URL("@/assets/practice/2.png", import.meta.url),
	new URL("@/assets/practice/3.png", import.meta.url),
	new URL("@/assets/practice/4.png", import.meta.url),
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
	height: 308px;
	background-color: rgba(250, 235, 215, 0);
	color: #d0c6c6;
	position: fixed;
	left: 170px;
	top: 50%;
	margin-top: -200px;
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
				line-height: 18px;
				display: inline-block;
			}
		}
	}
}
</style>
