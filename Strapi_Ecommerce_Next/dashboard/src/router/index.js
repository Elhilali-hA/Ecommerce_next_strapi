import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/DashboardHome.vue'
import TheLogin from '../views/TheLogin.vue'
import Register from '../components/Auth/TheRegister.vue'
import Password from '../views/PasswordForget.vue'


const  routes = [
        {path: '/dashboard', name:'dashboard', component: Home},
        {path: '/login', name:'login', component: TheLogin},
        {path: '/register', name:'register', component: Register},
        {path: '/forget-password', name:'password', component: Password},


    
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router