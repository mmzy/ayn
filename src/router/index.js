import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/layouts/Menu'
import HelloWorld from '@/layouts/HelloWorld'
import SameHCols from '@/layouts/SameHCols'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/samehcols',
      name: 'SameHCols',
      component: SameHCols
    }
  ]
})
