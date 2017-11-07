// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // Importing ElementUI component library
import locale from 'element-ui/lib/locale/lang/da' // Importing Danish language locale from ElementUI
import '../theme/index.css' // Importing customized ElementUI-stylesheet - More Info: http://element.eleme.io/#/en-US/component/custom-theme
import VModal from 'vue-js-modal' // Importing module easy modal-creation
Vue.use(VModal, { dialog: true }) // Registering VModal in Vue-Instance - More Info: https://github.com/euvl/vue-js-modal/
Vue.use(ElementUI, { locale }) // Registering ElementUI (with specified da-locale) in Vue-Instance

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
