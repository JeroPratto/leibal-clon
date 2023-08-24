<template>
	<div class="containerTables">
		<p class="titleTables">FEATURED PRODUCTS</p>
		<div class="tables">
			<div v-for="table in tables" :key="table.key" class="table">
				<ProductCard :product="table" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import ProductServices from '@/services/ProductServices'
const service = new ProductServices()
const tables = service.getTableProducts()
</script>

<style scoped>
.titleTables {
	font-size: var(--small-title-size);
	font-weight: 500;
	line-height: var(--by-line);
	color: var(--text-color);
	margin-bottom: 0.5em;
}
.containerTables {
	margin-top: 5em;
	padding-bottom: 2em;
}
.tables {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	gap: 2em;
}
@media screen and (max-width: 1000px) {
	.tables {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
	.table:last-child {
		display: none;
	}
}
@media screen and (max-width: 700px) {
	.table {
		grid-column: span 4 / span 4;
	}
}
</style>
