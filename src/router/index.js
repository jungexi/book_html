import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Book from '@/components/book/Book'
import Parent from '@/components/test/Parent'

Vue.use(Router)
/* 路由的配置信息 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'hd',
      component: HelloWorld
    },{
      path: '/b',
      name: 'book',
      component: Book
    },{
      path: '/c',
      name: 'test',
      component: Parent
    }
  ]
})
