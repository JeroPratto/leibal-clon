import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/product/:id',
			name: 'product',
			component: ProductView,
		},
		{
			path: '/favorites',
			name: 'favorites',
			component: FavoritesView,
		},
	],
})

export default router
