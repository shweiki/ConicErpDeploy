(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58905634"],{1803:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l}));var a=n("b7e2"),r=n("4328"),o=n.n(r);function c(t){return Object(a["a"])({url:"/PurchaseInvoice/GetByListQ",method:"post",data:o.a.stringify(t)})}function u(t){return Object(a["a"])({url:"/PurchaseInvoice/GetPurchaseInvoiceByID",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/PurchaseInvoice/GetPurchaseItem",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/PurchaseInvoice/Create",method:"post",data:o.a.stringify(t)})}function l(t){return Object(a["a"])({url:"/PurchaseInvoice/Edit",method:"post",data:o.a.stringify(t)})}},"67b7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("search-by-date",{attrs:{Value:[]},on:{Set:function(e){t.date=e}}})],1),t._v(" "),n("el-card",{staticClass:"box-card"},[n("span",{staticClass:"demonstration"},[t._v(t._s(t.$t("ItemSales.Name")))]),t._v(" "),n("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:t.$t("ItemSales.Name")},on:{change:t.getdata},model:{value:t.ItemId,callback:function(e){t.ItemId=e},expression:"ItemId"}},t._l(t.Items,(function(t){return n("el-option",{key:t.Id,attrs:{label:t.Name,value:t.Id}})})),1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.Account.AccountName.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"#",prop:"Id",width:"120",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.getdata}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"FakeDate",label:t.$t("ItemSales.Date"),width:"120",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Account.AccountName",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-input",{attrs:{placeholder:t.$t("Purchase.Provider")},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"Qty",label:t.$t("Purchase.PurchaseTotal"),width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Qty.toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"SellingPrice",label:t.$t("Purchase.SellingPrice"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.SellingPrice.toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Purchase.TotalAmount"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((e.row.Qty*e.row.SellingPrice).toFixed(t.$store.getters.settings.ToFixed)))]}}])})],1)],1)],1)},r=[],o=n("1803"),c=n("e225"),u=n("64af"),i={name:"PurchaseItems",components:{SearchByDate:u["a"]},data:function(){return{ItemId:2,Items:[],tableData:[],loading:!0,search:"",date:[]}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.loading=!0,Object(o["e"])({ItemId:this.ItemId,DateFrom:this.date[0],DateTo:this.date[1]}).then((function(e){console.log(e),t.tableData=e,Object(c["f"])().then((function(e){console.log(e),t.Items=e,t.loading=!1}))})).catch((function(t){console.log(t)}))}}},s=i,l=n("2877"),d=Object(l["a"])(s,a,r,!1,null,null,null);e["default"]=d.exports},e225:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"j",(function(){return m})),n.d(e,"h",(function(){return f})),n.d(e,"l",(function(){return h})),n.d(e,"d",(function(){return I})),n.d(e,"e",(function(){return g})),n.d(e,"b",(function(){return p}));var a=n("b7e2"),r=n("4328"),o=n.n(r);function c(t){return Object(a["a"])({url:"/Item/GetItemByAny",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/Item/CalculateCostPrice",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/Item/GetByListQ",method:"post",data:o.a.stringify(t)})}function s(t){return Object(a["a"])({url:"/Item/CheckItemIsExist",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/Item/GetActiveItem",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/Item/GetItemByID",method:"get",params:t})}function m(t){return Object(a["a"])({url:"/Item/GetItemByBarcode",method:"get",params:t})}function f(t){return Object(a["a"])({url:"/Item/GetIsPrimeItem",method:"get",params:t})}function h(t){return Object(a["a"])({url:"/Item/GetItemMove",method:"get",params:t})}function I(t){return Object(a["a"])({url:"/Item/Create",method:"post",data:o.a.stringify(t)})}function g(t){return Object(a["a"])({url:"/Item/Edit",method:"post",data:o.a.stringify(t)})}function p(t){return Object(a["a"])({url:"/Item/CalculateInventoryItemQty",method:"post",data:o.a.stringify(t)})}}}]);