(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd5330e"],{"335e":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return PrintReport})),__webpack_require__.d(__webpack_exports__,"d",(function(){return VisualizationReportHtml})),__webpack_require__.d(__webpack_exports__,"a",(function(){return DownloadReportAsImage})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ReportAsDataUrl}));var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__),C_ErpSolution_VueJs_Conic_Erp_Ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("1da1"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__),_store__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("4360"),_api_Report__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("12b6"),_Visualization__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("1428"),html_to_image__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("e774"),jspdf__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("8baf"),_api_StmpEmail__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("0359"),jsprintmanager__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("cfc2"),jsprintmanager__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(jsprintmanager__WEBPACK_IMPORTED_MODULE_10__),downloadjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("aeb1"),downloadjs__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_11__),_Report_ShawermaSheesh__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("6a83"),_Report_OrderReceipt__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("2520");function PrintReport(Type,Data){var JSPMT=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(_api_Report__WEBPACK_IMPORTED_MODULE_5__["e"])({Type:Type}).then((function(res){res.forEach((function(item,index){if(JSPMT)if(jsprintmanager__WEBPACK_IMPORTED_MODULE_10___default.a.JSPrintManager.auto_reconnect){var ShawermaSheesh=_Report_ShawermaSheesh__WEBPACK_IMPORTED_MODULE_12__["a"],OrderReceipt=_Report_OrderReceipt__WEBPACK_IMPORTED_MODULE_13__["a"];eval(item.Name+"("+JSON.stringify(Data)+(item.Printer?",`"+item.Printer+"`)":")"))}else jsprintmanager__WEBPACK_IMPORTED_MODULE_10___default.a.JSPrintManager.auto_reconnect=!0,jsprintmanager__WEBPACK_IMPORTED_MODULE_10___default.a.JSPrintManager.start(),jsprintmanager__WEBPACK_IMPORTED_MODULE_10___default.a.JSPrintManager.WS.onStatusChanged=function(){_store__WEBPACK_IMPORTED_MODULE_4__["a"].dispatch("app/setPrinters"),PrintReport(Type,Data,JSPMT)};else{item.Html=Object(_Visualization__WEBPACK_IMPORTED_MODULE_6__["a"])(Data,item.Html,"Set");try{var oIframe=document.getElementById("ifrmPrint"),oDoc=oIframe.contentWindow||oIframe.contentDocument;oDoc.document&&(oDoc=oDoc.document),oDoc.write("<head><title>title</title>"),oDoc.write('</head><body onload="this.focus(); this.print();">'),oDoc.write(item.Html+"</body>"),oDoc.close(),setTimeout((function(){document.getElementById("ifrmPrint").src=""}),2e3)}catch(e){self.print()}}}))}))}function SendReportByEmail(t,e,n){var a=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(_api_Report__WEBPACK_IMPORTED_MODULE_5__["e"])({Type:e}).then((function(e){e.forEach(function(){var e=Object(C_ErpSolution_VueJs_Conic_Erp_Ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function e(r,i){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.Html=Object(_Visualization__WEBPACK_IMPORTED_MODULE_6__["a"])(n,r.Html,"Set"),e.next=3,Object(_api_StmpEmail__WEBPACK_IMPORTED_MODULE_9__["a"])(t,r.Name+" - "+o,r.Html);case 3:s=e.sent,a.$notify({title:"تم الإضافة بنجاح",message:"تم ارسال "+s,type:"success",position:"top-left",duration:3e3});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}))}function VisualizationReportHtml(t,e){return new Promise((function(n,a){Object(_api_Report__WEBPACK_IMPORTED_MODULE_5__["e"])({Type:t}).then((function(t){t.forEach((function(t,n){t.Html=Object(_Visualization__WEBPACK_IMPORTED_MODULE_6__["a"])(e,t.Html,"Set")})),n(t.map((function(t){return t.Html})))})).catch((function(t){a(t)}))}))}function DownloadReportAsImage(t,e){return new Promise((function(n,a){Object(_api_Report__WEBPACK_IMPORTED_MODULE_5__["e"])({Type:t}).then((function(t){t.forEach((function(t,n){var a=document.getElementById("DownloadAsImage"),o=a.contentWindow||a.contentDocument;o.document&&(o=o.document),o.write(Object(_Visualization__WEBPACK_IMPORTED_MODULE_6__["a"])(e,t.Html,"Set")),html_to_image__WEBPACK_IMPORTED_MODULE_7__["a"](o.body).then((function(t){downloadjs__WEBPACK_IMPORTED_MODULE_11___default()(t,e.Name.replaceAll("'","")+".png"),o.close()})).catch((function(t){console.error("oops, something went wrong!",t)}))})),n(t.map((function(t){return t.Html})))})).catch((function(t){a(t)}))}))}function ReportAsDataUrl(t,e){return new Promise((function(n,a){Object(_api_Report__WEBPACK_IMPORTED_MODULE_5__["e"])({Type:t}).then((function(t){t.forEach((function(t,a){var o=document.getElementById("DownloadAsImage"),r=o.contentWindow||o.contentDocument;r.document&&(r=r.document),r.write(Object(_Visualization__WEBPACK_IMPORTED_MODULE_6__["a"])(e,t.Html,"Set")),html_to_image__WEBPACK_IMPORTED_MODULE_7__["a"](r.body).then((function(t){n(t.replace(/^data:image\/(png|jpg);base64,/,"")),r.close()})).catch((function(t){console.error("oops, something went wrong!",t)}))}))})).catch((function(t){a(t)}))}))}},4952:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return _})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return p}));var a=n("b7e2"),o=n("4328"),r=n.n(o);function i(t){return Object(a["a"])({url:"/Payment/GetByListQ",method:"post",data:r.a.stringify(t)})}function s(t){return Object(a["a"])({url:"/Payment/GetById",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/Payment/GetPaymentsByMemberId",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/Payment/GetPaymentsByVendorId",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/Payment/GetPaymentByListId",method:"get",params:t})}function _(t){return Object(a["a"])({url:"/Payment/GetPaymentByStatus",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/Payment/Create",method:"post",data:r.a.stringify(t)})}function m(t){return Object(a["a"])({url:"/Payment/Edit",method:"post",data:r.a.stringify(t)})}function p(t){return Object(a["a"])({url:"/Payment/EditPaymentMethod",method:"post",data:r.a.stringify(t)})}},7514:function(t,e,n){"use strict";var a=n("5ca1"),o=n("0a49")(5),r="find",i=!0;r in[]&&Array(1)[r]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(r)},"8a09":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{staticStyle:{"margin-top":"-14vh"},attrs:{title:"تأكيد",visible:t.Show,width:"40%",center:"","show-close":!1,"before-close":t.handleClose},on:{"update:visible":function(e){t.Show=e}}},[n("div",{staticClass:"dialog-footer",attrs:{slot:"title"},slot:"title"},[n("el-col",{attrs:{span:4}},[n("el-button",{staticStyle:{float:"left"},attrs:{loading:t.createLoading,icon:"fa fa-save",type:"primary"},on:{click:function(e){return t.createData()}}})],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("el-divider",[t._v(" إغلاق صندوق ")])],1)],1),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("div",{directives:[{name:"permission",rawName:"v-permission",value:["Admin"],expression:"['Admin']"}]},[n("span",{staticStyle:{color:"#ff5722","font-size":"large"}},[t._v("مبيعات النقدية :\n          "+t._s(t.Totals.Cash.toFixed(t.$store.getters.settings.ToFixed))+"\n        ")]),t._v(" "),n("el-divider"),t._v(" "),n("span",{staticStyle:{color:"#ff5722","font-size":"large"}},[t._v("مبيعات الفيزا :\n          "+t._s(t.Totals.Visa.toFixed(t.$store.getters.settings.ToFixed))+"\n        ")]),t._v(" "),n("el-divider"),t._v(" "),n("span",{staticStyle:{color:"#ff5722","font-size":"large"}},[t._v("مجموع المبيعات :\n          "+t._s(t.Totals.Totals.toFixed(t.$store.getters.settings.ToFixed))+"\n        ")]),t._v(" "),n("el-divider")],1),t._v(" "),n("el-form",{ref:"F-CashPool",attrs:{model:t.tempForm}},[n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"font-size":"large"}},[t._v(" إجمالي عد الورق :")])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalCash,callback:function(e){t.$set(t.tempForm,"TotalCash",e)},expression:"tempForm.TotalCash"}})],1)],1),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي عد المعدن :")])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalCoins,callback:function(e){t.$set(t.tempForm,"TotalCoins",e)},expression:"tempForm.TotalCoins"}})],1)],1),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي مبلغ فيزا :")])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalVisa,callback:function(e){t.$set(t.tempForm,"TotalVisa",e)},expression:"tempForm.TotalVisa"}})],1)],1),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي مبلغ الملغي :")])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalReject,callback:function(e){t.$set(t.tempForm,"TotalReject",e)},expression:"tempForm.TotalReject"}})],1)],1),t._v(" "),n("el-row",{directives:[{name:"permission",rawName:"v-permission",value:["Admin"],expression:"['Admin']"}],attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي سحوبات :")])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalOutlay,callback:function(e){t.$set(t.tempForm,"TotalOutlay",e)},expression:"tempForm.TotalOutlay"}})],1)],1),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"font-size":"large"}},[t._v("إجمالي التعويضات :")])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("currency-input",{staticClass:"currency-input",on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.TotalRestitution,callback:function(e){t.$set(t.tempForm,"TotalRestitution",e)},expression:"tempForm.TotalRestitution"}})],1)],1),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{prop:"Description",rules:[{required:!0,message:"لايمكن ترك محرر السند فارغ",trigger:"blur"}],label:"ملاحظات"}},[n("Description",{on:{Set:function(e){return t.tempForm.Description=e}}})],1)],1)],1),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{prop:"EditorName",rules:[{required:!0,message:"لايمكن ترك محرر السند فارغ",trigger:"blur"}],label:t.$t("AddVendors.EditorName")}},[n("Editors-User",{attrs:{Value:t.tempForm.EditorName},on:{Set:function(e){return t.tempForm.EditorName=e}}})],1)],1)],1),t._v(" "),n("span",{directives:[{name:"permission",rawName:"v-permission",value:["Admin"],expression:"['Admin']"}],staticStyle:{color:"#ff5722","font-size":"x-large"}},[t._v("النتيجة :\n          "+t._s((t.tempForm.TotalCash+t.tempForm.TotalCoins+t.tempForm.TotalVisa+t.tempForm.TotalReject+t.tempForm.TotalRestitution+t.tempForm.TotalOutlay-t.Totals.Totals).toFixed(t.$store.getters.settings.ToFixed))+"\n          ("+t._s(t.tempForm.TotalCash+t.tempForm.TotalCoins+t.tempForm.TotalVisa+t.tempForm.TotalReject+t.tempForm.TotalRestitution+t.tempForm.TotalOutlay-t.Totals.Totals>=0?t.tempForm.TotalCash+t.tempForm.TotalCoins+t.tempForm.TotalVisa+t.tempForm.TotalReject+t.tempForm.TotalRestitution+t.tempForm.TotalOutlay-t.Totals.Totals==0?"مطابق":"زيادة":"نقص")+")")]),t._v(" "),n("el-divider")],1)],1)])],1)},o=[],r=(n("6b54"),n("bffc")),i=n("d554"),s=n("4381"),c={components:{EditorsUser:r["a"],Description:i["a"]},props:["Data","Open","Totals","Type"],watch:{Open:function(t){this.Show=t}},directives:{permission:s["a"]},data:function(){return{Show:!1,createLoading:!1,tempForm:{Id:void 0,Type:this.Type,TotalCash:0,TotalCoins:0,TotalVisa:0,TotalReject:0,TotalOutlay:0,TotalRestitution:0,Status:0,Description:"",EditorName:"",TableName:this.Type,Fktable:this.Data.map((function(t){return t.Id}))}}},methods:{restForm:function(){this.tempForm={Id:void 0,Type:this.Type,TotalCash:0,TotalCoins:0,TotalVisa:0,TotalReject:0,TotalOutlay:0,TotalRestitution:0,Status:0,Description:"",EditorName:"",TableName:this.Type,Fktable:this.Data.map((function(t){return t.Id}))}},createData:function(){var t=this;this.$refs["F-CashPool"].validate((function(e){if(!(e&&t.Data.length>0))return console.log(e),!1;t.createLoading=!0,t.tempForm.TableName=t.Type,t.tempForm.Totals=t.Totals,t.tempForm.DateTime=new Date,t.tempForm.Fktable=t.Data.map((function(t){return t.Id})).toString(),t.$emit("Done",t.tempForm),t.createLoading=!1}))},handleClose:function(t){var e=this;this.$confirm("هل انت متاكد من الخروج").then((function(n){e.Show=!1,e.$emit("Closed"),t()})).catch((function(t){}))}}},l=c,u=n("2877"),_=Object(u["a"])(l,a,o,!1,null,null,null);e["a"]=_.exports},"97fc":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return c}));var a=n("b7e2"),o=n("4328"),r=n.n(o);function i(t){return Object(a["a"])({url:"/CashPool/GetByListQ",method:"post",data:r.a.stringify(t)})}function s(t){return Object(a["a"])({url:"/CashPool/Create",method:"post",data:r.a.stringify(t)})}function c(t){return Object(a["a"])({url:"/CashPool/GetCashPoolById",method:"get",params:t})}},aeb1:function(t,e,n){var a,o,r;(function(n,i){o=[],a=i,r="function"===typeof a?a.apply(e,o):a,void 0===r||(t.exports=r)})(0,(function(){return function t(e,n,a){var o,r,i=window,s="application/octet-stream",c=a||s,l=e,u=!n&&!a&&l,_=document.createElement("a"),d=function(t){return String(t)},m=i.Blob||i.MozBlob||i.WebKitBlob||d,p=n||"download";if(m=m.call?m.bind(i):Blob,"true"===String(this)&&(l=[l,c],c=l[0],l=l[1]),u&&u.length<2048&&(p=u.split("/").pop().split("?")[0],_.href=u,-1!==_.href.indexOf(u))){var f=new XMLHttpRequest;return f.open("GET",u,!0),f.responseType="blob",f.onload=function(e){t(e.target.response,p,s)},setTimeout((function(){f.send()}),0),f}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(l)){if(!(l.length>2096103.424&&m!==d))return navigator.msSaveBlob?navigator.msSaveBlob(g(l),p):y(l);l=g(l),c=l.type||s}else if(/([\x80-\xff])/.test(l)){var v=0,h=new Uint8Array(l.length),b=h.length;for(v;v<b;++v)h[v]=l.charCodeAt(v);l=new m([h],{type:c})}function g(t){var e=t.split(/[:;,]/),n=e[1],a="base64"==e[2]?atob:decodeURIComponent,o=a(e.pop()),r=o.length,i=0,s=new Uint8Array(r);for(i;i<r;++i)s[i]=o.charCodeAt(i);return new m([s],{type:n})}function y(t,e){if("download"in _)return _.href=t,_.setAttribute("download",p),_.className="download-js-link",_.innerHTML="downloading...",_.style.display="none",document.body.appendChild(_),setTimeout((function(){_.click(),document.body.removeChild(_),!0===e&&setTimeout((function(){i.URL.revokeObjectURL(_.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,s)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,s)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(o=l instanceof m?l:new m([l],{type:c}),navigator.msSaveBlob)return navigator.msSaveBlob(o,p);if(i.URL)y(i.URL.createObjectURL(o),!0);else{if("string"===typeof o||o.constructor===d)try{return y("data:"+c+";base64,"+i.btoa(o))}catch(D){return y("data:"+c+","+encodeURIComponent(o))}r=new FileReader,r.onload=function(t){y(this.result)},r.readAsDataURL(o)}return!0}}))},bd16:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}));var a=n("b7e2"),o=n("4328"),r=n.n(o);function i(t){return Object(a["a"])({url:"/EditorsUser/Get",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/EditorsUser/Create",method:"post",data:r.a.stringify(t)})}function c(t){return Object(a["a"])({url:"/EditorsUser/Edit",method:"post",data:r.a.stringify(t)})}},ccf4:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return _})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return m})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return v}));var a=n("b7e2"),o=n("4328"),r=n.n(o);function i(t){return Object(a["a"])({url:"/Account/GetById",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/Account/GetTreeAccount",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/Account/GetMainAccount",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/Account/GetAccountByAny",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/Account/GetByListQ",method:"post",data:r.a.stringify(t)})}function _(){return Object(a["a"])({url:"/Account/GetInComeAccounts",method:"get"})}function d(t){return Object(a["a"])({url:"/Account/GetPayables",method:"get",params:t})}function m(t){return Object(a["a"])({url:"/Account/GetReceivables",method:"get",params:t})}function p(t){return Object(a["a"])({url:"/Account/Create",method:"post",data:r.a.stringify(t)})}function f(t){return Object(a["a"])({url:"/Account/Edit",method:"post",data:r.a.stringify(t)})}function v(t){return Object(a["a"])({url:"/Account/Delete",method:"post",data:r.a.stringify(t)})}},cf6d:function(t,e,n){"use strict";n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return _})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));var a=n("b7e2"),o=n("4328"),r=n.n(o),i=n("9923");function s(t){return Object(a["a"])({url:"/EntryAccounting/GetByListQ",method:"post",data:r.a.stringify(t)})}function c(t){return Object(a["a"])({url:"/EntryAccounting/GetAccountStatement",method:"post",data:r.a.stringify(t)})}function l(t){return Object(a["a"])({url:"/EntryAccounting/GetEntryById",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/EntryAccounting/Edit",method:"post",data:r.a.stringify(t)})}function _(t){return Object(a["a"])({url:"/EntryAccounting/EditEntryByFktable",method:"post",data:r.a.stringify(t)})}function d(t){return Object(a["a"])({url:"/EntryAccounting/Create",method:"post",data:r.a.stringify(t)})}function m(t,e,n,a,o){return new Promise((function(r,s){console.log("vendor",e);var c={Id:void 0,FakeDate:t.FakeDate,Description:"",Type:"Auto",EntryMovements:[{Id:void 0,AccountId:e.AccountId,Debit:0,Credit:t.Total,Description:"فاتورة مبيعات "+i["a"].t("PaymentMethod."+t.PaymentMethod)+" رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id},{Id:void 0,AccountId:n,Debit:t.Total,Credit:0,Description:"فاتورة مبيعات "+e.Name+"  "+i["a"].t("PaymentMethod."+t.PaymentMethod)+" رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id}]};"Cash"==t.PaymentMethod&&c.EntryMovements.push({Id:void 0,AccountId:e.AccountId,Debit:t.Total,Credit:0,Description:"تسديد فاتورة مبيعات رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id},{Id:void 0,AccountId:a,Debit:0,Credit:t.Total,Description:"فاتورة مبيعات "+e.Name+i["a"].t("PaymentMethod."+t.PaymentMethod)+"  رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id}),"Visa"==t.PaymentMethod&&c.EntryMovements.push({Id:void 0,AccountId:e.AccountId,Debit:t.Total,Credit:0,Description:"تسديد فاتورة مبيعات رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id},{Id:void 0,AccountId:o,Debit:0,Credit:t.Total,Description:"فاتورة مبيعات "+e.Name+i["a"].t("PaymentMethod."+t.PaymentMethod)+"  رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id}),"Cheque"==t.PaymentMethod&&c.EntryMovements.push({Id:void 0,AccountId:e.AccountId,Debit:t.Total,Credit:0,Description:"تسديد فاتورة مبيعات رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id},{Id:void 0,AccountId:o,Debit:0,Credit:t.Total,Description:"فاتورة مبيعات "+e.Name+i["a"].t("PaymentMethod."+t.PaymentMethod)+"  رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoice",Fktable:t.Id}),r(c)}))}},e350:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("6762"),n("2fdb");var a=n("4360");function o(t){if(t&&t instanceof Array&&t.length>0){var e=a["a"].getters&&a["a"].getters.roles,n=t,o=e.some((function(t){return n.includes(t)}));return!!o}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},ee6c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{size:t.$store.getters.size,disabled:t.tableData.length<=0||null!=(this.$route.params&&this.$route.params.id),icon:"fa fa-save",type:"primary"},on:{click:function(e){t.OpenCashPoolDialog=!0}}}),t._v(" "),n("Drawer-Print",{staticStyle:{float:"left"},attrs:{Type:"CashPool",Data:t.CashPool}}),t._v(" "),n("Drawer-Print",{staticStyle:{float:"left"},attrs:{Type:"SaleInvoicesList",Data:{Totals:t.Totals,Items:t.tableData,Dates:[new Date,new Date]}}}),t._v(" "),n("Drawer-Print",{staticStyle:{float:"left"},attrs:{Type:"ItemsSales",Data:{Totals:t.Totals,Items:t.ItemsSales(t.tableData),Dates:[new Date,new Date]}}}),t._v(" "),n("Drawer-Print",{staticStyle:{float:"left"},attrs:{Type:"ItemsIngredients",Data:{Items:t.ItemsIngredients(t.tableData),Dates:[new Date,new Date]}}}),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-switch",{attrs:{disabled:!t.checkPermission(["Admin"]),"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.AutoSent,callback:function(e){t.AutoSent=e},expression:"AutoSent"}})],1),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("span",[t._v(t._s(t.$t("NewPurchaseInvoice.Box")))]),t._v(" "),n("Select-Cash-Accounts",{on:{Set:function(e){return t.CashAccountId=e.value}}})],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("span",[t._v(t._s(t.$t("Account.InCome")))]),t._v(" "),n("Select-In-Come-Accounts",{on:{Set:function(e){return t.InComeAccountId=e.value}}})],1)],1)],1),t._v(" "),n("div",{directives:[{name:"permission",rawName:"v-permission",value:["Admin"],expression:"['Admin']"}]},[n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.$t("CashPool.Invoice")))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.tableData.length))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.$t("CashPool.Cash")))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.Totals.Cash.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.$t("CashPool.Visa")))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.Totals.Visa.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.$t("CashPool.debt")))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.Totals.Receivables.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v("مجموع الخصم")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.Totals.Discount.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.$t("CashPool.Amount")))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.Totals.Totals.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}})],1)]),t._v(" "),n("el-card",{directives:[{name:"permission",rawName:"v-permission",value:["Admin"],expression:"['Admin']"}],staticClass:"box-card"},[n("span",[t._v(t._s(t.$t("CashPool.Note")))]),t._v(" "),n("el-table",{attrs:{height:"250",data:t.ItemsSales(t.tableData),fit:"",border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"Name",label:"الصنف",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"TotalCount",label:"العدد المباع",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"CostPrice",label:"سعر تكلفة",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"AvgPrice",label:"سعر البيع",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n          المجموع الربح\n          "+t._s(t.Totals.Profit.toFixed(t.$store.getters.settings.ToFixed))+"\n        ")]}},{key:"default",fn:function(e){return[t._v(t._s(((e.row.AvgPrice-e.row.CostPrice)*e.row.TotalCount).toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n          المجموع بيع\n          "+t._s((t.Totals.Cash+t.Totals.Receivables+t.Totals.Visa).toFixed(t.$store.getters.settings.ToFixed))+"\n        ")]}},{key:"default",fn:function(e){return[t._v(t._s((e.row.AvgPrice*e.row.TotalCount).toFixed(t.$store.getters.settings.ToFixed)))]}}])})],1)],1),t._v(" "),n("el-card",{staticClass:"box-card"},[n("el-table",{ref:"multipleTable",attrs:{height:"600",data:t.tableData,fit:"",border:"","highlight-current-row":""},on:{"row-dblclick":function(e){t.$router.replace({path:"/Sales/Edit/"+e.Id})}}},[n("el-table-column",{attrs:{label:"#",prop:"Id",width:"120",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:function(e){return t.getdata()}}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"FakeDate",label:t.$t("CashPool.Date"),width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(t._f("parseTime")(a.FakeDate,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"Name",label:t.$t("CashPool.Customer"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("strong",{staticStyle:{"font-size":"10px",cursor:"pointer"}},[t._v(t._s(e.row.Name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.type"),width:"80",align:"center",prop:"Type"}}),t._v(" "),n("el-table-column",{attrs:{prop:"PaymentMethod",label:t.$t("CashPool.Pay"),width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("edit-payment-method",{attrs:{VendorId:e.row.VendorId,Value:e.row.PaymentMethod,Type:"SaleInvoice",ID:e.row.Id},on:{Done:function(e){t.getdata()}}}),t._v("\n          "+t._s(t.$t("NewPurchaseInvoice."+e.row.PaymentMethod)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("CashPool.Discount"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Discount.toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("CashPool.Amountv"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.InventoryMovements.reduce((function(t,e){return t+e.Qty*e.SellingPrice}),0).toFixed(t.$store.getters.settings.ToFixed))+"\n          JOD\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"60",label:"#",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("Drawer-Print",{attrs:{Type:"SaleInvoice",Data:t.row}})]}}])}),t._v(" "),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{attrs:{data:e.row.InventoryMovements}},[n("el-table-column",{attrs:{prop:"Name",label:t.$t("CashPool.Items"),width:"130",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Qty",label:t.$t("CashPool.quantity"),align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("CashPool.Price"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.SellingPrice.toFixed(t.$store.getters.settings.ToFixed)))]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("CashPool.Total"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((e.row.SellingPrice*e.row.Qty).toFixed(t.$store.getters.settings.ToFixed))+"\n                JOD")]}}],null,!0)})],1)]}}])})],1)],1),t._v(" "),n("Cash-Pool-Dialog",{attrs:{Totals:t.Totals,Type:"SaleInvoice",Data:t.tableData,Open:t.OpenCashPoolDialog},on:{Closed:function(){t.OpenCashPoolDialog=!1},Done:function(e){return t.createData(e)}}})],1)},o=[],r=(n("7514"),n("20d6"),n("ac6a"),n("96cf"),n("1da1")),i=n("f0a8"),s=n("97fc"),c=n("cf6d"),l=n("587e"),u=n("2cba"),_=n("ca87"),d=n("4381"),m=n("e350"),p=n("8a09"),f=n("7272"),v=n("b06d"),h=(n("ed08"),n("335e")),b=n("0359"),g={name:"SaleInvoice",components:{DrawerPrint:u["a"],CashPoolDialog:p["a"],SelectCashAccounts:f["a"],SelectInComeAccounts:v["a"],EditPaymentMethod:_["a"]},props:{isEdit:{type:Boolean,default:!1}},directives:{permission:d["a"]},data:function(){return{OpenCashPoolDialog:!1,tableData:[],CashPool:{},Data:void 0,AutoSent:!0,CashAccountId:void 0,InComeAccountId:void 0,Totals:{Rows:0,Totals:0,Cash:0,Receivables:0,Visa:0,Profit:0,TotalCost:0,Discount:0}}},created:function(){this.$route.params&&this.$route.params.id?this.getdata(this.$route.params&&this.$route.params.id):this.getdata(),this.tempRoute=Object.assign({},this.$route)},methods:{checkPermission:m["a"],getdata:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=this.$loading({lock:!0,text:"Get Data",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});null!=e?Object(s["c"])({Id:e}).then((function(e){t.CashPool=e,Object(i["h"])({listid:e.Fktable}).then((function(e){n.text="Calculate",console.log(e),t.Data=e,t.tableData=e.items,t.CashPool.Totals=e.Totals,t.Totals=e.Totals,n.close()}))})):Object(i["f"])({Page:1,Any:"",limit:this.$store.getters.settings.LimitGetInvoice,Sort:"-id",Status:0}).then((function(e){n.text="Calculate",console.log(e),t.Data=e,t.tableData=e.items,t.Totals=e.Totals,n.close()})).catch((function(t){console.log(t)}))},createData:function(t){var e=this,n=this.$loading({lock:!0,text:"Create Cash Pool",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(s["a"])(t).then(function(){var a=Object(r["a"])(regeneratorRuntime.mark((function a(o){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!o){a.next=10;break}return t.Id=o,e.CashPool=t,i={Id:void 0,FakeDate:new Date,Description:"",Status:0,Type:"CashPool",EntryMovements:[{Id:void 0,AccountId:e.CashAccountId,Debit:0,Credit:e.Totals.Cash,Description:"اغلاق صندوق رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoiceCashPool",Fktable:t.Id},{Id:void 0,AccountId:e.InComeAccountId,Debit:e.Totals.Totals,Credit:0,Description:"اغلاق صندوق رقم"+t.Id+" ",EntryId:void 0,TableName:"SaleInvoiceCashPool",Fktable:t.Id}]},a.next=6,e.tableData.forEach((function(t){"Receivables"==t.PaymentMethod&&i.EntryMovements.push({Id:void 0,AccountId:t.AccountId,Debit:0,Credit:t.Total,Description:"فاتورة مبيعات رقم "+t.Id+" ",EntryId:void 0,TableName:"SaleInvoiceCashPool",Fktable:t.Id})}));case 6:n.text="Create Entry ",Object(c["a"])(i).then((function(t){t&&(n.text="Change Arr Obj Status ",Object(l["a"])({ObjsId:e.tableData.map((function(t){return t.Id})),TableName:"SalesInvoice",Status:1,Description:"فاتورة مؤكدة"}).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var o,r,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(a),e.OpenCashPoolDialog=!1,!e.AutoSent){t.next=26;break}return n.text="Send Report By Email",t.next=6,Object(h["d"])("CashPool",e.CashPool);case 6:return o=t.sent,t.next=9,Object(h["d"])("ItemsSales",{Totals:e.Totals,Items:e.ItemsSales(e.tableData),Dates:[new Date,new Date]});case 9:return r=t.sent,t.next=12,Object(h["d"])("SaleInvoicesList",{Totals:e.Totals,Items:e.tableData,Dates:[new Date,new Date]});case 12:return i=t.sent,t.next=15,Object(h["d"])("ItemsIngredients",{Items:e.ItemsIngredients(e.tableData),Dates:[new Date,new Date]});case 15:return s=t.sent,t.next=18,Object(b["a"])(e.$store.getters.CompanyInfo.Email,"إغلاق صندوق "+e.CashPool.Type+" - من تاريخ "+e.formatDate(new Date)+" - لغاية  "+e.formatDate(new Date),o+r+i+s);case 18:c=t.sent,e.$notify({title:"تم الإضافة بنجاح",message:"تم الإضافة بنجاح  "+c,type:"success",position:"top-left",duration:3e3}),n.close(),Object(h["b"])("CashPool",e.CashPool),e.getdata(),Object.assign(e.$data,e.$options.data()),t.next=28;break;case 26:n.close(),Object.assign(e.$data,e.$options.data());case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))})).catch((function(t){console.log(t)})),a.next=11;break;case 10:n.close();case 11:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}())},ItemsSales:function(t){for(var e=this,n=[],a=0;a<t.length;a++)t[a].InventoryMovements.map((function(t){var a=n.findIndex((function(e){return e.Name==t.Name}));-1!=a?n[a].TotalCount+=t.Qty:n.push({Name:t.Name,TotalCount:t.Qty,AvgPrice:t.SellingPrice.toFixed(e.$store.getters.settings.ToFixed),CostPrice:t.CostPrice,Ingredients:JSON.parse(t.Ingredients)||[]})}));return n},ItemsIngredients:function(t){for(var e=this,n=[],a=[],o=0;o<t.length;o++)t[o].InventoryMovements.map((function(t){var a=n.findIndex((function(e){return e.Name==t.Name}));-1!=a?n[a].TotalCount+=t.Qty:n.push({Name:t.Name,TotalCount:t.Qty,AvgPrice:t.SellingPrice.toFixed(e.$store.getters.settings.ToFixed),CostPrice:t.CostPrice,Ingredients:JSON.parse(t.Ingredients)||[]})}));for(o=0;o<n.length;o++)n[o].Ingredients.map((function(t){var e=a.findIndex((function(e){return e.Name==t.Name}));-1!=e?a[e].TotalCount+=n[o].TotalCount*t.Qty:a.push({Name:t.Name,TotalCount:n[o].TotalCount*t.Qty})}));return a},formatDate:function(t){var e=new Date(t),n=""+e.getDate(),a=""+(e.getMonth()+1),o=e.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[n,a,o].join("/")},setTagsViewTitle:function(){var t="Edit Sales",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.tempForm.Id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Sales";document.title="".concat(t," - ").concat(this.tempForm.Id)}}},y=g,D=n("2877"),T=Object(D["a"])(y,a,o,!1,null,null,null);e["default"]=T.exports},f0a8:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return _})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return m})),n.d(e,"j",(function(){return p})),n.d(e,"i",(function(){return f}));var a=n("b7e2"),o=n("4328"),r=n.n(o);function i(t){return Object(a["a"])({url:"/SaleInvoice/GetByListQ",method:"post",data:r.a.stringify(t)})}function s(t){return Object(a["a"])({url:"/SaleInvoice/GetByAny",method:"post",data:r.a.stringify(t)})}function c(t){return Object(a["a"])({url:"/SaleInvoice/GetByItem",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/SaleInvoice/Create",method:"post",data:r.a.stringify(t)})}function u(t){return Object(a["a"])({url:"/SaleInvoice/Edit",method:"post",data:r.a.stringify(t)})}function _(t){return Object(a["a"])({url:"/SaleInvoice/EditPaymentMethod",method:"post",data:r.a.stringify(t)})}function d(t){return Object(a["a"])({url:"/SaleInvoice/GetSaleInvoiceById",method:"get",params:t})}function m(t){return Object(a["a"])({url:"/SaleInvoice/GetSaleInvoiceByListId",method:"post",data:r.a.stringify(t)})}function p(t){return Object(a["a"])({url:"/SaleInvoice/GetSaleInvoiceByVendorId",method:"get",params:t})}function f(t){return Object(a["a"])({url:"/SaleInvoice/GetSaleInvoiceByMemberId",method:"get",params:t})}}}]);