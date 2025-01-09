import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import {createPinia} from "pinia";
import VueSmoothScroll from 'vue3-smooth-scroll'

import {useCurCityStore} from "@/store/cur-city";
import {useCurValuteStore} from "@/store/cur-valute";
import {useMiddleware} from "@/store/middleware";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

const curCityStore = useCurCityStore();
const curValuteStore = useCurValuteStore();

useMiddleware(curCityStore, 'curCityStore')
useMiddleware(curValuteStore, 'curValuteStore')

app.use(router);
app.use(Antd);
app.use(VueSmoothScroll);

app.mount('#app')
