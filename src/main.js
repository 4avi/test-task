import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import AuthPlugin from "./plugins/auth";
import HighlightJs from "./directives/highlight";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faLink, faLock, faSortNumericDown, faSortNumericUp, faSortAlphaDown, faSortAlphaUp, faSearch, faGlobeEurope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

Vue.use(AuthPlugin);
Vue.directive("highlightjs", HighlightJs);

Vue.config.productionTip = false;

library.add(faLink);
library.add(faLock);
library.add(faSortNumericDown);
library.add(faSortNumericUp);
library.add(faSortAlphaDown);
library.add(faSortAlphaUp);
library.add(faSearch);
library.add(faGlobeEurope);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
