import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import ArticleIndex from '@/components/Articles/Index'
import ArticleDetail from '@/components/Articles/Detail'
import KeywordSchool from '@/components/keywords/School'
import KeywordPointer from '@/components/keywords/Pointer'
import CategoryIndex from '@/components/Categorys/Index'
import CategoryDetail from '@/components/Categorys/Detail'
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
      }, {
        path: 'keyword/school',
        component: KeywordSchool
      }, {
        path: 'keyword/pointer',
        component: KeywordPointer
      }, {
        path: 'menus',
        component: CategoryIndex
      }, {
        path: 'menu',
        component: CategoryDetail
      }]
    }
  ]
})
