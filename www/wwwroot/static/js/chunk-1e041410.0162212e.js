(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e041410"],{"03ca":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n("b7e2"),o=n("4328"),i=n.n(o);function a(e){return Object(r["a"])({url:"/OrderInventory/GetOrderInventory",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/OrderInventory/GetOrderInventoryByID",method:"get",params:e})}function c(e){return Object(r["a"])({url:"/OrderInventory/Create",method:"post",data:i.a.stringify(e)})}function l(e){return Object(r["a"])({url:"/OrderInventory/Edit",method:"post",data:i.a.stringify(e)})}},"3ef2":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"tempForm",staticClass:"demo-ruleForm",attrs:{model:e.tempForm,rules:e.rules,"label-position":"top","label-width":"70px"}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{type:" ",icon:"fa fa-save"},on:{click:function(t){1!=e.isEdit?e.createData():e.updateData()}}},[e._v(e._s(1!=e.isEdit?"حفظ":"تعديل"))]),e._v(" "),n("router-link",{staticClass:"pan-btn tiffany-btn",staticStyle:{float:"left","margin-left":"20px",padding:"10px 15px","border-radius":"6px"},attrs:{icon:"el-icon-plus",to:"/OrderInventories/List"}},[e._v(e._s(e.$t("route.OrderInventory")))]),e._v(" "),n("span",[e._v(e._s(e.$t("OrderInventories.StoreMovement")))]),e._v(" "),n("p",{staticStyle:{color:"#F56C6Cfont-size: 16pxtext-align: center"}},[e._v(e._s(e.ValidateNote))]),e._v("ss\n      ")],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{prop:"OrderType",label:e.$t("OrderInventories.OrderType"),rules:[{required:!0,message:"يجب تحديد نوع سند",trigger:"blur"}]}},[n("el-radio-group",{model:{value:e.tempForm.OrderType,callback:function(t){e.$set(e.tempForm,"OrderType",t)},expression:"tempForm.OrderType"}},[n("el-radio-button",{attrs:{label:"ادخال بضاعة اول المدة / بونص"}}),e._v(" "),n("el-radio-button",{attrs:{label:"اخراج: هدايا / عروض / تالف"}})],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{prop:"FakeDate",label:e.$t("NewPurchaseInvoice.ReleaseDate"),rules:[{required:!0,message:"لايمكن ترك التاريخ فارغ",trigger:"blur"}]}},[n("el-date-picker",{attrs:{type:"date",placeholder:e.$t("Sales.Date"),format:"dd/MM/yyyy"},model:{value:e.tempForm.FakeDate,callback:function(t){e.$set(e.tempForm,"FakeDate",t)},expression:"tempForm.FakeDate"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"Description",label:e.$t("OrderInventories.Statement")}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.tempForm.Description,callback:function(t){e.$set(e.tempForm,"Description",t)},expression:"tempForm.Description"}})],1)],1)],1),e._v(" "),n("el-card",{staticStyle:{background:"#545454"},attrs:{"body-style":{padding:"1px"}}},[n("items-search",{on:{add:e.AddItem}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"InventoryMovements"}},[n("el-table",{attrs:{data:e.tempForm.InventoryMovements,fit:"",border:"","max-height":"350","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(e._s(e.$t("OrderInventories.Items"))+" ("+e._s(e.tempForm.InventoryMovements.length.toFixed(2))+")")]}},{key:"default",fn:function(t){return[e._v("\n              "+e._s(e.tempForm.InventoryMovements[t.$index].Itemx.Name)+"\n              "),n("edit-item",{attrs:{ItemID:e.tempForm.InventoryMovements[t.$index].ItemsID}})]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"150",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(e._s(e.$t("CashPool.quantity"))+" ("+e._s(e.tempForm.InventoryMovements.reduce((function(e,t){return e+(t["Qty"]||0)}),0).toFixed(2))+")")]}},{key:"default",fn:function(t){return[n("el-input-number",{attrs:{"controls-position":"right",precision:2,step:1,min:0,max:1e6},model:{value:e.tempForm.InventoryMovements[t.$index].Qty,callback:function(n){e.$set(e.tempForm.InventoryMovements[t.$index],"Qty",n)},expression:"tempForm.InventoryMovements[scope.$index].Qty"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v("نوع الحركة")]}},{key:"default",fn:function(t){return[n("el-radio-group",{model:{value:e.tempForm.InventoryMovements[t.$index].TypeMove,callback:function(n){e.$set(e.tempForm.InventoryMovements[t.$index],"TypeMove",n)},expression:"tempForm.InventoryMovements[scope.$index].TypeMove"}},[n("el-radio-button",{attrs:{label:"In"}},[e._v("إضافة")]),e._v(" "),n("el-radio-button",{attrs:{label:"Out"}},[e._v("حسب")])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(e._s(e.$t("OrderInventories.Store")))]}},{key:"default",fn:function(t){return[n("el-radio-group",{model:{value:e.tempForm.InventoryMovements[t.$index].InventoryItemID,callback:function(n){e.$set(e.tempForm.InventoryMovements[t.$index],"InventoryItemID",n)},expression:"tempForm.InventoryMovements[scope.$index].InventoryItemID"}},e._l(e.InventoryItems,(function(t,r){return n("el-radio-button",{key:r,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:e.$t("Vendors.Description"),width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form-item",{attrs:{prop:"InventoryMovements."+t.$index+".Description"}},[n("el-input",{staticClass:"input-with-select",attrs:{required:""},model:{value:e.tempForm.InventoryMovements[t.$index].Description,callback:function(n){e.$set(e.tempForm.InventoryMovements[t.$index],"Description",n)},expression:"tempForm.InventoryMovements[scope.$index].Description"}},[n("template",{slot:"prepend"},[n("el-button",{attrs:{icon:"fa fa-copy"},on:{click:function(n){return e.Copy(t.row.Description)}}})],1),e._v(" "),n("template",{slot:"append"},[n("el-button",{attrs:{icon:"fa fa-paste"},on:{click:function(n){return e.Paste(t.$index)}}})],1)],2)],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(n){return e.RemoveItem(t.$index)}}})]}}])})],1)],1)],1)],1)],1)},o=[],i=(n("a481"),n("03ca")),a=n("f815"),s=n("ef0a"),c=n("aca4"),l={name:"NewOrderInventories",components:{ItemsSearch:s["a"],EditItem:c["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{ValidateNote:"",tempForm:{ID:void 0,FakeDate:new Date,OrderType:"ادخال: بضاعة اول المدة / بونص",Description:"",InventoryMovements:[]},rules:{InventoryMovements:[{type:"array",required:!0,message:"لا يمكن إستكمال عملية مخزن من غير إضافة أصناف",trigger:"change"}]},InventoryItems:[],Items:[]}},created:function(){var e=this;this.isEdit&&this.getdata(this.$route.params&&this.$route.params.id),this.tempRoute=Object.assign({},this.$route),Object(a["c"])().then((function(t){console.log(t),e.InventoryItems=t}))},methods:{AddItem:function(e){this.tempForm.InventoryMovements.unshift({ID:void 0,TypeMove:"In",ItemsID:void 0!=e?e.Id:void 0,Status:0,Qty:1,SellingPrice:0,Tax:0,Description:"",InventoryItemID:1,Itemx:e,OrderInventoryID:void 0})},Copy:function(e){this.Text=e},Paste:function(e){this.tempForm.InventoryMovements[e].Description=this.Text},getdata:function(e){var t=this;Object(i["d"])({ID:e}).then((function(e){console.log(e),t.tempForm=e,t.setTagsViewTitle(),t.setPageTitle()})).catch((function(e){console.log(e)}))},RemoveItem:function(e){this.tempForm.InventoryMovements.splice(e,1)},createData:function(){var e=this;this.$refs["tempForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(i["a"])(e.tempForm).then((function(t){e.$notify({title:"تم الإضافة بنجاح",message:"تم الإضافة بنجاح",type:"success",position:"top-left",duration:1e3,showClose:!1,onClose:function(){t&&e.$nextTick((function(){e.$router.replace({path:"/redirect/OrderInventories/List"})}))}})})).catch((function(e){console.log(e)}))}))},updateData:function(){var e=this;this.$refs["tempForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(i["b"])(e.tempForm).then((function(t){e.$notify({title:"تم تعديل  بنجاح",message:"تم تعديل بنجاح",type:"success",position:"top-left",duration:1e3,showClose:!1,onClose:function(){t&&e.$nextTick((function(){e.$router.replace({path:"/redirect/OrderInventories/List"})}))}})})).catch((function(e){console.log(e)}))}))},setTagsViewTitle:function(){var e="Edit Order Inventory",t=Object.assign({},this.tempRoute,{title:"".concat(e,"-").concat(this.tempForm.Id)});this.$store.dispatch("tagsView/updateVisitedView",t)},setPageTitle:function(){var e="Edit Order Inventory";document.title="".concat(e," - ").concat(this.tempForm.Id)}}},u=l,m=n("2877"),d=Object(m["a"])(u,r,o,!1,null,null,null);t["a"]=d.exports},5087:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("detail",{attrs:{"is-edit":!1}})},o=[],i=n("3ef2"),a={name:"CreateOrder",components:{Detail:i["a"]}},s=a,c=n("2877"),l=Object(c["a"])(s,r,o,!1,null,null,null);t["default"]=l.exports},f815:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n("b7e2"),o=n("4328"),i=n.n(o);function a(e){return Object(r["a"])({url:"/InventoryItem/GetInventoryItem",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/InventoryItem/GetActiveInventory",method:"get",params:e})}function c(e){return Object(r["a"])({url:"/InventoryItem/Create",method:"post",data:i.a.stringify(e)})}function l(e){return Object(r["a"])({url:"/InventoryItem/Edit",method:"post",data:i.a.stringify(e)})}}}]);