(function(e){function t(t){for(var r,i,s=t[0],l=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("Navbar")],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{beforeLeave:e.beforeLeave,enter:e.enter,afterEnter:e.afterEnter}},[n("router-view")],1),n("div",[n("Footer")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isPlayground?n("nav",{staticClass:"navbar"},e._l(e.portfolioRoutes,(function(t){return n("div",{key:t.name},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)})),0):n("nav",{staticClass:"navbar"},e._l(e.playgroundRoutes,(function(t){return n("div",{key:t.name},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name)+" ")])],1)})),0)])},s=[],l=(n("4de4"),n("d3b7"),n("caad"),n("2532"),{name:"Navbar",computed:{portfolioRoutes:function(){return this.$router.options.routes.filter((function(e){return!e.path.includes("playground")}))},playgroundRoutes:function(){return this.$router.options.routes.filter((function(e){return e.path.includes("playground")}))},isPlayground:function(){return!this.$route.path.includes("playground")}}}),u=l,c=n("2877"),p=Object(c["a"])(u,i,s,!1,null,null,null),f=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"copyright"},[e._v(" Copyright © "+e._s((new Date).getFullYear())+" Jonas Marschall ")]),n("a",{attrs:{href:"https://github.com/OG-Jons",target:"_blank"}},[n("unicon",{attrs:{name:"github",fill:"#FFFFFF68","hover-fill":"white"}})],1),n("a",{attrs:{href:"https://www.instagram.com/jonassucksatbiking/",target:"_blank"}},[n("unicon",{attrs:{name:"instagram",fill:"#FFFFFF68","hover-fill":"white"}})],1),n("a",{attrs:{href:"mailto:jonas@marschall.pro"}},[n("unicon",{attrs:{name:"envelope",fill:"#FFFFFF68","hover-fill":"white"}})],1)])},d=[],m={name:"Footer"},v=m,b=Object(c["a"])(v,h,d,!1,null,"60d2dadc",null),g=b.exports,_={name:"App",metaInfo:{titleTemplate:"%s | Marschall"},components:{Navbar:f,Footer:g},methods:{beforeLeave:function(e){this.prevHeight=getComputedStyle(e).height},enter:function(e){var t=getComputedStyle(e),n=t.height;e.style.height=this.prevHeight,setTimeout((function(){e.style.height=n}))},afterEnter:function(e){e.style.height="auto"}}},y=_,x=Object(c["a"])(y,a,o,!1,null,null,null),j=x.exports,w=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(" hello "),n("vue-typer",{staticClass:"gradient-text",attrs:{text:"Jonas Marschall",repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":40,"erase-style":"backspace","caret-animation":"expand"}})],1)])},P=[],S={name:"Home",metaInfo:{title:"Home"}},E=S,F=Object(c["a"])(E,O,P,!1,null,null,null),k=F.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")]),n("p",[e._v("I will say stuff about myself ig?")])])}],C={name:"About",metaInfo:{title:"About me"}},I=C,M=Object(c["a"])(I,T,$,!1,null,null,null),D=M.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("git-hub-projects")],1)},H=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ghProjects.length>0?n("div",[n("h1",[e._v("Github")]),n("transition-group",{attrs:{name:"fade",tag:"div",id:"github-projects"}},e._l(e.ghProjects,(function(t){return n("a",{key:t.id,staticClass:"card",attrs:{href:t.html_url,target:e.hrefTarget}},[n("h2",[e._v(e._s(t.name))]),n("p",[e._v(" "+e._s(t.description?t.description:"No Description")+" ")])])})),0)],1):e._e()},R=[],G=n("1da1"),N=(n("96cf"),n("bf19"),n("99af"),n("a4d3"),n("e01a"),{name:"GitHubProjects",data:function(){return{ghProjects:[]}},methods:{getGithubProjects:function(){var e=this;this.axios.get("https://api.github.com/users/OG-Jons/repos?sort=updated&per_page=6").then((function(t){e.ghProjects=t.data})).catch((function(t){console.log(t.toJSON()),e.ghProjects.push({id:1,name:"".concat(t.toJSON().message,": ").concat(t.toJSON().code),description:t.toJSON().description})}))}},beforeMount:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getGithubProjects();case 2:case"end":return t.stop()}}),t)})))()},computed:{hrefTarget:function(){return 1===this.ghProjects.length?"_self":"_blank"}}}),Q=N,U=Object(c["a"])(Q,J,R,!1,null,null,null),L=U.exports,Y={name:"Projects",metaInfo:{title:"Projects"},components:{GitHubProjects:L}},q=Y,z=Object(c["a"])(q,A,H,!1,null,null,null),B=z.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Here we're gonna do some animations")]),n("c-s-s-hover-animations")],1)},V=[],W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex"},[n("div",[n("h3",[e._v("Growing")]),n("div",{staticClass:"box growing-box"})]),n("div",[n("h3",[e._v("Spinning")]),n("div",{staticClass:"box spinning-box"})])])}],Z={name:"CSSHoverAnimations"},ee=Z,te=(n("5c1e"),Object(c["a"])(ee,W,X,!1,null,null,null)),ne=te.exports,re={name:"CSSAnimations",components:{CSSHoverAnimations:ne},metaInfo:{title:"CSS Animations",description:"CSS Animations are a way to animate elements on the web. They are used to create a smooth transition between two different states."}},ae=re,oe=Object(c["a"])(ae,K,V,!1,null,null,null),ie=oe.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Playground stuff will go here")])},le=[],ue={name:"Playground",metaInfo:{title:"Playground"}},ce=ue,pe=Object(c["a"])(ce,se,le,!1,null,null,null),fe=pe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("pokedex")])},de=[],me={name:"PokeAPI",metaInfo:{title:"PokeAPI"}},ve=me,be=Object(c["a"])(ve,he,de,!1,null,null,null),ge=be.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dictionary")},ye=[],xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Urban Dictionary Search Engine")]),n("InputField",{model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e.results.length>0?n("div",[n("h1",[e._v("Results")]),n("div",{attrs:{id:"github-projects"}},e._l(e.results,(function(t){return n("div",{key:t.defid,staticClass:"card"},[n("h2",[e._v(e._s(t.word))]),n("div",{attrs:{id:"description"}},[t.readMoreDescription?t.readMoreDescription?n("p",[e._v(" "+e._s(t.definition)+" ")]):e._e():n("p",[e._v(" "+e._s(e._f("spliceTextTo100")(t.definition))+" "),n("br"),t.definition.length>100?n("a",{on:{click:function(e){t.readMoreDescription=!t.readMoreDescription}}},[e._v(" Read more")]):e._e()])]),n("br"),n("div",{attrs:{id:"example"}},[n("span",[e._v("Example: ")]),t.readMoreExample?t.readMoreExample?n("p",[e._v(e._s(t.example))]):e._e():n("p",[e._v(" "+e._s(e._f("spliceTextTo100")(t.example))+" "),n("br"),t.example.length>100?n("a",{on:{click:function(e){t.readMoreExample=!t.readMoreExample}}},[e._v(" Read more")]):e._e()])])])})),0)]):e._e()],1)},je=[],we=n("5530"),Oe=(n("d81d"),n("ac1f"),n("841c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"webflow-style-input"},[n("input",{attrs:{type:e.type,placeholder:e.placeholder},domProps:{value:e.content},on:{input:e.handleInput}})])}),Pe=[],Se={name:"InputField",props:{value:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},arguments:{type:Array,default:function(){return[]}}},data:function(){return{content:this.value}},methods:{handleInput:function(e){this.$emit("input",e.target.value)}}},Ee=Se,Fe=Object(c["a"])(Ee,Oe,Pe,!1,null,null,null),ke=Fe.exports,Te={name:"Dictionary",components:{InputField:ke},metaInfo:{title:"Urban Dictionary Search Engine"},data:function(){return{searchQuery:"",results:[],idleTimer:null}},methods:{search:function(){var e=this;this.axios.get("urban-dictionary",{params:{term:this.searchQuery}}).then((function(t){e.results=[],e.results=t.data.map((function(e){return Object(we["a"])(Object(we["a"])({},e),{},{readMoreDescription:!1,readMoreExample:!1})}))})).catch((function(e){console.error(e)}))},searchIfIdle:function(){""!==this.searchQuery?(clearTimeout(this.idleTimer),this.idleTimer=setTimeout(this.search,200)):(clearTimeout(this.idleTimer),this.results=[])}},filters:{spliceTextTo100:function(e){return e.length>100?"".concat(e.substring(0,100),"..."):e}},watch:{searchQuery:function(){this.searchIfIdle()}}},$e=Te,Ce=(n("92eb"),Object(c["a"])($e,xe,je,!1,null,"21f32a68",null)),Ie=Ce.exports,Me={name:"UrbanDictionary",components:{Dictionary:Ie}},De=Me,Ae=Object(c["a"])(De,_e,ye,!1,null,null,null),He=Ae.exports;r["a"].use(w["a"]);var Je=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:D},{path:"/projects",name:"Projects",component:B},{path:"/playground",name:"Playground",component:fe},{path:"/playground/css-animations",name:"CSS Animations",component:ie},{path:"/playground/pokedex",name:"Pokedex",component:ge},{path:"/playground/urban",name:"Urban Dictionary",component:He}],Re=new w["a"]({routes:Je});Re.beforeEach((function(e,t,n){e.matched.length?n():n(t.path)}));var Ge=Re,Ne=(n("9536"),n("e956")),Qe=n.n(Ne),Ue=n("bc3a"),Le=n.n(Ue),Ye=n("130e"),qe=n("58ca"),ze=n("cb81"),Be=n.n(ze),Ke=n("d327");Be.a.add([Ke["c"],Ke["b"],Ke["a"]]),r["a"].use(Be.a),r["a"].config.productionTip=!1,r["a"].use(Ye["a"],Le.a),r["a"].use(qe["a"]),r["a"].use(Qe.a),Le.a.defaults.baseURL="https://api.marschall.com/",new r["a"]({router:Ge,render:function(e){return e(j)}}).$mount("#app")},"5c1e":function(e,t,n){"use strict";n("78b3")},"78b3":function(e,t,n){},"92eb":function(e,t,n){"use strict";n("9619")},9536:function(e,t,n){},9619:function(e,t,n){}});
//# sourceMappingURL=app.29dd1c6f.js.map