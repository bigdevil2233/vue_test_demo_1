import Vue from 'vue'
import Router from 'vue-router'
import TodoListDemo from '@/pages/TodoListDemo'
import Tab from '@/pages/Tab'
import Index from '@/pages/Index'
import vueInfiniteScroll from '@/pages/vue-infinite-scroll'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/todolist',
      name: 'TodoListDemo',
      component: TodoListDemo
    },
    {
      path: '/tab',
      name: 'TabDemo',
      component: Tab
    },
    {
      path: '/infiniteScroll',
      name: 'vueInfiniteScrollDemo',
      component: vueInfiniteScroll
    }
  ]
})
