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
				<p class="topInfoTitle">{{ product.title }}</p>
				<p class="topInfoBy">{{ product.by }}</p>
			</div>
			<div class="bottomInfo">
				<p class="date">{{ product.date }}</p>
				<p class="tag">{{ product.tag }}</p>
			</div>
		</div>
	</router-link>
</template>

<script setup lang="ts">
import type { Product } from '../models/productModel'
import ProductDoubleImages from '@/components/ProductDoubleImages.vue'

const { product } = defineProps<{ product: Product }>()
</script>

<style scoped>
.containerItem {
	display: grid;
	grid-template-columns: repeat(6, minmax(0px, 1fr));
	gap: 2em;
	cursor: pointer;
}
.containerImg {
	grid-column: span 4 / span 4;
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
	grid-column: span 2 / span 2;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
}
.topInfo {
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
}
.topInfoTitle {
	font-size: var(--title-size-main);
	font-weight: var(--title-weight);
	color: var(--text-color);
	line-height: var(--title-line-main);
	padding-bottom: 20px;
	letter-spacing: var(--title-spacing-main);
}
.topInfoBy {
	font-size: var(--by-size);
	font-weight: var(--title-weight);
	line-height: var(--by-line);
	color: var(--text-color);
}
.bottomInfo {
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding-bottom: 5px;
}
.date,
.tag {
	font-size: var(--info-size);
	color: var(--text-color);
	line-height: var(--info-line);
	font-weight: var(--title-weight);
	letter-spacing: 1px;
}
.date {
	padding-bottom: 0.75rem;
}

@media screen and (max-width: 700px) {
	.containerItem {
		gap: 0;
	}
	.topInfo {
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}
	.topInfoTitle {
		font-size: var(--small-title-size);
		font-weight: var(--title-weight);
		line-height: var(--by-line);
		color: var(--text-color);
		padding: 0;
	}

	.topInfoBy,
	.date,
	.tag {
		font-size: var(--smal-text-size);
		font-weight: var(--title-weight);
		line-height: 10px;
		color: var(--text-color);
		padding: 0;
	}

	.containerImg {
		grid-column: span 6 / span 6;
	}
	.containerInfo {
		grid-column: span 6 / span 6;
	}
}
</style>
