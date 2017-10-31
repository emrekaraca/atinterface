// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Importing Vuetify-Framework for Material Design UI Elements
import Materials from 'vue-materials'
import materializeCss from 'materialize-css/dist/css/materialize.min.css'
Vue.use(Materials)
Vue.use(materializeCss)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
