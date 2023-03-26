<script setup lang="ts">
import { onMounted, ref } from "vue";
import { initThree } from "../threets/home";
import { objs } from "../threets/home/3Dobj";
import star from "../threets/home/starts";
import { gsap } from "gsap";
import { lights } from "../threets/home/lights";
import { ElMessage } from "element-plus";
import { useRoute, useRouter } from "vue-router";
const three = ref();
let router = useRouter();

let isShow = ref(true);
const manager = ref("xiaqifeng");
function copyText() {
	let aux = document.createElement("input");
	aux.setAttribute("value", manager.value);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	ElMessage({
		message: "复制成功",
		type: "success",
		customClass: "messageBox",
	});
}
let clic = () => {};
onMounted(() => {
	const init = new initThree(three.value);
	clic = function () {
		isShow.value = false;
		gsap.to("#mid", {
			opacity: 0,
		});
		init.fly(() => {
			router.push("/review");
		});
		// router.push("/main");
	};
	init.addObj(objs, ...lights, star);
	gsap.to("#h1", {
		opacity: 1,
		duration: 3,
		y: 0.2,
		ease: "expo",
	});
	gsap.to("#h3", {
		opacity: 1,
		duration: 2,
		y: 0,
		ease: "expo",
		delay: 0.2,
	});
	gsap.to("#s1", {
		opacity: 1,
		duration: 2.5,
		delay: 0.5,
		ease: "expo",
		y: 0,
	});
	gsap.to("#s2", {
		opacity: 1,
		duration: 2.5,
		y: 0,
		ease: "expo",

		delay: 0.5,
	});
	gsap.to("#a1", {
		opacity: 1,
		duration: 3,
		y: 0,
		ease: "expo",
		delay: 0.8,
	});
});
</script>

<template>
	<div id="three" ref="three"></div>
	<div class="mid" id="mid">
		<h1 id="h1" style="opacity: 0; transform: translateY(30px)">线上简历</h1>
		<h3
			id="h3"
			style="opacity: 0; transform: translateY(30px); margin-top: 8px"
		>
			by:夏崎峰
		</h3>
		<span
			id="s1"
			style="margin: 25px 0 18px 0; opacity: 0; transform: translateY(30px)"
			>The Online Resume</span
		><br />
		<span id="s2" style="opacity: 0; transform: translateY(30px)"
			>The dog rides Lv Bu</span
		><br />
		<button
			id="a1"
			style="opacity: 0; transform: translateY(30px)"
			class="btn"
			@click="clic"
			href="#"
		>
			START
		</button>
	</div>
	<aside class="description" v-if="isShow">
		<span>新页面打开管理系统</span><br />
		<span>账号 : {{ manager }}</span
		><br />
		<span>密码 : {{ manager }}</span>
		<button @click="copyText">复制账号密码并打开</button>
	</aside>
</template>

<style scoped lang="less">
#three {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.description {
	position: fixed;
	left: 5%;
	top: 5%;
	pointer-events: none;

	button {
		pointer-events: auto;
		cursor: pointer;
	}
}

.mid {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-align: center;

	color: whitesmoke;

	pointer-events: none;
	cursor: default;
	h1 {
		font-size: 60px;
	}
	h3 {
		text-align: right;
	}
	span {
		font-size: 40px;
		display: inline-block;
		// font-family: "Exo 2";
	}

	.btn {
		margin-top: 35px;
		position: relative;
		display: inline-block;
		pointer-events: auto;
		cursor: pointer;
		border: none;
		transform: scale(0.7);
		width: 270px;
		height: 90px;
		line-height: 90px;
		text-align: center;
		color: #b7dffc;
		font-size: 34px;
		font-weight: bolder;
		text-transform: uppercase;
		text-decoration: none;
		font-family: sans-serif;
		box-sizing: border-box;
		background: rgba(1, 2, 1, 0);
		background-size: 400%;
		border-radius: 60px;
		z-index: 1;
	}

	.btn:hover {
		background: linear-gradient(90deg, #03a9f4, #faa4d2, #03a9f4);
		animation: animate 8s linear infinite;
	}

	@keyframes animate {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 400%;
		}
	}

	.btn::before {
		content: "";
		position: absolute;
		top: -5px;
		left: -5px;
		right: -5px;
		bottom: -5px;
		z-index: -1;
		background: linear-gradient(90deg, #03a9f4, #faa4d2, #03a9f4);
		background-size: 400%;
		border-radius: 40px;
		opacity: 0;
		transition: 0.5s;
	}

	.btn:hover::before {
		filter: blur(20px);
		opacity: 1;
		animation: animate 8s linear infinite;
	}
}
</style>
