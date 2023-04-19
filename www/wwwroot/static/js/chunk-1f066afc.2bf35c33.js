(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f066afc"],{"2e36":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"box-card"},[i("div",{attrs:{slot:"header"},slot:"header"},[i("el-button",{staticStyle:{float:"left"},attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(e){return t.handleCreate()}}},[t._v(t._s(t.$t("Classification.Add")))]),i("el-button",{staticStyle:{float:"left"},attrs:{icon:"el-icon-printer",type:"primary"},on:{click:function(e){return t.print(t.tableData)}}}),i("span",[t._v(t._s(t.$t("Classification.Name")))])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.Name.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"Id",width:"80",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[i("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:function(e){return t.getdata()}}})]}}])}),i("el-table-column",{attrs:{align:"center",label:t.$t("Classification.Name"),prop:"Name"},scopedSlots:t._u([{key:"header",fn:function(e){return[i("el-input",{attrs:{placeholder:t.$t("Classification.SearchBy")},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}}])}),i("el-table-column",{attrs:{label:t.$t("Classification.Date"),prop:"ActionLogs[0].PostingDateTime",width:"200",align:"center"}}),i("el-table-column",{attrs:{label:t.$t("Classification.Notes"),prop:"Description",width:"220",align:"center"}}),i("el-table-column",{attrs:{label:t.$t("Classification.Status"),width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("Status-Tag",{attrs:{Status:t.row.Status,TableName:"UnitItem"}})]}}])}),i("el-table-column",{attrs:{width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1!=e.row.Opration.Status?i("el-button",{attrs:{icon:"el-icon-edit"},on:{click:function(i){return t.handleUpdate(e.row)}}}):t._e(),t._l(e.row.NextOprations,(function(a,o){return i("el-button",{key:o,attrs:{type:a.ClassName},on:{click:function(i){return t.handleOprationsys(e.row.Id,a)}}},[t._v(t._s(a.OprationDescription))])}))]}}])})],1)],1),i("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textMapForm[t.dialogFormStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataForm",attrs:{rules:t.rulesForm,model:t.tempForm,"label-position":"top","label-width":"70px"}},[i("el-form-item",{attrs:{label:t.$t("Classification.Name"),prop:"Name"}},[i("el-input",{attrs:{type:"text"},model:{value:t.tempForm.Name,callback:function(e){t.$set(t.tempForm,"Name",e)},expression:"tempForm.Name"}})],1),i("el-form-item",{attrs:{label:t.$t("Classification.Notes"),prop:"Description"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.tempForm.Description,callback:function(e){t.$set(t.tempForm,"Description",e)},expression:"tempForm.Description"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("Classification.cancel")))]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogFormStatus?t.createData():t.updateData()}}},[t._v("حفظ")])],1)],1),i("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textOpration.OprationDescription,visible:t.dialogOprationVisible},on:{"update:visible":function(e){t.dialogOprationVisible=e}}},[i("el-form",{ref:"dataOpration",staticStyle:{width:"400px margin-left:50px"},attrs:{rules:t.rulesOpration,model:t.tempOpration,"label-position":"top","label-width":"70px"}},[i("el-form-item",{attrs:{label:t.$t("Classification.OperationNote"),prop:"Description"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.tempOpration.Description,callback:function(e){t.$set(t.tempOpration,"Description",e)},expression:"tempOpration.Description"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:t.textOpration.ClassName},on:{click:function(e){return t.createOprationData()}}},[t._v(t._s(t.textOpration.OprationDescription))])],1)],1)],1)},o=[],n=i("c62d"),r=i("587e"),s=i("add5"),l=i.n(s),c=i("00f2"),p={name:"UnitItem",components:{StatusTag:c["a"]},data:function(){return{tableData:[],loading:!0,dialogFormVisible:!1,dialogOprationVisible:!1,dialogFormStatus:"",search:"",textMapForm:{update:"تعديل",create:"إضافة"},textOpration:{OprationDescription:"",ArabicOprationDescription:"",IconClass:"",ClassName:""},tempForm:{Id:void 0,Name:"",Description:""},rulesForm:{Name:[{required:!0,message:"يجب إدخال إسم ",trigger:"blur"},{min:3,max:50,message:"الرجاء إدخال إسم لا يقل عن 3 أحرف و لا يزيد عن 50 حرف",trigger:"blur"}]},tempOpration:{ObjId:void 0,OprationId:void 0,Description:""},rulesOpration:{Description:[{required:!0,message:"يجب إدخال ملاحظة للعملية",trigger:"blur"},{min:5,max:150,message:"الرجاء إدخال إسم لا يقل عن 5 أحرف و لا يزيد عن 150 حرف",trigger:"blur"}]}}},created:function(){this.getdata()},methods:{print:function(t){l()({printable:t,properties:["Name","Description"],type:"json"})},getdata:function(){var t=this;this.loading=!0,Object(n["d"])().then((function(e){console.log(e),t.tableData=e,t.loading=!1})).catch((function(t){console.log(t)}))},resetTempForm:function(){this.tempForm={Id:void 0,Name:"",Description:""}},handleCreate:function(){var t=this;this.resetTempForm(),this.dialogFormStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleUpdate:function(t){var e=this;console.log(t),this.tempForm.Id=t.Id,this.tempForm.Name=t.Name,this.tempForm.Description=t.Description,this.dialogFormStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleOprationsys:function(t,e){this.dialogOprationVisible=!0,this.textOpration.OprationDescription=e.OprationDescription,this.textOpration.ArabicOprationDescription=e.ArabicOprationDescription,this.textOpration.IconClass=e.IconClass,this.textOpration.ClassName=e.ClassName,this.tempOpration.ObjId=t,this.tempOpration.OprationId=e.Id,this.tempOpration.Description=""},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(n["a"])(t.tempForm).then((function(e){t.getdata(),t.dialogFormVisible=!1,t.$notify({title:"تم ",message:"تم الإضافة بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;Object(n["b"])(t.tempForm).then((function(e){t.getdata(),t.dialogFormVisible=!1,t.$notify({title:"تم",message:"تم التعديل بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))},createOprationData:function(){var t=this;this.$refs["dataOpration"].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.tempOpration),Object(r["b"])({ObjId:t.tempOpration.ObjId,OprationId:t.tempOpration.OprationId,Description:t.tempOpration.Description}).then((function(e){t.getdata(),t.dialogOprationVisible=!1,t.$notify({title:"تم  ",message:"تمت العملية بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))}}},u=p,d=i("2877"),m=Object(d["a"])(u,a,o,!1,null,null,null);e["default"]=m.exports},"7db0":function(t,e,i){"use strict";var a=i("23e7"),o=i("b727").find,n=i("44d2"),r="find",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(r)},c62d:function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return c}));var a=i("b7e2"),o=i("4328"),n=i.n(o);function r(t){return Object(a["a"])({url:"/UnitItem/GetUnitItem",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/UnitItem/GetActiveUnitItem",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/UnitItem/Create",method:"post",data:n.a.stringify(t)})}function c(t){return Object(a["a"])({url:"/UnitItem/Edit",method:"post",data:n.a.stringify(t)})}}}]);