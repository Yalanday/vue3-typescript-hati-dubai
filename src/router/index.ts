import {createMemoryHistory, createRouter} from 'vue-router';
import {RouteRecordRaw} from "vue-router";
import NotFound from "@/pages/NotFound.vue";
import HomePage from '@/pages/HomePage.vue';
import CompanyPage from "@/pages/CompanyPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/company',
        component: CompanyPage
    },

];

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})