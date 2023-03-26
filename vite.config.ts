import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; // path 模块提供了一些工具函数，用于处理文件与目录的路径

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	resolve: {
		alias: {
			"@": resolve(process.cwd(), "src"), // 设置 `@` 指向 `src` 目录
		},
	},
});
