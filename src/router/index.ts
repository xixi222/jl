import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
let routes: RouteRecordRaw[] = [
	{
		path: "/hello",
		component: () => import("../components/HelloWorld.vue"),
	},
	{
		path: "/main",
		component: () => import("../components/main.vue"),
	},
	{
		path: "/404",
		component: () => import("../components/404.vue"),
	},
	{
		path: "/review",
		component: () => import("../components/review.vue"),
		children: [
			{
				path: "practice",
				component: () => import("../components/review/practice.vue"),
			},
			{
				path: "works",
				component: () => import("../components/review/works.vue"),
			},
			{
				path: "about",
				component: () => import("../components/review/about.vue"),
			},
			{
				path: "thank",
				component: () => import("../components/review/thank.vue"),
			},
		],
	},
	{
		path: "/",
		redirect: "/hello",
	},

	{
		path: "/:catchAll(.*)",
		redirect: "/404",
	},
];
let router = createRouter({
	history: createWebHistory(),
	routes,
});
let old = 0;
let startTime = Date.now();
let currentTime;
router.beforeEach((to, from, next) => {
	function up() {
		currentTime = Date.now();
		if (sessionStorage.getItem(to.path)) {
			old = Number(sessionStorage.getItem(to.path));
		}

		sessionStorage.setItem(
			to.path,
			"" + (old + (currentTime - startTime) / 1000)
		);
		console.log(111, to.path, sessionStorage.getItem(to.path));
	}
	window.removeEventListener("beforeunload", up);
	window.addEventListener("beforeunload", up);
	if (to && from) {
		currentTime = Date.now();
		console.log(
			"用户由 ",
			from.path,
			" 页面 跳转到 ",
			to.path,
			" 页面，在 ",
			from.path,
			" 页面停留了 ",
			currentTime - startTime,
			"毫秒。转换成秒数约为：",
			Number((currentTime - startTime) / 1000)
		);
		if (from.path != "/" && from.path != "/review") {
			if (sessionStorage.getItem(from.path)) {
				old = Number(sessionStorage.getItem(from.path));
			}

			sessionStorage.setItem(
				from.path,
				"" + (old + (currentTime - startTime) / 1000)
			);
		}
		// console.log(params);
		startTime = Date.now();
		next();
	}
});

export default router;
