(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6442175d"],{"20db":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("search-by-date",{attrs:{Value:[]},on:{Set:function(e){t.date=e}}})],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("span",{staticClass:"demonstration"},[t._v(t._s(t.$t("ItemSales.Name")))]),t._v(" "),a("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:t.$t("ItemSales.Name")},on:{change:t.getdata},model:{value:t.ItemId,callback:function(e){t.ItemId=e},expression:"ItemId"}},t._l(t.Items,(function(t){return a("el-option",{key:t.Id,attrs:{label:t.Name,value:t.Id}})})),1),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.$t("OrderInventories.OrderNumber"))+" ")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.tableData.length))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.$t("OrderInventories.TotalNumber")))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.TotalQty.toFixed(t.$store.getters.settings.ToFixed))+" "+t._s(t.$t("MemberList.JOD")))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.$t("ItemSales.Amountv"))+" ")]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("span",[t._v(t._s(t.TotalAmmount.toFixed(t.$store.getters.settings.ToFixed))+" "+t._s(t.$t("MemberList.JOD")))]),t._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),a("el-button",{staticStyle:{float:"left"},attrs:{icon:"el-icon-printer",type:"primary"},on:{click:function(e){return t.print(t.tableData)}}})],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"default-sort":{prop:"FakeDate",order:"ascending"},data:t.tableData.filter((function(e){return!t.search||e.Account.AccountName.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"#",prop:"Id",width:"120",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.getdata}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"Type",label:t.$t("Cheque.Operation"),width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"FakeDate",label:t.$t("ItemSales.Date"),sortable:"",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Name",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-input",{attrs:{placeholder:t.$t("ItemSales.Customer")},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"Qty",label:t.$t("CashPool.quantity"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Qty.toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"SellingPrice",label:t.$t("CashPool.Price"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.SellingPrice.toFixed(t.$store.getters.settings.ToFixed)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("ItemSales.Amountv"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s((e.row.Qty*e.row.SellingPrice).toFixed(t.$store.getters.settings.ToFixed))+"\n          "+t._s(t.$t("MemberList.JOD")))]}}])})],1)],1)],1)},n=[],i=(a("7514"),a("64af")),o=a("e225"),l=a("add5"),s=a.n(l),c={name:"SalesItem",components:{SearchByDate:i["a"]},data:function(){return{ItemId:2,Items:[],tableData:[],loading:!0,TotalQty:0,TotalAmmount:0,search:"",date:[]}},created:function(){var t=this;this.getdata(),Object(o["f"])().then((function(e){console.log(e),t.Items=e,t.loading=!1}))},methods:{print:function(t){var e=this;t=t.map((function(t){return{FakeDate:t.FakeDate,Name:t.Name,Qty:t.Qty,SellingPrice:t.SellingPrice,Total:(t.SellingPrice*t.Qty).toFixed($store.getters.settings.ToFixed)}})),s()({printable:t,properties:[{field:"FakeDate",displayName:"تاريخ"},{field:"Name",displayName:"اسم الزبون"},{field:"Qty",displayName:"الكمية"},{field:"SellingPrice",displayName:"سعر"},{field:"Total",displayName:"القيمة"}],type:"json",header:"<center> <h2>حركة الصنف "+this.Items.find((function(t){return t.Id==e.ItemId})).Name+"</h2></center> <h3 style='float:left'>   الاجمالي الكمية:  "+this.TotalQty.toFixed($store.getters.settings.ToFixed)+"</h3><h3 style='float:right'>  الفترة  : "+this.formatDate(this.date[0])+" - "+this.formatDate(this.date[1])+"</h3>",gridHeaderStyle:"color: red;  border: 2px solid #3971A5;",gridStyle:"border: 2px solid #3971A5; text-align: center;"})},getdata:function(){var t=this;this.loading=!0,Object(o["m"])({ItemId:this.ItemId,DateFrom:this.date[0],DateTo:this.date[1]}).then((function(e){console.log(e),t.tableData=e.OrderInventoryMove.concat(e.SalesInvoiceMove.concat(e.PurchaseInvoiceMove)),console.log(t.tableData),t.TotalQty=t.tableData.reduce((function(t,e){return t+e.Qty}),0),t.TotalAmmount=t.tableData.reduce((function(t,e){return t+e.Qty*e.SellingPrice}),0),t.loading=!1})).catch((function(t){console.log(t)}))},formatDate:function(t){var e=new Date(t),a=""+e.getDate(),r=""+(e.getMonth()+1),n=e.getFullYear();return r.length<2&&(r="0"+r),a.length<2&&(a="0"+a),[a,r,n].join("/")}}},d=c,u=a("2877"),m=Object(u["a"])(d,r,n,!1,null,null,null);e["default"]=m.exports},e225:function(t,e,a){"use strict";a.d(e,"j",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"g",(function(){return s})),a.d(e,"c",(function(){return c})),a.d(e,"f",(function(){return d})),a.d(e,"l",(function(){return u})),a.d(e,"k",(function(){return m})),a.d(e,"i",(function(){return f})),a.d(e,"m",(function(){return h})),a.d(e,"d",(function(){return p})),a.d(e,"e",(function(){return v})),a.d(e,"b",(function(){return g})),a.d(e,"h",(function(){return b}));var r=a("b7e2"),n=a("4328"),i=a.n(n);function o(t){return Object(r["a"])({url:"/Item/GetItemByAny",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/Item/CalculateCostPrice",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/Item/GetByListQ",method:"post",data:i.a.stringify(t)})}function c(t){return Object(r["a"])({url:"/Item/CheckItemIsExist",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/Item/GetActiveItem",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/Item/GetItemById",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/Item/GetItemByBarcode",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/Item/GetIsPrimeItem",method:"get",params:t})}function h(t){return Object(r["a"])({url:"/Item/GetItemMove",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/Item/Create",method:"post",data:i.a.stringify(t)})}function v(t){return Object(r["a"])({url:"/Item/Edit",method:"post",data:i.a.stringify(t)})}function g(t){return Object(r["a"])({url:"/Item/CalculateInventoryItemQty",method:"post",data:i.a.stringify(t)})}function b(t){return Object(r["a"])({url:"/Item/GetInventoryItemEXP",method:"post",data:i.a.stringify(t)})}}}]);