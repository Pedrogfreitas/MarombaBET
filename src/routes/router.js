import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '@/config/firebase'
import Home from '@/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Home',
        component: Home,
    },
    {
        path: '*',
        redirect: '/Home'
    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth= to.matched.some(record => record.meta.requiresAuth);
    console.log('currentUser', auth.currentUser);
    if (requiresAuth && !auth.currentUser) {
        next('/login');
    } else {
        next();
    }
})

export default router