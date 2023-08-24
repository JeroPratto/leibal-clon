<template>
	<div class="container">
		<h1 class="title">Favorites</h1>
		<div v-if="store.favorites.length === 0">
			<h2>Don't have any favorites</h2>
		</div>
		<div v-else class="containerFavorites">
			<div
				class="containerCard"
				v-for="product in store.favorites"
				:key="product.key"
			>
				<button @click="handleDelete(product.key)" class="btnDelete">
					<v-icon name="bi-dash-circle-fill" color="#fff" />
				</button>
				<router-link :to="{ name: 'product', params: { id: product.key } }">
					<div class="containerImg">
						<img :src="product.urlImgMain" :alt="product.title" />
					</div>
					<div class="containerData">
						<p class="titleData">{{ product.title }}</p>
						<p class="byData">{{ product.by }}</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useFavoriteStore } from '@/store/FavoriteStore'

const store = useFavoriteStore()
console.log(store.favorites.length, store.favorites.length === 0)
const handleDelete = (id: string) => {
	store.eliminateFavorite(id)
}
</script>

<style scoped>
.container {
	padding: 3em 3.8rem;
	width: 100%;
	min-height: 100vh;
}
.title {
	padding-bottom: 2em;
}
.containerFavorites {
	display: grid;
	grid-template-columns: repeat(10, minmax(0, 1fr));
	grid-template-rows: auto;
	gap: 2em;
	row-gap: 4em;
}
.containerCard {
	grid-column: span 2 / span 2;
	width: 100%;
	position: relative;
}
.containerImg {
	aspect-ratio: 1 / 1.5;
	width: 100%;
}
.btnDelete {
	position: absolute;
	right: 5px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	height: 30px;
	width: 30px;
}
.containerImg img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center center;
}
.titleData {
	font-size: var(--small-title-size);
	font-weight: var(--title-weight);
	line-height: var(--by-line);
	color: var(--text-color);
}
.byData {
	font-size: var(--smal-text-size);
	font-weight: var(--title-weight);
	line-height: 10px;
	color: var(--text-color);
}

@media screen and (max-width: 1000px) {
	.containerCard {
		grid-column: span 3 / span 3;
	}
}

@media screen and (max-width: 700px) {
	.container {
		padding: 3em 1em;
	}
	.containerCard {
		grid-column: span 5 / span 5;
	}
}
</style>
