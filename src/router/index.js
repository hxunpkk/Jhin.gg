import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[ 
        {
            path:'/',
            name:'main_page',
            component:()=>import('../components/main_page.vue')
        },
        {
            path:'/stats/',
            name:'stats_page',
            component:()=>import('../components/stats_page.vue')
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})