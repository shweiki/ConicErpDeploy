(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6883c91c"],{"03ca":function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return s})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c}));var n=r("b7e2"),a=r("4328"),i=r.n(a);function o(t){return Object(n["a"])({url:"/OrderInventory/GetOrderInventory",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/OrderInventory/GetOrderInventoryByID",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/OrderInventory/Create",method:"post",data:i.a.stringify(t)})}function c(t){return Object(n["a"])({url:"/OrderInventory/Edit",method:"post",data:i.a.stringify(t)})}},"587e":function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"i",(function(){return s})),r.d(e,"h",(function(){return l})),r.d(e,"f",(function(){return c})),r.d(e,"c",(function(){return u})),r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return O})),r.d(e,"e",(function(){return f}));var n=r("b7e2"),a=r("4328"),i=r.n(a);function o(t){return Object(n["a"])({url:"/Oprationsys/GetOpration",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/Oprationsys/GetOprationByTable",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/Oprationsys/GetOprationByStatusTable",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/Oprationsys/GetNextOprationByStatusTable",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/Oprationsys/ChangeObjStatusByTableName",method:"post",data:i.a.stringify(t)})}function p(t){return Object(n["a"])({url:"/Oprationsys/ChangeObjStatus",method:"post",data:i.a.stringify(t)})}function d(t){return Object(n["a"])({url:"/Oprationsys/ChangeArrObjStatus",method:"post",data:i.a.stringify(t)})}function O(t){return Object(n["a"])({url:"/Oprationsys/Create",method:"post",data:i.a.stringify(t)})}function f(t){return Object(n["a"])({url:"/Oprationsys/Edit",method:"post",data:i.a.stringify(t)})}},c791:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("search-by-date",{attrs:{Value:t.date},on:{Set:function(e){t.date=e},focus:function(e){return t.getdata()}}}),t._v(" "),r("router-link",{staticClass:"pan-btn tiffany-btn",staticStyle:{float:"left",padding:"10px 15px","border-radius":"6px"},attrs:{icon:"el-icon-plus",to:"/OrderInventories/Create"}},[t._v(t._s(t.$t("route.NewOrderInventory")))])],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.FakeDate.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""},on:{"row-dblclick":function(e){t.$router.replace({path:"/OrderInventories/Edit/"+e.Id})}}},[r("el-table-column",{attrs:{align:"center",prop:"Id",width:"120"},scopedSlots:t._u([{key:"header",fn:function(e){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.getdata}})]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"FakeDate",label:t.$t("Sales.Date"),width:"100",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"OrderType",label:t.$t("OrderInventories.OrderType"),align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Description",label:"ملاحظات",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:t.$t("OrderInventories.Status"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("status-tag",{attrs:{Status:t.row.Status,TableName:"OrderInventory"}})]}}])}),t._v(" "),r("el-table-column",{attrs:{width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.NextOprations,(function(n,a){return r("el-button",{key:a,attrs:{type:n.ClassName,round:""},on:{click:function(r){return t.handleOprationsys(e.row.Id,n)}}},[t._v(t._s(n.OprationDescription))])}))}}])}),t._v(" "),r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-table",{attrs:{data:e.row.InventoryMovements}},[r("el-table-column",{attrs:{prop:"Name",label:t.$t("OrderInventories.Items"),width:"130"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Qty",label:t.$t("OrderInventories.Quantity")}}),t._v(" "),r("el-table-column",{attrs:{prop:"InventoryName",label:t.$t("OrderInventories.Inventory")}}),t._v(" "),r("el-table-column",{attrs:{property:"Description",label:t.$t("OrderInventories.Notes")}})],1)]}}])})],1)],1),t._v(" "),r("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textOpration.OprationDescription,visible:t.dialogOprationVisible},on:{"update:visible":function(e){t.dialogOprationVisible=e}}},[r("el-form",{ref:"dataOpration",staticStyle:{width:"400px margin-left:50px"},attrs:{rules:t.rulesOpration,model:t.tempOpration,"label-position":"top","label-width":"70px"}},[r("el-form-item",{attrs:{label:"ملاحظات للعملية ",prop:"Description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tempOpration.Description,callback:function(e){t.$set(t.tempOpration,"Description",e)},expression:"tempOpration.Description"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:t.textOpration.ClassName},on:{click:function(e){return t.createOprationData()}}},[t._v(t._s(t.textOpration.OprationDescription))])],1)],1)],1)},a=[],i=r("03ca"),o=r("587e"),s=r("00f2"),l=r("64af"),c={name:"OrderInventory",components:{StatusTag:s["a"],SearchByDate:l["a"]},data:function(){return{tableData:[],loading:!0,search:"",dialogOprationVisible:!1,date:"",textOpration:{OprationDescription:"",ArabicOprationDescription:"",IconClass:"",ClassName:""},tempOpration:{ObjID:void 0,OprationID:void 0,Description:""},rulesOpration:{Description:[{required:!0,message:"يجب إدخال ملاحظة للعملية",trigger:"blur"},{minlength:5,maxlength:150,message:"الرجاء إدخال اسم لا يقل عن 5 حروف و لا يزيد عن 150 حرف",trigger:"blur"}]}}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.loading=!0,Object(i["c"])({DateFrom:this.date[0],DateTo:this.date[1]}).then((function(e){console.log(e),t.tableData=e,t.loading=!1}))},handleOprationsys:function(t,e){this.dialogOprationVisible=!0,this.textOpration.OprationDescription=e.OprationDescription,this.textOpration.ArabicOprationDescription=e.ArabicOprationDescription,this.textOpration.IconClass=e.IconClass,this.textOpration.ClassName=e.ClassName,this.tempOpration.ObjID=t,this.tempOpration.OprationID=e.Id,this.tempOpration.Description=""},createOprationData:function(){var t=this;this.$refs["dataOpration"].validate((function(e){e?Object(o["b"])({ObjID:t.tempOpration.ObjID,OprationID:t.tempOpration.OprationID,Description:t.tempOpration.Description}).then((function(e){t.getdata(),t.dialogOprationVisible=!1,t.$notify({title:"تم  ",message:"تمت العملية بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)})):console.log("error submit!!")}))}}},u=c,p=r("2877"),d=Object(p["a"])(u,n,a,!1,null,null,null);e["default"]=d.exports}}]);