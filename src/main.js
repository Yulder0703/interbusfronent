import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BootstrapVue, BootstrapVueIcons,IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)
Vue.config.productionTip = false


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';





new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
