(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd90b"],{"2d14":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("p",[e._v(e._s(e.response))]),e._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{staticStyle:{float:"left"},attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(t){return e.handleCreate()}}},[e._v(e._s(e.$t("Classification.Add")))]),e._v(" "),n("span",[e._v("جميع الاجهزة")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData.filter((function(t){return!e.search||t.Name.toLowerCase().includes(e.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"Id",width:"80",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:function(t){return e.getdata()}}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"Name",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[n("el-input",{attrs:{placeholder:e.$t("Classification.Name")},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"Ip",label:"IP",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"Port",label:"Port",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("Classification.Notes"),prop:"Description",width:"220",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"Name",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.ClearAdministrators(t.row.Id)}}},[e._v("Clear Administrators")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(n){return e.GetAllFaceMember(t.row.Id)}}},[e._v("سحب جميع بصمات الوجه المشتركين")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.GetAllLogMember(t.row.Id)}}},[e._v("\n            سحب جميع سجلات المشتركين")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(n){return e.SetAllMember(t.row.Id)}}},[e._v("\n            ارسال جميع معلومات المشتركين")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.ClearUserLog(t.row.Id)}}},[e._v("مسح سجلات المشتركين")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.RestartDevice(t.row.Id)}}},[e._v("اعادة تشغيل الجهاز")])]}}])})],1)],1)],1)},c=[],r=n("4869"),s={name:"Device",data:function(){return{tableData:[],loading:!0,search:"",response:""}},created:function(){this.getdata()},methods:{getdata:function(){var e=this;this.loading=!0,Object(r["f"])().then((function(t){console.log(t),e.tableData=t,e.loading=!1})).catch((function(t){e.response=t,console.log(t)}))},SetAllMember:function(e){var t=this;Object(r["j"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},ClearAdministrators:function(e){var t=this;Object(r["b"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},GetAllFaceMember:function(e){var t=this;Object(r["d"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},GetAllLogMember:function(e){var t=this;Object(r["e"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},ClearUserLog:function(e){var t=this;Object(r["c"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},RestartDevice:function(e){var t=this;Object(r["i"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))}}},i=s,a=n("2877"),l=Object(a["a"])(i,o,c,!1,null,null,null);t["default"]=l.exports}}]);