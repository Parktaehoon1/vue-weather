import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/HomeView.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:Home,
            component:Home
        }
    ]
})