import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/table',
        children: [{
                path: '/about',
                name: 'About',
                component: () =>
                    import ('../views/About.vue')
            },
            {
                path: '/edit/:id',
                name: 'edit',
                component: () =>
                    import ('../views/Edit.vue')
            },
            {
                path: '/table',
                name: 'table',
                component: () =>
                    import ('../views/table.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () =>
                    import ('../views/user.vue')
            },
            {
                path: '/logbook',
                name: 'logbook',
                component: () =>
                    import ('../views/logbook.vue')
            }
        ]
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router