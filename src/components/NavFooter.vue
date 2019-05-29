<template>
	<footer>
		<div class="row flex-column flex-md-row justify-content-between align-items-center">
			<img src="/logo.png" alt="Vue" class="img-fluid mx-5">
			<ul class="d-flex  justify-content-around justify-content-md-end list-unstyled">
				<li class="text-decoration-none">
					<router-link to="/" class="nav-link">Home</router-link>
				</li>
				<li class="text-decoration-none">
					<router-link to="/charts" class="nav-link">Charts</router-link>
				</li>
				<li class="text-decoration-none">
					<router-link to="/about" class="nav-link">About</router-link>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "NavFooter"
	}
</script>

<style scoped>
	.img-fluid{
		width: 40px;
		height: 40px;
	}

	footer{
		margin-top: 15rem;
	}
</style>