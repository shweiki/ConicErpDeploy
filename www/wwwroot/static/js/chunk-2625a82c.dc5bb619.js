(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2625a82c"],{"09f4":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),Math.easeInOutQuad=function(t,e,i,s){return t/=s/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function a(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,i){var r=a(),l=t-r,o=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=o;var a=Math.easeInOutQuad(c,r,l,e);n(a),c<e?s(t):i&&"function"===typeof i&&i()};d()}},"1d04":function(t,e,i){"use strict";i.d(e,"c",(function(){return l})),i.d(e,"f",(function(){return o})),i.d(e,"e",(function(){return c})),i.d(e,"a",(function(){return d})),i.d(e,"b",(function(){return u})),i.d(e,"j",(function(){return p})),i.d(e,"i",(function(){return v})),i.d(e,"g",(function(){return m})),i.d(e,"h",(function(){return f})),i.d(e,"d",(function(){return g}));var s=i("b7e2"),n=i("4328"),a=i.n(n),r=i("4360");function l(t){return Object(s["a"])({url:"/OrderDelivery/GetByListQ",method:"post",data:a.a.stringify(t)})}function o(t){return Object(s["a"])({url:"/OrderDelivery/GetOrderDelivery",method:"get",params:t})}function c(t){return Object(s["a"])({url:"/OrderDelivery/GetDriverOrder",method:"get",params:t})}function d(t){return Object(s["a"])({url:r["a"].getters.settings.PointOfSale.DeliveryUrl,method:"post",data:a.a.stringify(t)})}function u(t){return Object(s["a"])({url:"/OrderDelivery/CreateWithDriver",method:"post",data:a.a.stringify(t)})}function p(t){return Object(s["a"])({url:"/OrderDelivery/SetDriver",method:"post",data:a.a.stringify(t)})}function v(t){return Object(s["a"])({url:"/OrderDelivery/OrderReceived",method:"post",data:a.a.stringify(t)})}function m(t){return Object(s["a"])({url:"/OrderDelivery/OrderDelivered",method:"post",data:a.a.stringify(t)})}function f(t){return Object(s["a"])({url:"/OrderDelivery/OrderDone",method:"post",data:a.a.stringify(t)})}function g(t){return Object(s["a"])({url:"/OrderDelivery/GetByListQByDriver",method:"post",data:a.a.stringify(t)})}},"3f7a":function(t,e,i){"use strict";i("f0af")},"5e15":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("driver-card")],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"overview-block-ptb"},[i("el-row",{attrs:{type:"flex"}},[i("el-col",{attrs:{span:4}},[i("el-input",{staticClass:"filter-item",attrs:{placeholder:"Search By Any  Name Or Id"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter.apply(null,arguments)}},model:{value:t.listQuery.Any,callback:function(e){t.$set(t.listQuery,"Any",e)},expression:"listQuery.Any"}})],1),t._v(" "),i("el-col",{attrs:{span:3}},[i("Sort-Options",{attrs:{Value:t.listQuery.Sort},on:{Set:function(e){t.listQuery.Sort=e,t.handleFilter()}}})],1),t._v(" "),i("el-col",{attrs:{span:10}},[i("Radio-Oprations",{attrs:{TableName:"DriverOrder"},on:{Set:function(e){t.listQuery.Status=e,t.handleFilter()}}})],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n        Search\n      ")])],1)],1),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"container"},[i("div",{staticClass:"row"},[i("el-row",{staticClass:"panel-group",staticStyle:{margin:"20px 2px"},attrs:{gutter:20}},t._l(t.list,(function(e,s){return i("div",{key:s},[i("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,md:8,lg:6}},[i("div",{staticClass:"card-panel"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"card-panel-icon-wrapper icon-people"},[i("Status-Icon",{staticClass:"card-panel-icon",attrs:{Status:e.Status,TableName:"DriverOrder"}})],1)]),t._v(" "),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-id"},[t._v(t._s(e.Id))])])]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-time"},[t._v("\n                      "+t._s(t._f("parseTime")(e.FakeDate,"{m}-{d} {h}:{i}"))+"\n                    ")])])])],1),t._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-phone"},[i("el-tag",{attrs:{size:"small",type:"success"}},[i("a",{attrs:{href:"tel:"+e.PhoneNumber}},[t._v("\n                          "+t._s(e.PhoneNumber)+"\n                        ")])])],1)])]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-name"},[t._v(t._s(e.Name))])])])],1),t._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-id"},[t._v("\n                      "+t._s(e.TotalPrice.toFixed(t.$store.getters.settings.ToFixed))+"\n                      JOD\n                    ")])])]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-region"},[t._v(t._s(e.Region))])])])],1),t._v(" "),i("el-row",{attrs:{gutter:24}},[i("order-details-mobile",{attrs:{Temp:e,caller:"Driver"}}),t._v(" "),i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:12}},[1==e.Status?i("div",[i("el-popconfirm",{attrs:{"confirm-button-text":"نعم","cancel-button-text":"لا, شكرا",icon:"el-icon-info",title:" "+e.Id+" تأكيد استلام طلب رقم"},on:{confirm:function(i){return t.HasReceived(e.Id)}}},[i("el-button",{attrs:{slot:"reference",type:"success",size:t.$store.getters.size},slot:"reference"},[t._v("استلام الطلب\n                      ")])],1)],1):t._e(),t._v(" "),2==e.Status?i("div",[i("el-popconfirm",{attrs:{"confirm-button-text":"نعم","cancel-button-text":"لا, شكرا","confirm-button-type":"warning",icon:"el-icon-info",title:" "+e.Id+" تأكيد توصيل طلب رقم"},on:{confirm:function(i){return t.HasDelivered(e.Id)}}},[i("el-button",{attrs:{slot:"reference",type:"warning",size:t.$store.getters.size},slot:"reference"},[t._v("توصيل الطلب\n                      ")])],1)],1):t._e()])],1)],1)])],1)})),0)],1)]),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.Totals.Rows>0,expression:"Totals.Rows > 0"}],attrs:{total:t.Totals.Rows,page:t.listQuery.Page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"Page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getdata}})],1)},r=[],l=(i("8e6e"),i("ac6a"),i("456d"),i("7f7f"),i("ade3")),o=i("ad84"),c=i("1d04"),d=i("2f62"),u=i("44b4"),p=i("f61b"),v=i("6724"),m=i("333d"),f=i("5333");function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){Object(l["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={name:"DeliveryCards",components:{OrderDetailsMobile:o["a"],RadioOprations:u["a"],StatusIcon:p["a"],Pagination:m["a"],SortOptions:f["a"]},directives:{waves:v["a"]},data:function(){return{list:[],Totals:{Rows:0},user:{},listLoading:!1,listQuery:{Page:1,Any:"",limit:this.$store.getters.settings.LimitQurey,Sort:"+id",Status:void 0}}},computed:y({},Object(d["b"])(["Id","name"])),created:function(){this.handleFilter()},methods:{getdata:function(){var t=this;this.user={Id:this.Id,name:this.name},this.listLoading=!0,Object(c["e"])({id:this.user.Id,name:this.user.name,Page:this.listQuery.Page,Any:this.listQuery.Any,limit:this.listQuery.limit,Sort:this.listQuery.Sort,Status:this.listQuery.Status}).then((function(e){t.list=e.items,t.Totals=e.Totals,t.listLoading=!1})).catch((function(t){console.log(t)}))},handleFilter:function(){this.listQuery.Page=1,this.getdata()},HasReceived:function(t){var e=this;Object(c["i"])({id:t}).then((function(t){t?(e.$notify({title:"تم ارسال بنجاح",message:"تم ارسال بنجاح - 0",type:"success",position:"top-left"}),e.getdata()):e.$notify.error({title:"error",message:"حصلت مشكلة ما",position:"top-left"})}))},HasDelivered:function(t){var e=this;Object(c["g"])({id:t}).then((function(t){t?(e.$notify({title:"تم ارسال بنجاح",message:"تم ارسال بنجاح - 0",type:"success",position:"top-left"}),e.getdata()):e.$notify.error({title:"error",message:"حصلت مشكلة ما",position:"top-left"})}))}}},_=h,b=(i("3f7a"),i("2877")),O=Object(b["a"])(_,a,r,!1,null,"8c4dc6ba",null),w=O.exports,D={name:"DeliveryPage",components:{DriverCard:w},data:function(){return{list:[],Driver:{Id:1,Name:"driver name"}}},created:function(){},methods:{}},x=D,C=Object(b["a"])(x,s,n,!1,null,null,null);e["default"]=C.exports},6724:function(t,e,i){"use strict";i("8d41");var s="@@wavesContext";function n(t,e){function i(i){var s=Object.assign({},e.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),a=n.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var r=a.getBoundingClientRect(),l=a.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",a.appendChild(l)),n.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(i.pageY-r.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(i.pageX-r.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=n.color,l.className="waves-ripple z-active",!1}}return t[s]?t[s].removeHandle=i:t[s]={removeHandle:i},i}var a={bind:function(t,e){t.addEventListener("click",n(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[s].removeHandle,!1),t.addEventListener("click",n(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[s].removeHandle,!1),t[s]=null,delete t[s]}},r=function(t){t.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(r)),a.install=r;e["a"]=a},7514:function(t,e,i){"use strict";var s=i("5ca1"),n=i("0a49")(5),a="find",r=!0;a in[]&&Array(1)[a]((function(){r=!1})),s(s.P+s.F*r,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(a)},"8d41":function(t,e,i){},ad84:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[2==t.Temp.Status&&"Driver"!=t.caller?i("el-col",{attrs:{span:24}},[i("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-info",type:"primary",size:t.$store.getters.size},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("Delivery.Details"))+"\n    ")])],1):i("el-col",{staticStyle:{"padding-top":"10px"},attrs:{span:12}},[i("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-info",type:"primary",size:t.$store.getters.size},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("Delivery.Details"))+"\n    ")])],1),t._v(" "),i("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.$t("Delivery.DOrderInfo"),width:"100%",center:"",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-descriptions",{staticClass:"margin-top",attrs:{title:t.$t("Delivery.CustomerInfo"),column:1,border:""}},[i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v("\n          "+t._s(t.$t("Delivery.CustomerName"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Name))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-location-outline"}),t._v("\n          "+t._s(t.$t("AddVendors.Region"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Region))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-mobile-phone"}),t._v("\n          "+t._s(t.$t("Delivery.Phone"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small",type:"success"}},[i("a",{attrs:{href:"tel:"+t.Temp.PhoneNumber}},[t._v(" "+t._s(t.Temp.PhoneNumber)+" ")])])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-tickets"}),t._v("\n          "+t._s(t.$t("Items.Notes"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Description))])],2)],1),t._v(" "),i("br"),t._v(" "),i("el-descriptions",{staticClass:"margin-top",attrs:{title:t.$t("Delivery.OrderInfo"),column:1,border:""}},[i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-star-off"}),t._v("\n          "+t._s(t.$t("Delivery.OrderNo"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Id))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-date"}),t._v("\n          "+t._s(t.$t("Sales.Date"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t._f("parseTime")(t.Temp.FakeDate,"{m}-{d} {h}:{i}")))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-s-flag"}),t._v("\n          "+t._s(t.$t("OrderInventories.Status"))+"\n        ")]),t._v(" "),i("Status-Tag",{attrs:{Status:t.Temp.Status,TableName:"OrderDelivery"}})],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n          "+t._s(t.$t("Delivery.DeliveryPrice"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.DeliveryPrice))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n          "+t._s(t.$t("Delivery.ReceiptTotal"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPill))])],2),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-money"}),t._v("\n          "+t._s(t.$t("Delivery.TotalAmmount"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.TotalPrice))])],2),t._v(" "),0!=t.Temp.Status&&"Manager"==t.caller?i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user-solid"}),t._v("\n          "+t._s(t.$t("Delivery.DriverName"))+"\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Driver.Name))])],2):t._e(),t._v(" "),i("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-office-building"}),t._v("\n          الاصناف\n        ")]),t._v(" "),i("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.Temp.Content))])],2)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"medium",type:"danger"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("إغلاق")])],1)],1)],1)},n=[],a=i("00f2"),r={components:{StatusTag:a["a"]},name:"OrderDetailsMobile",props:["Temp","caller"],data:function(){return{dialogFormVisible:!1}}},l=r,o=i("2877"),c=Object(o["a"])(l,s,n,!1,null,null,null);e["a"]=c.exports},f0af:function(t,e,i){}}]);