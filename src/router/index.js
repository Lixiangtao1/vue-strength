import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'/form',
      name:'form',
      component: () => import('./../components/form.vue')
    }
  ]
})
export default router