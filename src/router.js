import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./view/index.vue";
import Detail from "./view/detail.vue";
import Nutui from "./view/nutui-demo.vue";

const carefree = process.env.NODE_ENV === "carefree";

// 懒加载（按需加载）
const Detail2 = () => import("./view/detail2.vue");

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Index },
    { path: "/detail", component: Detail },
    { path: "/detail2", component: Detail2 },
    { path: "/nutui", component: Nutui },
    { path: "/calculator", component: () => import("./view/calculator.vue") },
    { path: "/add", component: () => import("./view/add1.vue") },
    { path: "/sub", component: () => import("./view/sub1.vue") },
    { path: "/dialog", component: () => import("./view/dialog.vue") },
    { path: "/tab", component: () => import("./view/tab.vue") },
    { path: "/login", component: () => import("./view/login/login.vue") },
    { path: "/register", component: () => import("./view/register/register.vue") },
    { path: "/jokelist", component: () => import("./view/joke/joke_list.vue") },
    { path: "/jokedetail", component: () => import("./view/joke/joke_detail.vue") }
];

const router = new VueRouter({
    mode: carefree ? "hash" : "history",
    routes
});

export default router;
