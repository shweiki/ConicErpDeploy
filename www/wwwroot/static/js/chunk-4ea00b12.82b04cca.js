(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ea00b12"],{"09f4":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),Math.easeInOutQuad=function(t,e,i,l){return t/=l/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function s(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function a(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,i){var r=a(),n=t-r,o=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=o;var a=Math.easeInOutQuad(c,r,n,e);s(a),c<e?l(t):i&&"function"===typeof i&&i()};d()}},"0ae0":function(t,e,i){"use strict";var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{attrs:{type:"flex"}},[i("el-col",{attrs:{span:12}},[i("el-select",{attrs:{filterable:"","v-bind:placeholder":t.$t("Delivery.Driver")},model:{value:t.Driver,callback:function(e){t.Driver=e},expression:"Driver"}},t._l(t.Drivers,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[i("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))])])})),1)],1),t._v(" "),"mobile"!=t.$store.getters.device?i("el-col",{attrs:{span:3}},[i("el-tooltip",{attrs:{content:t.$t("Delivery.AddDriver"),placement:"top"}},[i("add-driver")],1)],1):t._e(),t._v(" "),i("el-col",{attrs:{span:9}},[i("el-button",{staticStyle:{float:"left"},attrs:{type:"success",icon:"fa fa-save",size:t.$store.getters.size},on:{click:function(e){return t.AssignDriver()}}},[t._v(t._s(t.$t("Delivery.Assign")))])],1)],1)],1)},s=[],a=(i("7514"),i("c96b")),r=i("b3ca"),n={components:{AddDriver:r["a"]},props:["Id"],data:function(){return{Driver:"",Drivers:[]}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.loading=!0,Object(a["h"])().then((function(e){console.log(e),t.Drivers=e,t.loading=!1})).catch((function(t){console.log(t)}))},AssignDriver:function(){var t=this;this.$emit("Set",this.Drivers.find((function(e){return e.value==t.Driver})))}}},o=n,c=i("2877"),d=Object(c["a"])(o,l,s,!1,null,null,null);e["a"]=d.exports},"1d04":function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"f",(function(){return o})),i.d(e,"e",(function(){return c})),i.d(e,"a",(function(){return d})),i.d(e,"b",(function(){return u})),i.d(e,"j",(function(){return v})),i.d(e,"i",(function(){return p})),i.d(e,"g",(function(){return m})),i.d(e,"h",(function(){return g})),i.d(e,"d",(function(){return _}));var l=i("b7e2"),s=i("4328"),a=i.n(s),r=i("4360");function n(t){return Object(l["a"])({url:"/OrderDelivery/GetByListQ",method:"post",data:a.a.stringify(t)})}function o(t){return Object(l["a"])({url:"/OrderDelivery/GetOrderDelivery",method:"get",params:t})}function c(t){return Object(l["a"])({url:"/OrderDelivery/GetDriverOrder",method:"get",params:t})}function d(t){return Object(l["a"])({url:r["a"].getters.settings.PointOfSale.DeliveryUrl,method:"post",data:a.a.stringify(t)})}function u(t){return Object(l["a"])({url:"/OrderDelivery/CreateWithDriver",method:"post",data:a.a.stringify(t)})}function v(t){return Object(l["a"])({url:"/OrderDelivery/SetDriver",method:"post",data:a.a.stringify(t)})}function p(t){return Object(l["a"])({url:"/OrderDelivery/OrderReceived",method:"post",data:a.a.stringify(t)})}function m(t){return Object(l["a"])({url:"/OrderDelivery/OrderDelivered",method:"post",data:a.a.stringify(t)})}function g(t){return Object(l["a"])({url:"/OrderDelivery/OrderDone",method:"post",data:a.a.stringify(t)})}function _(t){return Object(l["a"])({url:"/OrderDelivery/GetByListQByDriver",method:"post",data:a.a.stringify(t)})}},"41f6":function(t,e,i){},"61d9":function(t,e,i){"use strict";i.d(e,"e",(function(){return n})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return c})),i.d(e,"d",(function(){return d})),i.d(e,"c",(function(){return u})),i.d(e,"f",(function(){return v}));var l=i("b7e2"),s=i("4328"),a=i.n(s),r=(i("4360"),i("a18c"));function n(){return Object(l["a"])({url:"/Role/GetRoles",method:"get"})}function o(t){return Object(l["a"])({url:"/Role/AddRole",method:"post",data:a.a.stringify(t)})}function c(t){return Object(l["a"])({url:"/Role/AddUserRouter",method:"post",data:a.a.stringify(t)})}function d(t){return Object(l["a"])({url:"/Role/Edit",method:"post",data:a.a.stringify(t)})}function u(t){return Object(l["a"])({url:"/Role/DeleteRole",method:"post",data:a.a.stringify(t)})}function v(){return r["a"]}},6724:function(t,e,i){"use strict";i("8d41");var l="@@wavesContext";function s(t,e){function i(i){var l=Object.assign({},e.value),s=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},l),a=s.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var r=a.getBoundingClientRect(),n=a.querySelector(".waves-ripple");switch(n?n.className="waves-ripple":(n=document.createElement("span"),n.className="waves-ripple",n.style.height=n.style.width=Math.max(r.width,r.height)+"px",a.appendChild(n)),s.type){case"center":n.style.top=r.height/2-n.offsetHeight/2+"px",n.style.left=r.width/2-n.offsetWidth/2+"px";break;default:n.style.top=(i.pageY-r.top-n.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",n.style.left=(i.pageX-r.left-n.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return n.style.backgroundColor=s.color,n.className="waves-ripple z-active",!1}}return t[l]?t[l].removeHandle=i:t[l]={removeHandle:i},i}var a={bind:function(t,e){t.addEventListener("click",s(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[l].removeHandle,!1),t.addEventListener("click",s(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[l].removeHandle,!1),t[l]=null,delete t[l]}},r=function(t){t.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(r)),a.install=r;e["a"]=a},7514:function(t,e,i){"use strict";var l=i("5ca1"),s=i("0a49")(5),a="find",r=!0;a in[]&&Array(1)[a]((function(){r=!1})),l(l.P+l.F*r,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(a)},"8a68":function(t,e,i){},"8af3":function(t,e,i){"use strict";i("8a68")},"8d41":function(t,e,i){},ad84:function(t,e,i){"use strict";var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[2==t.Temp.Status&&"Driver"!=t.caller?i("el-col",{attrs:{span:24}},[i("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-info",type:"primary",size:t.$store.getters.size},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("Delivery.Details"))+" ")])],1):i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:12}},[i("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-info",type:"primary",size:t.$store.getters.size},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("Delivery.Details"))+" ")])],1),t._v(" "),i("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.$t("Delivery.DOrderInfo"),width:"100%",center:"",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-descriptions",{staticClass:"margin-top",attrs:{title:t.$t("Delivery.CustomerInfo"),column:1,border:""}},[i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v("\r\n        "+t._s(t.$t("Delivery.CustomerName"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Name))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-location-outline"}),t._v("\r\n        "+t._s(t.$t("AddVendors.Region"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Region))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-mobile-phone"}),t._v("\r\n         "+t._s(t.$t("Delivery.Phone"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small",type:"success"}},[i("a",{attrs:{href:"tel:+"+t.Temp.PhoneNumber}},[t._v(" "+t._s(t.Temp.PhoneNumber)+" ")])])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-tickets"}),t._v("\r\n        "+t._s(t.$t("Items.Notes"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Description))])],2)],1),t._v(" "),i("br"),t._v(" "),i("el-descriptions",{staticClass:"margin-top",attrs:{title:t.$t("Delivery.OrderInfo"),column:1,border:""}},[i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-star-off"}),t._v("\r\n         "+t._s(t.$t("Delivery.OrderNo"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Id))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-date"}),t._v("\r\n        "+t._s(t.$t("Sales.Date"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t._f("parseTime")(t.Temp.FakeDate,"{m}-{d} {h}:{i}")))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-s-flag"}),t._v("\r\n        "+t._s(t.$t("OrderInventories.Status"))+"\r\n      ")]),t._v(" "),i("Status-Tag",{attrs:{Status:t.Temp.Status,TableName:"OrderDelivery"}})],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\r\n        "+t._s(t.$t("Delivery.DeliveryPrice"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.DeliveryPrice))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\r\n        "+t._s(t.$t("Delivery.ReceiptTotal"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPill))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\r\n         "+t._s(t.$t("Delivery.TotalAmmount"))+" \r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPrice))])],2),t._v(" "),0!=t.Temp.Status&&"Manager"==t.caller?i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user-solid"}),t._v("\r\n         "+t._s(t.$t("Delivery.DriverName"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Driver.Name))])],2):t._e(),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-office-building"}),t._v("\r\n        الاصناف\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Content))])],2)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"medium",type:"danger"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("إغلاق")])],1)],1)],1)},s=[],a=i("00f2"),r={components:{StatusTag:a["a"]},name:"OrderDetailsMobile",props:["Temp","caller"],data:function(){return{dialogFormVisible:!1}}},n=r,o=i("2877"),c=Object(o["a"])(n,l,s,!1,null,null,null);e["a"]=c.exports},b3a2:function(t,e,i){"use strict";i("41f6")},c96b:function(t,e,i){"use strict";i.d(e,"h",(function(){return r})),i.d(e,"f",(function(){return n})),i.d(e,"a",(function(){return o})),i.d(e,"g",(function(){return c})),i.d(e,"c",(function(){return d})),i.d(e,"d",(function(){return u})),i.d(e,"b",(function(){return v})),i.d(e,"e",(function(){return p}));var l=i("b7e2"),s=i("4328"),a=i.n(s);function r(t){return Object(l["a"])({url:"/Driver/GetDriversLabel",method:"get",params:t})}function n(t){return Object(l["a"])({url:"/Driver/GetByListQ",method:"post",data:a.a.stringify(t)})}function o(t){return Object(l["a"])({url:"/Driver/CheckDriverIsExist",method:"get",params:t})}function c(t){return Object(l["a"])({url:"/Driver/GetDriverInfo",method:"get",params:t})}function d(t){return Object(l["a"])({url:"/Driver/DriverActivation",method:"get",params:t})}function u(t){return Object(l["a"])({url:"/Driver/DriverDeActivation",method:"get",params:t})}function v(t){return Object(l["a"])({url:"/Driver/Create",method:"post",data:a.a.stringify(t)})}function p(t){return Object(l["a"])({url:"/Driver/Edit",method:"post",data:a.a.stringify(t)})}},ef0a9:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("delivery-cards")],1)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"overview-block-ptb"},[i("el-row",{attrs:{type:"flex"}},[i("el-col",{attrs:{span:4}},[i("el-input",{staticClass:"filter-item",attrs:{placeholder:"Search By Any  Name Or Id"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter.apply(null,arguments)}},model:{value:t.listQuery.Any,callback:function(e){t.$set(t.listQuery,"Any",e)},expression:"listQuery.Any"}})],1),t._v(" "),i("el-col",{attrs:{span:3}},[i("Sort-Options",{attrs:{Value:t.listQuery.Sort},on:{Set:function(e){t.listQuery.Sort=e,t.handleFilter()}}})],1),t._v(" "),i("el-col",{attrs:{span:14}},[i("Radio-Oprations",{attrs:{TableName:"OrderDelivery"},on:{Set:function(e){t.listQuery.Status=e,t.handleFilter()}}})],1),t._v(" "),i("el-col",{attrs:{span:2}},[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n        Search\n      ")])],1)],1),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"container"},[i("div",{staticClass:"row"},[i("el-row",{staticClass:"panel-group",staticStyle:{margin:"20px 2px"},attrs:{gutter:20}},t._l(t.list,(function(e,l){return i("div",{key:l},[i("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,md:8,lg:6}},[i("div",{staticClass:"card-panel"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"card-panel-icon-wrapper icon-people"},[i("Status-Icon",{staticClass:"card-panel-icon",attrs:{Status:e.Status,TableName:"OrderDelivery"}})],1)]),t._v(" "),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-id"},[t._v("\n                      "+t._s(e.Id+"\\"+e.OrderId)+"\n                    ")])])]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-time"},[t._v("\n                      "+t._s(t._f("parseTime")(e.FakeDate,"{m}-{d} {h}:{i}"))+"\n                    ")])])])],1),t._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-phone"},[t._v(t._s(e.PhoneNumber))])])]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-name"},[t._v(t._s(e.Name))])])])],1),t._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-id"},[t._v("\n                      "+t._s(e.TotalPrice.toFixed(t.$store.getters.settings.ToFixed))+"\n                      JOD\n                    ")])])]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-name"},[t._v(t._s(e.Region))])])])],1),t._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[null!=e.Driver?i("div",{staticClass:"card-panel-id"},[t._v("\n                      "+t._s(e.Driver.Name)+"\n                    ")]):i("div",{staticClass:"card-panel-id"},[t._v("لا يوجد سائق")])])]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-name"},[t._v("اسم السائق")])])])],1),t._v(" "),"mobile"!=t.$store.getters.device?i("el-row",{attrs:{gutter:24}},[i("driver-to-order",{attrs:{Temp:e},on:{Done:function(e){return t.handleFilter()}}}),t._v(" "),i("order-details",{attrs:{Temp:e}}),t._v(" "),i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:12}},[3==e.Status?i("div",[i("el-popconfirm",{attrs:{"confirm-button-text":"ترحيل","cancel-button-text":"لا, شكرا","confirm-button-type":"warning",icon:"el-icon-info",title:"تأكيد الطلب رقم  "+e.Id+" وترحيله"},on:{confirm:function(i){return t.HasDone(e.Id)}}},[i("el-button",{staticStyle:{float:"right"},attrs:{slot:"reference",type:"warning",size:t.$store.getters.size},slot:"reference"},[t._v("ترحيل الطلب\n                      ")])],1)],1):t._e()])],1):t._e(),t._v(" "),"mobile"===t.$store.getters.device?i("el-row",{attrs:{gutter:24}},[3==e.Status?i("el-col",{staticStyle:{"padding-top":"18px"},attrs:{span:12}},[i("el-popconfirm",{attrs:{"confirm-button-text":"ترحيل","cancel-button-text":"لا, شكرا","confirm-button-type":"warning",icon:"el-icon-info",title:"تأكيد الطلب رقم  "+e.Id+" وترحيله"},on:{confirm:function(i){return t.HasDone(e.Id)}}},[i("el-button",{staticStyle:{float:"right"},attrs:{slot:"reference",type:"warning",size:t.$store.getters.size},slot:"reference"},[t._v("ترحيل الطلب\n                    ")])],1)],1):t._e(),t._v(" "),i("driver-to-order-mobile",{attrs:{Temp:e},on:{Done:function(e){return t.handleFilter()}}}),t._v(" "),i("order-details-mobile",{attrs:{Temp:e,caller:"Manager"}})],1):t._e()],1)])],1)})),0)],1)]),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.Totals.Rows>0,expression:"Totals.Rows > 0"}],attrs:{total:t.Totals.Rows,page:t.listQuery.Page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"Page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},r=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[2==t.Temp.Status?i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:24}},[i("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-info",type:"primary",size:t.$store.getters.size},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("Delivery.Details"))+"\n    ")])],1):i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:12}},[i("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-info",type:"primary",size:t.$store.getters.size},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("Delivery.Details"))+"\n    ")])],1),t._v(" "),i("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.$t("Delivery.DOrderInfo"),width:"60%",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-descriptions",{staticClass:"margin-top",attrs:{title:t.$t("Delivery.CustomerInfo"),column:2,border:""}},[i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v("\n          "+t._s(t.$t("Delivery.CustomerName"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Name))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-location-outline"}),t._v("\n          "+t._s(t.$t("AddVendors.Region"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Region))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-mobile-phone"}),t._v("\n          "+t._s(t.$t("Delivery.Phone"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small",type:"success"}},[i("a",{attrs:{href:"tel:+"+t.Temp.PhoneNumber}},[t._v(" "+t._s(t.Temp.PhoneNumber)+" ")])])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-tickets"}),t._v("\n          "+t._s(t.$t("Items.Notes"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Description))])],2)],1),t._v(" "),i("br"),t._v(" "),i("el-descriptions",{staticClass:"margin-top",attrs:{title:t.$t("Delivery.OrderInfo"),column:2,border:""}},[i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-star-off"}),t._v("\n          "+t._s(t.$t("Delivery.OrderNo"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Id+"\\"+t.Temp.OrderId))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-date"}),t._v("\n          "+t._s(t.$t("Sales.Date"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t._f("parseTime")(t.Temp.FakeDate,"{m}-{d} {h}:{i}")))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-s-flag"}),t._v("\n          "+t._s(t.$t("OrderInventories.Status"))+"\n        ")]),t._v(" "),i("el-row",[i("el-col",{attrs:{span:10}},[i("Dialog-Action-Log",{attrs:{TableName:"OrderDelivery",ObjId:t.Temp.Id}})],1),t._v(" "),i("el-col",{attrs:{span:14}},[i("Status-Tag",{attrs:{Status:t.Temp.Status,TableName:"OrderDelivery"}})],1)],1)],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n          "+t._s(t.$t("Delivery.DeliveryPrice"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.DeliveryPrice))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n          "+t._s(t.$t("Delivery.ReceiptTotal"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPill))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n          "+t._s(t.$t("Delivery.TotalAmmount"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPrice))])],2),t._v(" "),0!=t.Temp.Status?i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"},span:2}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user-solid"}),t._v("\n          "+t._s(t.$t("Delivery.DriverName"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Driver.Name))])],2):t._e(),t._v(" "),i("el-descriptions-item",{attrs:{span:2,"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-office-building"}),t._v("\n          الاصناف\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Content))])],2)],1),t._v(" "),i("div",[1==t.Temp.Status?i("el-col",[i("driver-select",{on:{Set:function(e){t.SetDriver(e.value,t.Temp.Id)}}})],1):t._e()],1)],1)],1)},o=[],c=i("0ae0"),d=i("00f2"),u=i("1d04"),v=i("d1b8"),p={components:{StatusTag:d["a"],DriverSelect:c["a"],DialogActionLog:v["a"]},name:"OrderDetails",props:["Temp"],data:function(){return{dialogFormVisible:!1}},methods:{SetDriver:function(t,e){var i=this;Object(u["j"])({DriverId:t,OrderId:e}).then((function(t){t&&(i.dialogFormVisible=!1,i.$emit("Done"))}))}}},m=p,g=i("2877"),_=Object(g["a"])(m,n,o,!1,null,null,null),f=_.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[0==t.Temp.Status?i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:12}},[i("el-button",{staticStyle:{float:"left"},attrs:{type:"success",size:t.$store.getters.size,icon:"el-icon-plus"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("\n    "+t._s(t.$t("Delivery.AssignDriver")))])],1):t._e(),t._v(" "),1==t.Temp.Status?i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:12}},[1==t.Temp.Status?i("el-button",{staticStyle:{float:"left"},attrs:{type:"success",size:t.$store.getters.size,icon:"el-icon-plus"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("\n    Delivery")]):t._e()],1):t._e(),t._v(" "),i("el-dialog",{ref:"dataForm",staticStyle:{"margin-top":"-13vh"},attrs:{title:t.$t("Delivery.SetDriver"),"show-close":!1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-row",[i("el-descriptions",{staticClass:"margin-top",attrs:{title:t.$t("Delivery.OrderInfo"),column:2,border:""}},[i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-star-off"}),t._v("\n            "+t._s(t.$t("Delivery.OrderNo"))+"\n          ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Id))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-date"}),t._v("\n            "+t._s(t.$t("Sales.Date"))+"\n          ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t._f("parseTime")(t.Temp.FakeDate,"{m}-{d} {h}:{i}")))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-location-outline"}),t._v("\n            "+t._s(t.$t("AddVendors.Region"))+"\n          ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Region))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n            "+t._s(t.$t("Delivery.DeliveryPrice"))+"\n          ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.DeliveryPrice))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n            "+t._s(t.$t("Delivery.ReceiptTotal"))+"\n          ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPill))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n            "+t._s(t.$t("Delivery.TotalAmmount"))+"\n          ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPrice))])],2)],1)],1),t._v(" "),i("br"),t._v(" "),i("el-row",[i("driver-select",{on:{Set:function(e){t.SetDriver(e.value,t.Temp.Id)}}})],1)],1)],1)},b=[],h={name:"DriverToOrder",components:{DriverSelect:c["a"]},props:["Temp"],data:function(){return{dialogFormVisible:!1}},methods:{SetDriver:function(t,e){var i=this;Object(u["j"])({DriverId:t,OrderId:e}).then((function(t){t&&(i.dialogFormVisible=!1,i.$emit("Done"))}))}}},D=h,T=Object(g["a"])(D,y,b,!1,null,null,null),x=T.exports,O=i("6724"),C=i("333d"),S=i("5333"),$=i("44b4"),w=i("f61b"),z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:12}},[0==t.Temp.Status?i("el-button",{staticStyle:{float:"left"},attrs:{type:"success",size:t.$store.getters.size,icon:"el-icon-plus"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("Delivery.AssignDriver"))+" ")]):t._e(),t._v(" "),1==t.Temp.Status?i("el-button",{staticStyle:{float:"left"},attrs:{type:"success",size:t.$store.getters.size,icon:"el-icon-plus"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("Delivery ")]):t._e()],1),t._v(" "),i("el-dialog",{ref:"dataForm",staticStyle:{"margin-top":"-13vh"},attrs:{title:t.$t("Delivery.SetDriver"),width:"100%","show-close":!1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-row",[i("el-descriptions",{staticClass:"margin-top",attrs:{title:t.$t("Delivery.OrderInfo"),column:1,border:""}},[i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-star-off"}),t._v("\r\n        "+t._s(t.$t("Delivery.OrderNo"))+" \r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Id))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-date"}),t._v("\r\n        "+t._s(t.$t("Sales.Date"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t._f("parseTime")(t.Temp.FakeDate,"{m}-{d} {h}:{i}")))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-location-outline"}),t._v("\r\n        "+t._s(t.$t("AddVendors.Region"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Region))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\r\n        "+t._s(t.$t("Delivery.DeliveryPrice"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.DeliveryPrice))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\r\n        "+t._s(t.$t("Delivery.ReceiptTotal"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPill))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\r\n        "+t._s(t.$t("Delivery.TotalAmmount"))+"\r\n      ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPrice))])],2)],1)],1),t._v(" "),i("br"),t._v(" "),i("el-row",[i("driver-select",{on:{Set:function(e){t.SetDriver(e.value,t.Temp.Id)}}})],1)],1)],1)},j=[],I={name:"DriverToOrderMobile",components:{DriverSelect:c["a"]},props:["Temp"],data:function(){return{dialogFormVisible:!1}},methods:{SetDriver:function(t,e){var i=this;Object(u["j"])({DriverId:t,OrderId:e}).then((function(t){t&&(i.dialogFormVisible=!1,i.$emit("Done"))}))}}},F=I,N=Object(g["a"])(F,z,j,!1,null,null,null),k=N.exports,R=i("ad84"),A={name:"DeliveryCards",components:{OrderDetails:f,DriverToOrder:x,Pagination:C["a"],SortOptions:S["a"],RadioOprations:$["a"],StatusIcon:w["a"],DriverToOrderMobile:k,OrderDetailsMobile:R["a"]},directives:{waves:O["a"]},data:function(){return{list:[],Totals:{Rows:0},listLoading:!1,listQuery:{Page:1,Any:"",limit:this.$store.getters.settings.LimitQurey,Sort:"-id",Status:void 0}}},created:function(){this.handleFilter()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(u["f"])(this.listQuery).then((function(e){t.list=e.items,t.Totals=e.Totals,t.listLoading=!1})).catch((function(t){console.log(t)}))},handleFilter:function(){this.listQuery.Page=1,this.getList()},HasDone:function(t){var e=this;Object(u["h"])({id:t}).then((function(t){t?(e.$notify({title:"تم ارسال بنجاح",message:"تم ارسال بنجاح - 0",type:"success",position:"top-left"}),e.getList()):e.$notify.error({title:"error",message:"حصلت مشكلة ما",position:"top-left"})}))}}},P=A,V=(i("b3a2"),Object(g["a"])(P,a,r,!1,null,"70eb413c",null)),L=V.exports,E={name:"DeliveryManager",components:{DeliveryCards:L},data:function(){return{list:[]}},created:function(){},methods:{}},Q=E,M=Object(g["a"])(Q,l,s,!1,null,null,null);e["default"]=M.exports},f2f8:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var l=i("b7e2");i("4328");function s(t){return Object(l["a"])({url:"/ActionLog/GetLogByObjTable",method:"get",params:t})}},f61b:function(t,e,i){"use strict";var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return null!=t.Opration.IconClass?i("i",{class:t.Opration.IconClass,style:"color: "+t.Opration.Color+";"}):t._e()},s=[],a=(i("7514"),i("c5f6"),{name:"StatusTag",props:{Status:Number,TableName:String},data:function(){return{Opration:{}}},watch:{Status:function(t){this.getdata()}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.Opration=this.$store.getters.Oprations.find((function(e){return e.TableName==t.TableName&&e.Status==t.Status})),void 0==this.Opration?this.Opration={ArabicOprationDescription:"-",ClassName:"success",Color:null,ControllerName:"-",IconClass:"el-icon-finished",Id:0,OprationDescription:"- ",OprationName:"-",ReferenceStatus:null,RoleName:null,Status:0,TableName:"-"}:this.Opration}}}),r=a,n=(i("8af3"),i("2877")),o=Object(n["a"])(r,l,s,!1,null,"ec6b1a84",null);e["a"]=o.exports}}]);