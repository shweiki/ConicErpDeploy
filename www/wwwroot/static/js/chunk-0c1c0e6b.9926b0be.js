(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c1c0e6b"],{1803:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var o=n("b7e2"),r=n("4328"),a=n.n(r);function i(e){return Object(o["a"])({url:"/PurchaseInvoice/GetPurchaseInvoice",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/PurchaseInvoice/GetPurchaseInvoiceByID",method:"get",params:e})}function c(e){return Object(o["a"])({url:"/PurchaseInvoice/GetPurchaseItem",method:"get",params:e})}function l(e){return Object(o["a"])({url:"/PurchaseInvoice/Create",method:"post",data:a.a.stringify(e)})}function u(e){return Object(o["a"])({url:"/PurchaseInvoice/Edit",method:"post",data:a.a.stringify(e)})}},"317f":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return u}));var o=n("b7e2"),r=n("4328"),a=n.n(r);function i(e){return Object(o["a"])({url:"/Vendor/GetVendor",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/Vendor/GetActiveVendor",method:"get",params:e})}function c(e){return Object(o["a"])({url:"/Vendor/Create",method:"post",data:a.a.stringify(e)})}function l(e){return Object(o["a"])({url:"/Vendor/Edit",method:"post",data:a.a.stringify(e)})}function u(e){return Object(o["a"])({url:"/Vendor/GetVendorCheque",method:"get",params:e})}},"3da3":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"tempForm",staticClass:"demo-ruleForm",attrs:{model:e.tempForm,"label-position":"top","label-width":"70px"}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{type:" ",icon:"fa fa-save"},on:{click:function(t){1!=e.isEdit?e.createData():e.updateData()}}},[e._v(e._s(1!=e.isEdit?"حفظ":"تعديل"))]),e._v(" "),n("router-link",{staticClass:"pan-btn tiffany-btn",staticStyle:{float:"left","margin-left":"20px",padding:"10px 15px","border-radius":"6px"},attrs:{icon:"el-icon-plus",to:"/Purchase/List"}},[e._v(e._s(e.$t("route.ListPurchaseInvoice")))]),e._v(" "),n("span",[e._v(e._s(e.$t("NewPurchaseInvoice.PurchaseInvoice")))]),e._v(" "),n("el-col",{attrs:{span:10}},[n("el-form-item",[n("el-input",{attrs:{placeholder:e.$t("NewPurchaseInvoice.statement"),type:"textarea"},model:{value:e.tempForm.Description,callback:function(t){e.$set(e.tempForm,"Description",t)},expression:"tempForm.Description"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{prop:"Name",placeholder:"اسم المستلم"},model:{value:e.tempForm.Name,callback:function(t){e.$set(e.tempForm,"Name",t)},expression:"tempForm.Name"}})],1)],1),e._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:4}},[n("el-form-item",{attrs:{prop:"FakeDate",label:e.$t("NewPurchaseInvoice.ReleaseDate"),rules:[{required:!0,message:"لايمكن ترك التاريخ فارغ",trigger:"blur"}]}},[n("el-date-picker",{attrs:{type:"date",placeholder:e.$t("NewPurchaseInvoice.Date"),format:"dd/MM/yyyy"},model:{value:e.tempForm.FakeDate,callback:function(t){e.$set(e.tempForm,"FakeDate",t)},expression:"tempForm.FakeDate"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:4}},[n("el-form-item",{attrs:{label:"الى حساب",prop:"VendorId",rules:[{required:!0,message:"لايمكن ترك حساب فارغ",trigger:"blur"}]}},[n("el-select",{attrs:{filterable:"",placeholder:e.$t("NewPurchaseInvoice.Acc"),autocomplete:"off","default-first-option":""},model:{value:e.tempForm.VendorId,callback:function(t){e.$set(e.tempForm,"VendorId",t)},expression:"tempForm.VendorId"}},e._l(e.Vendor,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[n("span",{staticStyle:{float:"right"}},[e._v(e._s(t.label))]),e._v(" "),n("span",{staticStyle:{float:"left color: #8492a6 font-size: 13px"}},[e._v(e._s(t.value))])])})),1)],1)],1),e._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"طريقة الدفع",prop:"PaymentMethod"}},[n("el-radio-group",{attrs:{"text-color":"#f78123"},model:{value:e.tempForm.PaymentMethod,callback:function(t){e.$set(e.tempForm,"PaymentMethod",t)},expression:"tempForm.PaymentMethod"}},[n("el-radio",{attrs:{label:"Cash",border:""}},[e._v(e._s(e.$t("NewPurchaseInvoice.Cash")))]),e._v(" "),2!=e.tempForm.VendorId?n("el-radio",{attrs:{label:"Receivables",border:""}},[e._v(e._s(e.$t("NewPurchaseInvoice.Receivables")))]):e._e()],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:4}},[n("el-form-item",{attrs:{prop:"InvoicePurchaseDate",label:e.$t("NewPurchaseInvoice.InvDate"),rules:[{required:!0,message:"لايمكن ترك التاريخ فارغ",trigger:"blur"}]}},[n("el-date-picker",{attrs:{type:"date",placeholder:e.$t("NewPurchaseInvoice.Date"),format:"dd/MM/yyyy"},model:{value:e.tempForm.InvoicePurchaseDate,callback:function(t){e.$set(e.tempForm,"InvoicePurchaseDate",t)},expression:"tempForm.InvoicePurchaseDate"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:4}},[n("el-form-item",{attrs:{prop:"AccountInvoiceNumber",label:"رقم فاتورة"}},[n("el-input",{attrs:{placeholder:"رقم فاتورة"},model:{value:e.tempForm.AccountInvoiceNumber,callback:function(t){e.$set(e.tempForm,"AccountInvoiceNumber",t)},expression:"tempForm.AccountInvoiceNumber"}})],1)],1)],1),e._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",[n("span",{staticStyle:{color:"#f56c6c","font-size":"16px","text-align":"center"}},[e._v(e._s(e.ValidateNote))])])],1),e._v(" "),n("el-card",{staticStyle:{background:"#545454"},attrs:{"body-style":{padding:"1px"}}},[n("items-search",{on:{add:e.AddItem}})],1),e._v(" "),n("el-table",{attrs:{data:e.tempForm.InventoryMovements,fit:"",border:""}},[n("el-table-column",{attrs:{align:"center",prop:"Itemx.Name"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(e._s(e.$t("NewPurchaseInvoice.Items"))+" ("+e._s(e.TotalItems.toFixed(2))+")")]}},{key:"default",fn:function(t){return[e._v("\n            "+e._s(e.tempForm.InventoryMovements[t.$index].Itemx.Name)+"\n            "),n("edit-item",{attrs:{ItemId:e.tempForm.InventoryMovements[t.$index].ItemsId}})]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"130",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(e._s(e.$t("NewPurchaseInvoice.quantity"))+" ("+e._s(e.TotalQty.toFixed(2))+")")]}},{key:"default",fn:function(t){return[n("el-input-number",{attrs:{"controls-position":"right",precision:2,step:1,min:0,max:1e6},on:{change:e.SumTotalAmmount},model:{value:e.tempForm.InventoryMovements[t.$index].Qty,callback:function(n){e.$set(e.tempForm.InventoryMovements[t.$index],"Qty",n)},expression:"tempForm.InventoryMovements[scope.$index].Qty"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"220",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(e._s(e.$t("NewPurchaseInvoice.Price")))]}},{key:"default",fn:function(t){return[n("currency-input",{staticClass:"currency-input",attrs:{precision:10},on:{change:e.SumTotalAmmount},model:{value:e.tempForm.InventoryMovements[t.$index].SellingPrice,callback:function(n){e.$set(e.tempForm.InventoryMovements[t.$index],"SellingPrice",n)},expression:"tempForm.InventoryMovements[scope.$index].SellingPrice"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"120",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(e._s(e.$t("NewPurchaseInvoice.TotalValue")))]}},{key:"default",fn:function(t){return[e._v(e._s((e.tempForm.InventoryMovements[t.$index].SellingPrice*e.tempForm.InventoryMovements[t.$index].Qty).toFixed(2)))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(e._s(e.$t("NewPurchaseInvoice.Inventory")))]}},{key:"default",fn:function(t){return[n("el-radio-group",{model:{value:e.tempForm.InventoryMovements[t.$index].InventoryItemId,callback:function(n){e.$set(e.tempForm.InventoryMovements[t.$index],"InventoryItemId",n)},expression:"tempForm.InventoryMovements[scope.$index].InventoryItemId"}},e._l(e.InventoryItems,(function(t,o){return n("el-radio-button",{key:o,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("NewPurchaseInvoice.description"),width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form-item",{attrs:{prop:"InventoryMovements."+t.$index+".Description"}},[n("el-input",{staticClass:"input-with-select",attrs:{required:""},model:{value:e.tempForm.InventoryMovements[t.$index].Description,callback:function(n){e.$set(e.tempForm.InventoryMovements[t.$index],"Description",n)},expression:"tempForm.InventoryMovements[scope.$index].Description"}},[n("template",{slot:"prepend"},[n("el-button",{attrs:{icon:"fa fa-copy"},on:{click:function(n){return e.Copy(t.row.Description)}}})],1),e._v(" "),n("template",{slot:"append"},[n("el-button",{attrs:{icon:"fa fa-paste"},on:{click:function(n){return e.Paste(t.$index)}}})],1)],2)],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(n){return e.RemoveItem(t.$index)}}})]}}])})],1)],1),e._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:24}},[n("el-card",{attrs:{shadow:"hover"}},[n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(e.$t("NewPurchaseInvoice.Items")))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(e.TotalItems.toFixed(2)))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(e.$t("NewPurchaseInvoice.QuantityAmount")))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(e.TotalQty.toFixed(2)))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(e.$t("NewPurchaseInvoice.TotalDiscount")))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[n("el-input-number",{attrs:{precision:2,step:1,min:0,max:100},on:{change:e.SumTotalAmmount},model:{value:e.tempForm.Discount,callback:function(t){e.$set(e.tempForm,"Discount",t)},expression:"tempForm.Discount"}})],1),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(e.$t("NewPurchaseInvoice.TotalJD")))]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("span",[e._v(e._s(e.TotalAmmount.toFixed(2))+" JOD")]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}})],1)],1)],1)],1)],1)},r=[],a=(n("a481"),n("1803")),i=n("f815"),s=n("317f"),c=n("ef0a"),l=n("aca4"),u={name:"NewPurchaseInvoice",components:{ItemsSearch:c["a"],EditItem:l["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{TotalQty:0,TotalItems:0,TotalAmmount:0,ValidateNote:"",tempForm:{ID:void 0,Name:" ",Tax:0,AccountInvoiceNumber:"",FakeDate:new Date,InvoicePurchaseDate:new Date,PaymentMethod:"Cash",Discount:0,VendorId:2,Status:0,InventoryMovements:[]},rules:{InventoryMovements:[{type:"array",required:!0,message:"لا يمكن إستكمال عملية الشراء من غير إضافة أصناف",trigger:"change"}]},InventoryItems:[],CashAccounts:[],Vendor:[],tempRoute:{}}},created:function(){var e=this;this.isEdit&&this.getdata(this.$route.params&&this.$route.params.id),this.tempRoute=Object.assign({},this.$route),Object(i["c"])().then((function(t){console.log(t),e.InventoryItems=t})),Object(s["c"])().then((function(t){console.log(t),e.Vendor=t}))},methods:{getdata:function(e){var t=this;Object(a["d"])({ID:e}).then((function(e){console.log(e),t.tempForm=e,t.SumTotalAmmount(),t.setTagsViewTitle(),t.setPageTitle()})).catch((function(e){console.log(e)}))},AddItem:function(e){this.tempForm.InventoryMovements.unshift({ID:void 0,ItemsId:void 0!=e?e.Id:void 0,TypeMove:"In",Status:0,Qty:1,SellingPrice:e.CostPrice,Tax:0,InventoryItemId:1,Itemx:e,PurchaseInvoiceId:void 0,Description:""}),this.SumTotalAmmount()},RemoveItem:function(e){this.tempForm.InventoryMovements.splice(e,1),this.SumTotalAmmount()},SumTotalAmmount:function(){this.TotalItems=this.tempForm.InventoryMovements.length,this.TotalQty=this.tempForm.InventoryMovements.reduce((function(e,t){return e+(t["Qty"]||0)}),0),this.TotalAmmount=this.tempForm.InventoryMovements.reduce((function(e,t){return e+t.Qty*t.SellingPrice}),0),this.TotalAmmount-=this.tempForm.Discount,document.getElementById("barcode").focus()},updateData:function(){var e=this;this.$refs["tempForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;e.tempForm.Tax=parseInt(e.tempForm.Tax),e.TotalAmmount>0&&e.TotalItems>0&&e.TotalQty>0?Object(a["b"])(e.tempForm).then((function(t){e.$notify({title:"تم تعديل  بنجاح",message:"تم تعديل بنجاح",type:"success",position:"top-left",duration:1e3,showClose:!1,onClose:function(){t&&e.$nextTick((function(){e.$router.replace({path:"/redirect/Purchase/List"})}))}})})).catch((function(e){console.log(e)})):e.ValidateNote="القيمة الإجمالية تساوي صفر  "}))},createData:function(){var e=this;this.$refs["tempForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;e.tempForm.Tax=parseInt(e.tempForm.Tax),e.TotalAmmount>0&&e.TotalItems>0&&e.TotalQty>0?Object(a["a"])(e.tempForm).then((function(t){e.$notify({title:"تم الإضافة بنجاح",message:"تم الإضافة بنجاح",type:"success",position:"top-left",duration:1e3,showClose:!1,onClose:function(){t&&e.$nextTick((function(){e.$router.replace({path:"/redirect/Purchase/List"})}))}})})).catch((function(e){console.log(e)})):e.ValidateNote="القيمة الإجمالية تساوي صفر  "}))},setTagsViewTitle:function(){var e="Edit Purchase",t=Object.assign({},this.tempRoute,{title:"".concat(e,"-").concat(this.tempForm.Id)});this.$store.dispatch("tagsView/updateVisitedView",t)},setPageTitle:function(){var e="Edit Purchase";document.title="".concat(e," - ").concat(this.tempForm.Id)}}},m=u,d=n("2877"),p=Object(d["a"])(m,o,r,!1,null,null,null);t["a"]=p.exports},ef86:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("detail",{attrs:{"is-edit":!1}})},r=[],a=n("3da3"),i={name:"CreateInvoice",components:{Detail:a["a"]}},s=i,c=n("2877"),l=Object(c["a"])(s,o,r,!1,null,null,null);t["default"]=l.exports},f815:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var o=n("b7e2"),r=n("4328"),a=n.n(r);function i(e){return Object(o["a"])({url:"/InventoryItem/GetInventoryItem",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/InventoryItem/GetActiveInventory",method:"get",params:e})}function c(e){return Object(o["a"])({url:"/InventoryItem/Create",method:"post",data:a.a.stringify(e)})}function l(e){return Object(o["a"])({url:"/InventoryItem/Edit",method:"post",data:a.a.stringify(e)})}}}]);