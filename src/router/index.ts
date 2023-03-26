import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
let routes: RouteRecordRaw[] = [
	{
		path: "/hellow",
		component: () => import("../components/HelloWorld.vue"),
	},
	{
		path: "/main",
		component: () => import("../components/main.vue"),
	},
	{
		path: "/review",
		component: () => import("../components/review.vue"),
	},
	{
		path: "/",
		redirect: "/hellow",
	},
];
let router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
