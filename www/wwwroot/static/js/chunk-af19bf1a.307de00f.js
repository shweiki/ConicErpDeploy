(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af19bf1a"],{"03ca":function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));var o=n("b7e2"),a=n("4328"),r=n.n(a);function i(t){return Object(o["a"])({url:"/OrderInventory/GetByListQ",method:"post",data:r.a.stringify(t)})}function s(t){return Object(o["a"])({url:"/OrderInventory/GetOrderInventoryById",method:"get",params:t})}function c(t){return Object(o["a"])({url:"/OrderInventory/GetByItem",method:"get",params:t})}function l(t){return Object(o["a"])({url:"/OrderInventory/Create",method:"post",data:r.a.stringify(t)})}function p(t){return Object(o["a"])({url:"/OrderInventory/Edit",method:"post",data:r.a.stringify(t)})}},3920:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("Search-By-Date",{attrs:{Value:[]},on:{Set:function(e){t.date=e}}}),t._v(" "),n("router-link",{staticClass:"pan-btn tiffany-btn",staticStyle:{float:"left"},attrs:{icon:"el-icon-plus",to:"/NewStock"}},[t._v(t._s(t.$t("route.NewStock")))])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.FakeDate.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"Id",width:"120",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.getdata}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"FakeDate",label:t.$t("Stocks.Date"),width:"120",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Description",label:t.$t("Stocks.BondType"),align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Stocks.Status"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("Status-Tag",{attrs:{Status:t.row.Status,TableName:"StockItem"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1!=e.row.Opration.Status?n("el-button",{attrs:{type:"success",circle:""},on:{click:function(n){return t.ConvertToOrderInventory(e.row)}}},[t._v("ترصيد")]):t._e(),t._v(" "),t._l(e.row.NextOprations,(function(o,a){return n("el-button",{key:a,attrs:{type:o.ClassName,round:""},on:{click:function(n){return t.handleOprationsys(e.row.Id,o)}}},[t._v(t._s(o.OprationDescription))])})),t._v(" "),n("el-button",{attrs:{icon:"el-icon-printer",type:"primary"},on:{click:function(n){return t.print(e.row.StockMovements)}}})]}}])}),t._v(" "),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{attrs:{data:e.row.StockMovements}},[n("el-table-column",{attrs:{prop:"Barcode",label:t.$t("Stocks.Barcode"),width:"130"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Name",label:t.$t("Stocks.Items"),width:"130"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Qty",label:t.$t("Stocks.Quantity")}}),t._v(" "),n("el-table-column",{attrs:{prop:"InventoryName",label:t.$t("Stocks.Store")}}),t._v(" "),n("el-table-column",{attrs:{prop:"Description",label:t.$t("Stocks.Description")}})],1)]}}])})],1)],1),t._v(" "),n("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textOpration.OprationDescription,visible:t.dialogOprationVisible},on:{"update:visible":function(e){t.dialogOprationVisible=e}}},[n("el-form",{ref:"dataOpration",staticStyle:{width:"400px margin-left:50px"},attrs:{rules:t.rulesOpration,model:t.tempOpration,"label-position":"top","label-width":"70px"}},[n("el-form-item",{attrs:{label:"ملاحظات للعملية ",prop:"Description"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.tempOpration.Description,callback:function(e){t.$set(t.tempOpration,"Description",e)},expression:"tempOpration.Description"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:t.textOpration.ClassName},on:{click:function(e){return t.createOprationData()}}},[t._v(t._s(t.textOpration.OprationDescription))])],1)],1)],1)},a=[],r=(n("ac6a"),n("5296")),i=n("03ca"),s=n("587e"),c=n("add5"),l=n.n(c),p=n("00f2"),u=n("64af"),d={name:"StockItem",components:{StatusTag:p["a"],SearchByDate:u["a"]},data:function(){return{tableData:[],Movements:[],loading:!0,search:"",dialogOprationVisible:!1,date:[],textOpration:{OprationDescription:"",ArabicOprationDescription:"",IconClass:"",ClassName:""},tempOpration:{ObjId:void 0,OprationId:void 0,Description:""},rulesOpration:{Description:[{required:!0,message:"يجب إدخال ملاحظة للعملية",trigger:"blur"},{minlength:5,maxlength:150,message:"الرجاء إدخال اسم لا يقل عن 5 حروف و لا يزيد عن 150 حرف",trigger:"blur"}]}}},created:function(){var t=new Date,e=new Date;e.setTime(e.getTime()-31536e6),this.date=[e,t],this.getdata(e,t)},methods:{print:function(t){console.log(t),l()({printable:t,properties:["Barcode","Name","Qty"],type:"json"})},printAll:function(t){console.log(t),t=t.map((function(t){return{Name:t.Name,Qty:t.Qty,Barcode:t.Barcode}})),l()({printable:t,properties:["Barcode","Name","Qty"],type:"json"})},ConvertToOrderInventory:function(t){var e=this;console.log(t);var n={Id:void 0,FakeDate:JSON.parse(JSON.stringify(new Date)),OrderType:"إدخال ناتج عن جرد رقم "+t.Id,Description:""+t.Description,InventoryMovements:[]};t.StockMovements.forEach((function(t){n.InventoryMovements.push({Id:void 0,ItemsId:t.ItemsId,TypeMove:"In",Status:0,Qty:t.Qty,SellingPrice:0,Tax:0,Description:t.Description,InventoryItemId:t.InventoryItemId,OrderInventoryId:void 0})})),console.log(n),Object(i["a"])(n).then((function(n){Object(s["c"])({ObjId:t.Id,TableName:"StocktakingInventory",Status:-1,Description:"ترصيد جرد"}).then((function(t){console.log(t)})),e.$notify({title:"تم الإضافة بنجاح",message:"تم الإضافة بنجاح",type:"success",position:"top-left",duration:1e3,onClose:function(){Object.assign(e.$data,e.$options.data())}})})).catch((function(t){console.log(t)}))},getdata:function(){var t=this;this.loading=!0,Object(r["b"])({DateFrom:this.date[0],DateTo:this.date[1]}).then((function(e){console.log(e),t.tableData=e,t.Movements=e.StockMovements,t.loading=!1}))},handleOprationsys:function(t,e){this.dialogOprationVisible=!0,this.textOpration.OprationDescription=e.OprationDescription,this.textOpration.ArabicOprationDescription=e.ArabicOprationDescription,this.textOpration.IconClass=e.IconClass,this.textOpration.ClassName=e.ClassName,this.tempOpration.ObjId=t,this.tempOpration.OprationId=e.Id,this.tempOpration.Description=""},createOprationData:function(){var t=this;this.$refs["dataOpration"].validate((function(e){e?Object(s["b"])({ObjId:t.tempOpration.ObjId,OprationId:t.tempOpration.OprationId,Description:t.tempOpration.Description}).then((function(e){t.getdata(),t.dialogOprationVisible=!1,t.$notify({title:"تم  ",message:"تمت العملية بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)})):console.log("error submit!!")}))}}},m=d,f=n("2877"),b=Object(f["a"])(m,o,a,!1,null,null,null);e["default"]=b.exports},5296:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var o=n("b7e2"),a=n("4328"),r=n.n(a);function i(t){return Object(o["a"])({url:"/StockInventory/GetStockInventory",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/StockInventory/Create",method:"post",data:r.a.stringify(t)})}}}]);