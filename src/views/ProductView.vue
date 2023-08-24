<template>
	<div class="containerProductView">
		<div class="containerTitleAndData">
			<div>
				<h1>{{ product.title }}</h1>
			</div>
			<ul class="containerData">
				<li>{{ product.by }}</li>
				<li>{{ product.date }}</li>
				<li>{{ product.tag }}</li>
			</ul>
		</div>
		<ProductDoubleImages
			:product-data="{
				alt: product.title,
				urlImgMain: product.urlImgMain,
				urlImgSecond: product.urlImgSecond,
			}"
		>
			<template v-slot:AddFavorite>
				<AddFavorite :id="id" :product="product" />
			</template>
		</ProductDoubleImages>
	</div>
</template>

<script setup lang="ts">
import ProductServices from '@/services/ProductServices'
import AddFavorite from '@/components/AddFavorite.vue'
import { useRoute } from 'vue-router'
import ProductDoubleImages from '@/components/ProductDoubleImages.vue'

const route = useRoute()
let id = route.params.id as string

const service = new ProductServices()
const product = service.getProductById(id)
</script>

<style scoped>
.containerProductView {
	padding: 0 3.8rem;
	padding-top: 50px;
	display: grid;
	grid-template-columns: repeat(10, minmax(0, 1fr));
	gap: 2rem;
	height: calc(100vh - 10vh);
}

.containerTitleAndData {
	grid-column: span 3 / span 3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
}
.containerData {
	display: flex;
	flex-direction: column;
	gap: 1em;
}

@media screen and (max-width: 700px) {
	.containerProductView {
		display: flex;
		flex-direction: column;
		padding: 0 1em;
		padding-top: 50px;
	}
	.containerTitleAndData {
		grid-column: span 10 / span 10;
	}
	.containerData {
		display: none;
	}
}
</style>
