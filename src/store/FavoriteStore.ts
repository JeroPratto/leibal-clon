import { defineStore } from 'pinia'
import type { Product } from '../models/productModel'

export const useFavoriteStore = defineStore('useFavoriteStore', {
	state: () => {
		return {
			favorites: [] as Product[],
		}
	},
	actions: {
		addFavorite(product: Product) {
			this.favorites.unshift(product)
		},
		eliminateFavorite(id: string) {
			this.favorites = this.favorites.filter((product) => product.key != id)
		},
		getIncludeById(id: string) {
			const include = this.favorites.filter((product) => product.key === id)
			if (include.length != 0) return true
			else return false
		},
	},
	persist: true,
})
