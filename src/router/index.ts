import {createWebHistory, createRouter} from 'vue-router';
import {RouteRecordRaw} from "vue-router";
import NotFound from "@/pages/NotFound.vue";
import SalePage from '@/pages/SalePage.vue';
import CompanyPage from "@/pages/CompanyPage.vue";
import HomePage from "@/pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
        path: "/",
        component: HomePage
    },
    {
        path: '/sale',
        component: SalePage
    },
    {
        path: '/sale',
        component: SalePage
    },
    {
        path: '/company',
        component: CompanyPage
    },

];

export const router = createRouter({
    history: createWebHistory(),
    routes
})