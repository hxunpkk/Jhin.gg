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
        { path:'/finduser_list', name:'finduser_list', component:()=>import('../components/finduser_list.vue')},
        { path:'/freeboard_list', name:'freeboard_list', component:()=>import('../components/freeboard_list.vue')},
        { path:'/humor_list', name:'humor_list', component:()=>import('../components/humor_list.vue')},
        { path:'/notice_list', name:'notice_list', component:()=>import('../components/notice_list.vue')},
        { path:'/picture_list', name:'picture_list', component:()=>import('../components/picture_list.vue')},
        { path:'/report_list', name:'report_list', component:()=>import('../components/report_list.vue')},
        { path:'/tips_list', name:'tips_list', component:()=>import('../components/tips_list.vue')},
        { path:'/usernews_list', name:'usernews_list', component:()=>import('../components/usernews_list.vue')},
        { path:'/video_list', name:'video_list', component:()=>import('../components/video_list.vue')},
        { path:'*', redirect:'/'}
    ]
})