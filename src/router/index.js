import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SameHCols from '../layouts/SameHCols'

Vue.use(Router)

export default new Router({
  routes: [
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
