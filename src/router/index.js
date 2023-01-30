import { createRouter, createWebHistory } from 'vue-router'
import main from "@/pages/main";
import hexBackground from "@/components/hexBackground";
import hexRandom from "@/components/hexRandom";

const routes = [
  {
    path: '/',
    component: main
  },
  {
    path: '/hex',
    component: hexBackground
  },
  {
    path: '/random',
    component: hexRandom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
