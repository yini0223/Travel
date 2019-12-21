import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name: 'Home',
      },
      // 按需加载 异步组件拆分  建议只有当打包过后的app.js很大的时候才使用异步组件拆分，比较小的时候就不用
      component: () => import ('@/pages/home/Home')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import ('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import ('@/pages/city/City')
    }, 
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import ('@/pages/detail/Detail')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import ('@/pages/search/Search')
    }
  ],
  // 解决滚动多个页面相互影响
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
