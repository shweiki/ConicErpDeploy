(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-876f606e"],{"633a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:6}},[s("settings")],1),t._v(" "),s("el-col",{attrs:{span:18}},[s("el-card",{staticClass:"box-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("جميع اعدادات")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.CheckUpdate}},[t._v("Check UpDate")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.RestSetting}},[t._v("Rest Defualt Setting")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.getPrinterDevice}},[t._v("get Printer Device")])],1),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.DateTimeFormat")))]),t._v(" "),s("el-input",{model:{value:t.DateTimeFormat,callback:function(e){t.DateTimeFormat=e},expression:"DateTimeFormat"}})],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.title")))]),t._v(" "),s("el-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.PointOfSaleLayout")))]),t._v(" "),s("el-select",{attrs:{placeholder:"PointOfSaleLayout"},model:{value:t.PointOfSaleLayout,callback:function(e){t.PointOfSaleLayout=e},expression:"PointOfSaleLayout"}},[s("el-option",{attrs:{label:"SuperMarket",value:"SuperMarket"}}),t._v(" "),s("el-option",{attrs:{label:"CarsSpare",value:"CarsSpare"}}),t._v(" "),s("el-option",{attrs:{label:"Restaurant",value:"Restaurant"}}),t._v(" "),s("el-option",{attrs:{label:"Pharmacy",value:"Pharmacy"}}),t._v(" "),s("el-option",{attrs:{label:"Gym",value:"Gym"}}),t._v(" "),s("el-option",{attrs:{label:"Public",value:"Public"}}),t._v(" "),s("el-option",{attrs:{label:"KidsPlayArea",value:"KidsPlayArea"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.CashPoolLayout")))]),t._v(" "),s("el-select",{attrs:{placeholder:"CashPoolLayout"},model:{value:t.CashPoolLayout,callback:function(e){t.CashPoolLayout=e},expression:"CashPoolLayout"}},[s("el-option",{attrs:{label:"Restaurant",value:"Restaurant"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.CashDrawerCOM")))]),t._v(" "),s("el-input",{model:{value:t.CashDrawerCOM,callback:function(e){t.CashDrawerCOM=e},expression:"CashDrawerCOM"}})],1)],1),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.PurchaseLayout")))]),t._v(" "),s("el-select",{attrs:{placeholder:"PurchaseLayout"},model:{value:t.PurchaseLayout,callback:function(e){t.PurchaseLayout=e},expression:"PurchaseLayout"}},[s("el-option",{attrs:{label:"SuperMarket",value:"SuperMarket"}}),t._v(" "),s("el-option",{attrs:{label:"Pharmacy",value:"Pharmacy"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.WorkShopLayout")))]),t._v(" "),s("el-select",{attrs:{placeholder:"WorkShopLayout"},model:{value:t.WorkShopLayout,callback:function(e){t.WorkShopLayout=e},expression:"WorkShopLayout"}},[s("el-option",{attrs:{label:"Pubilc",value:"Pubilc"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.BusinessType")))]),t._v(" "),s("el-select",{attrs:{placeholder:"Select"},model:{value:t.BusinessType,callback:function(e){t.BusinessType=e},expression:"BusinessType"}},[s("el-option",{attrs:{label:"SuperMarkit",value:"SuperMarkit"}}),t._v(" "),s("el-option",{attrs:{label:"CarsSpare",value:"CarsSpare"}}),t._v(" "),s("el-option",{attrs:{label:"GymManagment",value:"GymManagment"}}),t._v(" "),s("el-option",{attrs:{label:"Restaurant",value:"Restaurant"}})],1)],1)],1),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.tagsView")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.tagsView,callback:function(e){t.tagsView=e},expression:"tagsView"}})],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.showSettings")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.showSettings,callback:function(e){t.showSettings=e},expression:"showSettings"}})],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.showRestOfBill")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.showRestOfBill,callback:function(e){t.showRestOfBill=e},expression:"showRestOfBill"}})],1)],1),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.fixedHeader")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.fixedHeader,callback:function(e){t.fixedHeader=e},expression:"fixedHeader"}})],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.WithOutCheckItemIsExist")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.WithOutCheckItemIsExist,callback:function(e){t.WithOutCheckItemIsExist=e},expression:"WithOutCheckItemIsExist"}})],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.sidebarLogo")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.sidebarLogo,callback:function(e){t.sidebarLogo=e},expression:"sidebarLogo"}})],1)],1),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.BarcodeIsId")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.BarcodeIsId,callback:function(e){t.BarcodeIsId=e},expression:"BarcodeIsId"}})],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("span",[t._v(t._s(t.$t("Settings.sidebarOpen")))]),t._v(" "),s("el-switch",{staticClass:"drawer-switch",model:{value:t.sidebarOpen,callback:function(e){t.sidebarOpen=e},expression:"sidebarOpen"}})],1)],1)],1)],1)],1)],1)},n=[],i=s("8d2c"),o=s("3160"),r=s("cfc2"),l=s.n(r),c=s("4360");function u(){return l.a.JSPrintManager.auto_reconnect||(l.a.JSPrintManager.auto_reconnect=!0,l.a.JSPrintManager.start(),l.a.JSPrintManager.WS.onStatusChanged=function(){c["a"].dispatch("app/setPrinters")}),!0}var h={components:{Settings:o["a"]},computed:{isShowJob:function(){return this.$store.getters.settings.language},title:{get:function(){return this.$store.state.settings.title},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"title",value:t})}},DateTimeFormat:{get:function(){return this.$store.state.settings.DateTimeFormat},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"DateTimeFormat",value:t})}},CashDrawerCOM:{get:function(){return JSON.stringify(this.$store.state.settings.CashDrawerCOM)},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"CashDrawerCOM",value:JSON.parse(t)})}},fixedHeader:{get:function(){return this.$store.state.settings.fixedHeader},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"fixedHeader",value:t})}},tagsView:{get:function(){return this.$store.state.settings.tagsView},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"tagsView",value:t})}},sidebarLogo:{get:function(){return this.$store.state.settings.sidebarLogo},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"sidebarLogo",value:t})}},BarcodeIsId:{get:function(){return this.$store.state.settings.BarcodeIsId},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"BarcodeIsId",value:t})}},WithOutCheckItemIsExist:{get:function(){return this.$store.state.settings.WithOutCheckItemIsExist},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"WithOutCheckItemIsExist",value:t})}},sidebarOpen:{get:function(){return this.$store.state.settings.sidebarOpen},set:function(t){this.$store.dispatch("app/toggleSideBar"),this.$store.dispatch("settings/changeSetting",{key:"sidebarOpen",value:t})}},showSettings:{get:function(){return this.$store.state.settings.showSettings},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"showSettings",value:t})}},showRestOfBill:{get:function(){return this.$store.state.settings.showRestOfBill},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"showRestOfBill",value:t})}},BusinessType:{get:function(){return this.$store.state.settings.BusinessType},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"BusinessType",value:t})}},PointOfSaleLayout:{get:function(){return this.$store.state.settings.PointOfSale.Layout},set:function(t){this.$store.state.settings.PointOfSale.Layout=t,this.$store.dispatch("settings/changeSetting",{key:"PointOfSale",value:this.$store.state.settings.PointOfSale})}},CashPoolLayout:{get:function(){return this.$store.state.settings.CashPoolLayout},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"CashPoolLayout",value:t})}},PurchaseLayout:{get:function(){return this.$store.state.settings.PurchaseLayout},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"PurchaseLayout",value:t})}},WorkShopLayout:{get:function(){return this.$store.state.settings.WorkShopLayout},set:function(t){this.$store.dispatch("settings/changeSetting",{key:"WorkShopLayout",value:t})}}},methods:{getPrinterDevice:u,RestSetting:function(){Object(i["c"])().then((function(t){t&&location.reload()}))},CheckUpdate:function(){this.loading=!0;var t=new ActiveXObject("WScript.Shell");t.Run("C:\\ConicErpDeploy-main\\Update.bat"),this.loading=!1}}},p=h,g=(s("c5d1"),s("2877")),v=Object(g["a"])(p,a,n,!1,null,"7a95408c",null);e["default"]=v.exports},"72a0":function(t,e,s){},c5d1:function(t,e,s){"use strict";s("72a0")}}]);