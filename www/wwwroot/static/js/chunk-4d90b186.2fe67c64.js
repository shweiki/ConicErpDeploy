(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d90b186"],{1803:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u}));var n=a("b7e2"),r=a("4328"),c=a.n(r);function o(e){return Object(n["a"])({url:"/PurchaseInvoice/GetPurchaseInvoice",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/PurchaseInvoice/GetPurchaseInvoiceByID",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/PurchaseInvoice/GetPurchaseItem",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/PurchaseInvoice/Create",method:"post",data:c.a.stringify(e)})}function u(e){return Object(n["a"])({url:"/PurchaseInvoice/Edit",method:"post",data:c.a.stringify(e)})}},"67b7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("search-by-date",{attrs:{Value:e.date},on:{Set:function(t){e.date=t},focus:function(t){return e.getdata()}}})],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("span",{staticClass:"demonstration"},[e._v(e._s(e.$t("ItemSales.Name")))]),e._v(" "),a("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:e.$t("ItemSales.Name")},on:{change:e.getdata},model:{value:e.ItemId,callback:function(t){e.ItemId=t},expression:"ItemId"}},e._l(e.Items,(function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Id}})})),1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData.filter((function(t){return!e.search||t.Account.AccountName.toLowerCase().includes(e.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"#",prop:"Id",width:"120",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.getdata}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"FakeDate",label:e.$t("ItemSales.Date"),width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Account.AccountName",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-input",{attrs:{placeholder:e.$t("Purchase.Provider")},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"Qty",label:e.$t("Purchase.PurchaseTotal"),width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Qty.toFixed(3)))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"SellingPrice",label:e.$t("Purchase.SellingPrice"),width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.SellingPrice.toFixed(3)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("Purchase.TotalAmount"),width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s((t.row.Qty*t.row.SellingPrice).toFixed(3)))]}}])})],1)],1)],1)},r=[],c=a("1803"),o=a("e225"),l=a("64af"),s={name:"PurchaseItems",components:{SearchByDate:l["a"]},data:function(){return{ItemId:2,Items:[],tableData:[],loading:!0,search:"",date:""}},created:function(){this.getdata()},methods:{getdata:function(){var e=this;this.loading=!0,Object(c["e"])({ItemId:this.ItemId,DateFrom:this.date[0],DateTo:this.date[1]}).then((function(t){console.log(t),e.tableData=t,Object(o["d"])().then((function(t){console.log(t),e.Items=t,e.loading=!1}))})).catch((function(e){console.log(e)}))}}},i=s,u=a("2877"),d=Object(u["a"])(i,n,r,!1,null,null,null);t["default"]=d.exports}}]);