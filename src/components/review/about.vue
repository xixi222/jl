<template>
	<ul class="ul1">
		<li>
			<vuetyped
				id="levealTop"
				style="font-size: 25px"
				:strings="['手机QQ或微信扫描二维码 了解更多']"
				:loop="true"
				:typeSpeed="80"
				:smart-backspace="false"
				:showCursor="true"
			>
				<div class="typing"></div>
			</vuetyped>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="less" scoped>
.ul1 {
	user-select: none;
	width: 500px;
	height: 400px;
	background-color: rgba(250, 235, 215, 0);
	color: #d0c6c6;
	position: fixed;
	right: 80px;
	top: 250px;
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
