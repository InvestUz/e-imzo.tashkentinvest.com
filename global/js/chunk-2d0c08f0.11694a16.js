(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c08f0"],{"41fc":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"platon-dialog page page-view"},[e.isModal&&e.pageInfo?t("div",{staticClass:"pmodal-title d-flex align-items-center modal-form-header"},[t("div",{staticClass:"flex-grow-1"},[e._t("title",(function(){return[e._v(e._s(e.pageInfo.title))]}))],2),t("div",{staticClass:"cursor-pointer modal-close",on:{click:function(a){return e.$emit("close")}}},[t("i",{staticClass:"fa fa-times-circle"})])]):e._e(),t("page-renderer",{ref:"page",attrs:{route:e.localRoute,"chimera-options":e.chimeraPageLoadOptions}})],1)},r=[],s=t("dae0"),o=t("382e"),n=t("11e8"),l=t("6781"),c=t("6f3b"),u=t("9e45"),d=t("64f5"),p=t("a986"),g=t("dd84"),f={name:"PlatonPageView",components:{PageRenderer:s["a"],ChimeraErrorsView:l["a"]},mixins:[o["a"],n["a"],c["a"],p["a"]],data(){return{pageInfo:null,reloadOnFilterChange:!1}},provide(){return{$pageView:this}},computed:{isModal(){return!!this.route},chimeraPageLoadOptions(){return{url:this.addPublicRoutePrefix(Object(u["a"])("pages/"+this.localRoute.params.name,this.localRoute.query)),on:{success:e=>{let{data:a}=e;this.pageInfo=a,this.setTitle(a.title),this.$plugins.triggerEvent(g["a"].OnPageOpened,{data:a,queryParams:this.$route.query})}}}}},watch:{$route(e,a){this.reloadOnFilterChange&&Object(d["o"])(e,a)&&this.$refs.page&&this.$refs.page.reload()}}},h=f,m=t("2877"),w=Object(m["a"])(h,i,r,!1,null,null,null);a["default"]=w.exports}}]);