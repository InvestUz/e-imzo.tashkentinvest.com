(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25cfaa60"],{"07d5":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"btn-fb",on:{click:t.loginWithFacebook}},[o("div",{staticClass:"fb-content d-flex"},[o("div",{staticClass:"logo"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",version:"1"}},[o("path",{attrs:{fill:"#FFFFFF",d:"M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z"}}),o("path",{attrs:{fill:"#4267b2",d:"M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z"}})])]),o("p",[t._v("Sign in with Facebook")])])])},a=[],i=o("6cbc"),c={name:"FacebookProvider",mixins:[i["a"]],created(){this.$projectInfo.oauth2&&this.$projectInfo.oauth2.facebook_client_id?(window.fbAsyncInit=()=>{FB.init({appId:this.$projectInfo.oauth2.facebook_client_id,cookie:!0,xfbml:!0,version:"v15.0",oauth:!0}),FB.AppEvents.logPageView()},function(t,e,o){var n,a=t.getElementsByTagName(e)[0];t.getElementById(o)||(n=t.createElement(e),n.id=o,n.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(n,a))}(document,"script","facebook-jssdk")):console.error("FACEBOOK Client ID not set!")}},s=c,r=(o("cba7"),o("2877")),l=Object(r["a"])(s,n,a,!1,null,"f82838f6",null);e["default"]=l.exports},"2a38":function(t,e,o){},cba7:function(t,e,o){"use strict";o("2a38")}}]);