import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import vuetyped from "vue3typed";
import "animate.css";
import axios from "axios";

const pinia = createPinia();
const app = createApp(App);
app.provide("$axios", axios);
app.use(vuetyped);
app.use(pinia);
app.use(router);
app.mount("#app");
