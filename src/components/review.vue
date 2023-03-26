<template>
	<div ref="fa" style="width: 100%; height: 100%; overflow: hidden">
		<div style="width: 100%; height: 100%; overflow: hidden" ref="three"></div>
		<aside class="as">
			<span
				:class="[k == index ? 'big' : '']"
				v-for="(v, k) in arr"
				:key="v"
				@click="ccc(k, $event)"
				>{{ v }}</span
			>
		</aside>

		<Transition>
			<ul class="ul1" v-if="index == 0">
				<li style="text-align: center; margin-bottom: 16px !important">
					<h3 style="font-size: 26px; display: inline-block">工作经历</h3>
				</li>

				<li>
					<h3><i> 公司名称 :</i> <span>云联网信</span></h3>
					<h3><i>在职时间 :</i> <span>2022/08/10 - 2023/06/01</span></h3>
					<h3>
						<i>主要负责 :</i>
						<span
							>镇江交通一张图、可视化矿山、bim轻量化平台、三维设计支撑平台</span
						>
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
			</ul>
			<ul class="ul1" v-else-if="index == 1">
				<li></li>
			</ul>
			<ul class="ul1" v-else-if="index == 2">
				<li style="text-align: center; margin-bottom: 16px !important">
					<h3 style="font-size: 26px; display: inline-block">游戏管理系统</h3>
				</li>
			</ul>
		</Transition>
		<Preview :urlList="arr2" v-model="visible"></Preview>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { initThree2 } from "../threets/review";
import Preview from "vue3-preview";
const three = ref();
const arr = ["在校实习经历", "工作项目经历", ""];

const arr2 = [
	new URL("@/assets/white-dot.png", import.meta.url),
	new URL("@/assets/vite.svg", import.meta.url),
];
const fa = ref();
const visible = ref(false);
const index = ref(null);
let ccc = function (a, e) {};
let num = 0;
let imgHandle = (url: string) => {
	visible.value = true;
	// console.log(preview.value);
	// preview.value?.open(url);
};
onMounted(() => {
	index.value = 0;
	let init = new initThree2(three.value);
	ccc = (a, e) => {
		if (index.value != a) {
			index.value = a;
			init.transition(a);
		}
	};

	fa.value.onwheel = init.debounce((e) => {
		if (e.deltaY > 0) {
			num = num + 1 > 2 ? 0 : num + 1;
			return ccc(num, e);
		}
		if (e.deltaY < 0) {
			num = num - 1 < 0 ? 2 : num - 1;
			return ccc(num, e);
		}
	}, 2000);

	// window.addEventListener("mousewheel", (e: any) => {
	// 	init.debounce(() => {
	// 		if (e.deltaY > 0) {
	// 			num = num + 1 > 2 ? 0 : num + 1;
	// 			ccc(num, e);
	// 		}
	// 		if (e.deltaY < 0) {
	// 			num = num - 1 < 0 ? 2 : num - 1;
	// 			ccc(num, e);
	// 		}
	// 	}, 1000);
	// });
	init.addObj();
});
</script>

<style lang="less" scoped>
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.25);
	}
	100% {
		transform: scale(1);
	}
}
.v-enter-active {
	animation: bounce-in 5s;
	transition: opacity 7s ease;
}
.v-leave-active {
	animation: bounce-in 1s reverse;
	transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
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
.as {
	width: 100px;
	height: 350px;
	position: fixed;
	top: 50%;
	left: 4%;
	transform: translateY(-50%);
	color: rgba(156, 156, 156, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	justify-content: center;
	&:hover span {
		color: rgba(156, 156, 156, 1);
	}
	.big::before {
		width: 14px;
		left: -8px;

		height: 14px;
		border: 1px solid #fff;
		transition: 0.5s;
	}
	.big {
		color: #fff !important;
		transition: 0.5s;
	}
	span {
		display: inline-block;
		font-size: 14px;
		user-select: none;
		width: 100%;
		transition: 0.5s;
		height: 20px;
		color: rgba(1, 1, 10);
		// border-radius: 50%;
		// background-color: burlywood;
		text-align: left;
		padding-left: 20px;
		cursor: pointer;
		line-height: 20px;
		position: relative;
		&:hover {
			color: #fff;
			transition: 0.3s;
		}
		&::before {
			content: "";
			border-radius: 20px;
			width: 0;
			height: 0;
			border: 3px solid #fff;
			position: absolute;
			left: -1.5px;
			top: 50%;
			transform: translateY(-50%);
			transition: 0.2s;
		}
	}
}
</style>
