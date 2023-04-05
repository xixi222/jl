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

		<router-view v-slot="{ Component }">
			<Transition>
				<component :is="Component" />
			</Transition>
		</router-view>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import { initThree2 } from "../threets/review";
import { useRouter } from "vue-router";
import { manager, bufArrays } from "../threets/review/gltf";

const router = useRouter();

const three = ref();
const arr = ["在校实习经历", "工作项目经历", "联系到我", "感谢阅览"];

const fa = ref();
const index = ref(null);
let ccc = function (a, e) {};
let num = 0;

onMounted(() => {
	index.value = 0;
	let init = new initThree2(three.value);
	manager.onLoad = () => {
		init.transition(bufArrays[0]);
	};
	ccc = (a, e) => {
		if (index.value != a) {
			index.value = a;
			init.transition(bufArrays[a]);
		}
	};

	fa.value.onwheel = init.debounce((e) => {
		if (e.deltaY > 0) {
			num = num + 1 > 3 ? 0 : num + 1;
			return ccc(num, e);
		}
		if (e.deltaY < 0) {
			num = num - 1 < 0 ? 3 : num - 1;
			return ccc(num, e);
		}
	}, 2000);

	watchEffect(() => {
		if (index.value == 0) {
			router.push("/review/practice");
		}
		if (index.value == 1) {
			router.push("/review/works");
		}
		if (index.value == 2) {
			router.push("/review/about");
		}
		if (index.value == 3) {
			router.push("/review/thank");
		}
	});
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
