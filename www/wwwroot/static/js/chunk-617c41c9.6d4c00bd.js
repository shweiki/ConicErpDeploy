(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-617c41c9"],{3853:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[e.user?r("div",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,xs:24}},[r("user-card",{attrs:{user:e.user}})],1),e._v(" "),r("el-col",{attrs:{span:18,xs:24}},[r("el-card",[r("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[r("el-tab-pane",{attrs:{label:"Account",name:"account"}},[r("account",{attrs:{user:e.user}})],1)],1)],1)],1)],1)],1):e._e()])},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("ade3")),a=r("2f62"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticStyle:{"margin-bottom":"20px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"user-name text-center"},[e._v(e._s(e.user.name))])]),e._v(" "),r("div",{staticClass:"user-profile"},[r("span",[e._v("About me : "+e._s(e.user.Id))]),e._v(" "),r("div",{staticClass:"box-center"},[r("pan-thumb",{attrs:{height:"100px",width:"100px",image:e.user.avatar,hoverable:!1}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){e.imagecropperShow=!0}}}),e._v(" "),r("web-cam",{attrs:{TableName:"User",ObjectID:e.user.phone}})],1),e._v(" "),r("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:150,height:150,"lang-type":"ar",TableName:"User",ObjectID:e.user.phone},on:{close:e.close,"crop-upload-success":e.cropSuccess}})],1),e._v(" "),r("div",{staticClass:"box-center"},[r("div",{staticClass:"user-role text-center text-muted"},[e._v("\n        "+e._s(e._f("uppercaseFirst")(e.user.role))+"\n      ")])])])])},c=[],l=r("3cbc"),u=r("26c2"),f=r("896b"),p={components:{PanThumb:l["a"],WebCam:u["a"],ImageCropper:f["a"]},data:function(){return{imagecropperShow:!1,imagecropperKey:0}},props:{user:{type:Object,default:function(){return{Id:"",name:"",phone:0,email:"",avatar:"",roles:""}}}},methods:{cropSuccess:function(e){this.imagecropperShow=!1,this.imagecropperKey=this.imagecropperKey+1},close:function(){this.imagecropperShow=!1}}},d=p,m=(r("899c"),r("2877")),h=Object(m["a"])(d,s,c,!1,null,"06666e39",null),y=h.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"dataForm",staticClass:"demo-form-inline",attrs:{model:e.tempForm,rules:e.rulesForm}},[r("el-form-item",{attrs:{label:"Old Password",prop:"OldPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.tempForm.OldPassword,callback:function(t){e.$set(e.tempForm,"OldPassword",t)},expression:"tempForm.OldPassword"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"New Password",prop:"NewPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.tempForm.NewPassword,callback:function(t){e.$set(e.tempForm,"NewPassword",t)},expression:"tempForm.NewPassword"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Confirm",prop:"ConfirmPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.tempForm.ConfirmPassword,callback:function(t){e.$set(e.tempForm,"ConfirmPassword",t)},expression:"tempForm.ConfirmPassword"}})],1),e._v(" "),r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submit()}}},[e._v(e._s(e.$t("AddVendors.Save")))])],1)},v=[],g=r("9fb8"),w={data:function(){var e=this,t=function(t,r,n){""===r?n(new Error("Please input the password")):(""!==e.tempForm.ConfirmPassword&&e.$refs["dataForm"].validateField("ConfirmPassword"),n())},r=function(t,r,n){""===r?n(new Error("Please input the password again")):r!==e.tempForm.NewPassword?n(new Error("Two inputs don't match!")):n()};return{tempForm:{OldPassword:"",NewPassword:"",ConfirmPassword:""},rulesForm:{OldPassword:{required:!0,message:"يجب كلمة السر القديمة ",trigger:"blur"},NewPassword:[{validator:t,trigger:"blur"}],ConfirmPassword:[{validator:r,trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(g["b"])(e.tempForm).then((function(t){e.resetTempForm(),e.$notify({title:"تم ",message:"تم تغير كلمة السر بنجاح",type:"success",duration:2e3})})).catch((function(e){console.log(e)}))}))},resetTempForm:function(){this.tempForm={OldPassword:"",NewPassword:"",ConfirmPassword:""}}}},k=w,E=Object(m["a"])(k,b,v,!1,null,null,null),x=E.exports;function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={name:"Profile",components:{UserCard:y,Account:x},data:function(){return{user:{},activeTab:"account"}},computed:S({},Object(a["b"])(["Id","name","phone","avatar","roles"])),created:function(){this.getUser()},methods:{getUser:function(){this.user={Id:this.Id,name:this.name,phone:this.phone,role:this.roles.join(" | "),email:"admin@test.com",avatar:this.avatar}}}},T=P,_=Object(m["a"])(T,n,o,!1,null,null,null);t["default"]=_.exports},"899c":function(e,t,r){"use strict";r("bbd0")},b311:function(e,t,r){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(t,r){e.exports=r()})(0,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){function r(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var r=e.hasAttribute("readonly");r||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),r||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o),t=n.toString()}return t}e.exports=r},function(e,t){function r(){}r.prototype={on:function(e,t,r){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this},once:function(e,t,r){var n=this;function o(){n.off(e,o),t.apply(r,arguments)}return o._=t,this.on(e,o,r)},emit:function(e){var t=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),n=0,o=r.length;for(n;n<o;n++)r[n].fn.apply(r[n].ctx,t);return this},off:function(e,t){var r=this.e||(this.e={}),n=r[e],o=[];if(n&&t)for(var i=0,a=n.length;i<a;i++)n[i].fn!==t&&n[i].fn._!==t&&o.push(n[i]);return o.length?r[e]=o:delete r[e],this}},e.exports=r,e.exports.TinyEmitter=r},function(e,t,r){var n=r(3),o=r(4);function i(e,t,r){if(!e&&!t&&!r)throw new Error("Missing required arguments");if(!n.string(t))throw new TypeError("Second argument must be a String");if(!n.fn(r))throw new TypeError("Third argument must be a Function");if(n.node(e))return a(e,t,r);if(n.nodeList(e))return s(e,t,r);if(n.string(e))return c(e,t,r);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(e,t,r){return e.addEventListener(t,r),{destroy:function(){e.removeEventListener(t,r)}}}function s(e,t,r){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,r)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,r)}))}}}function c(e,t,r){return o(document.body,e,t,r)}e.exports=i},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var r=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},function(e,t,r){var n=r(5);function o(e,t,r,n,o){var i=a.apply(this,arguments);return e.addEventListener(r,i,o),{destroy:function(){e.removeEventListener(r,i,o)}}}function i(e,t,r,n,i){return"function"===typeof e.addEventListener?o.apply(null,arguments):"function"===typeof r?o.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,r,n,i)})))}function a(e,t,r,o){return function(r){r.delegateTarget=n(r.target,t),r.delegateTarget&&o.call(e,r)}}e.exports=i},function(e,t){var r=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function o(e,t){while(e&&e.nodeType!==r){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=o},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(t){s(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=r+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=c,u=r(1),f=r.n(u),p=r(2),d=r.n(p),m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function(e){function t(e,r){y(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.resolveOptions(r),n.listenClick(e),n}return v(t,e),h(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===m(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return w("action",e)}},{key:"defaultTarget",value:function(e){var t=w("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return w("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,r=!!document.queryCommandSupported;return t.forEach((function(e){r=r&&!!document.queryCommandSupported(e)})),r}}]),t}(f.a);function w(e,t){var r="data-clipboard-"+e;if(t.hasAttribute(r))return t.getAttribute(r)}t["default"]=g}])["default"]}))},bbd0:function(e,t,r){}}]);