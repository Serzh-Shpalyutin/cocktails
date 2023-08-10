import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cocktail/:rid',
      name: 'Cocktail',
      component: Cocktail
    },
    {
      path: '/cocktail-random/',
      name: 'CocktailRandom',
      component: CocktailRandom
    },
  ]
})

export default router
