(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfea80d0"],{e225:function(t,e,n){"use strict";n.d(e,"j",(function(){return o})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return d})),n.d(e,"l",(function(){return u})),n.d(e,"k",(function(){return m})),n.d(e,"i",(function(){return f})),n.d(e,"m",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return v})),n.d(e,"b",(function(){return g})),n.d(e,"h",(function(){return I}));var a=n("b7e2"),r=n("4328"),i=n.n(r);function o(t){return Object(a["a"])({url:"/Item/GetItemByAny",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/Item/CalculateCostPrice",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/Item/GetByListQ",method:"post",data:i.a.stringify(t)})}function s(t){return Object(a["a"])({url:"/Item/CheckItemIsExist",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/Item/GetActiveItem",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/Item/GetItemById",method:"get",params:t})}function m(t){return Object(a["a"])({url:"/Item/GetItemByBarcode",method:"get",params:t})}function f(t){return Object(a["a"])({url:"/Item/GetIsPrimeItem",method:"get",params:t})}function h(t){return Object(a["a"])({url:"/Item/GetItemMove",method:"get",params:t})}function p(t){return Object(a["a"])({url:"/Item/Create",method:"post",data:i.a.stringify(t)})}function v(t){return Object(a["a"])({url:"/Item/Edit",method:"post",data:i.a.stringify(t)})}function g(t){return Object(a["a"])({url:"/Item/CalculateInventoryItemQty",method:"post",data:i.a.stringify(t)})}function I(t){return Object(a["a"])({url:"/Item/GetInventoryItemEXP",method:"post",data:i.a.stringify(t)})}},ed3e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("search-by-date",{attrs:{Value:[]},on:{Set:function(e){t.date=e}}})],1),t._v(" "),n("el-card",{staticClass:"box-card"},[n("span",{staticClass:"demonstration"},[t._v(t._s(t.$t("ItemSales.Name")))]),t._v(" "),n("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:t.$t("ItemSales.Name")},on:{change:t.getdata},model:{value:t.ItemId,callback:function(e){t.ItemId=e},expression:"ItemId"}},t._l(t.Items,(function(t){return n("el-option",{key:t.Id,attrs:{label:t.Name,value:t.Id}})})),1),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v("عدد الفواتير")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.tableData.length))]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v("العدد الكلي")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.TotalQty.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v("القمية الكلية")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("span",[t._v(t._s(t.TotalAmmount.toFixed(t.$store.getters.settings.ToFixed))+" JOD")]),t._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),n("el-button",{staticStyle:{float:"left"},attrs:{icon:"el-icon-printer",type:"primary"},on:{click:function(e){return t.print(t.tableData)}}})],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.Account.AccountName.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""},on:{"row-dblclick":function(e){t.$router.replace({path:"/Sales/Edit/"+e.SalesInvoiceId})}}},[n("el-table-column",{attrs:{label:"#",prop:"Id",width:"120",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.getdata}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"FakeDate",label:t.$t("ItemSales.Date"),width:"120",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Name",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-input",{attrs:{placeholder:t.$t("ItemSales.Customer")},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"Qty",label:t.$t("ItemSales.quantity"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Qty.toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"SellingPrice",label:t.$t("ItemSales.Price"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.SellingPrice.toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("ItemSales.Amountv"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((e.row.Qty*e.row.SellingPrice).toFixed(t.$store.getters.settings.ToFixed))+" JOD")]}}])})],1)],1)],1)},r=[],i=(n("7514"),n("64af")),o=n("f0a8"),l=n("e225"),c=n("add5"),s=n.n(c),d={name:"SalesItem",components:{SearchByDate:i["a"]},data:function(){return{ItemId:2,Items:[],tableData:[],loading:!0,TotalQty:0,TotalAmmount:0,search:"",date:[]}},created:function(){var t=this;this.getdata(),Object(l["f"])().then((function(e){t.Items=e,t.loading=!1}))},methods:{print:function(t){var e=this;t=t.map((function(t){return{Name:t.Name,Qty:t.Qty,SellingPrice:t.SellingPrice,Total:(t.SellingPrice*t.Qty).toFixed($store.getters.settings.ToFixed)}})),s()({printable:t,properties:[{field:"Name",displayName:"اسم الزبون"},{field:"Qty",displayName:"الكمية"},{field:"SellingPrice",displayName:"سعر البيع"},{field:"Total",displayName:"القيمة"}],type:"json",header:"<center> <h2>مبيعات الصنف "+this.Items.find((function(t){return t.Id==e.ItemId})).Name+"</h2></center> <h3 style='float:left'>   الاجمالي الكمية:  "+this.TotalQty.toFixed($store.getters.settings.ToFixed)+"</h3><h3 style='float:right'>  الفترة  : "+this.formatDate(this.date[0])+" - "+this.formatDate(this.date[1])+"</h3>",gridHeaderStyle:"color: red;  border: 2px solid #3971A5;",gridStyle:"border: 2px solid #3971A5; text-align: center;"})},getdata:function(){var t=this;this.loading=!0,Object(o["f"])({ItemId:this.ItemId,DateFrom:this.date[0],DateTo:this.date[1]}).then((function(e){t.tableData=e,t.TotalQty=t.tableData.reduce((function(t,e){return t+e.Qty}),0),t.TotalAmmount=t.tableData.reduce((function(t,e){return t+e.Qty*e.SellingPrice}),0),t.loading=!1})).catch((function(t){console.log(t)}))},formatDate:function(t){var e=new Date(t),n=""+e.getDate(),a=""+(e.getMonth()+1),r=e.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[n,a,r].join("/")}}},u=d,m=n("2877"),f=Object(m["a"])(u,a,r,!1,null,null,null);e["default"]=f.exports},f0a8:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return u}));var a=n("b7e2"),r=n("4328"),i=n.n(r);function o(t){return Object(a["a"])({url:"/SaleInvoice/GetByListQ",method:"post",data:i.a.stringify(t)})}function l(t){return Object(a["a"])({url:"/SaleInvoice/GetSaleItem",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/SaleInvoice/Create",method:"post",data:i.a.stringify(t)})}function s(t){return Object(a["a"])({url:"/SaleInvoice/Edit",method:"post",data:i.a.stringify(t)})}function d(t){return Object(a["a"])({url:"/SaleInvoice/GetSaleInvoiceById",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/SaleInvoice/GetSaleInvoiceByMemberId",method:"get",params:t})}}}]);