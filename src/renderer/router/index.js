import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'landing-page',
      component: require('@/components/Login').default
    },
    {
      path:'/home',
      name:'home-page',
      component: require('@/components/home').default
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
