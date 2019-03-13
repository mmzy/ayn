import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/layouts/Menu'
import HelloWorld from '@/layouts/HelloWorld'
import StayCenter from '@/layouts/StayCenter'
import SameHCols from '@/layouts/SameHCols'
import TriangleCss from '@/layouts/TriangleCss'
import OnePx from '@/layouts/OnePx'
import ParallaxScroll from '@/layouts/ParallaxScroll'
import Sleep from '@/layouts/Sleep'
// import BindFunc from '@/layouts/BindFunc'

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
    },
    {
      path: '/onepx',
      name: 'OnePx',
      component: OnePx
    },
    {
      path: '/parallaxscroll',
      name: 'ParallaxScroll',
      component: ParallaxScroll
    },
    {
      path: '/sleep',
      name: 'Sleep',
      component: Sleep
    },
    // {
    //   path: '/bind',
    //   name: 'BindFunc',
    //   component: BindFunc
    // }
  ]
})
