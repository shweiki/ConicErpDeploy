(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2858db5b"],{"61eb":function(t,e,s){},"633a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-col",{attrs:{span:6}},[s("settings")],1),t._v(" "),s("el-col",{attrs:{span:18}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("جميع اعدادات")])]),t._v(" "),s("el-row",[s("el-col",{attrs:{span:3}},[s("el-button",{attrs:{type:"primary"},on:{click:t.CheckUpdate}},[t._v("Check UpDate")])],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.title")))]),t._v(" "),s("el-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.CashDrawerCOM")))]),t._v(" "),s("el-input",{model:{value:t.CashDrawerCOM,callback:function(e){t.CashDrawerCOM=e},expression:"CashDrawerCOM"}})],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.BusinessType")))]),t._v(" "),s("el-select",{attrs:{placeholder:"Select"},model:{value:t.BusinessType,callback:function(e){t.BusinessType=e},expression:"BusinessType"}},[s("el-option",{attrs:{label:"SuperMarkit",value:"SuperMarkit"}}),t._v(" "),s("el-option",{attrs:{label:"GymManagment",value:"GymManagment"}})],1)],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.tagsView")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.tagsView,callback:function(e){t.tagsView=e},expression:"tagsView"}})],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.showSettings")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.showSettings,callback:function(e){t.showSettings=e},expression:"showSettings"}})],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.showRestOfBill")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.showRestOfBill,callback:function(e){t.showRestOfBill=e},expression:"showRestOfBill"}})],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.sidebarOpen")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.sidebarOpen,callback:function(e){t.sidebarOpen=e},expression:"sidebarOpen"}})],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.fixedHeader")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.fixedHeader,callback:function(e){t.fixedHeader=e},expression:"fixedHeader"}})],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.sidebarLogo")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.sidebarLogo,callback:function(e){t.sidebarLogo=e},expression:"sidebarLogo"}})],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:6}},[s("span",[t._v(t._s(t.$t("Settings.BarcodeIsID")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.BarcodeIsID,callback:function(e){t.BarcodeIsID=e},expression:"BarcodeIsID"}})],1)],1)],1)],1)],1)},i=[],n=(s("8d2c"),s("3160")),r={components:{Settings:n["a"]},computed:{isShowJob:function(){return this.$store.getters.settings.language},title:{get:function(){return this.$store.state.settings.title},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"title",value:t})}},CashDrawerCOM:{get:function(){return JSON.stringify(this.$store.state.settings.CashDrawerCOM)},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"CashDrawerCOM",value:JSON.parse(t)})}},fixedHeader:{get:function(){return this.$store.state.settings.fixedHeader},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"fixedHeader",value:t})}},tagsView:{get:function(){return this.$store.state.settings.tagsView},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"tagsView",value:t})}},sidebarLogo:{get:function(){return this.$store.state.settings.sidebarLogo},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"sidebarLogo",value:t})}},BarcodeIsID:{get:function(){return this.$store.state.settings.BarcodeIsID},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"BarcodeIsID",value:t})}},sidebarOpen:{get:function(){return this.$store.state.settings.sidebarOpen},set:function(t){this.$store.dispatch("app/toggleSideBar"),this.$store.dispatch("settings/changeSetting",{key:"sidebarOpen",value:t})}},showSettings:{get:function(){return this.$store.state.settings.showSettings},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"showSettings",value:t})}},showRestOfBill:{get:function(){return this.$store.state.settings.showRestOfBill},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"showRestOfBill",value:t})}},BusinessType:{get:function(){return this.$store.state.settings.BusinessType},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"BusinessType",value:t})}}},methods:{CheckUpdate:function(){this.loading=!0;var t=new ActiveXObject("WScript.Shell");t.Run("C:\\ConicErpDeploy-main\\Update.bat"),this.loading=!1}}},o=r,l=(s("dafd"),s("2877")),c=Object(l["a"])(o,a,i,!1,null,"0255c031",null);e["default"]=c.exports},dafd:function(t,e,s){"use strict";var a=s("61eb"),i=s.n(a);i.a}}]);