(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)o=s[l],i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return s.p+"js/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[t]||t)+"."+{canvg:"c4de8b2e","chunk-2d0f0bc1":"2871b486",pdfmake:"90e9a5b5",xlsx:"0f90e1c3"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t),r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0895":function(t,e,n){},"21bb":function(t,e,n){"use strict";var a=n("bcc9"),i=n.n(a);i.a},"369d":function(t,e,n){"use strict";var a=n("e265"),i=n.n(a);i.a},4045:function(t,e,n){t.exports=n.p+"img/loading.c5590569.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("div",{staticClass:"container"},[n("error"),n("div",{staticClass:"mt-5"},[n("router-view")],1)],1),n("nav-footer")],1)},r=[],o=(n("96cf"),n("3b8d")),s=(n("1157"),n("decb"),n("839f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container mb-3"},[n("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("font-awesome-icon",{attrs:{icon:"globe-europe"}}),t._v("\n\t\t\t\t\tGeoData\n\t\t\t\t")],1),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/charts"}},[t._v("Charts")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)]),n("ul",{staticClass:"navbar-nav d-none d-md-block"},[t.isAuthenticated?t._e():n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-primary",attrs:{id:"qsLoginBtn"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login\n\t\t\t\t\t\t\t")])]),t.isAuthenticated?n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"profileDropDown","data-toggle":"dropdown"}},[n("img",{staticClass:"nav-user-profile",attrs:{src:t.profile.picture,alt:"User's profile picture"}})]),n("div",{staticClass:"dropdown-menu dropdown-menu-right"},[n("div",{staticClass:"dropdown-header"},[t._v(t._s(t.profile.name))]),n("router-link",{staticClass:"dropdown-item dropdown-profile",attrs:{to:"/profile"}},[n("span",{staticClass:"icon icon-profile"}),t._v(" Profile\n\t\t\t\t\t\t\t\t")]),n("a",{staticClass:"dropdown-item",attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[n("span",{staticClass:"icon icon-power"}),t._v(" Log out\n\t\t\t\t\t\t\t\t")])],1)]):t._e()]),t.isAuthenticated?t._e():n("ul",{staticClass:"navbar-nav d-md-none"},[n("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("Log in")])]),t.isAuthenticated?n("ul",{staticClass:"navbar-nav d-md-none"},[n("li",{staticClass:"nav-item"},[n("span",{staticClass:"user-info"},[n("img",{staticClass:"nav-user-profile d-inline-block",attrs:{src:t.profile.picture,alt:"User's profile picture"}}),n("h6",{staticClass:"d-inline-block"},[t._v(t._s(t.profile.name))])])]),n("li",[n("span",{staticClass:"icon icon-profile"}),n("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),n("li",[n("span",{staticClass:"icon icon-power"}),n("a",{attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Log out")])])]):t._e()])])])])}),c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],u={name:"NavBar",methods:{login:function(){this.$auth.login()},logout:function(){this.$auth.logOut(),this.$router.push({path:"/"})},handleLoginEvent:function(t){this.isAuthenticated=t.loggedIn,this.profile=t.profile}},data:function(){return{isAuthenticated:!1,profile:{}}}},l=u,d=n("2877"),p=Object(d["a"])(l,s,c,!1,null,null,null),m=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v("\n  "+t._s(t.msg)+"\n  "),t._m(0)]):t._e()},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],h={data:function(){return{show:!1,msg:""}},methods:{handleLoginEvent:function(t){t.error?(this.show=!0,this.msg=t.error.errorDescription):(this.show=!1,this.msg="")}}},g=h,b=Object(d["a"])(g,f,v,!1,null,null,null),C=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"row flex-column flex-md-row justify-content-between align-items-center"},[n("img",{staticClass:"img-fluid mx-5",attrs:{src:"/logo.png",alt:"Vue"}}),n("ul",{staticClass:"d-flex  justify-content-around justify-content-md-end list-unstyled"},[n("li",{staticClass:"text-decoration-none"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"text-decoration-none"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/charts"}},[t._v("Charts")])],1),n("li",{staticClass:"text-decoration-none"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)])])])},y=[],k={name:"NavFooter"},w=k,q=(n("369d"),Object(d["a"])(w,_,y,!1,null,"43c06319",null)),x=q.exports,O={data:function(){return{allCountries:null}},components:{NavFooter:x,NavBar:m,Error:C},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$auth.renewTokens();case 3:t.next=7;break;case 5:t.prev=5,t.t0=t["catch"](0);case 7:case"end":return t.stop()}},t,this,[[0,5]])}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){this.$store.dispatch("getCountries")}},E=O,j=Object(d["a"])(E,i,r,!1,null,"21038a40",null),A=j.exports,T=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("countries")],1)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center hero mb-5"},[n("img",{staticClass:"mb-3 img-fluid",attrs:{src:"/world_map.png",alt:"GeoData"}}),n("h2",[t._v("Discover the world")])])}],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-between"},[n("div",{staticClass:"col-12 col-md-5"},[n("div",{staticClass:"input-group mb-3"},[n("div",{staticClass:"input-group-prepend"},[n("label",{staticClass:"input-group-text"},[n("font-awesome-icon",{attrs:{icon:"search"}})],1)]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search title.."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"row justify-content-around justify-content-md-end mb-3"},[n("button",{staticClass:"btn btn-primary mr-3",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.sortByPopulation(e)}}},[n("font-awesome-icon",{attrs:{icon:"desc"===t.sortOrderPopulation?"sort-numeric-down":"sort-numeric-up"}}),n("span",{staticClass:"d-none d-md-inline-block ml-2"},[t._v("Order by population")])],1),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.sortByName(e)}}},[n("font-awesome-icon",{attrs:{icon:"desc"===t.sortOrderName?"sort-alpha-down":"sort-alpha-up"}}),n("span",{staticClass:"d-none d-md-inline-block ml-2"},[t._v("Order by name")])],1)])])]),n("div",{staticClass:"row"},t._l(t.filteredCountriesList,function(t,e){return n("country",{key:e,attrs:{name:t.name,image:t.flag,population:t.population,slug:t.alpha3Code.toLowerCase()}})}),1)])},N=[],P=(n("386d"),n("6762"),n("2fdb"),n("7f7f"),n("55dd"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-md-4 p-3"},[n("div",{staticClass:"card h-100 justify-content-center"},[n("router-link",{staticClass:"text-decoration-none text-dark",attrs:{to:{name:"countryDetails",params:{slug:t.slug}}}},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-4"},[n("img",{staticClass:"card-img",attrs:{src:t.image,alt:t.name}})]),n("div",{staticClass:"col-8"},[n("p",{staticClass:"font-weight-bold m-0"},[t._v(t._s(t.name))]),n("p",{staticClass:"m-0"},[t._v("Population: "+t._s(t.population))])])])])])],1)])}),I=[],D=(n("c5f6"),{name:"Country",props:{name:{type:String,required:!0},image:{type:String,required:!0},population:{type:Number,required:!0},slug:{type:String,required:!0}}}),B=D,R=(n("a0ee"),Object(d["a"])(B,P,I,!1,null,"6e91655f",null)),U=R.exports,F={name:"Countries",components:{Country:U},data:function(){return{search:"",countries:[],sortOrderPopulation:"asc",sortOrderName:"asc"}},methods:{sortByPopulation:function(){"desc"===this.sortOrderPopulation?(this.countries.sort(function(t,e){return t.population-e.population}).reverse(),this.sortOrderPopulation="asc"):(this.countries.sort(function(t,e){return t.population-e.population}),this.sortOrderPopulation="desc")},sortByName:function(){"desc"===this.sortOrderName?(this.countries.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}).reverse(),this.sortOrderName="asc"):(this.countries.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}),this.sortOrderName="desc")}},computed:{filteredCountriesList:function(){var t=this;return this.countries=this.$store.getters.allCountries,this.countries.filter(function(e){return e.name.toLowerCase().includes(t.search.toLowerCase())})}}},M=F,G=Object(d["a"])(M,S,N,!1,null,null,null),W=G.exports,H={name:"home",components:{Countries:W}},J=H,V=(n("21bb"),Object(d["a"])(J,$,L,!1,null,null,null)),Q=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center profile-header"},[n("div",{staticClass:"col-md-2"},[n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.profile.picture,alt:"User's profile picture"}})]),n("div",{staticClass:"col-md"},[n("h2",[t._v(t._s(t.profile.name))]),n("p",{staticClass:"lead text-muted"},[t._v(t._s(t.profile.email))])])]),n("div",{staticClass:"row"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticClass:"rounded"},[n("code",{staticClass:"json"},[t._v(t._s(JSON.stringify(t.profile,null,2)))])])])])},Z=[],z={data:function(){return{profile:this.$auth.profile}},methods:{handleLoginEvent:function(t){this.profile=t.profile}}},X=z,K=Object(d["a"])(X,Y,Z,!1,null,null,null),tt=K.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("This is about page")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid debitis deleniti dolorem\n\t\tdolores\n\t\tearum esse et, illo impedit inventore numquam quae, qui quos rerum saepe totam velit vero.\n\t")]),n("p",[t._v("Aliquam aperiam, beatae, cupiditate enim eos facere inventore labore laborum molestias nemo neque nobis\n\t\tporro\n\t\tquam ratione sapiente unde vero! Illo ipsam molestias sapiente. Atque eius facilis impedit repellat saepe?\n\t")]),n("p",[t._v("Aliquam aliquid debitis delectus dolore, doloribus ducimus, eligendi harum hic non nulla pariatur quos\n\t\trecusandae reiciendis rem repellat similique, sunt voluptates. Beatae fugiat, inventore obcaecati officiis\n\t\treprehenderit voluptatem voluptatibus voluptatum?\n\t")]),n("p",[t._v("Accusamus error itaque quisquam totam veniam. Dicta ex illum saepe ut. Ad atque cum deserunt distinctio\n\t\teaque\n\t\tipsa molestias nesciunt numquam odit, optio quaerat qui recusandae repellat sapiente, tenetur ullam!\n\t")]),n("p",[t._v("Adipisci blanditiis eaque id minus natus necessitatibus neque non omnis, porro, qui quisquam sequi ut\n\t\tveniam?\n\t\tConsequatur consequuntur corporis distinctio dolorum ducimus fugiat, hic impedit iure maxime omnis quibusdam\n\t\trecusandae.\n\t")]),n("p",[t._v("Accusantium aperiam commodi distinctio, dolorum hic minus nemo rem sapiente! A corporis cum dignissimos\n\t\tdolore\n\t\tinventore ipsum laborum libero ratione. Est harum laboriosam maiores non porro provident, quaerat quia\n\t\tquisquam.\n\t")]),n("p",[t._v("A dolorum ducimus error explicabo impedit itaque modi similique veritatis. Ab consequatur eveniet explicabo\n\t\tinventore minima odit, optio quisquam repudiandae sequi soluta velit voluptate. Assumenda eius porro\n\t\trepellat\n\t\tsimilique tempore?\n\t")]),n("p",[t._v("A accusantium adipisci autem consequatur debitis dolore doloremque dolorum ea illo ipsa itaque magnam nam\n\t\tnatus\n\t\tnecessitatibus nesciunt nulla numquam odio optio possimus, quo quos recusandae reiciendis repellat voluptate\n\t\tvoluptatum.\n\t")]),n("p",[t._v("Amet distinctio doloribus eaque eum incidunt inventore, ipsa magni maiores mollitia, neque omnis\n\t\tperferendis\n\t\tprovident quas, sequi veritatis! Accusantium adipisci aliquam consequuntur, eum ipsam ipsum modi nesciunt\n\t\tnisi\n\t\tquaerat totam.\n\t")]),n("p",[t._v("Culpa eveniet exercitationem neque qui, reiciendis sit ut vero voluptate? Amet deleniti earum incidunt\n\t\tiusto\n\t\trem. Eaque nam omnis perspiciatis reiciendis sint. Distinctio ea id iste laboriosam minima nihil recusandae.\n\t")])])}],at={name:"About"},it=at,rt=Object(d["a"])(it,et,nt,!1,null,"a059a69c",null),ot=rt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Chart")},ct=[],ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"charts"},[n("h2",{staticClass:"my-4"},[t._v("Countries in regions")]),n("div",{staticClass:"chart-regions"}),n("hr",{staticClass:"my-5"}),n("h2",[t._v("Population by regions")]),n("div",{staticClass:"chart-population"})])}],dt=n("2d1f"),pt=n.n(dt),mt=(n("ac6a"),n("71c9")),ft=n("c497"),vt=n("5a54");mt["c"](vt["a"]);var ht={name:"Chart",mounted:function(){var t=mt["b"]("chart-regions",ft["b"]);t.data=this.regions;var e=t.series.push(new ft["c"]);e.dataFields.value="1",e.dataFields.category="0",e.slices.template.stroke=mt["a"]("#fff"),e.slices.template.strokeWidth=2,e.slices.template.strokeOpacity=1,e.hiddenState.properties.opacity=1,e.hiddenState.properties.endAngle=-90,e.hiddenState.properties.startAngle=-90;var n=mt["b"]("chart-population",ft["b"]);n.data=this.population;var a=n.series.push(new ft["c"]);a.dataFields.value="val",a.dataFields.category="key",a.slices.template.stroke=mt["a"]("#fff"),a.slices.template.strokeWidth=2,a.slices.template.strokeOpacity=1,a.hiddenState.properties.opacity=1,a.hiddenState.properties.endAngle=-90,a.hiddenState.properties.startAngle=-90,n.legend=new ft["a"]},beforeDestroy:function(){this.chart&&this.chart.dispose()},computed:{countries:function(){return this.$store.getters.allCountries},regions:function(){var t={};return this.countries.forEach(function(e){t[e.region]=(t[e.region]||0)+1}),pt()(t)},population:function(){var t=[];this.countries.forEach(function(e,n){t[n]={key:e.region,val:e.population}});for(var e={},n=null,a=0;a<t.length;a++)n=t[a],e[n.key]?e[n.key].val+=n.val:e[n.key]=n;var i=[];for(var r in e)i.push(e[r]);return i}}},gt=ht,bt=(n("a1df"),Object(d["a"])(gt,ut,lt,!1,null,"6fc03be3",null)),Ct=bt.exports,_t={name:"Charts",components:{Chart:Ct}},yt=_t,kt=Object(d["a"])(yt,st,ct,!1,null,"0e317e64",null),wt=kt.exports,qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("img",{attrs:{src:n("4045"),alt:"Loading"}})])}],Ot={methods:{handleLoginEvent:function(t){t.error||this.$router.push(t.state.target||"/")}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$auth.handleAuthentication();case 3:t.next=9;break;case 5:t.prev=5,t.t0=t["catch"](0),this.$router.push("/"),console.error(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,5]])}));function e(){return t.apply(this,arguments)}return e}()},Et=Ot,jt=(n("7424"),Object(d["a"])(Et,qt,xt,!1,null,"6125b297",null)),At=jt.exports,Tt=n("0a0d"),$t=n.n(Tt),Lt=n("795b"),St=n.n(Lt),Nt=n("d225"),Pt=n("b0b4"),It=n("308d"),Dt=n("6bb5"),Bt=n("4e2b"),Rt=n("013f"),Ut=n("bd86"),Ft=n("b0af"),Mt=n("faa1"),Gt=n("8160"),Wt=new Ft["a"].WebAuth({domain:Gt.domain,redirectUri:"".concat(window.location.origin,"/callback"),clientID:Gt.clientId,responseType:"id_token",scope:"openid profile email"}),Ht="loggedIn",Jt="loginEvent",Vt=function(t){function e(){var t,n;Object(Nt["a"])(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return n=Object(It["a"])(this,(t=Object(Dt["a"])(e)).call.apply(t,[this].concat(i))),Object(Ut["a"])(Object(Rt["a"])(Object(Rt["a"])(n)),"idToken",null),Object(Ut["a"])(Object(Rt["a"])(Object(Rt["a"])(n)),"profile",null),Object(Ut["a"])(Object(Rt["a"])(Object(Rt["a"])(n)),"tokenExpiry",null),n}return Object(Bt["a"])(e,t),Object(Pt["a"])(e,[{key:"login",value:function(t){Wt.authorize({appState:t})}},{key:"logOut",value:function(){localStorage.removeItem(Ht),this.idToken=null,this.tokenExpiry=null,this.profile=null,Wt.logout({returnTo:"".concat(window.location.origin)}),this.emit(Jt,{loggedIn:!1})}},{key:"handleAuthentication",value:function(){var t=this;return new St.a(function(e,n){Wt.parseHash(function(a,i){a?(t.emit(Jt,{loggedIn:!1,error:a,errorMsg:a.statusText}),n(a)):(t.localLogin(i),e(i.idToken))})})}},{key:"isAuthenticated",value:function(){return $t()()<this.tokenExpiry&&"true"===localStorage.getItem(Ht)}},{key:"isIdTokenValid",value:function(){return this.idToken&&this.tokenExpiry&&$t()()<this.tokenExpiry}},{key:"getIdToken",value:function(){var t=this;return new St.a(function(e,n){t.isIdTokenValid()?e(t.idToken):t.isAuthenticated()?t.renewTokens().then(function(t){e(t.idToken)},n):e()})}},{key:"localLogin",value:function(t){this.idToken=t.idToken,this.profile=t.idTokenPayload,this.tokenExpiry=new Date(1e3*this.profile.exp),localStorage.setItem(Ht,"true"),this.emit(Jt,{loggedIn:!0,profile:t.idTokenPayload,state:t.appState||{}})}},{key:"renewTokens",value:function(){var t=this;return new St.a(function(e,n){if("true"!==localStorage.getItem(Ht))return n("Not logged in");Wt.checkSession({},function(a,i){a?n(a):(t.localLogin(i),e(i))})})}}]),e}(Mt["EventEmitter"]),Qt=new Vt;Qt.setMaxListeners(5);var Yt=Qt;a["a"].use(T["a"]);var Zt=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:ot},{path:"/profile",name:"profile",component:tt},{path:"/charts",name:"charts",component:wt},{path:"/callback",name:"callback",component:At},{path:"/country/:slug",name:"countryDetails",component:function(){return n.e("chunk-2d0f0bc1").then(n.bind(null,"9e43"))}}]});Zt.beforeEach(function(t,e,n){if("/"===t.path||"/callback"===t.path||Yt.isAuthenticated()||"/about"===t.path)return n();Yt.login({target:t.path})});var zt=Zt,Xt=n("2f62"),Kt=n("bc3a"),te=n.n(Kt);a["a"].use(Xt["a"]);var ee=new Xt["a"].Store({state:{countries:[],currentCountry:[]},getters:{allCountries:function(t){return t.countries},currentCountry:function(t){return t.currentCountry}},mutations:{GET_COUNTRIES:function(t,e){t.countries=e},SET_COUNTRY:function(t,e){t.currentCountry=e}},actions:{getCountries:function(t){var e=t.commit;te.a.get("https://restcountries.eu/rest/v2/all").then(function(t){e("GET_COUNTRIES",t.data)})},getCountry:function(t,e){var n=t.commit;t.state;te.a.get("https://restcountries.eu/rest/v2/alpha/".concat(e)).then(function(t){n("SET_COUNTRY",t.data)})}}}),ne={install:function(t){t.prototype.$auth=Yt,t.mixin({created:function(){this.handleLoginEvent&&Yt.addListener("loginEvent",this.handleLoginEvent)},destroyed:function(){this.handleLoginEvent&&Yt.removeListener("loginEvent",this.handleLoginEvent)}})}},ae=n("a70e"),ie=n.n(ae),re=n("5ad2"),oe=n.n(re);n("6e2e");ie.a.registerLanguage("json",oe.a);var se={deep:!0,bind:function(t,e){var n=t.querySelectorAll("code");n.forEach(function(t){e.value&&(t.textContent=e.value),ie.a.highlightBlock(t)})},componentUpdated:function(t,e){var n=t.querySelectorAll("code");n.forEach(function(t){e.value&&(t.textContent=e.value,ie.a.highlightBlock(t))})}},ce=n("ecee"),ue=n("c074"),le=n("ad3d");a["a"].use(ne),a["a"].directive("highlightjs",se),a["a"].config.productionTip=!1,ce["c"].add(ue["b"]),ce["c"].add(ue["c"]),ce["c"].add(ue["g"]),ce["c"].add(ue["h"]),ce["c"].add(ue["e"]),ce["c"].add(ue["f"]),ce["c"].add(ue["d"]),ce["c"].add(ue["a"]),a["a"].component("font-awesome-icon",le["a"]),new a["a"]({router:zt,store:ee,render:function(t){return t(A)}}).$mount("#app")},"59ca":function(t,e,n){},7424:function(t,e,n){"use strict";var a=n("59ca"),i=n.n(a);i.a},8160:function(t){t.exports={domain:"maydich.eu.auth0.com",clientId:"366AA6IqZovnZbQ4D03obRWeBQXk-1eI"}},a0ee:function(t,e,n){"use strict";var a=n("a43e"),i=n.n(a);i.a},a1df:function(t,e,n){"use strict";var a=n("0895"),i=n.n(a);i.a},a43e:function(t,e,n){},bcc9:function(t,e,n){},e265:function(t,e,n){}});
//# sourceMappingURL=app.0ba1f463.js.map