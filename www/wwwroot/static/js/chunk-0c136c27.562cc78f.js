(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c136c27"],{"03ca":function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));var o=n("b7e2"),r=n("4328"),a=n.n(r);function i(t){return Object(o["a"])({url:"/OrderInventory/GetByListQ",method:"post",data:a.a.stringify(t)})}function s(t){return Object(o["a"])({url:"/OrderInventory/GetOrderInventoryById",method:"get",params:t})}function c(t){return Object(o["a"])({url:"/OrderInventory/GetByItem",method:"get",params:t})}function l(t){return Object(o["a"])({url:"/OrderInventory/Create",method:"post",data:a.a.stringify(t)})}function p(t){return Object(o["a"])({url:"/OrderInventory/Edit",method:"post",data:a.a.stringify(t)})}},3920:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("Search-By-Date",{attrs:{Value:[]},on:{Set:function(e){t.date=e}}}),n("router-link",{staticClass:"pan-btn tiffany-btn",staticStyle:{float:"left"},attrs:{icon:"el-icon-plus",to:"/NewStock"}},[t._v(t._s(t.$t("route.NewStock")))])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.FakeDate.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"Id",width:"120",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.getdata}})]}}])}),n("el-table-column",{attrs:{prop:"FakeDate",label:t.$t("Stocks.Date"),width:"120",align:"center"}}),n("el-table-column",{attrs:{prop:"Description",label:t.$t("Stocks.BondType"),align:"center"}}),n("el-table-column",{attrs:{label:t.$t("Stocks.Status"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("Status-Tag",{attrs:{Status:t.row.Status,TableName:"StockItem"}})]}}])}),n("el-table-column",{attrs:{width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1!=e.row.Opration.Status?n("el-button",{attrs:{type:"success"},on:{click:function(n){return t.ConvertToOrderInventory(e.row)}}},[t._v("ترصيد")]):t._e(),t._l(e.row.NextOprations,(function(o,r){return n("el-button",{key:r,attrs:{type:o.ClassName},on:{click:function(n){return t.handleOprationsys(e.row.Id,o)}}},[t._v(t._s(o.OprationDescription))])})),n("el-button",{attrs:{icon:"el-icon-printer",type:"primary"},on:{click:function(n){return t.print(e.row.StockMovements)}}})]}}])}),n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{attrs:{data:e.row.StockMovements}},[n("el-table-column",{attrs:{prop:"Barcode",label:t.$t("Stocks.Barcode"),width:"130"}}),n("el-table-column",{attrs:{prop:"Name",label:t.$t("Stocks.Items"),width:"130"}}),n("el-table-column",{attrs:{prop:"Qty",label:t.$t("Stocks.Quantity")}}),n("el-table-column",{attrs:{prop:"InventoryName",label:t.$t("Stocks.Store")}}),n("el-table-column",{attrs:{prop:"Description",label:t.$t("Stocks.Description")}})],1)]}}])})],1)],1),n("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textOpration.OprationDescription,visible:t.dialogOprationVisible},on:{"update:visible":function(e){t.dialogOprationVisible=e}}},[n("el-form",{ref:"dataOpration",staticStyle:{width:"400px margin-left:50px"},attrs:{rules:t.rulesOpration,model:t.tempOpration,"label-position":"top","label-width":"70px"}},[n("el-form-item",{attrs:{label:"ملاحظات للعملية ",prop:"Description"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.tempOpration.Description,callback:function(e){t.$set(t.tempOpration,"Description",e)},expression:"tempOpration.Description"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:t.textOpration.ClassName},on:{click:function(e){return t.createOprationData()}}},[t._v(t._s(t.textOpration.OprationDescription))])],1)],1)],1)},r=[],a=(n("d81d"),n("e9c4"),n("d3b7"),n("159b"),n("14d9"),n("5296")),i=n("03ca"),s=n("587e"),c=n("add5"),l=n.n(c),p=n("00f2"),u=n("64af"),d={name:"StockItem",components:{StatusTag:p["a"],SearchByDate:u["a"]},data:function(){return{tableData:[],Movements:[],loading:!0,search:"",dialogOprationVisible:!1,date:[],textOpration:{OprationDescription:"",ArabicOprationDescription:"",IconClass:"",ClassName:""},tempOpration:{ObjId:void 0,OprationId:void 0,Description:""},rulesOpration:{Description:[{required:!0,message:"يجب إدخال ملاحظة للعملية",trigger:"blur"},{min:5,max:150,message:"الرجاء إدخال اسم لا يقل عن 5 حروف و لا يزيد عن 150 حرف",trigger:"blur"}]}}},created:function(){var t=new Date,e=new Date;e.setTime(e.getTime()-31536e6),this.date=[e,t],this.getdata(e,t)},methods:{print:function(t){console.log(t),l()({printable:t,properties:["Barcode","Name","Qty"],type:"json"})},printAll:function(t){console.log(t),t=t.map((function(t){return{Name:t.Name,Qty:t.Qty,Barcode:t.Barcode}})),l()({printable:t,properties:["Barcode","Name","Qty"],type:"json"})},ConvertToOrderInventory:function(t){var e=this;console.log(t);var n={Id:void 0,FakeDate:JSON.parse(JSON.stringify(new Date)),OrderType:"إدخال ناتج عن جرد رقم "+t.Id,Description:""+t.Description,InventoryMovements:[]};t.StockMovements.forEach((function(t){n.InventoryMovements.push({Id:void 0,ItemsId:t.ItemsId,TypeMove:"In",Status:0,Qty:t.Qty,SellingPrice:0,Tax:0,Description:t.Description,InventoryItemId:t.InventoryItemId,OrderInventoryId:void 0})})),console.log(n),Object(i["a"])(n).then((function(n){Object(s["c"])({ObjId:t.Id,TableName:"StocktakingInventory",Status:-1,Description:"ترصيد جرد"}).then((function(t){console.log(t)})),e.$notify({title:"تم الإضافة بنجاح",message:"تم الإضافة بنجاح",type:"success",position:"top-left",duration:1e3,onClose:function(){Object.assign(e.$data,e.$options.data())}})})).catch((function(t){console.log(t)}))},getdata:function(){var t=this;this.loading=!0,Object(a["b"])({DateFrom:this.date[0],DateTo:this.date[1]}).then((function(e){console.log(e),t.tableData=e,t.Movements=e.StockMovements,t.loading=!1}))},handleOprationsys:function(t,e){this.dialogOprationVisible=!0,this.textOpration.OprationDescription=e.OprationDescription,this.textOpration.ArabicOprationDescription=e.ArabicOprationDescription,this.textOpration.IconClass=e.IconClass,this.textOpration.ClassName=e.ClassName,this.tempOpration.ObjId=t,this.tempOpration.OprationId=e.Id,this.tempOpration.Description=""},createOprationData:function(){var t=this;this.$refs["dataOpration"].validate((function(e){e?Object(s["b"])({ObjId:t.tempOpration.ObjId,OprationId:t.tempOpration.OprationId,Description:t.tempOpration.Description}).then((function(e){t.getdata(),t.dialogOprationVisible=!1,t.$notify({title:"تم  ",message:"تمت العملية بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)})):console.log("error submit!!")}))}}},f=d,m=n("2877"),b=Object(m["a"])(f,o,r,!1,null,null,null);e["default"]=b.exports},5296:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var o=n("b7e2"),r=n("4328"),a=n.n(r);function i(t){return Object(o["a"])({url:"/StockInventory/GetStockInventory",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/StockInventory/Create",method:"post",data:a.a.stringify(t)})}},"7db0":function(t,e,n){"use strict";var o=n("23e7"),r=n("b727").find,a=n("44d2"),i="find",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),o({target:"Array",proto:!0,forced:s},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(i)}}]);