import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/tag',
      name: 'tag',
      component: () => import('../views/TagsView.vue')
    }
  ]
})

export default router
