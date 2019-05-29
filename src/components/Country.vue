<template>
	<div class="col-12 col-md-4 p-3">
		<div class="card h-100 justify-content-center">
			<router-link :to="{name:'countryDetails',params:{slug}}" class="text-decoration-none text-dark">
				<div class="card-body">
					<div class="row align-items-center">
					<div class="col-4">
						<img :src="image" :alt="name" class="card-img">
					</div>
					<div class="col-8">
						<p class="font-weight-bold m-0">{{name}}</p>
						<p class="m-0">Population: {{population}}</p>
					</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Country",
		props: {
			name: {
				type: String,
				required: true
			},
			image: {
				type: String,
				required: true
			},
			population: {
				type: Number,
				required: true
			},
			slug: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card{
		&:hover{
			background: #e9ecef;
		}
	}
</style>