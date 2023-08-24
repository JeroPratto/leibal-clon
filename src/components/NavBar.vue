<template>
	<nav class="containerNavbar">
		<router-link to="/" class="titleNavbar">LEIBAL</router-link>
		<router-link to="/favorites" class="favorites">Favorites</router-link>
	</nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.titleNavbar {
	font-size: 1.3rem;
	font-weight: 500;
	letter-spacing: 1px;
}

.containerNavbar {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3.8rem;
	border-bottom: 1px solid #f5f5f5;
}
@media screen and (max-width: 700px) {
	.containerNavbar {
		padding: 0 1em;
	}
}
</style>
