<template>
	<div class="containerImg">
		<slot name="AddFavorite"></slot>
		<img :src="productData.urlImgMain" :alt="productData.alt" class="mainImg" />
		<img
			:src="productData.urlImgSecond"
			:alt="productData.alt"
			class="secondImg"
		/>
	</div>
</template>

<script setup lang="ts">
interface IDoubleImages {
	urlImgMain: string
	urlImgSecond: string
	alt: string
}
const { productData } = defineProps<{ productData: IDoubleImages }>()
</script>

<style scoped>
.containerImg {
	grid-column: span 7 / span 7;
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
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
</style>
