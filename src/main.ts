import * as DevTools from '@vue/devtools'
import App from './App.vue'
import Vue from 'vue'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  DevTools.connect('localhost', 8098)
}

new Vue({
  render: h => h(App)
}).$mount('#app')
