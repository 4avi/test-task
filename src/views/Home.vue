<template>
	<div>
		<div class="text-center hero mb-5">
			<img class="mb-3 img-fluid" src="/world_map.png" alt="GeoData">
			<h2>Discover the world</h2>
		</div>
		<countries/>
	</div>
</template>

<script>
	import Countries from "../components/Countries";

	export default {
		name: "home",
		components: {Countries},
	};
</script>

<style lang="scss">
	.next-steps {
		.fa-link {
			margin-right: 5px;
		}
	}

	.btn {
		border-radius: .25rem;
	}

	body {
		background-color: #ebeef8;
	}
</style>
