import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'

import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)

import  firebase from 'firebase/compat/app'
import '@/assets/firebase'

import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 1024,
    pc: Infinity,
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,

  created() {
    firebase.auth().onAuthStateChanged(pUserInfo => {
      if (pUserInfo !== null) {
        store.dispatch('fnDoLoginAuto', pUserInfo)
      }
    })
  }, 

  render: h => h(App)
}).$mount('#app')
