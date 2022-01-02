import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from '/src/components/HelloWorld.vue'
import Home from '/src/views/Home.vue'
import ListCompany from "../views/ListCompany.vue"
import RegisterCompany from "../views/RegisterCompany.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/list-companies",
        name: "ListCompanies",
        component: ListCompany
    },
    {
        path: "/register-company",
        name: "RegisterCompany",
        component: RegisterCompany
    }
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});

export default index;