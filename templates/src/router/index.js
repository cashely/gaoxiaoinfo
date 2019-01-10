import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import ArticleIndex from '@/components/Articles/Index'
import ArticleDetail from '@/components/Articles/Detail'
import KeywordSchool from '@/components/keywords/School'
import KeywordPointer from '@/components/keywords/Pointer'
import KeywordCourse from '@/components/keywords/Course'
import CategoryIndex from '@/components/Categorys/Index'
import CategoryDetail from '@/components/Categorys/Detail'
import SchoolsIndex from '@/components/Schools/Index'
import SpecialsIndex from '@/components/Specials/Index'
import SpecialsDetail from '@/components/Specials/Detail' 
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
        path: 'keyword/schools',
        component: KeywordSchool
      }, {
        path: 'keyword/pointers',
        component: KeywordPointer
      }, {
        path: 'keyword/courses',
        component: KeywordCourse
      }, {
        path: 'menus',
        component: CategoryIndex
      }, {
        path: 'menu',
        component: CategoryDetail
      }, {
        path: 'schools',
        component: SchoolsIndex
      }, {
        path: 'specials',
        component: SpecialsIndex
      }, {
        path: 'special/:id',
        component: SpecialsDetail
      }]
    }
  ]
})
