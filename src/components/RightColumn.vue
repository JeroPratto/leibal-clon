<template>
	<div class="containerSecondColumn">
		<div class="secondColumn" ref="sidebar">
			<div v-for="product in products" :key="product.key" class="twoColumn">
				<ProductCard :product="product" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import PostService from '@/services/ProductServices'

const service = new PostService()
const products = service.getProducts().slice(12)
</script>

<style scoped>
.containerSecondColumn {
	grid-column: span 4 / span 4;
}
.secondColumn {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	height: auto;
	position: sticky;
	top: 1em;
	gap: 2em;
}
.twoColumn {
	width: calc(50% - 1em);
	max-height: 500px;
}
</style>
