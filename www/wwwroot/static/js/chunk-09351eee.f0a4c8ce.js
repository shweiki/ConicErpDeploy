(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09351eee"],{"0eb9":function(t,e,a){"use strict";a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return c}));var n=a("b7e2"),r=a("4328"),i=a.n(r);function o(t){return Object(n["a"])({url:"/Salary/Update",method:"post",data:i.a.stringify(t)})}function l(t){return Object(n["a"])({url:"/Salary/GetSalaryById",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/Salary/GetLastSalaryById",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/Salary/GetSalaryId",method:"get",params:t})}},1275:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return l}));var n=a("b7e2"),r=a("4328"),i=a.n(r);function o(t){return Object(n["a"])({url:"/WorkingAdjustment/Create",method:"post",data:i.a.stringify(t)})}function l(t){return Object(n["a"])({url:"/WorkingAdjustment/GetWorkingAdjustmentBySalaryId",method:"get",params:t})}},"536a":function(t,e,a){"use strict";a("79f9")},"70c8":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return u}));var n=a("b7e2"),r=a("4328"),i=a.n(r);function o(t){return Object(n["a"])({url:"/WorkingHourLog/GetEmployeeLogById",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/WorkingHourLog/GetWorkingHourId",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/WorkingHourLog/GetEmployeeMounthLog",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/WorkingHourLog/Create",method:"post",data:i.a.stringify(t)})}function u(t){return Object(n["a"])({url:"/WorkingHourLog/Logout",method:"post",data:i.a.stringify(t)})}},"79f9":function(t,e,a){},a0a9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t.tempForm?a("el-row",[a("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{span:24,xs:24}},[a("el-card",{staticClass:"box-card"},[a("el-descriptions",{staticClass:"margin-top",attrs:{title:"احتساب الراتب",column:2,border:""}},[a("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-user"}),t._v("\n          الراتب\n        ")]),t._v(" "),a("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.tempForm.GrossSalary))])],2),t._v(" "),a("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-user"}),t._v("\n          الاسم\n        ")]),t._v(" "),a("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.tempForm.Name))])],2),t._v(" "),a("el-descriptions-item",{attrs:{"label-style":{"text-align":"right"},"content-style":{"text-align":"right"}}},[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-user"}),t._v("\n          الرقم\n        ")]),t._v(" "),a("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.tempForm.EmpId))])],2)],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("el-col",{attrs:{span:15}},[a("el-table",{attrs:{height:"500",data:t.tableData,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"Id",label:"Id",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"StartDateTime",label:"StartDateTime",width:"200",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"EndDateTime",label:"EndDateTime",width:"200",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"WorkTime",label:"WorkTime",width:"140",align:"center"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-table",{attrs:{height:"500",data:t.WorkingAdjustment,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"Id",label:"Id",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"AdjustmentName",label:"AdjustmentName",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Description",label:"Description",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"AdjustmentAmmount",label:"AdjustmentAmmount",width:"80",align:"center"}})],1)],1)],1)],1)],1):t._e()],1)},r=[],i=a("0eb9"),o=a("70c8"),l=a("1275"),s={name:"Profile",components:{},data:function(){return{activeTab:"Details",loading:!0,tableData:[],WorkingAdjustment:[],tempForm:{Id:void 0,EmpId:void 0,GrossSalary:0,NetSalary:0,SalaryPeriod:"",status:0,Name:""},WorkingForm:{Id:void 0,StartDateTime:"",EndDateTime:"",DeviceName:"",Description:""}}},created:function(){this.getdata(this.$route.params&&this.$route.params.id)},methods:{getdata:function(t){var e=this;Object(i["a"])({Id:t}).then((function(t){e.tempForm=t,e.GetWork(t.Id)})),Object(o["c"])({EmpId:t}).then((function(t){e.tableData=t})).catch((function(t){console.log(t)})),this.loading=!1},GetWork:function(t){var e=this;Object(l["b"])({SalId:t}).then((function(t){e.WorkingAdjustment=t}))}}},c=s,u=(a("536a"),a("2877")),d=Object(u["a"])(c,n,r,!1,null,null,null);e["default"]=d.exports}}]);