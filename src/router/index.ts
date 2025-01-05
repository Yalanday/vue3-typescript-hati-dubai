import {createWebHistory, createRouter} from 'vue-router';
import {RouteRecordRaw} from "vue-router";
import NotFound from "@/pages/NotFound.vue";
import SalePage from '@/pages/SalePage.vue';
import CompanyPage from "@/pages/CompanyPage.vue";
import HomePage from "@/pages/HomePage.vue";
import NewsPage from "@/pages/NewsPage.vue";
import CatalogSale from "@/pages/CatalogSale.vue";

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
        path: '/best',
        component: SalePage
    },
    {
        path: '/company',
        component: CompanyPage
    },
    {
        path: '/sale',
        component: CatalogSale
    },
    {
        path: '/news',
        component: NewsPage
    },


];

export const router = createRouter({
    history: createWebHistory(),
    routes
})