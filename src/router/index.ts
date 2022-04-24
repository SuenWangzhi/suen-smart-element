import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import container from "../views/container/index.vue";
import home from "../views/Home.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: container,
        children: [
            {
                path: "",
                component: home 
            },
            {
                path: "/dialog",
                component: () => import("../views/Dialog.vue") 
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router