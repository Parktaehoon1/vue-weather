import { createApp } from "vue";
import App from "./App";
import router from './router/index'
import store from './store/store'

createApp(App).use(router).use(store).mount('#app');

