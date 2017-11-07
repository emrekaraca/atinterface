import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Collection from '@/components/Collection'
import Analysis from '@/components/Analysis'
// import DebugInfo from '@/components/DebugInfo'
// import TopicModel from '@/components/TopicModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: Analysis
    },
    {
      path: '/debuginfo',
      name: 'DebugInfo',
      component: Home
    },
    {
      path: '/topicmodel',
      name: 'TopicModel',
      component: Home
    }
  ]
})
