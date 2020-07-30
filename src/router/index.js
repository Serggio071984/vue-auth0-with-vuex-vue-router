import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Members from '../views/Members.vue'
import Login from '../views/Login.vue'
import Store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/members',
        name: 'members',
        component: Members,
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let routerAuthCheck = true; //TODO: add actual check
    if (routerAuthCheck) {
        Store.commit('setUserIsAuthenticated', true);
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //Check if user is logged in
        if (routerAuthCheck) {
            //User is logged In
            //TODO: commit ot Store that user in authenticated

            next();
        } else {
            //user not loggen in
            router.replace('/login');
        }
    }
    //Allow page to load
    else {
        next();
    }
});

export default router;