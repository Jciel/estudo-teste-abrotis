import { createApp } from 'vue'
import router from "./router"
import Maska from "maska";
import App from './App.vue'
import store from "./store";

createApp(App)
    .use(router)
    .use(Maska)
    .use(store)
    .mount('#app')
