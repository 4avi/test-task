import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		countries: [],
		currentCountry:[],
	},
	getters:{
		allCountries: state => state.countries,
		currentCountry: state => state.currentCountry,
	},
	mutations:{
		GET_COUNTRIES: (state, countries) => {
			state.countries = countries
		},
		SET_COUNTRY: (state, country) => {
			state.currentCountry = country
		}
	},
	actions:{
		getCountries({commit}) {
			axios.get('https://restcountries.eu/rest/v2/all').then(response => {
				commit('GET_COUNTRIES',response.data)
			});
		},
		getCountry({commit, state}, slug){
			axios.get(`https://restcountries.eu/rest/v2/alpha/${slug}`).then(response => {
				commit('SET_COUNTRY',response.data)
			});
		}
	}
});