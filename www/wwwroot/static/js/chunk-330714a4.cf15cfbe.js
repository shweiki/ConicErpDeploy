(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330714a4"],{"1f7e":function(e,t,r){},2017:function(e,t,r){"use strict";r("1f7e")},4805:function(e,t,r){"use strict";r("5d02")},"5d02":function(e,t,r){},"61d9":function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return m})),r.d(t,"c",(function(){return u})),r.d(t,"f",(function(){return p}));var o=r("b7e2"),n=r("4328"),s=r.n(n),a=(r("4360"),r("a18c"));function i(){return Object(o["a"])({url:"/Role/GetRoles",method:"get"})}function l(e){return Object(o["a"])({url:"/Role/AddRole",method:"post",data:s.a.stringify(e)})}function c(e){return Object(o["a"])({url:"/Role/AddUserRouter",method:"post",data:s.a.stringify(e)})}function m(e){return Object(o["a"])({url:"/Role/Edit",method:"post",data:s.a.stringify(e)})}function u(e){return Object(o["a"])({url:"/Role/DeleteRole",method:"post",data:s.a.stringify(e)})}function p(){return a["a"]}},"9ed6":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container",style:{backgroundImage:"url("+e.$store.getters.settings.loginBackground+")"}},[r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[r("div",{staticClass:"title-container"},[r("h1",{staticClass:"title"},[e._v("Login")])]),r("el-form-item",{attrs:{prop:"username"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"user"}})],1),r("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),r("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[r("el-form-item",{attrs:{prop:"password"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"password"}})],1),r("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1)],1),r("el-form-item",{attrs:{prop:"rememberme"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"el-icon-timer"}})],1),r("el-checkbox",{model:{value:e.loginForm.rememberme,callback:function(t){e.$set(e.loginForm,"rememberme",t)},expression:"loginForm.rememberme"}},[e._v("Remember Me")])],1),""!=e.loginFailed?r("span",{staticStyle:{color:"red"}},[r("svg-icon",{attrs:{"icon-class":"el-icon-error"}}),e._v(" "+e._s(e.loginFailed)+" ")],1):e._e(),r("el-button",{attrs:{loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")])],1)],1)},n=[],s=(r("d9e2"),r("d3b7"),r("14d9"),r("13d5"),r("b64b"),r("61f7"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"New User"},[r("el-button",{attrs:{type:"text"},on:{click:function(t){e.Visible=!0}}},[e._v("New User?")]),r("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{title:"سائق جديد",visible:e.Visible},on:{"update:visible":function(t){e.Visible=t},opened:function(t){return e.$refs["DriverName"].focus()}}},[r("el-form",{ref:"dataForm",staticClass:"demo-form-inline",attrs:{model:e.tempForm,rules:e.rulesForm,"label-position":"top"}},[r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("CashDrawer.Name"),prop:"Name"}},[r("el-input",{ref:"DriverName",attrs:{type:"text"},model:{value:e.tempForm.Name,callback:function(t){e.$set(e.tempForm,"Name",t)},expression:"tempForm.Name"}})],1)],1)],1),r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"تاريخ ميلاد",prop:"DateofBirth",rules:[{required:!0,message:"لايمكن ترك التاريخ فارغ",trigger:"blur"}]}},[r("el-date-picker",{attrs:{type:"date",placeholder:"تاريخ ميلاد",format:e.$store.getters.settings.DateTimeFormat.replace(" HH:mm","")},model:{value:e.tempForm.DateofBirth,callback:function(t){e.$set(e.tempForm,"DateofBirth",t)},expression:"tempForm.DateofBirth"}}),r("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v(" العمر "+e._s(e.getAge(e.tempForm.DateofBirth))+" ")])],1)],1)],1),r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"الرقم الوطني",prop:"Ssn"}},[r("el-input",{attrs:{type:"text",placeholder:"الرقم الوطني"},model:{value:e.tempForm.Ssn,callback:function(t){e.$set(e.tempForm,"Ssn",t)},expression:"tempForm.Ssn"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("AddVendors.Email"),prop:"Email",rules:[{required:!1,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]}},[r("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Email,callback:function(t){e.$set(e.tempForm,"Email",t)},expression:"tempForm.Email"}})],1)],1)],1),r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("AddVendors.PhoneNumber1"),prop:"PhoneNumber1",rules:[{required:!0,message:"لايمكن ترك الرقم الهاتف فارغ",trigger:"blur"}]}},[r("VuePhoneNumberInput",{attrs:{translations:{countrySelectorLabel:"رمز البلد",countrySelectorError:"تاكد من رقم",phoneNumberLabel:"رقم الهاتف"},"default-country-code":"JO","ignored-countries":["LI"]},model:{value:e.tempForm.PhoneNumber1,callback:function(t){e.$set(e.tempForm,"PhoneNumber1",t)},expression:"tempForm.PhoneNumber1"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("AddVendors.PhoneNumber2"),prop:"PhoneNumber2"}},[r("VuePhoneNumberInput",{attrs:{translations:{countrySelectorLabel:"رمز البلد",countrySelectorError:"تاكد من رقم",phoneNumberLabel:"رقم الهاتف"},"default-country-code":"JO","ignored-countries":["LI"]},model:{value:e.tempForm.PhoneNumber2,callback:function(t){e.$set(e.tempForm,"PhoneNumber2",t)},expression:"tempForm.PhoneNumber2"}})],1)],1)],1),r("el-form-item",{attrs:{label:e.$t("AddVendors.Description"),prop:"Description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.tempForm.Description,callback:function(t){e.$set(e.tempForm,"Description",t)},expression:"tempForm.Description"}})],1),r("el-form-item",{attrs:{label:"password",prop:"Pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.tempForm.Pass,callback:function(t){e.$set(e.tempForm,"Pass",t)},expression:"tempForm.Pass"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.Visible=!1}}},[e._v(e._s(e.$t("AddVendors.Cancel")))]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createData()}}},[e._v(e._s(e.$t("AddVendors.Save")))])],1)],1)],1)}),a=[],i=r("317f"),l=r("7bec"),c=r.n(l),m=(r("4413"),r("cce2")),u=r.n(m),p=(r("7e4a"),r("61d9"),{name:"Driver",components:{VuePhoneNumberInput:c.a,birthDatepicker:u.a},data:function(){return{Visible:!1,tempForm:{Id:void 0,Name:"",Ssn:"",DateofBirth:"",Email:"",Status:0,PhoneNumber1:"",PhoneNumber2:"",Description:"",Type:"New",DriverUserId:"",Pass:"",Tag:null},rulesForm:{Name:[{required:!0,message:"الرجاء ادخال الاسم",trigger:"blur"},{min:3,max:50,message:"الرجاء إدخال إسم لا يقل عن 3 حروف و لا يزيد عن 50 حرف",trigger:"blur"}]}}},created:function(){this.resetTempForm()},methods:{resetTempForm:function(){this.tempForm={Id:void 0,Name:"",Ssn:"",DateofBirth:"",Email:"",Status:0,PhoneNumber1:"",PhoneNumber2:"",Description:"",Type:"New",DriverUserId:"",Pass:"",Tag:null}},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(i["a"])({Name:e.tempForm.Name,Ssn:e.tempForm.Ssn,PhoneNumber:e.tempForm.PhoneNumber1}).then((function(t){console.log(t),t?e.$notify({position:"top-left",title:"تم ",message:"يوجد عضو يحمل نفس رقم الهاتف او الرقم الوطني",type:"warning",duration:2e4}):(e.tempForm.DateofBirth=new Date(e.tempForm.DateofBirth),Object(i["c"])(e.tempForm).then((function(t){e.Visible=!1,e.$notify({title:"تم ",message:"تم الإضافة بنجاح",type:"success",duration:2e3})})).catch((function(e){console.log(e)})))}))}))},getAge:function(e){var t=new Date,r=new Date(e),o=t.getFullYear()-r.getFullYear(),n=t.getMonth()-r.getMonth();return(n<0||0===n&&t.getDate()<r.getDate())&&(o-=1),o}}}),d=p,f=r("2877"),g=Object(f["a"])(d,s,a,!1,null,null,null),h=g.exports,b={components:{NewUserSignUp:h},name:"Login",data:function(){var e=function(e,t,r){r()},t=function(e,t,r){t.length<6?r(new Error("The password can not be less than 6 digits")):r()};return{loginForm:{username:"",password:"",rememberme:!0},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loginFailed:"",passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.shiftKey,r=e.key;r&&1===r.length&&(this.capsTooltip=!!(t&&r>="a"&&r<="z"||!t&&r>="A"&&r<="Z")),"CapsLock"===r&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loginFailed=""})).catch((function(t){e.loginFailed=t})).finally((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,r){return"redirect"!==r&&(t[r]=e[r]),t}),{})}}},F=b,v=(r("2017"),r("4805"),Object(f["a"])(F,o,n,!1,null,"01236ed2",null));t["default"]=v.exports}}]);