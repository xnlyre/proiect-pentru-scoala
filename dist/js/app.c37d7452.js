(function(e){function t(t){for(var a,c,s=t[0],o=t[1],l=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,s=1;s<i.length;s++){var o=i[s];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=i[0]))}return e}var a={},n={app:0},r=[];function c(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=e,c.c=a,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(i,a,function(t){return e[t]}.bind(null,a));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="proiect-pentru-scoala/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},3740:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e6cf"),i("a4d3");var a=i("2b0e"),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"wrapper"},[t("router-view")],1)])},r=[],c={},s=c,o=i("2877"),l=Object(o["a"])(s,n,r,!1,null,null,null),u=l.exports,d=i("8c4f"),p=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-header page-header-small"},[t("parallax",{staticClass:"page-header-image",staticStyle:{"background-image":"url('img/hacker.jpg')"}}),e._m(0)],1),e._m(1)])},f=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-center"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"title-main"},[e._v("Securitatea cibernetica")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"section section-about-us"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-8 ml-auto mr-auto text-center"},[t("h2",{staticClass:"title"},[e._v("Ce este aceasta?")]),t("h5",{staticClass:"description-main"},[e._v(" Securitatea cibernetică, numită și securitate digitală, este practica de a proteja informațiile, dispozitivele și activele digitale. Între acestea se numără informațiile personale, conturile, fișierele, fotografiile și chiar banii. ")])])]),t("div",{staticClass:"separator separator-primary"}),t("div",{staticClass:"section-story-overview"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"image-container image-left",staticStyle:{"background-image":"url('img/cards.jpg')"}}),t("div",{staticClass:"description-container"},[t("h5",{staticClass:"description-sec"},[e._v(" Fără o securitate informatică adecvată, informațiile dvs. bancare, mesajele private sau activitățile online ar putea fi văzute de oricine (în acest scop vă poate ajuta un VPN). Atacurile cibernetice ar putea paraliza spitalele, băncile, transporturile, comunicațiile și diferitele organizații furnizoare de utilități. ")])]),t("div",{staticClass:"image-container",staticStyle:{"background-image":"url('img/north-vpn-image.jpg')"}})]),t("div",{staticClass:"col-md-5"},[t("div",{staticClass:"image-container image-right",staticStyle:{"background-image":"url('img/monitor-with-code.jpg')"}}),t("h1",{staticClass:"title"},[e._v(" Pentru ce este securitatea cibernetică importanta? ")]),t("h5",{staticClass:"description-sec"},[e._v(" Majoritatea sistemelor care gestionează serviciile pe care le folosim zilnic s-au mutat online. De la organizații financiare și îngrijire medicală, până la rețele electrice care alimentează orașe întregi – aceste sisteme se bazează pe tehnologia digitală. Protecția cibernetică este ceea ce le permite să funcționeze corespunzător – este zidul de apărare care ține la distanță atacurile cibernetice. Fără o securitate informatică adecvată, informațiile dvs. bancare, mesajele private sau activitățile online ar putea fi văzute de oricine (în acest scop vă poate ajuta un VPN). Atacurile cibernetice ar putea paraliza spitalele, băncile, transporturile, comunicațiile și diferitele organizații furnizoare de utilități. ")])])])])])])}],v={name:"landing",bodyClass:"landing-page",data:function(){return{form:{firstName:"",email:"",message:""}}}},m=v,b=(i("7f9c"),Object(o["a"])(m,p,f,!1,null,null,null)),g=b.exports;a["default"].use(d["a"]);var h=new d["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"index",components:{default:g},props:{header:{colorOnScroll:400},footer:{backgroundColor:"black"}}}],scrollBehavior:function(e){return e.hash?{selector:e.hash}:{x:0,y:0}}}),y=(i("f9e3"),i("bbbb"),i("958b"),{bind:function(e,t,i){e.clickOutsideEvent=function(a){e==a.target||e.contains(a.target)||i.context[t.expression](a)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}),C={install:function(e){e.directive("click-outside",y)}},_=C,j={install:function(e){e.mixin({mounted:function(){var e=this.$options.bodyClass;e&&document.body.classList.add(e)},beforeDestroy:function(){var e=this.$options.bodyClass;e&&document.body.classList.remove(e)}})}},x=j,w=(i("b0c0"),function(){var e=this,t=e._self._c;return t("div",{style:e.styles},[e._t("default")],2)}),k=[];function O(e,t,i){var a;return function(){var n=this,r=arguments;clearTimeout(a),a=setTimeout((function(){a=null,i||e.apply(n,r)}),t),i&&!a&&e.apply(n,r)}}var z={name:"parallax",data:function(){return{styles:{},debounceTimeout:6}},methods:{handleScroll:function(e){var t=e/3;this.styles={transform:"translate3d(0, ".concat(t,"px,0)")}},checkForParallax:function(e){var t=this,i=O((function(){return t.handleScroll(e)}),this.debounceTimeout);i()}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){var t=this.scrollY;e.checkForParallax(t)}))}},S=z,P=Object(o["a"])(S,w,k,!1,null,null,null),E=P.exports,T={install:function(e){e.component(E.name,E)}},M=T,L=i("b2d6"),F=i.n(L),A=i("4897"),N=i.n(A),$=i("caf9");N.a.use(F.a);var D={install:function(e){e.use(_),e.use(x),e.use(M),e.use($["a"],{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}})}};
/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */a["default"].config.productionTip=!1,a["default"].use(D),new a["default"]({router:h,render:function(e){return e(u)}}).$mount("#app")},"7f9c":function(e,t,i){"use strict";i("3740")},"958b":function(e,t,i){},bbbb:function(e,t,i){}});
//# sourceMappingURL=app.c37d7452.js.map