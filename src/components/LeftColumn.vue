<template>
	<div class="firstColumn">
		<div class="mainItem">
			<ProductCardMain :product="mainProduct" />
		</div>
		<div v-for="product in fourProducts" :key="product.key" class="fourItem">
			<ProductCard :product="product" />
		</div>
		<div v-for="product in sixProducts" :key="product.key" class="sixItem">
			<ProductCard :product="product" />
		</div>
	</div>
</template>

<script setup lang="ts">
import ProductCardMain from './ProductCardMain.vue'
import ProductCard from './ProductCard.vue'
import ProductServices from '@/services/ProductServices'

const service = new ProductServices()
const products = service.getProducts()
const mainProduct = products[0]
const fourProducts = products.slice(1, 5)
const sixProducts = products.slice(5, 11)
</script>

<style scoped>
.firstColumn {
	grid-column: span 6 / span 6;
	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
	gap: 2em;
}
.mainItem {
	grid-column: span 6 / span 6;
	width: 100%;
	padding-bottom: 4em;
}
.fourItem {
	grid-column: span 3 / span 3;
}

.sixItem {
	grid-column: span 2 / span 2;
}

@media screen and (max-width: 700px) {
	.fourItem {
		grid-column: span 6 / span 6;
	}
	.sixItem {
		grid-column: span 6 / span 6;
	}
	.mainItem {
		padding-bottom: 0;
	}
}
</style>
