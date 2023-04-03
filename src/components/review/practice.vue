<template>
	<ul class="ul1">
		<li style="text-align: center; margin-bottom: 16px !important">
			<h3 style="font-size: 26px; display: inline-block">工作经历</h3>
		</li>

		<li>
			<h3><i> 公司名称 :</i> <span>云联网信</span></h3>
			<h3><i>在职时间 :</i> <span>2022/08/10 - 2023/06/01</span></h3>
			<h3>
				<i>主要负责 :</i>
				<span>镇江交通一张图、可视化矿山、bim轻量化平台、三维设计支撑平台</span>
				<img
					src="@/assets/white-dot.png"
					alt="111"
					style="width: 20px; height: 20px"
					@click="imgHandle('')"
				/>
			</h3>
		</li>
		<li>
			<h3><i>公司名称 :</i> <span> DXC(在校期间实习公司)</span></h3>
			<h3><i>在职时间 :</i> <span>2021/07/01 - 2022/07/15</span></h3>
			<h3>
				<i>主要负责 :</i>
				<span>公司内项目管理系统、低代码平台前端开发</span>
			</h3>
		</li>
		<li>项目介绍页</li>
		<Preview :urlList="arr2" v-model="visible"></Preview>
	</ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Preview from "vue3-preview";
const visible = ref(false);
const arr2 = [
	new URL("@/assets/white-dot.png", import.meta.url),
	new URL("@/assets/vite.svg", import.meta.url),
];
let imgHandle = (url: string) => {
	visible.value = true;
	// console.log(preview.value);
	// preview.value?.open(url);
};
</script>

<style lang="less" scoped>
.ul1 {
	user-select: none;
	width: 500px;
	height: 400px;
	background-color: rgba(250, 235, 215, 0);
	color: #d0c6c6;
	position: fixed;
	right: 150px;
	top: 120px;
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
