import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import News from '../pages/news/news'
import Live from '../pages/live/live'
import Talk from '../pages/talk/talk'
import Mine from '../pages/mine/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: News
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/talk',
      name: 'Talk',
      component: Talk
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
