import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Element from 'element-ui'
import router from './router/index.js'

Vue.use(Element)

Vue.config.productionTip = false
console.log(store.state.count)
Vue.prototype.testGlobal = function () {
  return '这是一个全局的方法'
}
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
