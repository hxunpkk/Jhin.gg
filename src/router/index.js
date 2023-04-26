import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[ 
        { path:'/', name:'main_page', component:()=>import('../components/main_page.vue')},
        { path:'/stats', name:'stats_page', component:()=>import('../components/stats_page.vue')},
        { path:'/login', name:'login_page', component:()=>import('../components/login_page.vue')},
        { path:'/join', name:'join_page', component:()=>import('../components/join_page.vue')},
        { path:'/board_list', name:'board_list', component:()=>import('../components/board_list.vue')},
        { path:'*', redirect:'/'}
    ]
})