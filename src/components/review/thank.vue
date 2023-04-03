<template>
	<ul class="ul1">
		<li style="text-align: center; margin-bottom: 16px !important">
			<h3 style="font-size: 26px; display: inline-block">感谢您的阅览</h3>
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
