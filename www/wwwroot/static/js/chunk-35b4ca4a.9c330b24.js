(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35b4ca4a"],{"335e":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PrintReport})),__webpack_require__.d(__webpack_exports__,"b",(function(){return VisualizationReportHtml}));var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__),C_ErpSolution_VueJs_Conic_Erp_Ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1da1"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__),_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("4360"),_api_Report__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("12b6"),_Visualization__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("1428"),html_to_image__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("e774"),jsprintmanager__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("cfc2"),jsprintmanager__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(jsprintmanager__WEBPACK_IMPORTED_MODULE_7__),jspdf__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("e511"),jspdf__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_8__),_api_StmpEmail__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("0359"),_Report_ShawermaSheesh__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("6a83"),_Report_OrderReceipt__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("2520");function PrintReport(Type,Data){var JSPM=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(_api_Report__WEBPACK_IMPORTED_MODULE_4__["e"])({Type:Type}).then((function(res){res.forEach((function(item,index){if(JSPM){var ShawermaSheesh=_Report_ShawermaSheesh__WEBPACK_IMPORTED_MODULE_10__["a"],OrderReceipt=_Report_OrderReceipt__WEBPACK_IMPORTED_MODULE_11__["a"];eval(item.Name+"("+JSON.stringify(Data)+(item.Printer?",`"+item.Printer+"`)":")"))}else{item.Html=Object(_Visualization__WEBPACK_IMPORTED_MODULE_5__["a"])(Data,item.Html,"Set");try{var oIframe=document.getElementById("ifrmPrint"),oDoc=oIframe.contentWindow||oIframe.contentDocument;oDoc.document&&(oDoc=oDoc.document),oDoc.write("<head><title>title</title>"),oDoc.write('</head><body onload="this.focus(); this.print();">'),oDoc.write(item.Html+"</body>"),oDoc.close(),setTimeout((function(){document.getElementById("ifrmPrint").src=""}),2e3)}catch(e){self.print()}}}))}))}function JSPMPrintReport(t,e){Object(_api_Report__WEBPACK_IMPORTED_MODULE_4__["e"])({Type:t}).then((function(t){t.forEach((function(t,e){}))}))}function SendReportByEmail(t,e,a){var n=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(_api_Report__WEBPACK_IMPORTED_MODULE_4__["e"])({Type:e}).then((function(e){e.forEach(function(){var e=Object(C_ErpSolution_VueJs_Conic_Erp_Ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark((function e(r,i){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.Html=Object(_Visualization__WEBPACK_IMPORTED_MODULE_5__["a"])(a,r.Html,"Set"),e.next=3,Object(_api_StmpEmail__WEBPACK_IMPORTED_MODULE_9__["a"])(t,r.Name+" - "+o,r.Html);case 3:s=e.sent,n.$notify({title:"تم الإضافة بنجاح",message:"تم ارسال "+s,type:"success",position:"top-left",duration:3e3});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}))}function VisualizationReportHtml(t,e){return new Promise((function(a,n){Object(_api_Report__WEBPACK_IMPORTED_MODULE_4__["e"])({Type:t}).then((function(t){t.forEach((function(t,a){t.Html=Object(_Visualization__WEBPACK_IMPORTED_MODULE_5__["a"])(e,t.Html,"Set")})),a(t.map((function(t){return t.Html})))})).catch((function(t){n(t)}))}))}},"8a09":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{staticStyle:{"margin-top":"-14vh"},attrs:{title:"تأكيد",visible:t.Show,width:"40%",center:"","show-close":!1,"before-close":t.handleClose},on:{"update:visible":function(e){t.Show=e}}},[a("div",{staticClass:"dialog-footer",attrs:{slot:"title"},slot:"title"},[a("el-col",{attrs:{span:4}},[a("el-button",{staticStyle:{float:"left"},attrs:{icon:"fa fa-save",type:"primary"},on:{click:function(e){return t.createData()}}})],1),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-divider",[t._v(" إغلاق صندوق ")])],1)],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("span",{staticStyle:{color:"#ff5722","font-size":"large"}},[t._v("مبيعات النقدية :\n        "+t._s(t.Totals.Cash.toFixed(t.$store.getters.settings.ToFixed))+"\n      ")]),t._v(" "),a("el-divider"),t._v(" "),a("span",{staticStyle:{color:"#ff5722","font-size":"large"}},[t._v("مبيعات الفيزا :\n        "+t._s(t.Totals.Visa.toFixed(t.$store.getters.settings.ToFixed))+"\n      ")]),t._v(" "),a("el-divider"),t._v(" "),a("span",{staticStyle:{color:"#ff5722","font-size":"large"}},[t._v("مجموع المبيعات :\n        "+t._s(t.Totals.Totals.toFixed(t.$store.getters.settings.ToFixed))+"\n      ")]),t._v(" "),a("el-divider"),t._v(" "),a("el-form",{ref:"F-CashPool",attrs:{model:t.tempForm}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("span",{staticStyle:{"font-size":"large"}},[t._v(" إجمالي عد الورق :")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalCash,callback:function(e){t.$set(t.tempForm,"TotalCash",e)},expression:"tempForm.TotalCash"}})],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي عد المعدن :")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalCoins,callback:function(e){t.$set(t.tempForm,"TotalCoins",e)},expression:"tempForm.TotalCoins"}})],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي مبلغ فيزا :")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalVisa,callback:function(e){t.$set(t.tempForm,"TotalVisa",e)},expression:"tempForm.TotalVisa"}})],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي مبلغ الملغي :")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalReject,callback:function(e){t.$set(t.tempForm,"TotalReject",e)},expression:"tempForm.TotalReject"}})],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي سحوبات :")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalOutlay,callback:function(e){t.$set(t.tempForm,"TotalOutlay",e)},expression:"tempForm.TotalOutlay"}})],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي التعويضات :")])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalRestitution,callback:function(e){t.$set(t.tempForm,"TotalRestitution",e)},expression:"tempForm.TotalRestitution"}})],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"Description",rules:[{required:!0,message:"لايمكن ترك محرر السند فارغ",trigger:"blur"}],label:"ملاحظات"}},[a("Description",{on:{Set:function(e){return t.tempForm.Description=e}}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"EditorName",rules:[{required:!0,message:"لايمكن ترك محرر السند فارغ",trigger:"blur"}],label:t.$t("AddVendors.EditorName")}},[a("Editors-User",{on:{Set:function(e){return t.tempForm.EditorName=e}}})],1)],1)],1),t._v(" "),a("span",{staticStyle:{color:"#ff5722","font-size":"x-large"}},[t._v("النتيجة :\n          "+t._s((t.tempForm.TotalCash+t.tempForm.TotalCoins+t.tempForm.TotalVisa+t.tempForm.TotalReject+t.tempForm.TotalRestitution+t.tempForm.TotalOutlay-t.Totals.Totals).toFixed(t.$store.getters.settings.ToFixed))+"\n          ("+t._s(t.tempForm.TotalCash+t.tempForm.TotalCoins+t.tempForm.TotalVisa+t.tempForm.TotalReject+t.tempForm.TotalRestitution+t.tempForm.TotalOutlay-t.Totals.Totals>=0?t.tempForm.TotalCash+t.tempForm.TotalCoins+t.tempForm.TotalVisa+t.tempForm.TotalReject+t.tempForm.TotalRestitution+t.tempForm.TotalOutlay-t.Totals.Totals==0?"مطابق":"زيادة":"نقص")+")")]),t._v(" "),a("el-divider")],1)],1)])],1)},o=[],r=(a("6b54"),a("bffc")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-input",{attrs:{type:"textarea"},on:{change:function(e){return t.SetVal(t.value)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},s=[],l={data:function(){return{value:""}},methods:{SetVal:function(t){this.$emit("Set",t)}}},c=l,u=a("2877"),_=Object(u["a"])(c,i,s,!1,null,null,null),d=_.exports,p={components:{EditorsUser:r["a"],Description:d},props:["Data","Open","Totals","Type"],watch:{Open:function(t){this.Show=t}},data:function(){return{Show:!1,tempForm:{Id:void 0,Type:this.Type,TotalCash:0,TotalCoins:0,TotalVisa:0,TotalReject:0,TotalOutlay:0,TotalRestitution:0,Status:0,Description:"",EditorName:"",TableName:this.Type,Fktable:this.Data.map((function(t){return t.Id}))}}},methods:{restForm:function(){this.tempForm={Id:void 0,Type:this.Type,TotalCash:0,TotalCoins:0,TotalVisa:0,TotalReject:0,TotalOutlay:0,TotalRestitution:0,Status:0,Description:"",EditorName:"",TableName:this.Type,Fktable:this.Data.map((function(t){return t.Id}))}},createData:function(){var t=this;this.$refs["F-CashPool"].validate((function(e){if(!(e&&t.Data.length>0))return console.log(e),!1;t.tempForm.TableName=t.Type,t.tempForm.Total=t.Totals.Totals,t.tempForm.DateTime=new Date,t.tempForm.Fktable=t.Data.map((function(t){return t.Id})).toString(),t.$emit("Done",t.tempForm)}))},handleClose:function(t){var e=this;this.$confirm("هل انت متاكد من الخروج").then((function(a){e.Show=!1,e.$emit("Closed"),t()})).catch((function(t){}))}}},m=p,f=Object(u["a"])(m,n,o,!1,null,null,null);e["a"]=f.exports},"97fc":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s}));var n=a("b7e2"),o=a("4328"),r=a.n(o);function i(t){return Object(n["a"])({url:"/CashPool/GetByListQ",method:"post",data:r.a.stringify(t)})}function s(t){return Object(n["a"])({url:"/CashPool/Create",method:"post",data:r.a.stringify(t)})}},bd16:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return l}));var n=a("b7e2"),o=a("4328"),r=a.n(o);function i(t){return Object(n["a"])({url:"/EditorsUser/Get",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/EditorsUser/Create",method:"post",data:r.a.stringify(t)})}function l(t){return Object(n["a"])({url:"/EditorsUser/Edit",method:"post",data:r.a.stringify(t)})}},ccf4:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"h",(function(){return s})),a.d(e,"g",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return _})),a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return p}));var n=a("b7e2"),o=a("4328"),r=a.n(o);function i(t){return Object(n["a"])({url:"/Account/GetById",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/Account/GetTreeAccount",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/Account/GetMainAccount",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/Account/GetAccountByAny",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/Account/GetByListQ",method:"post",data:r.a.stringify(t)})}function _(){return Object(n["a"])({url:"/Account/GetInComeAccounts",method:"get"})}function d(t){return Object(n["a"])({url:"/Account/Create",method:"post",data:r.a.stringify(t)})}function p(t){return Object(n["a"])({url:"/Account/Edit",method:"post",data:r.a.stringify(t)})}},cf6d:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return c}));var n=a("b7e2"),o=a("4328"),r=a.n(o);function i(t){return Object(n["a"])({url:"/EntryAccounting/GetByListQ",method:"post",data:r.a.stringify(t)})}function s(t){return Object(n["a"])({url:"/EntryAccounting/GetEntryById",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/EntryAccounting/Edit",method:"post",data:r.a.stringify(t)})}function c(t){return Object(n["a"])({url:"/EntryAccounting/Create",method:"post",data:r.a.stringify(t)})}},e350:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("6762"),a("2fdb");var n=a("4360");function o(t){if(t&&t instanceof Array&&t.length>0){var e=n["a"].getters&&n["a"].getters.roles,a=t,o=e.some((function(t){return a.includes(t)}));return!!o}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},ee6c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-button",{staticStyle:{float:"left"},attrs:{size:t.$store.getters.size,disabled:t.tableData.length<=0,icon:"fa fa-save",type:"primary"},on:{click:function(e){t.OpenCashPoolDialog=!0}}}),t._v(" "),a("Drawer-Print",{staticStyle:{float:"left"},attrs:{Type:"CashPool",Data:t.CashPool}}),t._v(" "),a("Drawer-Print",{staticStyle:{float:"left"},attrs:{Type:"ItemsSales",Data:{Totals:t.Totals,Items:t.ItemsSales,Dates:[new Date,new Date]}}}),t._v(" "),a("Drawer-Print",{staticStyle:{float:"left"},attrs:{Type:"ItemsIngredients",Data:{Items:t.ItemsIngredients,Dates:[new Date,new Date]}}}),t._v(" "),a("Cash-Pool-Dialog",{attrs:{Totals:t.Totals,Type:"SaleInvoice",Data:t.tableData,Open:t.OpenCashPoolDialog},on:{Closed:function(){t.OpenCashPoolDialog=!1},Done:function(e){return t.createData(e)}}}),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.AutoSent,callback:function(e){t.AutoSent=e},expression:"AutoSent"}})],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("span",[t._v(t._s(t.$t("NewPurchaseInvoice.Box")))]),t._v(" "),a("Select-Cash-Accounts",{on:{Set:function(e){return t.CashAccountId=e.value}}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("span",[t._v(t._s(t.$t("Account.InCome")))]),t._v(" "),a("Select-In-Come-Accounts",{on:{Set:function(e){return t.InComeAccountId=e.value}}})],1)],1)],1),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.$t("CashPool.Invoice")))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.tableData.length))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.$t("CashPool.Cash")))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.Totals.Cash.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.$t("CashPool.Visa")))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.Totals.Visa.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.$t("CashPool.debt")))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.Totals.Receivables.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v("مجموع الخصم")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.Totals.Discount.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.$t("CashPool.Amount")))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.Totals.Totals.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v("إجمالي التكلفة")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.Totals.TotalCost.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v("صافي الربح")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.Totals.Profit.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}})],1),t._v(" "),a("el-card",{directives:[{name:"permission",rawName:"v-permission",value:["Admin"],expression:"['Admin']"}],staticClass:"box-card"},[a("span",[t._v(t._s(t.$t("CashPool.Note")))]),t._v(" "),a("el-table",{attrs:{height:"250",data:t.ItemsSales,fit:"",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"Name",label:"الصنف",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"TotalCount",label:"العدد المباع",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CostPrice",label:"سعر تكلفة",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"AvgPrice",label:"سعر البيع",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n          المجموع الربح\n          "+t._s(t.Totals.Profit.toFixed(t.$store.getters.settings.ToFixed))+"\n        ")]}},{key:"default",fn:function(e){return[t._v(t._s(((e.row.AvgPrice-e.row.CostPrice)*e.row.TotalCount).toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n          المجموع بيع\n          "+t._s((t.Totals.Cash+t.Totals.Receivables+t.Totals.Visa).toFixed(t.$store.getters.settings.ToFixed))+"\n        ")]}},{key:"default",fn:function(e){return[t._v(t._s((e.row.AvgPrice*e.row.TotalCount).toFixed(t.$store.getters.settings.ToFixed)))]}}])})],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("el-table",{ref:"multipleTable",attrs:{height:"250",data:t.tableData,fit:"",border:"","highlight-current-row":""},on:{"row-dblclick":function(e){t.$router.replace({path:"/Sales/Edit/"+e.Id})}}},[a("el-table-column",{attrs:{label:"#",prop:"Id",width:"120",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:function(e){return t.getdata()}}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"FakeDate",label:t.$t("CashPool.Date"),width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t._f("parseTime")(n.FakeDate,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"Name",label:t.$t("CashPool.Customer"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("strong",{staticStyle:{"font-size":"10px",cursor:"pointer"}},[t._v(t._s(e.row.Name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.type"),width:"80",align:"center",prop:"Type"}}),t._v(" "),a("el-table-column",{attrs:{prop:"PaymentMethod",label:t.$t("CashPool.Pay"),width:"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("CashPool.Discount"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Discount.toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("CashPool.Amountv"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.InventoryMovements.reduce((function(t,e){return t+e.Qty*e.SellingPrice}),0).toFixed(t.$store.getters.settings.ToFixed))+"\n          JOD\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"60",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("Drawer-Print",{staticStyle:{float:"left"},attrs:{Type:"SaleInvoicesList",Data:{Totals:t.Totals,Items:t.tableData,Dates:[new Date,new Date]}}})]}},{key:"default",fn:function(t){return[a("Drawer-Print",{attrs:{Type:"SaleInvoice",Data:t.row}})]}}])}),t._v(" "),a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.InventoryMovements}},[a("el-table-column",{attrs:{prop:"Name",label:t.$t("CashPool.Items"),width:"130",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Qty",label:t.$t("CashPool.quantity"),align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("CashPool.Price"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.SellingPrice.toFixed(t.$store.getters.settings.ToFixed)))]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("CashPool.Total"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((e.row.SellingPrice*e.row.Qty).toFixed(t.$store.getters.settings.ToFixed))+"\n                JOD")]}}],null,!0)})],1)]}}])})],1)],1)],1)},o=[],r=(a("ac6a"),a("96cf"),a("1da1")),i=(a("7514"),a("20d6"),a("f0a8")),s=a("97fc"),l=a("cf6d"),c=a("587e"),u=a("2cba"),_=a("4381"),d=a("e350"),p=a("8a09"),m=a("7272"),f=a("b06d"),v=(a("ed08"),a("335e")),b=a("0359"),h={name:"SaleInvoice",components:{DrawerPrint:u["a"],CashPoolDialog:p["a"],SelectCashAccounts:m["a"],SelectInComeAccounts:f["a"]},directives:{permission:_["a"]},data:function(){return{OpenCashPoolDialog:!1,tableData:[],CashPool:{},Data:void 0,AutoSent:!0,CashAccountId:void 0,InComeAccountId:void 0,Totals:{Rows:0,Totals:0,Cash:0,Receivables:0,Visa:0,Profit:0,TotalCost:0,Discount:0},ItemsSales:[],ItemsIngredients:[]}},mounted:function(){this.getdata()},methods:{checkPermission:d["a"],getdata:function(){var t=this,e=this.$loading({lock:!0,text:"Get Data",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(i["d"])({Page:1,Any:"",limit:this.$store.getters.settings.LimitGetInvoice,Sort:"-id",Status:0}).then((function(a){e.text="Calculate",console.log(a),t.Data=a,t.tableData=a.items,t.Totals=a.Totals,t.ItemsSales=[],t.tableData.map((function(e){return e.InventoryMovements.map((function(e){var a=t.ItemsSales.findIndex((function(t){return t.Name==e.Name}));-1!=a?t.ItemsSales[a].TotalCount+=e.Qty:t.ItemsSales.push({Name:e.Name,TotalCount:e.Qty,AvgPrice:e.SellingPrice.toFixed(t.$store.getters.settings.ToFixed),CostPrice:e.CostPrice,Ingredients:JSON.parse(e.Ingredients)||[]})}))})),t.ItemsIngredients=[],t.ItemsSales.map((function(e){return e.Ingredients.map((function(a){var n=t.ItemsIngredients.findIndex((function(t){return t.Name==a.Name}));-1!=n?t.ItemsIngredients[n].TotalCount+=e.TotalCount*a.Qty:t.ItemsIngredients.push({Name:a.Name,TotalCount:e.TotalCount*a.Qty})}))})),e.close()})).catch((function(t){console.log(t)}))},createData:function(t){var e=this,a=this.$loading({lock:!0,text:"Create Cash Pool",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(s["a"])(t).then(function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(o){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!o){n.next=10;break}return t.Id=o,e.CashPool=t,i={Id:void 0,FakeDate:new Date,Description:"",Status:0,Type:"CashPool",EntryMovements:[{Id:void 0,AccountId:e.CashAccountId,Debit:0,Credit:e.Totals.Cash,Description:"اغلاق صندوق رقم "+t.Id+" ",EntryId:void 0,TableName:"CashPool",Fktable:t.Id},{Id:void 0,AccountId:e.InComeAccountId,Debit:e.Totals.Totals,Credit:0,Description:"اغلاق صندوق رقم"+t.Id+" ",EntryId:void 0,TableName:"CashPool",Fktable:t.Id}]},n.next=6,e.tableData.forEach((function(t){"Receivables"==t.PaymentMethod&&i.EntryMovements.push({Id:void 0,AccountId:t.AccountId,Debit:0,Credit:t.Total,Description:"فاتورة مبيعات رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id})}));case 6:a.text="Create Entry ",Object(l["a"])(i).then((function(t){t&&(a.text="Change Arr Obj Status ",Object(c["a"])({ObjsId:e.tableData.map((function(t){return t.Id})),TableName:"SalesInvoice",Status:1,Description:"فاتورة مؤكدة"}).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var o,r,i,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(n),e.OpenCashPoolDialog=!1,!e.AutoSent){t.next=25;break}return a.text="Send Report By Email",t.next=6,Object(v["b"])("CashPool",e.CashPool);case 6:return o=t.sent,t.next=9,Object(v["b"])("ItemsSales",{Totals:e.Totals,Items:e.ItemsSales,Dates:[new Date,new Date]});case 9:return r=t.sent,t.next=12,Object(v["b"])("SaleInvoicesList",{Totals:e.Totals,Items:e.tableData,Dates:[new Date,new Date]});case 12:return i=t.sent,t.next=15,Object(v["b"])("ItemsIngredients",{Items:e.ItemsIngredients,Dates:[new Date,new Date]});case 15:return s=t.sent,console.log("ItemsSales",r),t.next=19,Object(b["a"])(e.$store.getters.CompanyInfo.Email,"إغلاق صندوق "+e.CashPool.Type+" - من تاريخ "+e.formatDate(new Date)+" - لغاية  "+e.formatDate(new Date),o+r+i+s);case 19:l=t.sent,e.$notify({title:"تم الإضافة بنجاح",message:"تم الإضافة بنجاح"+l,type:"success",position:"top-left",duration:3e3}),a.close(),Object.assign(e.$data,e.$options.data()),t.next=27;break;case 25:a.close(),Object.assign(e.$data,e.$options.data());case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))})).catch((function(t){console.log(t)})),n.next=11;break;case 10:a.close();case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())},formatDate:function(t){var e=new Date(t),a=""+e.getDate(),n=""+(e.getMonth()+1),o=e.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[a,n,o].join("/")}}},g=h,T=a("2877"),D=Object(T["a"])(g,n,o,!1,null,null,null);e["default"]=D.exports},f0a8:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return _})),a.d(e,"h",(function(){return d})),a.d(e,"g",(function(){return p}));var n=a("b7e2"),o=a("4328"),r=a.n(o);function i(t){return Object(n["a"])({url:"/SaleInvoice/GetByListQ",method:"post",data:r.a.stringify(t)})}function s(t){return Object(n["a"])({url:"/SaleInvoice/GetByItem",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/SaleInvoice/Create",method:"post",data:r.a.stringify(t)})}function c(t){return Object(n["a"])({url:"/SaleInvoice/Edit",method:"post",data:r.a.stringify(t)})}function u(t){return Object(n["a"])({url:"/SaleInvoice/GetSaleInvoiceById",method:"get",params:t})}function _(t){return Object(n["a"])({url:"/SaleInvoice/GetSaleInvoiceByListId",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/SaleInvoice/GetSaleInvoiceByVendorId",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/SaleInvoice/GetSaleInvoiceByMemberId",method:"get",params:t})}}}]);