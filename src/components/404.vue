<template>
	<div style="width: 100%; height: 100%; overflow: hidden; position: relative">
		<div
			class="error-page"
			style="
				position: absolute;
				z-index: 2;
				display: flex;
				flex-direction: column;
				text-align: center;
				gap: 30px;
			"
		>
			<div class="error-code">页面不存在</div>
			<div class="error-handle">
				<router-link to="/hello">
					<button class="a">返回首页</button>
				</router-link>
			</div>
		</div>
		<img
			src="@/assets/404.gif"
			style="width: 100%; height: 100%; position: absolute; top: 0"
			alt="404"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let goBack = () => {
	router.push("/hello");
};
</script>

<style lang="less" scoped>
.a {
	cursor: pointer;
	pointer-events: all;

	position: relative;
	text-decoration: none;
	width: 160px;
	height: 60px;
	color: #4b4b4b;
	font-size: 30px;
	font-weight: bolder;
	padding: 10px;
	background-color: transparent;
	border: none;
	border-radius: 100px;
	overflow: hidden;
	box-shadow: 10px 10px 30px 0px #4b4b4b;
}
.a:hover {
	color: #fff;
	text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #777979,
		0 0 35px #777979, 0 0 40px #777979, 0 0 50px #777979, 0 0 75px #777979;
}

.error-page {
	pointer-events: none;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	text-shadow: 30px 30px 40px #2d2c2c;
}
.error-code {
	margin-top: 20px;
	line-height: 1;
	font-size: 250px;
	text-align: center;
	font-weight: bolder;
	color: #4b4b4bc9;
	pointer-events: none;
}
.error-code span {
	color: #4b4b4b;
}
.error-desc {
	font-size: 30px;
	color: #4b4b4b;
}
.error-handle {
	margin-top: 30px;
	padding-bottom: 200px;
}
.error-btn {
	margin-left: 100px;
}
</style>
