<template>
	<div class="charts">
		<h2 class="my-4">Countries in regions</h2>
		<div class="chart-regions"></div>
		<hr class="my-5">
		<h2>Population by regions</h2>
		<div class="chart-population"></div>
	</div>
</template>

<script>
	import * as am4core from "@amcharts/amcharts4/core";
	import * as am4charts from "@amcharts/amcharts4/charts";
	import am4themes_animated from "@amcharts/amcharts4/themes/animated";

	am4core.useTheme(am4themes_animated);


	export default {
		name: "Chart",
		mounted() {
			let chartRegions = am4core.create("chart-regions", am4charts.PieChart);

			chartRegions.data = this.regions;

			let pieSeriesRegions = chartRegions.series.push(new am4charts.PieSeries());
			pieSeriesRegions.dataFields.value = "1";
			pieSeriesRegions.dataFields.category = "0";
			pieSeriesRegions.slices.template.stroke = am4core.color("#fff");
			pieSeriesRegions.slices.template.strokeWidth = 2;
			pieSeriesRegions.slices.template.strokeOpacity = 1;

			pieSeriesRegions.hiddenState.properties.opacity = 1;
			pieSeriesRegions.hiddenState.properties.endAngle = -90;
			pieSeriesRegions.hiddenState.properties.startAngle = -90;

			let chartPopulation = am4core.create("chart-population", am4charts.PieChart);

			chartPopulation.data = this.population;

			let pieSeriesPopulation = chartPopulation.series.push(new am4charts.PieSeries());
			pieSeriesPopulation.dataFields.value = "val";
			pieSeriesPopulation.dataFields.category = "key";
			pieSeriesPopulation.slices.template.stroke = am4core.color("#fff");
			pieSeriesPopulation.slices.template.strokeWidth = 2;
			pieSeriesPopulation.slices.template.strokeOpacity = 1;

			pieSeriesPopulation.hiddenState.properties.opacity = 1;
			pieSeriesPopulation.hiddenState.properties.endAngle = -90;
			pieSeriesPopulation.hiddenState.properties.startAngle = -90;


			chartPopulation.legend = new am4charts.Legend();

		},
		beforeDestroy() {
			if (this.chart) {
				this.chart.dispose();
			}
		},
		computed: {
			countries() {
				return this.$store.getters.allCountries;
			},
			regions() {
				let counts = {};

				this.countries.forEach((a) => {
					counts[a.region] = (counts[a.region] || 0) + 1;
				});

				return Object.entries(counts);
			},
			population() {
				let objArr = [];

				this.countries.forEach((a, i) => {
					objArr[i] = {
						'key': a.region,
						'val': a.population
					}
				});

				let temp = {};
				let obj = null;
				for (let i = 0; i < objArr.length; i++) {
					obj = objArr[i];

					if (!temp[obj.key]) {
						temp[obj.key] = obj;
					} else {
						temp[obj.key].val += obj.val;
					}
				}
				let result = [];
				for (let prop in temp)
					result.push(temp[prop]);

				return result
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chart {
		&-regions {
			height: 650px;
		}
		&-population {
			height: 650px;
		}
	}
</style>