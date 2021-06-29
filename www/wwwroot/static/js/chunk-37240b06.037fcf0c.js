(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37240b06"],{"2b95":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"tempForm",staticClass:"demo-ruleForm",attrs:{model:t.tempForm,rules:t.rules,"label-position":"top","label-width":"70px"}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{type:"success",icon:"fa fa-save"},on:{click:function(e){return t.createData("tempForm")}}},[t._v("حفظ")]),t._v(" "),n("router-link",{staticClass:"pan-btn tiffany-btn",staticStyle:{float:"left","margin-left":"20px",padding:"10px 15px","border-radius":"6px"},attrs:{icon:"el-icon-plus",to:"/StockItem"}},[t._v(t._s(t.$t("route.StockItem")))]),t._v(" "),n("span",[t._v("جرد مخزن")])],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{prop:"FakeDate",label:"تاريخ الإصدار",rules:[{required:!0,message:"لايمكن ترك التاريخ فارغ",trigger:"blur"}]}},[n("el-date-picker",{attrs:{type:"date",placeholder:"تاريخ",format:"dd/MM/yyyy"},model:{value:t.tempForm.FakeDate,callback:function(e){t.$set(t.tempForm,"FakeDate",e)},expression:"tempForm.FakeDate"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:18}},[n("el-form-item",{attrs:{label:"بيان جرد \\ مسؤول الجرد"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.tempForm.Description,callback:function(e){t.$set(t.tempForm,"Description",e)},expression:"tempForm.Description"}})],1)],1)],1),t._v(" "),n("el-card",{staticClass:"box-card"},[n("el-row",[n("el-col",{attrs:{span:6}},[n("el-switch",{attrs:{"active-text":"ادخال الكمية","inactive-text":"عداد"},model:{value:t.ByQTY,callback:function(e){t.ByQTY=e},expression:"ByQTY"}})],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{"data-barcode":"",placeholder:"باركود صنف"},model:{value:t.Barcode,callback:function(e){t.Barcode=e},expression:"Barcode"}},[n("i",{staticClass:"fa fa-barcode el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-autocomplete",{attrs:{"popper-class":"my-autocomplete","fetch-suggestions":t.SearchNameItem,placeholder:"اسم صنف"},on:{select:t.AddItem},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item;return[n("div",{staticClass:"ID"},[t._v(t._s(o.Barcode))]),t._v(" "),n("span",{staticClass:"Name"},[t._v(t._s(o.Name))])]}}]),model:{value:t.Name,callback:function(e){t.Name=e},expression:"Name"}},[n("i",{staticClass:"fa fa-barcode el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1)],1),t._v(" "),n("el-form-item",{attrs:{prop:"StockMovements"}},[n("el-table",{attrs:{data:t.tempForm.StockMovements,fit:"",border:"","max-height":"320","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"Barcode",label:"باركود",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Name",label:"اسم الصنف",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{width:"180",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("() الكمية")]}},{key:"default",fn:function(e){return[n("el-input-number",{attrs:{precision:2,step:1,min:0,max:1e6},on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.StockMovements[e.$index].Qty,callback:function(n){t.$set(t.tempForm.StockMovements[e.$index],"Qty",n)},expression:"tempForm.StockMovements[scope.$index].Qty"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"220",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("المخزن")]}},{key:"default",fn:function(e){return[n("el-radio-group",{model:{value:t.tempForm.StockMovements[e.$index].InventoryItemId,callback:function(n){t.$set(t.tempForm.StockMovements[e.$index],"InventoryItemId",n)},expression:"\n                  tempForm.StockMovements[scope.$index].InventoryItemId\n                "}},t._l(t.InventoryItems,(function(e,o){return n("el-radio-button",{key:o,attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"وصف",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form-item",{attrs:{prop:"StockMovements."+e.$index+".Description"}},[n("el-input",{staticClass:"input-with-select",attrs:{required:""},model:{value:t.tempForm.StockMovements[e.$index].Description,callback:function(n){t.$set(t.tempForm.StockMovements[e.$index],"Description",n)},expression:"tempForm.StockMovements[scope.$index].Description"}},[n("template",{slot:"prepend"},[n("el-button",{attrs:{icon:"fa fa-copy"},on:{click:function(n){return t.Copy(e.row.Description)}}})],1),t._v(" "),n("template",{slot:"append"},[n("el-button",{attrs:{icon:"fa fa-paste"},on:{click:function(n){return t.Paste(e.$index)}}})],1)],2)],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"55"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(n){return t.RemoveItem(e.$index)}}})]}}])})],1)],1)],1),t._v(" "),n("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:"صنف جديد",visible:t.NewItemVisible,width:"80%"},on:{"update:visible":function(e){t.NewItemVisible=e}}},[n("el-row",[n("el-col",{attrs:{span:3}},[n("el-button",{attrs:{type:"success",icon:"el-plus"},on:{click:function(e){return t.NewItem()}}},[t._v("حفظ")])],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{placeholder:"باركود","suffix-icon":"fa fa-barcode"},model:{value:t.Barcode,callback:function(e){t.Barcode=e},expression:"Barcode"}})],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{type:"text",placeholder:"إسم صنف"},model:{value:t.Name,callback:function(e){t.Name=e},expression:"Name"}})],1)],1)],1),t._v(" "),n("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{title:"QTY",visible:t.EnterQTYVisible,width:"80%"},on:{"update:visible":function(e){t.EnterQTYVisible=e}}},[n("el-row",[n("el-col",{attrs:{span:3}},[n("el-button",{attrs:{type:"success",icon:"el-plus"},on:{click:function(e){return t.onBarcodeScanned(t.Barcode)}}},[t._v("Add")])],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-input-number",{attrs:{precision:2,step:1,min:0,max:1e6},on:{focus:function(t){return t.target.select()}},model:{value:t.Qty,callback:function(e){t.Qty=e},expression:"Qty"}})],1)],1)],1)],1)],1)},r=[],a=(n("7514"),n("20d6"),n("5296")),i=n("f815"),s=n("e225"),c={name:"NewStock",data:function(){return{ByQTY:!1,Qty:1,NewItemVisible:!1,EnterQTYVisible:!1,Barcode:"",Name:"",Text:"",ValidateNote:"",tempForm:{Id:void 0,FakeDate:new Date,Description:"",StockMovements:[]},rules:{StockMovements:[{type:"array",required:!0,message:"لا يمكن إستكمال عملية مخزن من غير إضافة أصناف",trigger:"change"}]},InventoryItems:[],Items:[]}},methods:{AddItem:function(t){var e=this.tempForm.StockMovements.findIndex((function(e){return e.ItemsId==t.Id}));-1!=e?this.tempForm.StockMovements[e].Qty+=this.Qty:this.tempForm.StockMovements.push({Id:void 0,ItemsId:t.Id,Status:0,Qty:this.Qty,SellingPrice:0,Tax:0,Description:"",InventoryItemId:1,Barcode:t.Barcode,Name:t.Name,StocktakingInventoryId:void 0}),this.Barcode="",this.Name=""},Copy:function(t){this.Text=t},Paste:function(t){this.tempForm.StockMovements[t].Description=this.Text},RemoveItem:function(t){this.tempForm.StockMovements.splice(t,1)},SearchNameItem:function(t,e){var n=this.Items,o=t?n.filter(this.createFilter(t)):n;o.length<=0?this.NewItemVisible=!0:this.NewItemVisible=!1,e(o)},createFilter:function(t){return function(e){return 0===e.Name.toLowerCase().indexOf(t.toLowerCase())}},getdata:function(){var t=this;Object(i["c"])().then((function(e){console.log(e),t.InventoryItems=e})),Object(s["f"])().then((function(e){console.log(e),t.Items=e}))},createData:function(){var t=this;this.$refs["tempForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(a["a"])(t.tempForm).then((function(e){t.$notify({title:"تم الإضافة بنجاح",message:"تم الإضافة بنجاح",type:"success",position:"top-left",duration:1e3,showClose:!1,onClose:function(){Object.assign(t.$data,t.$options.data()),t.getdata()}})})).catch((function(t){console.log(t)}))}))},NewItem:function(){var t=this;Object(s["d"])({Id:void 0,Name:""+this.Name,CostPrice:0,SellingPrice:0,OtherPrice:0,LowOrder:0,Status:0,Tax:0,Rate:0,Barcode:this.Barcode,Description:""}).then((function(e){t.Barcode="",t.NewItemVisible=!1,t.getdata(),t.$notify({title:"تم ",message:"تم الإضافة بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))},onBarcodeScanned:function(t){var e=this;if(console.log(t),this.ByQTY&&1==this.Qty)this.EnterQTYVisible=!0,this.Qty=1;else{var n=this.Items.findIndex((function(t){return t.Barcode==e.Barcode}));console.log(n),-1!=n?this.Qty>1?(this.EnterQTYVisible=!1,this.AddItem(this.Items[n]),this.Qty=1):this.AddItem(this.Items[n]):this.NewItemVisible=!0}},resetBarcode:function(){console.log("10");this.$barcodeScanner.getPreviousCode()}},created:function(){this.$barcodeScanner.init(this.onBarcodeScanned),this.getdata()}},l=c,u=n("2877"),m=Object(u["a"])(l,o,r,!1,null,null,null);e["default"]=m.exports},5296:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var o=n("b7e2"),r=n("4328"),a=n.n(r);function i(t){return Object(o["a"])({url:"/StockInventory/GetStockInventory",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/StockInventory/Create",method:"post",data:a.a.stringify(t)})}},e225:function(t,e,n){"use strict";n.d(e,"k",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"g",(function(){return c})),n.d(e,"o",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return m})),n.d(e,"f",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"l",(function(){return p})),n.d(e,"j",(function(){return v})),n.d(e,"n",(function(){return h})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return I})),n.d(e,"b",(function(){return y})),n.d(e,"i",(function(){return g}));var o=n("b7e2"),r=n("4328"),a=n.n(r);function i(t){return Object(o["a"])({url:"/Item/GetItemByAny",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/Item/CalculateCostPrice",method:"get",params:t})}function c(t){return Object(o["a"])({url:"/Item/GetByListQ",method:"post",data:a.a.stringify(t)})}function l(t){return Object(o["a"])({url:"/Item/GetLowOrder",method:"post",data:a.a.stringify(t)})}function u(t){return Object(o["a"])({url:"/Item/GetEXP",method:"post",data:a.a.stringify(t)})}function m(t){return Object(o["a"])({url:"/Item/CheckItemIsExist",method:"get",params:t})}function d(t){return Object(o["a"])({url:"/Item/GetActiveItem",method:"get",params:t})}function f(t){return Object(o["a"])({url:"/Item/GetItemById",method:"get",params:t})}function p(t){return Object(o["a"])({url:"/Item/GetItemByBarcode",method:"get",params:t})}function v(t){return Object(o["a"])({url:"/Item/GetIsPrimeItem",method:"get",params:t})}function h(t){return Object(o["a"])({url:"/Item/GetItemMove",method:"get",params:t})}function b(t){return Object(o["a"])({url:"/Item/Create",method:"post",data:a.a.stringify(t)})}function I(t){return Object(o["a"])({url:"/Item/Edit",method:"post",data:a.a.stringify(t)})}function y(t){return Object(o["a"])({url:"/Item/CalculateInventoryItemQty",method:"post",data:a.a.stringify(t)})}function g(t){return Object(o["a"])({url:"/Item/GetInventoryItemEXP",method:"post",data:a.a.stringify(t)})}},f815:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return u}));var o=n("b7e2"),r=n("4328"),a=n.n(r);function i(t){return Object(o["a"])({url:"/InventoryItem/GetInventoryItem",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/InventoryItem/GetActiveInventory",method:"get",params:t})}function c(t){return Object(o["a"])({url:"/InventoryItem/Create",method:"post",data:a.a.stringify(t)})}function l(t){return Object(o["a"])({url:"/InventoryItem/Edit",method:"post",data:a.a.stringify(t)})}function u(t){return Object(o["a"])({url:"/InventoryItem/InventoryQty",method:"post",data:a.a.stringify(t)})}}}]);