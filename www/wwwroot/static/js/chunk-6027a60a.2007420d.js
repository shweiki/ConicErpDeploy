(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6027a60a"],{7514:function(t,e,r){"use strict";var o=r("5ca1"),n=r("0a49")(5),a="find",s=!0;a in[]&&Array(1)[a]((function(){s=!1})),o(o.P+o.F*s,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(a)},"95a8e":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:20}},[r("Add-Adjustment")],1),t._v(" "),r("el-col",{attrs:{span:4}},[r("Add-Static-Adjustment")],1)],1),t._v(" "),r("el-divider"),t._v(" "),r("el-card",{staticClass:"box-card"},[r("el-tabs",{attrs:{"tab-position":"top"},on:{"tab-click":t.tabClick},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[r("el-tab-pane",{attrs:{label:"التسويات العادية",name:"RegularAdjustment"}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("i",{staticClass:"el-icon-refresh"}),t._v(" التسويات العادية")]),t._v(" "),r("Regular-Adjustment",{attrs:{RAdjustments:t.RAdjustments}})],1),t._v(" "),r("el-tab-pane",{attrs:{label:"التسويات الدورية",name:"PeriodicAdjustment"}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("i",{staticClass:"el-icon-refresh"}),t._v(" التسويات الدورية")]),t._v(" "),r("Periodic-Adjustment",{attrs:{PAdjustments:t.PAdjustments}})],1)],1)],1)],1)],1)},n=[],a=r("b4ef"),s=(r("587e"),r("00f2")),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-button",{attrs:{type:"success",icon:"el-icon-circle-plus",round:""},on:{click:function(e){t.dialogFormVisible=!0}}},[r("span",{staticStyle:{"font-size":"14px"}},[t._v("\n    اضافة تسوية\n    ")])]),t._v(" "),r("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("div",{staticClass:"dialog-footer",attrs:{slot:"title"},slot:"title"},[r("el-col",{attrs:{span:4}},[r("el-button",{staticStyle:{float:"left"},attrs:{icon:"fa fa-save",type:"primary"},on:{click:function(e){return t.createData()}}})],1),t._v(" "),r("el-col",{attrs:{span:20}},[r("el-divider",[t._v(" إضافة تسوية ")])],1)],1),t._v(" "),r("el-form",{ref:"dataForm",attrs:{rules:t.rulesForm,model:t.tempForm,"label-position":"top","label-width":"70px"}},[r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"ChequeNumber"}},[r("el-row",{attrs:{gutter:20,type:"flex"}},[r("el-col",{attrs:{span:12}},[r("el-divider",{attrs:{"content-position":"right"}},[t._v(" إسم التسوية ")])],1)],1),t._v(" "),r("el-input",{attrs:{type:"text"},model:{value:t.tempForm.Name,callback:function(e){t.$set(t.tempForm,"Name",e)},expression:"tempForm.Name"}})],1)],1)],1),t._v(" "),r("el-row",{attrs:{gutter:20,type:"flex"}},[r("el-col",{attrs:{span:12}},[r("el-divider",{attrs:{"content-position":"right"}},[t._v(" نوع التسوية ")])],1)],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-radio-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[r("el-radio-button",{attrs:{label:"1"}},[t._v(" زيادة")]),t._v(" "),r("el-radio-button",{attrs:{label:"2"}},[t._v(" خصم")])],1)],1),t._v(" "),r("br"),r("br")],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("بالقيمة النقدية")]),t._v(" "),r("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("بالساعات")])],1),t._v(" "),r("br"),r("br")],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[1==t.radio?r("el-col",{attrs:{span:23}},[r("el-form-item",{attrs:{prop:"AdjustmentAmount"}},[r("el-input-number",{attrs:{precision:3,step:1,min:0,max:1500},on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.AdjustmentAmount,callback:function(e){t.$set(t.tempForm,"AdjustmentAmount",e)},expression:"tempForm.AdjustmentAmount"}})],1)],1):t._e(),t._v(" "),2==t.radio?r("el-col",{attrs:{span:23}},[r("el-form-item",{attrs:{prop:"AdjustmentAmount"}},[r("el-input-number",{attrs:{precision:3,step:1,min:.01,max:100},on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.AdjustmentAmount,callback:function(e){t.$set(t.tempForm,"AdjustmentAmount",e)},expression:"tempForm.AdjustmentAmount"}})],1)],1):t._e()],1)],1)],1)],1)},i=[],u={name:"Adjustment",data:function(){return{radio:"1",type:"1",dialogFormVisible:!1,tempForm:{Id:void 0,Name:"",AdjustmentAmount:1,Type:"",IsWorkingHourAdjustment:!0},rulesForm:{Name:[{required:!0,message:"يجب إدخال إسم ",trigger:"blur"},{min:3,max:50,message:"الرجاء إدخال إسم لا يقل عن 3 أحرف و لا يزيد عن 50 حرف",trigger:"blur"}]}}},created:function(){this.resetTempForm()},methods:{resetTempForm:function(){this.tempForm={Id:void 0,Name:"",AdjustmentAmount:0,Type:""}},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;2==t.type&&(1==t.radio&&(t.tempForm.Type="CashValue",t.tempForm.AdjustmentAmount=-t.tempForm.AdjustmentAmount),2==t.radio&&(t.tempForm.Type="Hours",t.tempForm.AdjustmentAmount=-t.tempForm.AdjustmentAmount)),1==t.type&&(1==t.radio&&(t.tempForm.Type="CashValue"),2==t.radio&&(t.tempForm.Type="Hours")),t.tempForm.IsWorkingHourAdjustment=!0,Object(a["a"])(t.tempForm).then((function(e){t.dialogFormVisible=!1,t.$notify({title:"تم ",message:"تم الإضافة بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))}}},m=u,c=r("2877"),d=Object(c["a"])(m,l,i,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-button",{attrs:{type:"success",icon:"el-icon-circle-plus",round:""},on:{click:function(e){t.dialogFormVisible=!0}}},[r("span",{staticStyle:{"font-size":"14px"}},[t._v("\n    اضافة تسوية دورية\n    ")])]),t._v(" "),r("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("div",{staticClass:"dialog-footer",attrs:{slot:"title"},slot:"title"},[r("el-col",{attrs:{span:4}},[r("el-button",{staticStyle:{float:"left"},attrs:{icon:"fa fa-save",type:"primary"},on:{click:function(e){return t.createData()}}})],1),t._v(" "),r("el-col",{attrs:{span:20}},[r("el-divider",[t._v(" إضافة تسوية دورية ")])],1)],1),t._v(" "),r("el-form",{ref:"dataForm",attrs:{rules:t.rulesForm,model:t.tempForm,"label-position":"top","label-width":"70px"}},[r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"ChequeNumber"}},[r("el-row",{attrs:{gutter:20,type:"flex"}},[r("el-col",{attrs:{span:12}},[r("el-divider",{attrs:{"content-position":"right"}},[t._v(" إسم التسوية الدورية ")])],1)],1),t._v(" "),r("el-input",{attrs:{type:"text"},model:{value:t.tempForm.Name,callback:function(e){t.$set(t.tempForm,"Name",e)},expression:"tempForm.Name"}})],1)],1)],1),t._v(" "),r("el-row",{attrs:{gutter:20,type:"flex"}},[r("el-col",{attrs:{span:12}},[r("el-divider",{attrs:{"content-position":"right"}},[t._v(" نوع التسوية الدورية ")])],1)],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-radio-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[r("el-radio-button",{attrs:{label:"1"}},[t._v(" زيادة")]),t._v(" "),r("el-radio-button",{attrs:{label:"2"}},[t._v(" خصم")])],1)],1),t._v(" "),r("br"),r("br")],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("بالقيمة النقدية")]),t._v(" "),r("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("بالقيمة المئوية")])],1),t._v(" "),r("br"),r("br")],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[1==t.radio?r("el-col",{attrs:{span:23}},[r("el-form-item",{attrs:{prop:"AdjustmentAmount"}},[r("el-input-number",{attrs:{precision:3,step:1,min:0,max:1500},on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.AdjustmentAmount,callback:function(e){t.$set(t.tempForm,"AdjustmentAmount",e)},expression:"tempForm.AdjustmentAmount"}})],1)],1):t._e(),t._v(" "),2==t.radio?r("el-col",{attrs:{span:23}},[r("el-form-item",{attrs:{prop:"AdjustmentAmount"}},[r("el-input-number",{attrs:{precision:3,step:1,min:.01,max:100},on:{focus:function(t){return t.target.select()}},model:{value:t.tempForm.AdjustmentAmount,callback:function(e){t.$set(t.tempForm,"AdjustmentAmount",e)},expression:"tempForm.AdjustmentAmount"}})],1)],1):t._e()],1)],1)],1)],1)},b=[],v={name:"StaticAdjustment",data:function(){return{radio:"1",type:"1",dialogFormVisible:!1,tempForm:{Id:void 0,Name:"",AdjustmentAmount:1,Type:"",IsStaticAdjustment:!0},rulesForm:{Name:[{required:!0,message:"يجب إدخال إسم ",trigger:"blur"},{min:3,max:50,message:"الرجاء إدخال إسم لا يقل عن 3 أحرف و لا يزيد عن 50 حرف",trigger:"blur"}]}}},created:function(){this.resetTempForm()},methods:{resetTempForm:function(){this.tempForm={Id:void 0,Name:"",AdjustmentAmount:0,Desription:""}},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return console.log("error submit!!"),!1;2==t.type&&(1==t.radio&&(t.tempForm.Type="CashValue",t.tempForm.AdjustmentAmount=-t.tempForm.AdjustmentAmount),2==t.radio&&(t.tempForm.Type="Percentage",t.tempForm.AdjustmentAmount=-t.tempForm.AdjustmentAmount/100)),1==t.type&&(1==t.radio&&(t.tempForm.Type="CashValue"),2==t.radio&&(t.tempForm.AdjustmentAmount=t.tempForm.AdjustmentAmount/100,t.tempForm.Type="Percentage")),t.tempForm.IsStaticAdjustment=!0,Object(a["a"])(t.tempForm).then((function(e){t.dialogFormVisible=!1,t.$notify({title:"تم ",message:"تم الإضافة بنجاح",type:"success",duration:2e3})})).catch((function(t){console.log(t)}))}))}}},A=v,g=Object(c["a"])(A,f,b,!1,null,null,null),_=g.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container",staticStyle:{direction:"rtl"}},[r("el-table",{attrs:{data:t.RAdjustments,fit:"",border:"","highlight-current-row":"",height:"500"}},[r("el-table-column",{attrs:{prop:"Id",label:"Id",width:"80",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:t.$t("Classification.Name"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Name))]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"القيمة النقدية",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["CashValue"==e.row.Type?r("div",[t._v("\n            "+t._s(e.row.AdjustmentAmount.toFixed(t.$store.getters.settings.ToFixed))+"\n            ")]):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"القيمة بالساعات",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return["Hours"==e.row.Type?r("div",[t._v(t._s(e.row.AdjustmentAmount))]):t._e()]}}])})],1)],1)},F=[],h={props:{RAdjustments:{type:Array,default:function(){return null}}}},y=h,x=Object(c["a"])(y,j,F,!1,null,null,null),w=x.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container",staticStyle:{direction:"rtl"}},[r("el-table",{attrs:{data:t.PAdjustments,fit:"",border:"","highlight-current-row":"",height:"500"}},[r("el-table-column",{attrs:{prop:"Id",label:"Id",width:"80",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:t.$t("Classification.Name"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Name))]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"القيمة النقدية",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["CashValue"==e.row.Type?r("div",[t._v(t._s(e.row.AdjustmentAmount.toFixed(t.$store.getters.settings.ToFixed))+" ")]):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"القيمة المؤوية",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return["Percentage"==e.row.Type?r("div",[t._v(t._s((100*e.row.AdjustmentAmount).toFixed(t.$store.getters.settings.ToFixed))+"% ")]):t._e()]}}])})],1)],1)},T=[],C={props:{PAdjustments:{type:Array,default:function(){return null}}}},S=C,$=Object(c["a"])(S,k,T,!1,null,null,null),N=$.exports,V={name:"Adjustment",components:{StatusTag:s["a"],AddAdjustment:p,AddStaticAdjustment:_,PeriodicAdjustment:N,RegularAdjustment:w},data:function(){return{loading:!0,dialogFormVisible:!1,dialogOprationVisible:!1,dialogFormStatus:"",RAdjustments:[],PAdjustments:[],activeTab:"RegularAdjustment",search:"",textMapForm:{update:"تعديل",create:"إضافة"}}},created:function(){this.getdata()},methods:{tabClick:function(t,e){var r=this;"التسويات العادية"==t.label&&Object(a["d"])({}).then((function(t){r.RAdjustments=t.reverse()})),"التسويات الدورية"==t.label&&Object(a["c"])({}).then((function(t){r.PAdjustments=t.reverse()}))},getdata:function(){var t=this;this.loading=!0,Object(a["d"])().then((function(e){console.log(e),t.RAdjustments=e,t.loading=!1})).catch((function(t){console.log(t)}))}}},O=V,P=Object(c["a"])(O,o,n,!1,null,null,null);e["default"]=P.exports},b4ef:function(t,e,r){"use strict";r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return l})),r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u}));var o=r("b7e2"),n=r("4328"),a=r.n(n);function s(t){return Object(o["a"])({url:"/Adjustment/GetPAdjustments",method:"get",params:t})}function l(t){return Object(o["a"])({url:"/Adjustment/GetRAdjustments",method:"get",params:t})}function i(t){return Object(o["a"])({url:"/Adjustment/Create",method:"post",data:a.a.stringify(t)})}function u(t){return Object(o["a"])({url:"/Adjustment/GetAdjustmentLabel",method:"get",params:t})}}}]);