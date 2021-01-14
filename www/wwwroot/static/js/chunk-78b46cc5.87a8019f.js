(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78b46cc5"],{"4f24":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(e){return t.handleCreate()}}},[t._v(t._s(t.$t("Vendors.Add")))]),t._v(" "),n("span",[t._v(t._s(t.$t("Inventory.Wharehouse")))])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.Name.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"Id",width:"80",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:function(e){return t.getdata()}}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Inventory.StoreName"),prop:"Name",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-input",{attrs:{placeholder:t.$t("Inventory.StoreName")},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Inventory.Date"),prop:"ActionLogs[0].PostingDateTime",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Items.Notes"),prop:"Description",width:"220",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Items.Status"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("status-tag",{attrs:{Status:t.row.Status,TableName:"InventoryItem"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{icon:"el-icon-edit",circle:""},on:{click:function(n){return t.handleUpdate(e.row)}}}),t._v(" "),t._l(e.row.NextOprations,(function(r,o){return n("el-button",{key:o,attrs:{type:r.ClassName,round:""},on:{click:function(n){return t.handleOprationsys(e.row.Id,r)}}},[t._v(t._s(r.OprationDescription))])})),t._v(" "),n("el-button",{attrs:{icon:"el-icon-printer",type:"primary"},on:{click:function(n){return t.print(e.row.InventoryQty,e.row.Name)}}})]}}])}),t._v(" "),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{attrs:{data:e.row.InventoryQty}},[n("el-table-column",{attrs:{prop:"Item.Barcode",label:t.$t("Stocks.Barcode"),width:"130",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Item.Name",label:t.$t("Stocks.Items"),width:"130",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Stocks.Quantity"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{staticStyle:{"font-size":"x-large"}},[t._v(t._s(e.row.QtyIn-e.row.QtyOut))])]}}],null,!0)})],1)]}}])})],1)],1),t._v(" "),n("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textMapForm[t.dialogFormStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",attrs:{rules:t.rulesForm,model:t.tempForm,"label-position":"top","label-width":"70px"}},[n("el-form-item",{attrs:{label:t.$t("Inventory.StoreName"),prop:"Name"}},[n("el-input",{attrs:{type:"text"},model:{value:t.tempForm.Name,callback:function(e){t.$set(t.tempForm,"Name",e)},expression:"tempForm.Name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:t.$t("OrderInventories.Notes"),prop:"Description"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.tempForm.Description,callback:function(e){t.$set(t.tempForm,"Description",e)},expression:"tempForm.Description"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("الغاء")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogFormStatus?t.createData():t.updateData()}}},[t._v("حفظ")])],1)],1),t._v(" "),n("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textOpration.OprationDescription,visible:t.dialogOprationVisible},on:{"update:visible":function(e){t.dialogOprationVisible=e}}},[n("el-form",{ref:"dataOpration",staticStyle:{width:"400px margin-left:50px"},attrs:{rules:t.rulesOpration,model:t.tempOpration,"label-position":"top","label-width":"70px"}},[n("el-form-item",{attrs:{label:t.$t("Inventory.OperationNote"),prop:"Description"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.tempOpration.Description,callback:function(e){t.$set(t.tempOpration,"Description",e)},expression:"tempOpration.Description"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:t.textOpration.ClassName},on:{click:function(e){return t.createOprationData()}}},[t._v(t._s(t.textOpration.OprationDescription))])],1)],1)],1)},o=[],a=(n("ac6a"),n("f815")),i=n("587e"),s=n("add5"),l=n.n(s),c=n("00f2"),u={name:"InventoryItem",components:{StatusTag:c["a"]},data:function(){return{tableData:[],loading:!0,dialogFormVisible:!1,dialogOprationVisible:!1,dialogFormStatus:"",search:"",textMapForm:{update:"تعديل",create:"إضافة"},textOpration:{OprationDescription:"",ArabicOprationDescription:"",IconClass:"",ClassName:""},tempForm:{ID:void 0,Name:"",Description:""},rulesForm:{Name:[{required:!0,message:"يجب إدخال إسم ",trigger:"blur"},{minlength:3,maxlength:50,message:"الرجاء إدخال إسم لا يقل عن 3 أحرف و لا يزيد عن 50 حرف",trigger:"blur"}]},tempOpration:{ObjID:void 0,OprationID:void 0,Description:""},rulesOpration:{Description:[{required:!0,message:"يجب إدخال ملاحظة للعملية",trigger:"blur"},{minlength:5,maxlength:150,message:"الرجاء إدخال إسم لا يقل عن 5 أحرف و لا يزيد عن 150 حرف",trigger:"blur"}]}}},created:function(){this.getdata()},methods:{print:function(t,e){var n=t.map((function(t){return{Name:t.Item.Name,Qty:t.QtyIn-t.QtyOut,CostPrice:t.Item.CostPrice,Total:(t.QtyIn-t.QtyOut)*t.Item.CostPrice}}));l()({printable:n,properties:["Total","CostPrice","Qty","Name"],type:"json",header:"<center> <h2> "+e+"</h2></center><h3 style='float:right'>  - الاجمالي لقيمة المخزون :  "+n.reduce((function(t,e){return t+e.Qty*e.CostPrice}),0).toFixed(3)+"</h3>",gridHeaderStyle:"color: red;  border: 2px solid #3971A5;",gridStyle:"border: 2px solid #3971A5; text-align: center;"})},getdata:function(){var t=this;this.loading=!0,Object(a["d"])().then((function(e){t.tableData=e,t.tableData.forEach((function(t){Object(a["e"])({ID:t.Id}).then((function(e){t.InventoryQty=e}))})),t.loading=!1})).catch((function(t){console.log(t)}))},resetTempForm:function(){this.tempForm={ID:void 0,Name:"",Description:""}},handleCreate:function(){var t=this;this.resetTempForm(),this.dialogFormStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleUpdate:function(t){var e=this;console.log(t),this.tempForm.Id=t.Id,this.tempForm.Name=t.Name,this.tempForm.Description=t.Description,this.dialogFormStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleOprationsys:function(t,e){this.dialogOprationVisible=!0,this.textOpration.OprationDescription=e.OprationDescription,this.textOpration.ArabicOprationDescription=e.ArabicOprationDescription,this.textOpration.IconClass=e.IconClass,this.textOpration.ClassName=e.ClassName,this.tempOpration.ObjID=t,this.tempOpration.OprationID=e.Id,this.tempOpration.Description=""},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.tempForm),Object(a["a"])(t.tempForm).then((function(e){t.getdata(),t.dialogFormVisible=!1,t.$notify({title:"تم ",message:"تم الإضافة بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(a["b"])(t.tempForm).then((function(e){t.getdata(),t.dialogFormVisible=!1,t.$notify({title:"تم",message:"تم التعديل بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))},createOprationData:function(){var t=this;this.$refs["dataOpration"].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.tempOpration),Object(i["a"])({ObjID:t.tempOpration.ObjID,OprationID:t.tempOpration.OprationID,Description:t.tempOpration.Description}).then((function(e){t.getdata(),t.dialogOprationVisible=!1,t.$notify({title:"تم  ",message:"تمت العملية بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))}}},p=u,m=n("2877"),d=Object(m["a"])(p,r,o,!1,null,null,null);e["default"]=d.exports},"587e":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return d}));var r=n("b7e2"),o=n("4328"),a=n.n(o);function i(t){return Object(r["a"])({url:"/Oprationsys/GetOpration",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/Oprationsys/GetOprationByTable",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/Oprationsys/GetOprationByStatusTable",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/Oprationsys/GetNextOprationByStatusTable",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/Oprationsys/ChangeObjStatusByTableName",method:"post",params:t})}function p(t){return Object(r["a"])({url:"/Oprationsys/ChangeObjStatus",method:"post",params:t})}function m(t){return Object(r["a"])({url:"/Oprationsys/Create",method:"post",data:a.a.stringify(t)})}function d(t){return Object(r["a"])({url:"/Oprationsys/Edit",method:"post",data:a.a.stringify(t)})}},f815:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return u}));var r=n("b7e2"),o=n("4328"),a=n.n(o);function i(t){return Object(r["a"])({url:"/InventoryItem/GetInventoryItem",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/InventoryItem/GetActiveInventory",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/InventoryItem/Create",method:"post",data:a.a.stringify(t)})}function c(t){return Object(r["a"])({url:"/InventoryItem/Edit",method:"post",data:a.a.stringify(t)})}function u(t){return Object(r["a"])({url:"/InventoryItem/InventoryQty",method:"post",data:a.a.stringify(t)})}}}]);