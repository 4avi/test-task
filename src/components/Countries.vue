<template>
	<div class="container">
		<div class="row justify-content-between">
			<div class="col-12 col-md-5">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<label class="input-group-text">
							<font-awesome-icon icon="search"/>
						</label>
					</div>
					<input class="form-control" type="text" v-model="search" placeholder="Search title.."/>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="row justify-content-around justify-content-md-end mb-3">
					<button type="button" class="btn btn-primary mr-3" @click.prevent="sortByPopulation">
						<font-awesome-icon
								:icon="sortOrderPopulation === 'desc' ? 'sort-numeric-down': 'sort-numeric-up'"/>
						<span class="d-none d-md-inline-block ml-2">Order by population</span>
					</button>
					<button type="button" class="btn btn-primary" @click.prevent="sortByName">
						<font-awesome-icon :icon="sortOrderName === 'desc' ? 'sort-alpha-down': 'sort-alpha-up'"/>
						<span class="d-none d-md-inline-block ml-2">Order by name</span>
					</button>
				</div>
			</div>

		</div>
		<div class="row">
			<country v-for="(country, index) in filteredCountriesList"
			         :key="index"
			         :name="country.name"
			         :image="country.flag"
			         :population="country.population"
			         :slug="country.alpha3Code.toLowerCase()"
			/>
		</div>
	</div>
</template>

<script>
	import Country from "./Country";

	export default {
		name: "Countries",
		components: {Country},
		data() {
			return {
				search: '',
				countries: [],
				sortOrderPopulation: 'asc',
				sortOrderName: 'asc',
			}
		},
		methods: {
			sortByPopulation() {
				if (this.sortOrderPopulation === 'desc') {
					this.countries.sort((a, b) => {
						return a.population - b.population;
					}).reverse();
					this.sortOrderPopulation = 'asc'
				} else {
					this.countries.sort((a, b) => {
						return a.population - b.population;
					});
					this.sortOrderPopulation = 'desc'
				}
			},
			sortByName() {
				if (this.sortOrderName === 'desc') {
					this.countries.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						}
						if (a.name > b.name) {
							return 1;
						}
						return 0;
					}).reverse();
					this.sortOrderName = 'asc'
				} else {
					this.countries.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						}
						if (a.name > b.name) {
							return 1;
						}
						return 0;
					});
					this.sortOrderName = 'desc'
				}
			}
		},
		computed: {
			filteredCountriesList() {
				this.countries = this.$store.getters.allCountries;

				return this.countries.filter(country => {
					return country.name.toLowerCase().includes(this.search.toLowerCase())
				})
			}
		}
	};
</script>
