(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216973"],{c2b0:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{staticStyle:{float:"left"},attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(e){return t.handleCreate()}}},[t._v(t._s(t.$t("Classification.Add")))]),t._v(" "),a("span",[t._v(t._s(t.$t("Bank.Banks")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.Name.toLowerCase().includes(t.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"Id",width:"80",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-button",{attrs:{circle:"",type:"success",icon:"el-icon-refresh",size:t.$store.getters.size},on:{click:function(e){return t.getdata()}}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Classification.Name"),prop:"Name",width:"200",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-input",{attrs:{placeholder:t.$t("Bank.BankName")},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Bank.BranchName"),prop:"BranchName",width:"200",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Bank.AccountNumber"),prop:"AccountNumber",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Bank.AccountType"),prop:"AccountType",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Bank.Currency"),prop:"Currency",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Bank.IBAN"),prop:"IBAN",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Stocks.Description"),prop:"Description",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Items.Status"),align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("Status-Tag",{attrs:{Status:t.row.Status,TableName:"Bank"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1!=e.row.Opration.Status?a("el-button",{attrs:{icon:"el-icon-edit",size:t.$store.getters.size,circle:""},on:{click:function(a){return t.handleUpdate(e.row)}}}):t._e(),t._v(" "),t._l(e.row.NextOprations,(function(l,o){return a("el-button",{key:o,attrs:{type:l.ClassName,size:t.$store.getters.size,round:""},on:{click:function(a){return t.handleOprationsys(e.row.Id,l)}}},[t._v(t._s(l.OprationDescription))])}))]}}])})],1)],1),t._v(" "),a("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textMapForm[t.dialogFormStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",attrs:{rules:t.rulesForm,model:t.tempForm,"label-position":"top","label-width":"70px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:t.$t("Bank.BankName"),prop:"Name"}},[a("el-select",{attrs:{filterable:"",placeholder:"Bank Name"},model:{value:t.tempForm.Name,callback:function(e){t.$set(t.tempForm,"Name",e)},expression:"tempForm.Name"}},t._l(t.BanksNames,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:t.$t("Bank.AccountType"),prop:"AccountType"}},[a("el-select",{attrs:{filterable:"",placeholder:"Account Type"},model:{value:t.tempForm.AccountType,callback:function(e){t.$set(t.tempForm,"AccountType",e)},expression:"tempForm.AccountType"}},t._l(t.AccountsTypes,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("Bank.BranchName"),prop:"BranchName"}},[a("el-input",{attrs:{type:"text"},model:{value:t.tempForm.BranchName,callback:function(e){t.$set(t.tempForm,"BranchName",e)},expression:"tempForm.BranchName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("Bank.AccountNumber"),prop:"AccountNumber"}},[a("el-input",{attrs:{type:"text"},model:{value:t.tempForm.AccountNumber,callback:function(e){t.$set(t.tempForm,"AccountNumber",e)},expression:"tempForm.AccountNumber"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("Bank.IBAN"),prop:"IBAN"}},[a("el-input",{attrs:{type:"text"},model:{value:t.tempForm.IBAN,callback:function(e){t.$set(t.tempForm,"IBAN",e)},expression:"tempForm.IBAN"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("Bank.Currency"),prop:"Currency"}},[a("el-input",{attrs:{type:"text"},model:{value:t.tempForm.Currency,callback:function(e){t.$set(t.tempForm,"Currency",e)},expression:"tempForm.Currency"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("Items.Notes"),prop:"Description"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.tempForm.Description,callback:function(e){t.$set(t.tempForm,"Description",e)},expression:"tempForm.Description"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("Classification.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogFormStatus?t.createData():t.updateData()}}},[t._v(t._s(t.$t("AddVendors.Save")))])],1)],1),t._v(" "),a("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,title:t.textOpration.OprationDescription,visible:t.dialogOprationVisible},on:{"update:visible":function(e){t.dialogOprationVisible=e}}},[a("el-form",{ref:"dataOpration",staticStyle:{width:"400px margin-left:50px"},attrs:{rules:t.rulesOpration,model:t.tempOpration,"label-position":"top","label-width":"70px"}},[a("el-form-item",{attrs:{label:t.$t("Classification.OperationNote"),prop:"Description"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.tempOpration.Description,callback:function(e){t.$set(t.tempOpration,"Description",e)},expression:"tempOpration.Description"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:t.textOpration.ClassName},on:{click:function(e){return t.createOprationData()}}},[t._v(t._s(t.textOpration.OprationDescription))])],1)],1)],1)},o=[],r=a("b7e2"),n=a("4328"),i=a.n(n);function s(t){return Object(r["a"])({url:"/Banks/GetBanks",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/Banks/Create",method:"post",data:i.a.stringify(t)})}function u(t){return Object(r["a"])({url:"/Banks/Edit",method:"post",data:i.a.stringify(t)})}var p=a("587e"),m=a("00f2"),d={components:{StatusTag:m["a"]},name:"Bank",data:function(){return{tableData:[],loading:!0,dialogFormVisible:!1,dialogOprationVisible:!1,dialogFormStatus:"",search:"",BanksNames:[{value:" العربي",label:" العربي"},{value:"المؤسسة العربية المصرفية",label:"المؤسسة العربية المصرفية "},{value:" الاردن",label:" الاردن"},{value:" القاهرة عمان",label:" القاهرة عمان"},{value:" المال الأردني",label:" المال الأردني"},{value:" التجاري الأردني",label:" التجاري الأردني"},{value:" الاردني الكويتي",label:" الاردني الكويتي"},{value:" الاهلي الاردني",label:" الاهلي الاردني"},{value:" الاسكان للتجارة والتمويل",label:" الاسكان للتجارة والتمويل"},{value:" الاستثمار العربي الاردني",label:" الاستثمار العربي الاردني"},{value:"الاستثماري",label:"الاستثماري"},{value:"سوسيته جنرال",label:"سوسيته جنرال"},{value:"الاتحاد",label:"الاتحاد"},{value:"ستاندرد تشارترد",label:"ستاندرد تشارترد"},{value:" العقاري المصري العربي",label:" العقاري المصري العربي"},{value:"سيتي بنك إن . إيه",label:"سيتي بنك إن . إيه"},{value:"الرافدين",label:"الرافدين"},{value:" الكويت الوطني",label:" الكويت الوطني"},{value:" لبنان والمهجر",label:" لبنان والمهجر"},{value:"عوده ش.م.ل",label:"عوده ش.م.ل"},{value:" العربي الاسلامي الدولي",label:" العربي الاسلامي الدولي"},{value:" الاسلامي الاردني",label:" الاسلامي الاردني"},{value:" صفوة الإسلامي",label:" صفوة الإسلامي"},{value:"مصرف الراجحي",label:"مصرف الراجحي"}],AccountsTypes:[{value:" حساب البنك الأساسي",label:" حساب البنك الأساسي"},{value:" حساب جاري",label:" حساب جاري"},{value:" حساب توفير",label:" حساب توفير"},{value:" حساب وديعة",label:" حساب وديعة"},{value:" حساب ودائع سوق المال",label:" حساب ودائع سوق المال"},{value:" حساب تحت الطلب",label:" حساب تحت الطلب"},{value:" حساب جاري رواتب",label:" حساب جاري رواتب "},{value:" حساب الاستثمار المخصص ",label:" حساب الاستثمار المخصص "},{value:" حساب استثمار ",label:" حساب استثمار "},{value:" حساب نوع اخر ",label:" حساب نوع اخر "}],textMapForm:{update:"تعديل",create:"إضافة"},textOpration:{OprationDescription:"",ArabicOprationDescription:"",IconClass:"",ClassName:""},tempForm:{Id:void 0,IBAN:"",AccountId:"",Name:"",Description:"",AccountNumber:"",AccountType:"",Currency:"",BranchName:"",IsPrime:!1},rulesForm:{Name:[{required:!0,message:"يجب إدخال إسم ",trigger:"blur"},{minlength:3,maxlength:50,message:"الرجاء إدخال إسم لا يقل عن 3 أحرف و لا يزيد عن 50 حرف",trigger:"blur"}]},tempOpration:{ObjId:void 0,OprationId:void 0,Description:""},rulesOpration:{Description:[{required:!0,message:"يجب إدخال ملاحظة للعملية",trigger:"blur"},{minlength:5,maxlength:150,message:"الرجاء إدخال إسم لا يقل عن 5 احرف و لا يزيد عن 150 حرف",trigger:"blur"}]}}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.loading=!0,s().then((function(e){console.log(e),t.tableData=e,t.loading=!1})).catch((function(t){console.log(t)}))},resetTempForm:function(){this.tempForm={Id:void 0,IBAN:"",AccountId:"",Name:"",Description:"",AccountNumber:"",AccountType:"",Currency:"",BranchName:"",IsPrime:!1}},handleCreate:function(){this.resetTempForm(),this.dialogFormStatus="create",this.dialogFormVisible=!0,this.$refs["dataForm"].clearValidate()},handleUpdate:function(t){console.log(t),this.tempForm.Id=t.Id,this.tempForm.Name=t.Name,this.tempForm.Description=t.Description,this.dialogFormStatus="update",this.dialogFormVisible=!0,this.$refs["dataForm"].clearValidate()},handleOprationsys:function(t,e){this.dialogOprationVisible=!0,this.textOpration.OprationDescription=e.OprationDescription,this.textOpration.ArabicOprationDescription=e.ArabicOprationDescription,this.textOpration.IconClass=e.IconClass,this.textOpration.ClassName=e.ClassName,this.tempOpration.ObjId=t,this.tempOpration.OprationID=e.Id,this.tempOpration.Description=""},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;c(t.tempForm).then((function(e){t.getdata(),t.dialogFormVisible=!1,t.$notify({title:"تم ",message:"تم الإضافة بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;u(t.tempForm).then((function(e){t.getdata(),t.dialogFormVisible=!1,t.$notify({title:"تم",message:"تم التعديل بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))},createOprationData:function(){var t=this;this.$refs["dataOpration"].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.tempOpration),Object(p["b"])({ObjId:t.tempOpration.ObjId,OprationId:t.tempOpration.OprationID,Description:t.tempOpration.Description}).then((function(e){t.getdata(),t.dialogOprationVisible=!1,t.$notify({title:"تم  ",message:"تمت العملية بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))}}},b=d,v=a("2877"),f=Object(v["a"])(b,l,o,!1,null,null,null);e["default"]=f.exports}}]);