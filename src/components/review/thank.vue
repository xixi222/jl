<template>
	<ul class="ul1">
		<li style="text-align: center; margin-bottom: 16px !important">
			<h3 style="font-size: 26px; display: inline-block">感谢您的阅览！</h3>
			<h3
				style="
					font-size: 26px;
					display: inline-block;
					text-align: left;
					line-height: 40px;
				"
			>
				您的观看是对我继续学习的最大的动力！<br />已记录您的阅览时长，会根据此数据来持续优化本网站。
			</h3>
			<div style="text-align: center">
				<router-link
					to="/main"
					:replace="true"
					style="
						color: #00a999;
						text-decoration: none;
						font-size: 25px;
						padding: 0;
					"
					>查看详情</router-link
				>
			</div>
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
	height: 206px;
	background-color: rgba(250, 235, 215, 0);
	color: #d0c6c6;
	position: fixed;
	left: 170px;
	top: 50%;
	margin-top: -153px;
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
