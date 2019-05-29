<template>
	<div class="container">
		<div class="row mb-5 align-items-center">
			<div class="col-12 col-md-6">
				<h1 class="mb-3">{{country.name}}</h1>
				<p>Capital: {{country.capital}}</p>
				<p>Subregion: {{country.subregion}}</p>
				<p>Region: {{country.region}}</p>
			</div>
			<div class="col-12 col-md-6">
				<img :src="country.flag" :alt="country.name" class="img-fluid rounded">
			</div>
		</div>
		<hr class="my-5">
		<h2 class="my-3">Properties</h2>
		<div class="row">
			<ul class="list-group mb-5 col-12 col-md-4">
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="font-weight-bold">Main</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Name:</span>
					<span class="font-weight-bold">{{country.name}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Alpha 2 code:</span>
					<span class="font-weight-bold">{{country.alpha2Code}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Alpha 3 code:</span>
					<span class="font-weight-bold">{{country.alpha3Code}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Capital:</span>
					<span class="font-weight-bold">{{country.capital}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Subregion:</span>
					<span class="font-weight-bold">{{country.subregion}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Region:</span>
					<span class="font-weight-bold">{{country.region}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Population:</span>
					<span class="font-weight-bold">{{country.population}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Numeric code:</span>
					<span class="font-weight-bold">{{country.numericCode}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Area:</span>
					<span class="font-weight-bold">{{country.area}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Demonym:</span>
					<span class="font-weight-bold">{{country.demonym}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Latitude:</span>
					<span class="font-weight-bold"> {{country.latlng[0]}}</span>
				</li>
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<span class="badge badge-success">Longitude:</span>
					<span class="font-weight-bold"> {{country.latlng[1]}}</span>
				</li>
			</ul>
			<div class="col-12 col-md-8">
				<div class="row">
					<ul class="list-group mb-5 col-12 col-md-6">
						<li class="list-group-item d-flex justify-content-between align-items-center">
							<span class="font-weight-bold">Languages</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center"
						    v-for="(value, key) in country.languages[0]"
						>
							<span class="badge badge-success">{{key.charAt(0).toUpperCase() + key.slice(1)}}</span>
							<span class="font-weight-bold">{{value === '' || value === null ? '-': value}}</span>
						</li>
					</ul>
					<ul class="list-group mb-5 col-12 col-md-6">
						<li class="list-group-item d-flex justify-content-between align-items-center">
							<span class="font-weight-bold">Regional blocs</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center"
						    v-for="(value, key) in country.regionalBlocs[0]"
						>
							<span class="badge badge-success">{{key.charAt(0).toUpperCase() + key.slice(1)}}</span>
							<span class="font-weight-bold">{{value === '' || value === null || value === [] ? '-': value}}</span>
						</li>
					</ul>
					<ul class="list-group mb-5 col-12 col-md-6">
						<li class="list-group-item d-flex justify-content-between align-items-center">
							<span class="font-weight-bold">Alt spellings</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center"
						    v-for="(value, key) in country.altSpellings"
						>
							<span class="badge badge-success">Alt spellings</span>
							<span class="font-weight-bold">{{value === '' || value === null ? '-': value}}</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center"
						    v-for="(value, key) in country.topLevelDomain"
						>
							<span class="badge badge-success">Top level domain:</span>
							<span class="font-weight-bold">{{value === '' || value === null ? '-': value}}</span>
						</li>
					</ul>
					<ul class="list-group mb-5 col-12 col-md-6">
						<li class="list-group-item d-flex justify-content-between align-items-center">
							<span class="font-weight-bold">Currencies</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center"
						    v-for="(value, key) in country.currencies[0]"
						>
							<span class="badge badge-success">{{key.charAt(0).toUpperCase() + key.slice(1)}}</span>
							<span class="font-weight-bold">{{value === '' || value === null ? '-': value}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CountryDetails",
		computed: {
			country() {
				return this.$store.getters.currentCountry;
			}
		},
		beforeMount() {
			this.$store.dispatch('getCountry', this.$route.params.slug)

		}
	}
</script>

<style scoped>

</style>