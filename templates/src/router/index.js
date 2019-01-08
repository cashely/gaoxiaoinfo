import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import ArticleIndex from '@/components/Articles/Index'
import ArticleDetail from '@/components/Articles/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [{
        path: 'articles',
        component: ArticleIndex
      },{
        path: 'articles/:id',
        component: ArticleDetail
      }]
    }
  ]
})
