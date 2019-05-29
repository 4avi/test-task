<template>
	<div id="app">
		<nav-bar/>
		<div class="container">
			<error/>
			<div class="mt-5">
				<router-view/>
			</div>
		</div>
		<nav-footer/>
	</div>
</template>

<script>
	import "jquery";
	import "samples-bootstrap-theme";
	import "samples-bootstrap-theme/dist/css/auth0-theme.css";

	import NavBar from "./components/NavBar";
	import Error from "./components/Error";
	import NavFooter from "./components/NavFooter";

	export default {
		data() {
			return {
				allCountries: null
			}
		},
		components: {
			NavFooter,
			NavBar,
			Error
		},
		async created() {
			try {
				await this.$auth.renewTokens();
			} catch {
				// Supress the 'not logged in' error as we can illegitimately get that
				// when processing the callback url
			}
		},
		mounted() {
			this.$store.dispatch('getCountries');
		}
	};
</script>

<style scoped>

</style>