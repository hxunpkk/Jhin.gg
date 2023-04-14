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
        }
    ]
})