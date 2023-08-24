<template>
	<div class="containerHome">
		<div class="container">
			<LeftColumn />
			<RightColumn class="rightColumn" />
		</div>
		<TableRow />
		<div class="container">
			<LeftColumn />
			<RightColumn class="rightColumn" />
		</div>
	</div>
</template>

<script setup lang="ts">
import LeftColumn from '@/components/LeftColumn.vue'
import RightColumn from '@/components/RightColumn.vue'
import TableRow from '@/components/TableRow.vue'
</script>

<style scoped>
.containerHome {
	padding: 0 3.8rem;
	margin-bottom: 5em;
}
.container {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(10, minmax(0, 1fr));
	gap: 2em;
	position: relative;
	margin-top: 3em;
}

@media screen and (max-width: 1000px) {
	.container {
		grid-template-columns: repeat(6, minmax(0, 1fr));
	}
	.rightColumn {
		display: none;
	}
}

@media screen and (max-width: 700px) {
	.containerHome {
		padding: 0 1em;
	}
}
</style>
