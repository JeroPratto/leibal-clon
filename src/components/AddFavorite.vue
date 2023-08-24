<template>
	<button
		class="favoriteBtn"
		v-if="inFavorite"
		@click="handleFavorite"
		data-test-id="deleteFavoriteButton"
	>
		<v-icon name="bi-heart-fill" scale="2" color="red" />
	</button>
	<button
		class="favoriteBtn"
		v-else
		@click="handleFavorite"
		data-test-id="addFavoriteButton"
	>
		<v-icon name="bi-heart" scale="2" color="red" />
	</button>
</template>

<script setup lang="ts">
import type { Product } from '@/models/productModel'
import { useFavoriteStore } from '@/store/FavoriteStore'
import { ref } from 'vue'

const props = defineProps<{ id: string; product: Product }>()
let inFavorite = ref(false)
const store = useFavoriteStore()
inFavorite.value = store.getIncludeById(props.id)

const handleFavorite = () => {
	if (inFavorite.value) {
		store.eliminateFavorite(props.id)
		inFavorite.value = false
	} else {
		store.addFavorite(props.product)
		inFavorite.value = true
	}
}
</script>

<style scoped>
.favoriteBtn {
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 20;
	height: 40px;
	width: 40px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	opacity: 1;
	transition: opacity 0.3s ease-in-out;
}
</style>
