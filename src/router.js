import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
// Add more routes as needed

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
