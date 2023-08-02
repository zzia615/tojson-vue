import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JsonViewer from 'vue-json-viewer'
Vue.config.productionTip = false
Vue.use(JsonViewer)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
