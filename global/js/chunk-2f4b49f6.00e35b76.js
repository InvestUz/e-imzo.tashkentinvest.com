(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f4b49f6","chunk-2d0ba88e"],{"0621":function(t,e,r){var o=r("9e69"),n=r("d370"),a=r("6747"),i=o?o.isConcatSpreadable:void 0;function s(t){return a(t)||n(t)||!!(i&&t&&t[i])}t.exports=s},"08cc":function(t,e,r){var o=r("1a8c");function n(t){return t===t&&!o(t)}t.exports=n},"100e":function(t,e,r){var o=r("cd9d"),n=r("2286"),a=r("c1c9");function i(t,e){return a(n(t,e,o),t+"")}t.exports=i},1838:function(t,e,r){var o=r("c05f"),n=r("9b02"),a=r("8604"),i=r("f608"),s=r("08cc"),l=r("20ec"),c=r("f4d6"),f=1,u=2;function d(t,e){return i(t)&&s(e)?l(c(t),e):function(r){var i=n(r,t);return void 0===i&&i===e?a(r,t):o(e,i,f|u)}}t.exports=d},"18d8":function(t,e,r){var o=r("234d"),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=o((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,(function(t,r,o,n){e.push(o?n.replace(a,"$1"):r||t)})),e}));t.exports=i},"1c3c":function(t,e,r){var o=r("9e69"),n=r("2474"),a=r("9638"),i=r("a2be"),s=r("edfa"),l=r("ac41"),c=1,f=2,u="[object Boolean]",d="[object Date]",m="[object Error]",h="[object Map]",p="[object Number]",y="[object RegExp]",v="[object Set]",b="[object String]",g="[object Symbol]",_="[object ArrayBuffer]",$="[object DataView]",w=o?o.prototype:void 0,F=w?w.valueOf:void 0;function x(t,e,r,o,w,x,E){switch(r){case $:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case _:return!(t.byteLength!=e.byteLength||!x(new n(t),new n(e)));case u:case d:case p:return a(+t,+e);case m:return t.name==e.name&&t.message==e.message;case y:case b:return t==e+"";case h:var M=s;case v:var D=o&c;if(M||(M=l),t.size!=e.size&&!D)return!1;var O=E.get(t);if(O)return O==e;o|=f,E.set(t,e);var R=i(M(t),M(e),o,w,x,E);return E["delete"](t),R;case g:if(F)return F.call(t)==F.call(e)}return!1}t.exports=x},"20ec":function(t,e){function r(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}t.exports=r},2164:function(t,e,r){var o=r("cae7");function n(t,e,r){var n=-1,a=t.criteria,i=e.criteria,s=a.length,l=r.length;while(++n<s){var c=o(a[n],i[n]);if(c){if(n>=l)return c;var f=r[n];return c*("desc"==f?-1:1)}}return t.index-e.index}t.exports=n},2286:function(t,e,r){var o=r("85e3"),n=Math.max;function a(t,e,r){return e=n(void 0===e?t.length-1:e,0),function(){var a=arguments,i=-1,s=n(a.length-e,0),l=Array(s);while(++i<s)l[i]=a[e+i];i=-1;var c=Array(e+1);while(++i<e)c[i]=a[i];return c[e]=r(l),o(t,this,c)}}t.exports=a},"234d":function(t,e,r){var o=r("e380"),n=500;function a(t){var e=o(t,(function(t){return r.size===n&&r.clear(),t})),r=e.cache;return e}t.exports=a},"242e":function(t,e,r){var o=r("72af"),n=r("ec69");function a(t,e){return t&&o(t,e,n)}t.exports=a},"26e8":function(t,e){function r(t,e){return null!=t&&e in Object(t)}t.exports=r},"382e":function(t,e,r){"use strict";e["a"]={methods:{setTitle(t){document.title=t}}}},"3bb4":function(t,e,r){var o=r("08cc"),n=r("ec69");function a(t){var e=n(t),r=e.length;while(r--){var a=e[r],i=t[a];e[r]=[a,i,o(i)]}return e}t.exports=a},4284:function(t,e){function r(t,e){var r=-1,o=null==t?0:t.length;while(++r<o)if(e(t[r],r,t))return!0;return!1}t.exports=r},"48a0":function(t,e,r){var o=r("242e"),n=r("950a"),a=n(o);t.exports=a},5351:function(t,e,r){"use strict";var o=r("1832");e["a"]={methods:{injectJsFromUrl(t,e){this.$http.get(t).then(t=>{e&&e(t.data)})},injectScopeJs(t,e,r){t&&Object(o["a"])(t,e,r)}}}},"5c69":function(t,e,r){var o=r("087d"),n=r("0621");function a(t,e,r,i,s){var l=-1,c=t.length;r||(r=n),s||(s=[]);while(++l<c){var f=t[l];e>0&&r(f)?e>1?a(f,e-1,r,i,s):o(s,f):i||(s[s.length]=f)}return s}t.exports=a},"642a":function(t,e,r){var o=r("966f"),n=r("3bb4"),a=r("20ec");function i(t){var e=n(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(r){return r===t||o(r,t,e)}}t.exports=i},"656b":function(t,e,r){var o=r("e2e4"),n=r("f4d6");function a(t,e){e=o(e,t);var r=0,a=e.length;while(null!=t&&r<a)t=t[n(e[r++])];return r&&r==a?t:void 0}t.exports=a},"6a5c":function(t,e,r){var o=r("7948"),n=r("656b"),a=r("badf"),i=r("97d3"),s=r("d4b2"),l=r("b047"),c=r("2164"),f=r("cd9d"),u=r("6747");function d(t,e,r){e=e.length?o(e,(function(t){return u(t)?function(e){return n(e,1===t.length?t[0]:t)}:t})):[f];var d=-1;e=o(e,l(a));var m=i(t,(function(t,r,n){var a=o(e,(function(e){return e(t)}));return{criteria:a,index:++d,value:t}}));return s(m,(function(t,e){return c(t,e,r)}))}t.exports=d},"7b97":function(t,e,r){var o=r("7e64"),n=r("a2be"),a=r("1c3c"),i=r("b1e5"),s=r("42a2"),l=r("6747"),c=r("0d24"),f=r("73ac"),u=1,d="[object Arguments]",m="[object Array]",h="[object Object]",p=Object.prototype,y=p.hasOwnProperty;function v(t,e,r,p,v,b){var g=l(t),_=l(e),$=g?m:s(t),w=_?m:s(e);$=$==d?h:$,w=w==d?h:w;var F=$==h,x=w==h,E=$==w;if(E&&c(t)){if(!c(e))return!1;g=!0,F=!1}if(E&&!F)return b||(b=new o),g||f(t)?n(t,e,r,p,v,b):a(t,e,$,r,p,v,b);if(!(r&u)){var M=F&&y.call(t,"__wrapped__"),D=x&&y.call(e,"__wrapped__");if(M||D){var O=M?t.value():t,R=D?e.value():e;return b||(b=new o),v(O,R,r,p,b)}}return!!E&&(b||(b=new o),i(t,e,r,p,v,b))}t.exports=v},"7ed2":function(t,e){var r="__lodash_hash_undefined__";function o(t){return this.__data__.set(t,r),this}t.exports=o},"85e3":function(t,e){function r(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}t.exports=r},8604:function(t,e,r){var o=r("26e8"),n=r("e2c0");function a(t,e){return null!=t&&n(t,e,o)}t.exports=a},"950a":function(t,e,r){var o=r("30c9");function n(t,e){return function(r,n){if(null==r)return r;if(!o(r))return t(r,n);var a=r.length,i=e?a:-1,s=Object(r);while(e?i--:++i<a)if(!1===n(s[i],i,s))break;return r}}t.exports=n},"966f":function(t,e,r){var o=r("7e64"),n=r("c05f"),a=1,i=2;function s(t,e,r,s){var l=r.length,c=l,f=!s;if(null==t)return!c;t=Object(t);while(l--){var u=r[l];if(f&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}while(++l<c){u=r[l];var d=u[0],m=t[d],h=u[1];if(f&&u[2]){if(void 0===m&&!(d in t))return!1}else{var p=new o;if(s)var y=s(m,h,d,t,e,p);if(!(void 0===y?n(h,m,a|i,s,p):y))return!1}}return!0}t.exports=s},"97d3":function(t,e,r){var o=r("48a0"),n=r("30c9");function a(t,e){var r=-1,a=n(t)?Array(t.length):[];return o(t,(function(t,o,n){a[++r]=e(t,o,n)})),a}t.exports=a},"9b02":function(t,e,r){var o=r("656b");function n(t,e,r){var n=null==t?void 0:o(t,e);return void 0===n?r:n}t.exports=n},a2be:function(t,e,r){var o=r("d612"),n=r("4284"),a=r("c584"),i=1,s=2;function l(t,e,r,l,c,f){var u=r&i,d=t.length,m=e.length;if(d!=m&&!(u&&m>d))return!1;var h=f.get(t),p=f.get(e);if(h&&p)return h==e&&p==t;var y=-1,v=!0,b=r&s?new o:void 0;f.set(t,e),f.set(e,t);while(++y<d){var g=t[y],_=e[y];if(l)var $=u?l(_,g,y,e,t,f):l(g,_,y,t,e,f);if(void 0!==$){if($)continue;v=!1;break}if(b){if(!n(e,(function(t,e){if(!a(b,e)&&(g===t||c(g,t,r,l,f)))return b.push(e)}))){v=!1;break}}else if(g!==_&&!c(g,_,r,l,f)){v=!1;break}}return f["delete"](t),f["delete"](e),v}t.exports=l},a4544:function(t,e,r){var o=r("72f0"),n=r("3b4a"),a=r("cd9d"),i=n?function(t,e){return n(t,"toString",{configurable:!0,enumerable:!1,value:o(e),writable:!0})}:a;t.exports=i},ac41:function(t,e){function r(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}t.exports=r},acce:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex"},t._l(["left","grow","right"],(function(e){return r("div",{class:["grow"===e?"flex-grow-1":""]},t._l(t.buttons[t.position+"-"+e],(function(t,o){return r("FormActionButton",{key:o,class:["left"===e?"mr-1":"ml-1"],attrs:{item:t}})})),1)})),0)},n=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.shouldDisplay?r("ActionBtn",{attrs:{js:t.item.js,icon:t.item.buttonIcon,"js-context":t.form,classes:t.item.cssClass}},[t._v(" "+t._s(t.text)+" "),t.isAdmin&&t.isMyProject(this.item)?r("i",{staticClass:"fa fa-cog",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.navigateToSettings.apply(null,arguments)}}}):t._e()]):t._e()},i=[],s=r("7a0b"),l=r("6c9a"),c=r("2ce5"),f=r("4ac4"),u={name:"FormActionButton",components:{ActionBtn:s["a"]},mixins:[l["a"],c["a"],f["a"]],inject:["form"],props:{item:{}},data(){return{updateId:0}},methods:{navigateToSettings(){this.navigateTo(`/forms/form_elements/${this.item.id}?_target=modal&form_name=${this.form.localRoute.params.name}`)},increaseUpdateId(){this.updateId++}},mounted(){this.form.$on("formSetData",this.increaseUpdateId)},beforeDestroy(){this.form.$off("formSetData",this.increaseUpdateId)},computed:{shouldDisplay(){return"function"!==typeof this.item.displayCondition||(this.updateId,!1!==this.item.displayCondition(this.form,this.form.dataHolder))}}},d=u,m=r("2877"),h=Object(m["a"])(d,a,i,!1,null,null,null),p=h.exports,y={name:"FormActionButtonBar",components:{FormActionButton:p},props:{buttons:{},position:{},form:{}},provide(){return{form:this.form}}},v=y,b=Object(m["a"])(v,o,n,!1,null,null,null);e["a"]=b.exports},b1e5:function(t,e,r){var o=r("a994"),n=1,a=Object.prototype,i=a.hasOwnProperty;function s(t,e,r,a,s,l){var c=r&n,f=o(t),u=f.length,d=o(e),m=d.length;if(u!=m&&!c)return!1;var h=u;while(h--){var p=f[h];if(!(c?p in e:i.call(e,p)))return!1}var y=l.get(t),v=l.get(e);if(y&&v)return y==e&&v==t;var b=!0;l.set(t,e),l.set(e,t);var g=c;while(++h<u){p=f[h];var _=t[p],$=e[p];if(a)var w=c?a($,_,p,e,t,l):a(_,$,p,t,e,l);if(!(void 0===w?_===$||s(_,$,r,a,l):w)){b=!1;break}g||(g="constructor"==p)}if(b&&!g){var F=t.constructor,x=e.constructor;F==x||!("constructor"in t)||!("constructor"in e)||"function"==typeof F&&F instanceof F&&"function"==typeof x&&x instanceof x||(b=!1)}return l["delete"](t),l["delete"](e),b}t.exports=s},badf:function(t,e,r){var o=r("642a"),n=r("1838"),a=r("cd9d"),i=r("6747"),s=r("f9ce");function l(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?i(t)?n(t[0],t[1]):o(t):s(t)}t.exports=l},c05f:function(t,e,r){var o=r("7b97"),n=r("1310");function a(t,e,r,i,s){return t===e||(null==t||null==e||!n(t)&&!n(e)?t!==t&&e!==e:o(t,e,r,i,a,s))}t.exports=a},c1c9:function(t,e,r){var o=r("a4544"),n=r("f3c1"),a=n(o);t.exports=a},c584:function(t,e){function r(t,e){return t.has(e)}t.exports=r},c707:function(t,e,r){var o=r("5c69"),n=r("6a5c"),a=r("100e"),i=r("9aff"),s=a((function(t,e){if(null==t)return[];var r=e.length;return r>1&&i(t,e[0],e[1])?e=[]:r>2&&i(e[0],e[1],e[2])&&(e=[e[0]]),n(t,o(e,1),[])}));t.exports=s},cae7:function(t,e,r){var o=r("ffd6");function n(t,e){if(t!==e){var r=void 0!==t,n=null===t,a=t===t,i=o(t),s=void 0!==e,l=null===e,c=e===e,f=o(e);if(!l&&!f&&!i&&t>e||i&&s&&c&&!l&&!f||n&&s&&c||!r&&c||!a)return 1;if(!n&&!i&&!f&&t<e||f&&r&&a&&!n&&!i||l&&r&&a||!s&&a||!c)return-1}return 0}t.exports=n},d4b2:function(t,e){function r(t,e){var r=t.length;t.sort(e);while(r--)t[r]=t[r].value;return t}t.exports=r},d612:function(t,e,r){var o=r("7b83"),n=r("7ed2"),a=r("dc0f");function i(t){var e=-1,r=null==t?0:t.length;this.__data__=new o;while(++e<r)this.add(t[e])}i.prototype.add=i.prototype.push=n,i.prototype.has=a,t.exports=i},d88c:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:t.isFluid}},[t.formLoading||t.asyncLoading?r("b-row",[r("b-col",{staticStyle:{"min-height":"min(400px, 50vh)"},attrs:{sm:"12"}},[r("LoadingView")],1)],1):t.formError?r("b-col",{staticClass:"form-error-view",attrs:{sm:"12"}},[r("i",{staticClass:"fa fa-exclamation-triangle text-warning",staticStyle:{"font-size":"50px"}}),r("h1",{staticClass:"mt-4",staticStyle:{"max-width":"80vw"}},[t._v(" "+t._s(t.formError.error&&t.formError.error.message||t.$l("platon.form_error_text","Хатолик"))+" ")]),r("div",[r("platon-btn",{staticClass:"mt-3 btn-lg",attrs:{variant:"primary",icon:"fas fa-sync-alt",loading:t.formLoading},nativeOn:{click:function(e){return t.loadForm()}}},[t._v(" "+t._s(t.$l("platon.reload_page","Сахифани қайта юклаш"))+" ")])],1)]):t.loadFormEndpoint?r("b-row",{staticClass:"platon-form",class:{"p-3":!t.isModal},attrs:{"form-name":t.localRoute.params.name,"form-id":t.formMeta&&t.formMeta.id}},[t.loadFormEndpoint.status>=400?r("ChimeraErrorsView",{staticStyle:{height:"400px",width:"100%"},attrs:{endpoint:t.loadFormEndpoint,icon:"mdi mdi-window-restore","access-denied-text":t.$l("platon.form_has_no_access","Бу формага кўришга рўхсат берилмаган"),"not-found-text":t.$l("platon.form_not_found","Форма топилмади")}}):t.formMeta?r("b-col",{staticClass:"pt-2",class:{"form-layout":!t.isModal},attrs:{sm:t.gridOptions.gridSize,offset:t.gridOptions.offset}},[t.formMeta.css?r("v-style",[t._v(t._s(t.formMeta.css))]):t._e(),t.isModal?t._e():r("div",{staticClass:"pt-1 pb-2 m-0"},[r("h3",{staticClass:"text-center m-0",domProps:{innerHTML:t._s(t.formHeader)}})]),t.isFormReady?r("form",{ref:"form",staticClass:"form-row",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.saveForm.apply(null,arguments)}}},[t.isActionBarVisible("top")?r("div",{staticClass:"m-2 width-100p",staticStyle:{width:"100%"}},[r("FormActionButtonBar",{attrs:{form:t.thisForm,buttons:t.formElementContainers.formActionButtons,position:"top"}})],1):t._e(),t._l(t.formElementContainers.containers,(function(t){return r("PlatonFormElement",{key:t.id,ref:"fieldset",refInFor:!0,attrs:{item:t}})})),t.isActionBarVisible("bottom")&&!t.isModal?r("div",{staticClass:"m-2 width-100p",staticStyle:{width:"100%"}},[r("FormActionButtonBar",{attrs:{form:t.thisForm,buttons:t.formElementContainers.formActionButtons,position:"bottom"}})],1):t._e()],2):t._e(),t.isModal?t._e():r("hr",{staticClass:"divider"}),t.isModal?t._e():r("PlatonFormAdminFooter",{staticClass:"mb-3",attrs:{form:t.thisForm}})],1):t._e()],1):t._e()],1)},n=[],a=r("448a"),i=r.n(a),s=r("9523"),l=r.n(s),c=r("c973"),f=r.n(c),u=(r("bc3a"),r("95dc")),d=r("5351"),m=r("382e"),h=r("db44"),p=r("2ce5"),y=r("98b2"),v=r("6c9a"),b=r("fd2a"),g=r("dfbc"),$=r("b441"),w=r("b9ca"),F={data(){return{changeListeners:new Map}},methods:{handleFormJs(t){try{this.injectScopeJs(t,this.thisForm,{$form:this.thisForm,form:this.thisForm,$w:this.$w,$watchAll:this.$watchAll,$data:this.dataHolder,$setVal:this.$setVal,$setVals:this.$setVals,$setAttr:this.$setElementAttr,$setAttrs:this.$setElementAttrs,$option:this.$getSelectOption,$m:window.moment,Toasts:w["b"]})}catch(e){console.error(e)}},$w(t,e,r){if(e)if(null===t)this.$watch("dataHolder",e,r);else if(Array.isArray(t))for(let o of t)this.$watch("dataHolder."+o,e,r);else this.$watch("dataHolder."+t,e,r);else $["IS_DEV"]&&console.warn("Callback not defined for field: "+t)},$watchAll(t,e,r){this.$watch(()=>t.map(t=>this.dataHolder[t]),e,r)},$setVal(t,e){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.formSetData(t,e,r)},$setVals(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=Object.entries(t);for(let[o,n]of r)this.$setVal(o,n,e)},$setElementAttr(t,e,r){Object($["DevLog"])("SetAttr",e,r),this.formElementsWithKey[t]?this.$set(this.formElementsWithKey[t],e,r):$["IS_DEV"]&&console.warn("Element does not exists "+t)},$setElementAttrs(t,e){for(let[r,o]of Object.entries(e))this.$setElementAttr(t,r,o)},$getSelectOption(t){let e=this.elements.get(t);return e&&e.$refs.element&&"SelectControl"===e.$refs.element.$options.name?e.$refs.element.selectedOption:null},$onChange(t,e){const r=t=>{this.$data.changeListeners.has(t)||this.$data.changeListeners.set(t,[]),this.$data.changeListeners.get(t).push(e)};if(Array.isArray(t))for(let o of t)r(o);else r(t)},onFormDataSet(t,e){this.$data.changeListeners.has(t)&&this.$data.changeListeners.get(t).forEach(r=>r(e,t)),this.$data.changeListeners.has("*")&&this.$data.changeListeners.get("*").forEach(r=>r(e,t))}}},x={data(){return{beforeCreate(){return f()((function*(){return!0}))()},afterCreate(t){return f()((function*(){}))()},beforeSave(){return f()((function*(){return!0}))()},afterSave(t){return f()((function*(){}))()},beforeEdit(){return f()((function*(){return!0}))()},afterEdit(t){return f()((function*(){}))()},beforeClone(){return f()((function*(){return!0}))()},afterClone(){return f()((function*(){}))()},beforeDelete(){return f()((function*(){return!0}))()},afterDelete(){return f()((function*(){}))()},beforeHardDelete(){return f()((function*(){return!0}))()},afterHardDelete(){return f()((function*(){}))()},beforeRestore(){return f()((function*(){return!0}))()},afterRestore(){return f()((function*(){}))()},onFormLoad(t){return f()((function*(){}))()}}}},E=r("6781"),M=r("e831"),D=r.n(M),O=r("c707"),R=r.n(O),C=r("7a0b"),S=r("acce"),j=r("1832");const P=()=>r.e("chunk-6e164f07").then(r.bind(null,"c8d0"));var k={methods:{injectIconPickerDialog(t,e){t.addEventListener("keydown",t=>{t.ctrlKey&&t.keyCode===$["Keys"].I&&this.$modal.show(P,{onPick:t=>{e&&e(t)}},{height:"auto",width:"1000px",clickToClose:!1})})},injectIconPickerToFormElement(t){let e=this.elements.get(t);if(!e||!e.$el||"function"!==typeof e.$el.querySelector)return;let r=e.$el.querySelector("input");r&&this.injectIconPickerDialog(r,e=>{this.formSetData(t,e)})}}},A=r("4328"),L=r.n(A),T=r("64f5"),I=r("6f3b"),B=r("a986"),q=r("dd84");function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){l()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const U=["fieldset","tab_container","html"];let K=0;var z={name:"PlatonFormView",components:{FormActionButtonBar:S["a"],ActionBtn:C["a"],ChimeraErrorsView:E["a"],PlatonFormAdminFooter:g["a"],LoadingView:u["a"]},mixins:[d["a"],k,p["a"],m["a"],h["a"],B["a"],y["b"],v["a"],b["a"],F,x,I["a"]],data(){return{formLocalId:++K,dataHolder:{},state:{},validationElements:new Set,hiddenElements:new Map,elements:new Map,transformData:t=>t,canRenderSystemButton:t=>!0,defaultReadOnly:{},formError:null,isFormReady:!1,asyncLoading:!1,asyncFetchData:null,formMeta:null,formLoading:!1,loadFormEndpoint:null,refreshOnSave:!0}},provide(){return{form:this}},beforeMount(){this.loadForm()},mounted(){this.$on("formSetData",this.formSetData),window.addEventListener(y["a"].FORM_SAVED,this.onFormSaved),this.$plugins.triggerEvent(q["a"].OnFormRead,{viewingElement:this.localRoute.params.name,isFormPublic:this.isPublicPlatonComponent,isFormModal:this.isModal,queryParams:this.$route.query})},beforeDestroy(){this.$off("formSetData",this.formSetData),window.removeEventListener(y["a"].FORM_SAVED,this.onFormSaved)},methods:{keyDown(t){this.keyDownSave(t),this.keyDownClose(t)},keyDownSave(t){const e=t.ctrlKey||t.metaKey,r="s"===t.key||83===t.keyCode;e&&r&&(t.preventDefault(),this.saveForm(_,{isLoading:!0}))},keyDownClose(t){const e="Escape"===t.key||27===t.keyCode;e&&(t.preventDefault(),window.close())},saveFormRequest(t){var e=this;return f()((function*(){const r=e.cloneMode?"PATCH":e.editMode?"PUT":"POST",o=yield e.$http({url:e.formUrl,method:r,data:t}),{data:n}=o;if(e.localRoute.params.id?e.$plugins.triggerEvent(q["a"].OnFormUpdate,{updatedElement:`${e.localRoute.params.name}/${e.localRoute.params.id}`,isFormPublic:e.isPublicPlatonComponent,isFormModal:e.isModal,queryParams:e.$route.query}):e.$plugins.triggerEvent(q["a"].OnFormInsert,{createdElementPath:""+e.localRoute.params.name,isFormPublic:e.isPublicPlatonComponent,isFormModal:e.isModal,queryParams:e.$route.query}),e.cloneMode){const t=e.cloneRedirectUrl(n);t&&(yield e.navigateTo(t))}return n}))()},cloneRedirectUrl(t){const e=this.localRoute.params.name,r=this.localRoute.query._cloneTarget||"blank",o=this.localRoute.query._cloneKey||"name",n=this.localRoute.query._clonePrefix||"",a=t[o];return`${n}${e}/${a}?_target=${r}`},loadForm(){var t=this;return f()((function*(){const e=e=>{Object.defineProperty(e,"loading",{get:()=>t.formLoading}),Object.defineProperty(e,"fetch",{get:()=>t.loadForm}),t.loadFormEndpoint=Object.assign(e)};let r=t.formUrl,o=t.$router.resolve(t.formUrl),n=o.resolved.query["_clone"];if(n){$["IS_DEV"]&&console.log("Must be clone",n);let e=o.route;e.params.id=n.toString(),r=t.$router.resolve(e).route.fullPath}try{t.formLoading=!0,t.formError=null,t.asyncLoading=!1,t.isFormReady=!1;const o=yield t.$http.get(r);e(o);const n=o.data;t.formMeta=n,t.loadFormDataFromRemote(n),n.js?(yield t.setFormReady(),t.notifyFormLoad(),setTimeout(f()((function*(){t.$clearEvents(),t.handleFormJs(n.js),yield t.handleAsyncFetchData()})),100)):(yield t.setFormReady(),t.handleAsyncFetchData().then(()=>{t.notifyFormLoad()})),t.$nextTick(()=>{for(let e of t.formElements)e.id&&(t.defaultReadOnly[e.id]=e.isReadOnly)})}catch(a){a.response&&e(a.response),t.formError=a,t.asyncLoading=!1}finally{t.formLoading=!1}}))()},deleteRecord(){var t=this;return f()((function*(){let e=L.a.stringify(t.localRoute.query,{arrayFormat:"brackets"}),r=`forms/${t.localRoute.params.name}/${t.localRoute.params.id}`+(e.length>0?"?"+e:"");t.$plugins.triggerEvent(q["a"].OnFormDelete,{deletedElement:`${t.localRoute.params.name}/${t.localRoute.params.id}`,isFormPublic:t.isPublicPlatonComponent,isFormModal:t.isModal,queryParams:t.$route.query}),yield t.$http.delete(t.addPublicRoutePrefix(r))}))()},hardDeleteRecord(){var t=this;return f()((function*(){let e=L.a.stringify(H(H({},t.localRoute.query),{},{hard_delete:!0}),{arrayFormat:"brackets"}),r=`forms/${t.localRoute.params.name}/${t.localRoute.params.id}`+(e.length>0?"?"+e:"");t.$plugins.triggerEvent(q["a"].OnFormHardDelete,{hardDeletedElement:`${t.localRoute.params.name}/${t.localRoute.params.id}`,isFormPublic:t.isPublicPlatonComponent,isFormModal:t.isModal,queryParams:t.$route.query}),yield t.$http.delete(t.addPublicRoutePrefix(r))}))()},restoreRecord(){var t=this;return f()((function*(){let e=L.a.stringify(t.localRoute.query,{arrayFormat:"brackets"}),r=`forms/${t.localRoute.params.name}/${t.localRoute.params.id}/restore`+(e.length>0?"?"+e:"");yield t.$http.get(t.addPublicRoutePrefix(r))}))()},onFormSaved(t){let{detail:e}=t;e&&e.formLocalId===this.formLocalId&&this.refreshOnSave&&this.loadForm()},notifyFormLoad(){this.$emit("loaded",this),this.onFormLoad(this.dataHolder)},setFormReady(){var t=this;return f()((function*(){t.isFormReady=!0,yield t.$nextTick()}))()},notifyTable(){(this.isModal||this.isTargetSelf)&&this.publishSaveFormEvent(window,this.formMeta.name,{formLocalId:this.formLocalId}),window.opener&&this.publishSaveFormEvent(window.opener,this.formMeta.name,{formLocalId:this.formLocalId})},formSetData(t,e){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=this.formElementsWithKey[t];o&&o.dataField&&(e=Object(T["c"])(o.dataField,o.type,e)),this.$set(this.dataHolder,t,e),Object($["DevLog"])("change form data",t,e),r&&this.onFormDataSet(t,e)},getFormData(){let t={};for(let e of Object.keys(this.dataHolder))this.formElementsWithKey[e]&&!this.formElementsWithKey[e].isDisabled&&(this.hiddenElements.has(e)||(t[e]=this.dataHolder[e]));return t},saveForm(t,e){var r=this;return f()((function*(){let t=!0;for(let e of r.validationElements)e.$parent.shouldDisplay&&!e.validate()&&($["IS_DEV"]&&console.warn(e),e.markAsDirty(),t=!1);if(t){let t=yield r.editMode?r.beforeEdit():r.beforeCreate();if(!1===t)return;if(!1===(yield r.beforeSave()))return;if(r.cloneMode&&!1===(yield r.beforeClone()))return;e&&(e.isLoading=!0);try{let t=yield r.saveFormRequest(r.transformData(r.getFormData())),o=t.id;yield r.afterSave(o),yield r.editMode?r.afterEdit(o):r.afterCreate(o),r.cloneMode&&(yield r.afterClone()),r.greenToast(r.$l("platon.form_saved","Маълумотлар сақланди")),r.notifyTable(),r.handleNextLink(o)}catch(o){$["IS_DEV"]&&console.log(o);let t=o.message;if(o.response&&o.response.data){o.response.data.message&&(t=o.response.data.message);const e=o.response.data.errors;e&&Object.keys(e).length>0&&r.$emit("remoteErrors",e)}r.errorToast(t||r.$l("platon.form_server_error","Серверда хатолик"))}finally{e&&(e.isLoading=!1)}}else r.dangerToast(r.$l("platon.attention","Диққат"),r.$l("platon.form_check_filled","Майдонлар тўғри тўлдирилганлигини текширинг"))}))()},exitForm(){this.$emit("close"),this.isModal||(window.history.length>1?window.history.back():window.close())},deleteForm(){var t=this;return f()((function*(){try{if(!1===(yield t.beforeDelete()))return;yield t.showConfirmDialog(t.$l("platon.attention","Диққат"),t.$l("platon.form_confirm_data_delete","Ўчиришни хоҳлайсизми ?")),yield t.deleteRecord(),yield t.afterDelete(),t.notifyTable(),t.greenToast(t.$l("platon.form_data_deleted","Маълумотлар ўчирилди")),t.isPublicPlatonComponent?t.switchToCreateMode():t.exitForm()}catch(e){t.errorToast(e.message),$["IS_DEV"]&&console.log(e)}}))()},hardDeleteForm(){var t=this;return f()((function*(){try{if(yield t.showConfirmDialog(t.$l("platon.attention","Диққат"),t.$l("platon.form_confirm_data_hard_delete","Ўчиришни хоҳлайсизми? Ўчирилган маълумотларни тиклаб бўлмайди")),!1===(yield t.beforeHardDelete()))return;yield t.hardDeleteRecord(),yield t.afterHardDelete(),t.notifyTable(),t.greenToast(t.$l("platon.form_data_deleted","Маълумотлар ўчирилди")),t.exitForm()}catch(e){t.errorToast(e.message),$["IS_DEV"]&&console.log(e)}}))()},restoreForm(){var t=this;return f()((function*(){try{if(yield t.showConfirmDialog(t.$l("platon.attention","Диққат"),t.$l("platon.confirm_restore","Ўчирилган маълумотни қайта тикламоқчимисиз ?")),!1===(yield t.beforeRestore()))return;yield t.restoreRecord(),yield t.afterRestore(),t.notifyTable(),t.greenToast(t.$l("platon.form_data_restored","Маълумотлар қайта тикланди")),t.reloadFormData()}catch(e){$["IS_DEV"]&&console.log(e)}}))()},reloadFormData(){this.loadForm()},switchToEditMode(t){if(!this.editMode||void 0===t){let e=this.localRoute.query;delete e["_clone"];let r={name:this.localRoute.name,query:e,params:{name:this.localRoute.params.name,id:t}};if(this.localRoute=this.$router.resolve(r).route,!this.isModal)return void this.$router.replace(r)}},switchToCreateMode(){this.switchToEditMode(void 0)},handleNextLink(t){let e=this.localRoute.query["_nextLink"]||this.formMeta.nextLink;"back"===e?this.exitForm():e&&"refresh"!==e&&""!==e?(this.isModal?this.$emit("close"):this.isTargetSelf&&this.$router.back(),this.navigateTo(e,{},window.parent)):this.editMode||this.switchToEditMode(t)},loadFormDataFromRemote(t){this.$set(this,"dataHolder",t.formData)},addFormSystemButton:function(t){t.push({projectId:-1,buttonText:this.$l("platon.form_save","Сақлаш"),buttonIcon:"fa fa-save",position:"bottom-left",cssClass:"save-btn",js:this.saveForm,sortOrder:-20,displayCondition:()=>this.canRenderSystemButton("save")&&(this.editMode&&this.formMeta.canEdit||!this.editMode&&this.formMeta.canCreate)}),t.push({projectId:-1,buttonText:this.$l("platon.form_close","Чиқиш"),buttonIcon:"fa fa-times",position:"bottom-left",js:this.exitForm,cssClass:"btn-warning close-btn",sortOrder:-10,displayCondition:()=>this.canRenderSystemButton("close")&&!(("blank"===this.localRoute.query["_target"]||!this.localRoute.query["_target"])&&!window.opener)}),t.push({projectId:-1,buttonText:this.$l("platon.form_restore","Тиклаш"),buttonIcon:"fa fa-redo",position:"bottom-right",cssClass:"btn-info restore-btn",js:this.restoreForm,sortOrder:-10,displayCondition:()=>this.canRenderSystemButton("restore")&&this.editMode&&this.formMeta.canRestore}),t.push({projectId:-1,buttonText:this.$l("platon.form_hard_delete","Тўлиқ ўчириш"),buttonIcon:"fa fa-trash-alt",position:"bottom-right",cssClass:"btn-dark-red hard-delete-btn",js:this.hardDeleteForm,sortOrder:-20,displayCondition:()=>!this.cloneMode&&this.canRenderSystemButton("hardDelete")&&this.editMode&&this.formMeta.canHardDelete}),t.push({projectId:-1,buttonText:this.$l("platon.form_delete","Ўчириш"),buttonIcon:"fa fa-trash-alt",position:"bottom-right",cssClass:"btn-danger delete-btn",js:this.deleteForm,sortOrder:-30,displayCondition:()=>!this.cloneMode&&this.canRenderSystemButton("delete")&&this.editMode&&this.formMeta.canDelete})},addDisplayConditionFnToButtons(t){t.forEach(t=>{t.displayCondition&&"string"===typeof t.displayCondition&&(t.displayCondition=Object(j["b"])(t.displayCondition,["form","data"]))})},runScopeArgs(){return{data:this.dataHolder,form:this}},isActionBarVisible(t){let e=this.formElementContainers.formActionButtons;return e[t+"-left"]||e[t+"-right"]},handleAsyncFetchData(){var t=this;return f()((function*(){if(t.asyncFetchData&&"function"===typeof t.asyncFetchData)try{t.asyncLoading=!0,yield t.asyncFetchData()}catch(e){console.warn("Form handle async fetch data",e),t.formError=e}finally{t.asyncLoading=!1}}))()},makeReadonly(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];for(let e of this.formElements)this.$set(e,"isReadOnly",!!t||this.defaultReadOnly[e.id])},getPlatonField(t){const e=this.elements.get(t);return e&&e.$refs["element"]?e.$refs["element"]:null},validateField(t){const e=Array.isArray(t)?t:[t];for(let r of e){const t=this.getPlatonField(r);t&&"function"===typeof t.validate&&t.validate()}}},computed:{thisForm(){return this},isTargetSelf(){return"self"===this.localRoute.query["_target"]},isModal(){return!!this.route},editId(){return this.localRoute.params.id},editMode(){return!!this.localRoute.params.id||!!this.localRoute.query._clone},cloneMode(){return!!this.localRoute.query._clone},formUrl(){return this.localRoute.fullPath},formElements(){try{const t=e=>e.reduce((e,r)=>(e.push(r),r&&Array.isArray(r.children)&&r.children.length>0&&e.push.apply(e,i()(t(r.children))),e),[]);return t(this.formMeta.elements)}catch(t){return console.warn(t),[]}},formElementContainers(){let t=[];const e=[],r=[];try{const o=this.formMeta?this.formMeta.elements.slice():[];for(let n of o)n&&("button"===n.type&&n.position?r.push(n):U.includes(n.type)?t.push(n):e.push(n));e.length>0&&(t.unshift({type:"fieldset",id:0,sortOrder:0,children:e}),t=R()(t,"sortOrder"))}catch(o){console.warn(o)}return this.addDisplayConditionFnToButtons(r),this.addFormSystemButton(r),{containers:t,formActionButtons:D()(R()(r,"sortOrder"),"position")}},formElementsWithKey(){try{return this.formElements.reduce((t,e)=>(e&&e.dataField&&(t[e.dataField]=e),e&&e.id&&(t[e.id]=e),t),{})}catch(t){return{}}},params(){try{return this.formMeta.params}catch{return{}}},gridOffset(){return this.formMeta.gridOffset||0},gridOptions(){return this.isModal?{offset:0,gridSize:12}:{offset:this.gridOffset,gridSize:12-2*this.gridOffset}},isFluid(){return!0},formHeader(){return(this.editMode?this.formMeta.editHeader:this.formMeta.addHeader)||"Форма"},formTitle(){try{return(this.editMode?this.formMeta.editTitle:this.formMeta.addTitle)||"Форма"}catch(t){return"Form"}}},watch:{formTitle(t){this.isModal?this.$emit("formTitle",t):this.setTitle(t)}}},J=z,W=(r("d9a7"),r("2877")),N=Object(W["a"])(J,o,n,!1,null,null,null);e["default"]=N.exports},d9a7:function(t,e,r){"use strict";r("e7c3")},dc0f:function(t,e){function r(t){return this.__data__.has(t)}t.exports=r},dfbc:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isAdmin&&t.isMyProject(t.form.formMeta)?r("div",[r("div",{staticClass:"p-2 h5 font-weight-bold"},[t._v(t._s(t.$l("platon.form_settings","Дастурчи учун")))]),r("platon-link",{staticClass:"mr-2",attrs:{link:"/forms/forms/"+t.form.formMeta.id+"?_target=modal"}},[r("btn",{attrs:{icon:"fa fa-cog",variant:"primary"}},[t._v(" "+t._s(t.$l("platon.form_setup","Ойнани созлаш"))+" ")])],1),r("platon-link",{staticClass:"mr-2",attrs:{link:"/forms/form_elements?form_name="+t.form.formMeta.name+"&_target=modal"}},[r("btn",{attrs:{icon:"fa fa-plus-circle",variant:"success"}},[t._v(" "+t._s(t.$l("platon.form_add_element","Янги элемент қўшиш"))+" ")])],1),r("platon-link",{staticClass:"mr-2",attrs:{link:"/tables/form_elements?form_name="+t.form.formMeta.name+"&_target=blank"}},[r("btn",{attrs:{icon:"fa fa-bars",variant:"primary"}},[t._v(" "+t._s(t.$l("platon.form_element_list","Элементлар рўйхати"))+" ")])],1)],1):t._e()},n=[],a=r("7f3d"),i=r("abc1"),s=r("6c9a"),l={name:"PlatonFormAdminFooter",components:{Btn:a["a"],PlatonLink:i["a"]},mixins:[s["a"]],props:{form:{}}},c=l,f=r("2877"),u=Object(f["a"])(c,o,n,!1,null,null,null);e["a"]=u.exports},e2c0:function(t,e,r){var o=r("e2e4"),n=r("d370"),a=r("6747"),i=r("c098"),s=r("b218"),l=r("f4d6");function c(t,e,r){e=o(e,t);var c=-1,f=e.length,u=!1;while(++c<f){var d=l(e[c]);if(!(u=null!=t&&r(t,d)))break;t=t[d]}return u||++c!=f?u:(f=null==t?0:t.length,!!f&&s(f)&&i(d,f)&&(a(t)||n(t)))}t.exports=c},e2e4:function(t,e,r){var o=r("6747"),n=r("f608"),a=r("18d8"),i=r("76dd");function s(t,e){return o(t)?t:n(t,e)?[t]:a(i(t))}t.exports=s},e380:function(t,e,r){var o=r("7b83"),n="Expected a function";function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(n);var r=function(){var o=arguments,n=e?e.apply(this,o):o[0],a=r.cache;if(a.has(n))return a.get(n);var i=t.apply(this,o);return r.cache=a.set(n,i)||a,i};return r.cache=new(a.Cache||o),r}a.Cache=o,t.exports=a},e3f8:function(t,e,r){var o=r("656b");function n(t){return function(e){return o(e,t)}}t.exports=n},e7c3:function(t,e,r){},edfa:function(t,e){function r(t){var e=-1,r=Array(t.size);return t.forEach((function(t,o){r[++e]=[o,t]})),r}t.exports=r},ef5d:function(t,e){function r(t){return function(e){return null==e?void 0:e[t]}}t.exports=r},f3c1:function(t,e){var r=800,o=16,n=Date.now;function a(t){var e=0,a=0;return function(){var i=n(),s=o-(i-a);if(a=i,s>0){if(++e>=r)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}t.exports=a},f4d6:function(t,e,r){var o=r("ffd6"),n=1/0;function a(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-n?"-0":e}t.exports=a},f608:function(t,e,r){var o=r("6747"),n=r("ffd6"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;function s(t,e){if(o(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!n(t))||(i.test(t)||!a.test(t)||null!=e&&t in Object(e))}t.exports=s},f9ce:function(t,e,r){var o=r("ef5d"),n=r("e3f8"),a=r("f608"),i=r("f4d6");function s(t){return a(t)?o(i(t)):n(t)}t.exports=s}}]);