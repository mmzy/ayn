import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/layouts/Menu'
import HelloWorld from '@/layouts/HelloWorld'
import StayCenter from '@/layouts/StayCenter'
import SameHCols from '@/layouts/SameHCols'
import TriangleCss from '@/layouts/TriangleCss'

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
      path: '/staycenter',
      name: 'StayCenter',
      component: StayCenter
    },
    {
      path: '/samehcols',
      name: 'SameHCols',
      component: SameHCols
    },
    {
      path: '/triangle',
      name: 'TriangleCss',
      component: TriangleCss
    }
  ]
})
