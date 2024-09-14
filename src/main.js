import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes/router'
// import { auth } from '@/config/firebase'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
