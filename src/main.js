// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Importing Materials-Framework for Material Design UI Elements
import 'jquery'
import 'materialize-css'
import materializeCss from 'materialize-css/dist/css/materialize.min.css'
Vue.use(materializeCss)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
