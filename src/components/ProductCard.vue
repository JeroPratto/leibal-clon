<template>
	<router-link
		:to="{ name: 'product', params: { id: product.key } }"
		class="containerItem"
	>
		<ProductDoubleImages
			:product-data="{
				alt: product.title,
				urlImgMain: product.urlImgMain,
				urlImgSecond: product.urlImgSecond,
			}"
		/>
		<div class="containerInfo">
			<div class="topInfo">
				<p class="text">{{ product.date }}</p>
				<p class="text">{{ product.tag }}</p>
			</div>
			<div class="bottomInfo">
				<p class="title">{{ product.title }}</p>
				<p class="text">{{ product.by }}</p>
			</div>
		</div>
	</router-link>
</template>

<script setup lang="ts">
import type { Product } from '@/models/productModel'
import ProductDoubleImages from '@/components/ProductDoubleImages.vue'

const { product } = defineProps<{ product: Product }>()
</script>

<style scoped>
.containerItem {
	display: flex;
	flex-direction: column;
	cursor: pointer;
}
.containerImg {
	width: 100%;
	aspect-ratio: 1/1;
	overflow: hidden;
	position: relative;
}
.containerImg img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
	position: absolute;
	transition: opacity 0.3s ease-in-out;
	z-index: 1;
}
.secondImg {
	opacity: 0;
}

.containerImg:hover {
	.mainImg {
		opacity: 0;
	}
	.secondImg {
		opacity: 1;
	}
}

.containerInfo {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: start;
	flex-direction: column;
}
.topInfo {
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	margin: 0.5rem 0;
	gap: 5px;
}
.text {
	font-size: var(--smal-text-size);
	font-weight: var(--title-weight);
	line-height: 10px;
	color: var(--text-color);
}
.title {
	font-size: var(--small-title-size);
	font-weight: 500;
	line-height: var(--by-line);
	color: var(--text-color);
}

.bottomInfo {
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
}
</style>
