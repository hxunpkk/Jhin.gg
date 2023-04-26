import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'

import  firebase from 'firebase/compat/app'
import '@/assets/firebase'

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
