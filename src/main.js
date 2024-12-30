import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import {createPinia} from "pinia";
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(Antd);
app.use(pinia);
app.use(VueSmoothScroll);

app.mount('#app')
