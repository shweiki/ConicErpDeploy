(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59cd30ad"],{"392b":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}));var a=i("b7e2"),o=i("4328"),r=i.n(o);function n(e){return Object(a["a"])({url:"/Files/Create",method:"post",data:r.a.stringify(e)})}function s(e){return Object(a["a"])({url:"/Files/GetFileByObjID",method:"get",params:e})}},"44d6":function(e,t,i){},"532b":function(e,t,i){},"686c":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"box-card"},[i("el-form",{ref:"dataForm",attrs:{rules:e.rulesForm,model:e.tempForm,"label-position":"top","label-width":"70px"}},[i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:8}},[i("pan-thumb",{attrs:{image:e.tempForm.Logo,height:"75px",width:"75px"}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){e.imagecropperShow=!0}}},[e._v("Change")])],1),e._v(" "),i("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:150,height:150,"lang-type":"ar"},on:{close:e.close,"crop-upload-success":e.cropSuccess,SetImage:e.SetBaseImage}})],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:e.$t("Company.NickName"),prop:"nickName"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.nickName,callback:function(t){e.$set(e.tempForm,"nickName",t)},expression:"tempForm.nickName"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:e.$t("Company.Name"),prop:"Name"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Name,callback:function(t){e.$set(e.tempForm,"Name",t)},expression:"tempForm.Name"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:e.$t("Company.Fax"),prop:"Fax"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Fax,callback:function(t){e.$set(e.tempForm,"Fax",t)},expression:"tempForm.Fax"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:e.$t("Company.Address"),prop:"address"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Address,callback:function(t){e.$set(e.tempForm,"Address",t)},expression:"tempForm.Address"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:e.$t("Company.PhoneNumber2"),prop:"PhoneNumber2"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.PhoneNumber2,callback:function(t){e.$set(e.tempForm,"PhoneNumber2",t)},expression:"tempForm.PhoneNumber2"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:e.$t("Company.PhoneNumber1"),prop:"PhoneNumber1"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.PhoneNumber1,callback:function(t){e.$set(e.tempForm,"PhoneNumber1",t)},expression:"tempForm.PhoneNumber1"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:e.$t("Company.TaxNumber"),prop:"TaxNumber"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.TaxNumber,callback:function(t){e.$set(e.tempForm,"TaxNumber",t)},expression:"tempForm.TaxNumber"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:e.$t("Company.RateNumber"),prop:"RateNumber"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.RateNumber,callback:function(t){e.$set(e.tempForm,"RateNumber",t)},expression:"tempForm.RateNumber"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:e.$t("Company.Website"),prop:"website"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Website,callback:function(t){e.$set(e.tempForm,"Website",t)},expression:"tempForm.Website"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:e.$t("Company.Email"),prop:"Email"}},[i("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Email,callback:function(t){e.$set(e.tempForm,"Email",t)},expression:"tempForm.Email"}})],1)],1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("Company.FooterReport"),prop:"FooterReport"}},[i("el-input",{attrs:{type:"textarea"},model:{value:e.tempForm.FooterReport,callback:function(t){e.$set(e.tempForm,"FooterReport",t)},expression:"tempForm.FooterReport"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("Company.BusinessDescription"),prop:"BusinessDescription"}},[i("el-input",{attrs:{type:"textarea"},model:{value:e.tempForm.BusinessDescription,callback:function(t){e.$set(e.tempForm,"BusinessDescription",t)},expression:"tempForm.BusinessDescription"}})],1)],1),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData()}}},[e._v(e._s(e.$t("AddVendors.Save")))])],1),e._v(" "),i("tinymce",{attrs:{height:300},model:{value:e.tempForm.HeaderReport,callback:function(t){e.$set(e.tempForm,"HeaderReport",t)},expression:"tempForm.HeaderReport"}}),e._v(" "),i("div",{staticClass:"editor-content",domProps:{innerHTML:e._s(e.tempForm.HeaderReport)}})],1)},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tinymce-container",class:{fullscreen:e.fullscreen},style:{width:e.containerWidth}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:e.tinymceId}}),e._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:e.imageSuccessCBK}})],1)])},n=[],s=(i("ac6a"),i("c5f6"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:e.color,borderColor:e.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("\n    upload\n  ")]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":e.fileList,"show-file-list":!0,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("\n        Click upload\n      ")])],1),e._v(" "),i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n      Cancel\n    ")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("\n      Confirm\n    ")])],1)],1)}),l=[],c=(i("456d"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var e=this;return Object.keys(this.listObj).every((function(t){return e.listObj[t].hasSuccess}))},handleSubmit:function(){var e=this,t=Object.keys(this.listObj).map((function(t){return e.listObj[t]}));this.checkAllSuccess()?(this.$emit("successCBK",t),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(e,t){for(var i=t.uid,a=Object.keys(this.listObj),o=0,r=a.length;o<r;o++)if(this.listObj[a[o]].uid===i)return this.listObj[a[o]].url=e.files.file,void(this.listObj[a[o]].hasSuccess=!0)},handleRemove:function(e){for(var t=e.uid,i=Object.keys(this.listObj),a=0,o=i.length;a<o;a++)if(this.listObj[i[a]].uid===t)return void delete this.listObj[i[a]]},beforeUpload:function(e){var t=this,i=window.URL||window.webkitURL,a=e.uid;return this.listObj[a]={},new Promise((function(o,r){var n=new Image;n.src=i.createObjectURL(e),n.onload=function(){t.listObj[a]={hasSuccess:!1,uid:e.uid,width:this.width,height:this.height}},o(!0)}))}}}),u=c,m=(i("fd60"),i("2877")),p=Object(m["a"])(u,s,l,!1,null,"3fefeeec",null),d=p.exports,h=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],g=h,f=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],v=f;i("ac4d"),i("8a81"),i("5df3"),i("1c4c"),i("7f7f"),i("6b54");function b(e,t){var i;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=w(e))||t&&e&&"number"===typeof e.length){i&&(e=i);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return n=e.done,e},e:function(e){s=!0,r=e},f:function(){try{n||null==i.return||i.return()}finally{if(s)throw r}}}}function w(e,t){if(e){if("string"===typeof e)return y(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}var S=[];function x(){return window.tinymce}var k=function(e,t){var i=document.getElementById(e),a=t||function(){};if(!i){var o=document.createElement("script");o.src=e,o.id=e,document.body.appendChild(o),S.push(a);var r="onload"in o?n:s;r(o)}function n(t){t.onload=function(){this.onerror=this.onload=null;var e,i=b(S);try{for(i.s();!(e=i.n()).done;){var a=e.value;a(null,t)}}catch(o){i.e(o)}finally{i.f()}S=null},t.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+e),t)}}function s(e){e.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var t,i=b(S);try{for(i.s();!(t=i.n()).done;){var a=t.value;a(null,e)}}catch(o){i.e(o)}finally{i.f()}S=null}}}i&&a&&(x()?a(null,i):S.push(a))},C=k,_="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",I={name:"Tinymce",components:{editorImage:d},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var e=this.width;return/^[\d]+(\.[\d]+)?$/.test(e)?"".concat(e,"px"):e}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(t.tinymceId).setContent(e||"")}))}},created:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var e=this;C(_,(function(t){t?e.$message.error(t.message):e.initTinymce()}))},initTinymce:function(){var e=this,t=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["en"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:v,menubar:this.menubar,plugins:g,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){t.value&&i.setContent(t.value),t.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",(function(){e.hasChange=!0,e.$emit("input",i.getContent())}))},setup:function(e){e.on("FullscreenStateChanged",(function(e){t.fullscreen=e.state}))}})},destroyTinymce:function(){var e=window.tinymce.get(this.tinymceId);this.fullscreen&&e.execCommand("mceFullScreen"),e&&e.destroy()},setContent:function(e){window.tinymce.get(this.tinymceId).setContent(e)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(e){var t=this;e.forEach((function(e){window.tinymce.get(t.tinymceId).insertContent('<img class="wscnph" src="'.concat(e.url,'" >'))}))}}},F=I,O=(i("e459"),Object(m["a"])(F,r,n,!1,null,"0ed29dcb",null)),N=O.exports,z=i("68c7"),E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[i("div",{staticClass:"vicp-wrap"},[i("div",{staticClass:"vicp-close",on:{click:e.off}},[i("i",{staticClass:"vicp-icon4"})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[i("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[i("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[i("i",{staticClass:"vicp-icon1-arrow"}),e._v(" "),i("i",{staticClass:"vicp-icon1-body"}),e._v(" "),i("i",{staticClass:"vicp-icon1-bottom"})]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),e._v(" "),1==e.step?i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}}):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v("\n        "+e._s(e.errorMsg)+"\n      ")]),e._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),e._v(" "),2==e.step?i("div",{staticClass:"vicp-step2"},[i("div",{staticClass:"vicp-crop"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[i("div",{staticClass:"vicp-img-container"},[i("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),e._v(" "),i("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),e._v(" "),i("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),e._v(" "),i("div",{staticClass:"vicp-range"},[i("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{input:e.zoomChange}}),e._v(" "),i("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),e._v(" "),i("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})]),e._v(" "),e.noRotate?e._e():i("div",{staticClass:"vicp-rotate"},[i("i",{on:{mousedown:e.startRotateLeft,mouseout:e.endRotate,mouseup:e.endRotate}},[e._v("↺")]),e._v(" "),i("i",{on:{mousedown:e.startRotateRight,mouseout:e.endRotate,mouseup:e.endRotate}},[e._v("↻")])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[i("div",{staticClass:"vicp-preview"},[e.noSquare?e._e():i("div",{staticClass:"vicp-preview-item"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),i("span",[e._v(e._s(e.lang.preview))])]),e._v(" "),e.noCircle?e._e():i("div",{staticClass:"vicp-preview-item vicp-preview-item-circle"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),i("span",[e._v(e._s(e.lang.preview))])])])])]),e._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(t){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),i("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),e._v(" "),3==e.step?i("div",{staticClass:"vicp-step3"},[i("div",{staticClass:"vicp-upload"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),e._v(" "),i("div",{staticClass:"vicp-progress-wrap"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v("\n          "+e._s(e.errorMsg)+"\n        ")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[i("i",{staticClass:"vicp-icon3"}),e._v("\n          "+e._s(e.lang.success)+"\n        ")])]),e._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(t){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),e._v(" "),i("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},T=[],j=(i("a481"),i("53ca")),R={zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},"zh-tw":{hint:"點擊，或拖動圖片至此處",loading:"正在上傳……",noSupported:"瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",success:"上傳成功",fail:"圖片上傳失敗",preview:"頭像預覽",btn:{off:"取消",close:"關閉",back:"上一步",save:"保存"},error:{onlyImg:"僅限圖片格式",outOfSize:"單文件大小不能超過 ",lowestPx:"圖片最低像素為（寬*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}},ro:{hint:"Atinge sau trage fișierul aici",loading:"Se încarcă",noSupported:"Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",success:"S-a încărcat cu succes",fail:"A apărut o problemă la încărcare",preview:"Previzualizează",btn:{off:"Anulează",close:"Închide",back:"Înapoi",save:"Salvează"},error:{onlyImg:"Doar imagini",outOfSize:"Imaginea depășește limita de: ",loewstPx:"Imaginea este prea mică; Minim: "}},ru:{hint:"Нажмите, или перетащите файл в это окно",loading:"Загружаю……",noSupported:"Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",success:"Загрузка выполнена успешно",fail:"Ошибка загрузки",preview:"Предпросмотр",btn:{off:"Отменить",close:"Закрыть",back:"Назад",save:"Сохранить"},error:{onlyImg:"Только изображения",outOfSize:"Изображение превышает предельный размер: ",lowestPx:"Минимальный размер изображения: "}},"pt-br":{hint:"Clique ou arraste o arquivo aqui para carregar",loading:"Carregando…",noSupported:"Browser não suportado, use o IE10+ ou outro browser",success:"Sucesso ao carregar imagem",fail:"Falha ao carregar imagem",preview:"Pré-visualizar",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Salvar"},error:{onlyImg:"Apenas imagens",outOfSize:"A imagem excede o limite de tamanho: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},fr:{hint:"Cliquez ou glissez le fichier ici.",loading:"Téléchargement…",noSupported:"Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",success:"Téléchargement réussit",fail:"Téléchargement echoué",preview:"Aperçu",btn:{off:"Annuler",close:"Fermer",back:"Retour",save:"Enregistrer"},error:{onlyImg:"Image uniquement",outOfSize:"L'image sélectionnée dépasse la taille maximum: ",lowestPx:"L'image sélectionnée est trop petite. Dimensions attendues: "}},nl:{hint:"Klik hier of sleep een afbeelding in dit vlak",loading:"Uploaden…",noSupported:"Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",success:"Upload succesvol",fail:"Upload mislukt",preview:"Voorbeeld",btn:{off:"Annuleren",close:"Sluiten",back:"Terug",save:"Opslaan"},error:{onlyImg:"Alleen afbeeldingen",outOfSize:"De afbeelding is groter dan: ",lowestPx:"De afbeelding is te klein! Minimale afmetingen: "}},tr:{hint:"Tıkla veya yüklemek istediğini buraya sürükle",loading:"Yükleniyor…",noSupported:"Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",success:"Yükleme başarılı",fail:"Yüklemede hata oluştu",preview:"Önizle",btn:{off:"İptal",close:"Kapat",back:"Geri",save:"Kaydet"},error:{onlyImg:"Sadece resim",outOfSize:"Resim yükleme limitini aşıyor: ",lowestPx:"Resmin boyutu çok küçük. En az olması gereken: "}},"es-MX":{hint:"Selecciona o arrastra una imagen",loading:"Subiendo...",noSupported:"Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes",success:"Subido exitosamente",fail:"Sucedió un error",preview:"Vista previa",btn:{off:"Cancelar",close:"Cerrar",back:"Atrás",save:"Guardar"},error:{onlyImg:"Únicamente imágenes",outOfSize:"La imagen excede el tamaño maximo:",lowestPx:"La imagen es demasiado pequeña. Se espera por lo menos:"}},de:{hint:"Klick hier oder zieh eine Datei hier rein zum Hochladen",loading:"Hochladen…",noSupported:"Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",success:"Upload erfolgreich",fail:"Upload fehlgeschlagen",preview:"Vorschau",btn:{off:"Abbrechen",close:"Schließen",back:"Zurück",save:"Speichern"},error:{onlyImg:"Nur Bilder",outOfSize:"Das Bild ist zu groß: ",lowestPx:"Das Bild ist zu klein. Mindestens: "}},ja:{hint:"クリック・ドラッグしてファイルをアップロード",loading:"アップロード中...",noSupported:"このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",success:"アップロード成功",fail:"アップロード失敗",preview:"プレビュー",btn:{off:"キャンセル",close:"閉じる",back:"戻る",save:"保存"},error:{onlyImg:"画像のみ",outOfSize:"画像サイズが上限を超えています。上限: ",lowestPx:"画像が小さすぎます。最小サイズ: "}},ua:{hint:"Натисніть, або перетягніть файл в це вікно",loading:"Завантажую……",noSupported:"Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами",success:"Завантаження виконано успішно",fail:"Помилка завантаження",preview:"Попередній перегляд",btn:{off:"Відмінити",close:"Закрити",back:"Назад",save:"Зберегти"},error:{onlyImg:"Тільки зображення",outOfSize:"Зображення перевищує граничний розмір: ",lowestPx:"Мінімальний розмір зображення: "}},it:{hint:"Clicca o trascina qui il file per caricarlo",loading:"Caricamento del file…",noSupported:"Browser non supportato, per favore usa IE10+ o un altro browser",success:"Caricamento completato",fail:"Caricamento fallito",preview:"Anteprima",btn:{off:"Annulla",close:"Chiudi",back:"Indietro",save:"Salva"},error:{onlyImg:"Sono accettate solo immagini",outOfSize:"L'immagine eccede i limiti di dimensione: ",lowestPx:"L'immagine è troppo piccola. Il requisito minimo è: "}},ar:{hint:"اضغط أو اسحب الملف هنا للتحميل",loading:"جاري التحميل...",noSupported:"المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر",success:"تم التحميل بنجاح",fail:"فشل التحميل",preview:"معاينه",btn:{off:"إلغاء",close:"إغلاق",back:"رجوع",save:"حفظ"},error:{onlyImg:"صور فقط",outOfSize:"تتجاوز الصوره الحجم المحدد: ",lowestPx:"حجم الصورة صغير جدا. من المتوقع على الأقل: "}},ug:{hint:"مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ",loading:"يوللىنىۋاتىدۇ...",noSupported:"تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ",success:"غەلبىلىك بولدى",fail:"مەغلۇب بولدى",preview:"ئۈنۈم رەسىم",btn:{off:"بولدى قىلىش",close:"تاقاش",back:"ئالدىنقى قەدەم",save:"ساقلاش"},error:{onlyImg:"پەقەت رەسىم فورماتىنىلا قوللايدۇ",outOfSize:"رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى",lowestPx:"رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :"}},th:{hint:"คลิ๊กหรือลากรูปมาที่นี่",loading:"กำลังอัพโหลด…",noSupported:"เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น",success:"อัพโหลดสำเร็จ",fail:"อัพโหลดล้มเหลว",preview:"ตัวอย่าง",btn:{off:"ยกเลิก",close:"ปิด",back:"กลับ",save:"บันทึก"},error:{onlyImg:"ไฟล์ภาพเท่านั้น",outOfSize:"ไฟล์ใหญ่เกินกำหนด: ",lowestPx:"ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: "}},mm:{hint:"ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ",loading:"တင်နေသည်…",noSupported:"ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ",success:"ဖိုင်တင်နေမှု မပြီးမြောက်ပါ",fail:"ဖိုင်တင်နေမှု မအောင်မြင်ပါ",preview:"အစမ်းကြည့်",btn:{off:"မလုပ်တော့ပါ",close:"ပိတ်မည်",back:"နောက်သို့",save:"သိမ်းမည်"},error:{onlyImg:"ဓာတ်ပုံ သီးသန့်သာ",outOfSize:"ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ",lowestPx:"ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : "}},se:{hint:"Klicka eller dra en fil hit för att ladda upp den",loading:"Laddar upp…",noSupported:"Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare",success:"Uppladdning lyckades",fail:"Uppladdning misslyckades",preview:"Förhandsgranska",btn:{off:"Avbryt",close:"Stäng",back:"Tillbaka",save:"Spara"},error:{onlyImg:"Endast bilder",outOfSize:"Bilden är större än max-gränsen: ",lowestPx:"Bilden är för liten. Minimum är: "}}},$={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},D=(i("34ef"),i("28a5"),function(e,t){e=e.split(",")[1],e=window.atob(e);for(var i=new Uint8Array(e.length),a=0;a<e.length;a++)i[a]=e.charCodeAt(a);return new Blob([i],{type:t})}),P=function(e,t){var i=Object.assign({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),a=i.ele;if(a){var o=a.getBoundingClientRect(),r=a.querySelector(".e-ripple");switch(r?r.className="e-ripple":(r=document.createElement("span"),r.className="e-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",a.appendChild(r)),i.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=e.pageY-o.top-r.offsetHeight/2-document.body.scrollTop+"px",r.style.left=e.pageX-o.left-r.offsetWidth/2-document.body.scrollLeft+"px"}return r.style.backgroundColor=i.bgc,r.className="e-ripple z-active",!1}},A=i("392b"),M={props:{field:{type:String,default:"file"},ki:{type:Number,default:0},value:{type:Boolean,default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noRotate:{type:Boolean,default:!0},noCircle:{type:Boolean,default:!1},noSquare:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"},withCredentials:{type:Boolean,default:!1}},data:function(){var e=this.imgFormat,t=this.langType,i=this.langExt,a=this.width,o=this.height,r=!0,n=["jpg","png"],s=-1===n.indexOf(e)?"jpg":e,l=R[t]?R[t]:R["en"],c=$[s];return this.imgFormat=s,i&&Object.assign(l,i),"function"!==typeof FormData&&(r=!1),{mime:c,lang:l,isSupported:r,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:a/o,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:184},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,rotateLeft:!1,rotateRight:!1,degree:0,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,i=e.y+t.y+"px",a=e.x+t.x+"px";return{top:i,left:a,width:e.width+"px",height:e.height+"px",transform:"rotate("+e.degree+"deg)","-ms-transform":"rotate("+e.degree+"deg)","-moz-transform":"rotate("+e.degree+"deg)","-webkit-transform":"rotate("+e.degree+"deg)","-o-transform":"rotate("+e.degree+"deg)"}},sourceImgMasking:function(){var e=this.width,t=this.height,i=this.ratio,a=this.sourceImgContainer,o=a,r=o.width/o.height,n=0,s=0,l=o.width,c=o.height,u=1;return i<r&&(u=o.height/t,l=o.height*i,n=(o.width-l)/2),i>r&&(u=o.width/e,c=o.width/i,s=(o.height-c)/2),{scale:u,x:n,y:s,width:l,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,i=t,a=e,o=a.width===i.width?a.width:(i.width-a.width)/2,r=a.height===i.height?a.height:(i.height-a.height)/2;return{width:o+"px",height:r+"px"}},previewStyle:function(){var e=this.ratio,t=this.previewContainer,i=t,a=i.width,o=i.height,r=a/o;return e<r&&(a=i.height*e),e>r&&(o=i.width/e),{width:a+"px",height:o+"px"}}},watch:{value:function(e){e&&1!==this.loading&&this.reset()}},created:function(){document.addEventListener("keyup",this.closeHandler)},destroyed:function(){document.removeEventListener("keyup",this.closeHandler)},methods:{ripple:function(e){P(e)},off:function(){var e=this;setTimeout((function(){e.$emit("input",!1),e.$emit("close"),3===e.step&&2===e.loading&&e.setStep(1)}),200)},setStep:function(e){var t=this;setTimeout((function(){t.step=e}),200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this.lang,i=this.maxSize;return-1===e.type.indexOf("image")?(this.hasError=!0,this.errorMsg=t.error.onlyImg,!1):!(e.size/1024>i)||(this.hasError=!0,this.errorMsg=t.error.outOfSize+i+"kb",!1)},reset:function(){this.loading=0,this.hasError=!1,this.errorMsg="",this.progress=0},setSourceImg:function(e){var t=this,i=new FileReader;i.onload=function(e){t.sourceImgUrl=i.result,t.startCrop()},i.readAsDataURL(e)},startCrop:function(){var e=this,t=this.width,i=this.height,a=this.ratio,o=this.scale,r=this.sourceImgUrl,n=this.sourceImgMasking,s=this.lang,l=n,c=new Image;c.src=r,c.onload=function(){var r=c.naturalWidth,n=c.naturalHeight,u=r/n,m=l.width,p=l.height,d=0,h=0;if(r<t||n<i)return e.hasError=!0,e.errorMsg=s.error.lowestPx+t+"*"+i,!1;a>u&&(p=m/u,h=(l.height-p)/2),a<u&&(m=p*u,d=(l.width-m)/2),o.range=0,o.x=d,o.y=h,o.width=m,o.height=p,o.degree=0,o.minWidth=m,o.minHeight=p,o.maxWidth=r*l.scale,o.maxHeight=n*l.scale,o.naturalWidth=r,o.naturalHeight=n,e.sourceImg=c,e.createImg(),e.setStep(2)}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,a=this.scale,o=i;o.mX=t.screenX,o.mY=t.screenY,o.x=a.x,o.y=a.y,o.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,a=i.on,o=i.mX,r=i.mY,n=i.x,s=i.y,l=this.scale,c=this.sourceImgMasking,u=c,m=t.screenX,p=t.screenY,d=m-o,h=p-r,g=n+d,f=s+h;a&&(g>0&&(g=0),f>0&&(f=0),g<u.width-l.width&&(g=u.width-l.width),f<u.height-l.height&&(f=u.height-l.height),l.x=g,l.y=f)},startRotateRight:function(e){var t=this,i=this.scale;i.rotateRight=!0;var a=function e(){if(i.rotateRight){var a=++i.degree;t.createImg(a),setTimeout((function(){e()}),60)}};a()},startRotateLeft:function(e){var t=this,i=this.scale;i.rotateLeft=!0;var a=function e(){if(i.rotateLeft){var a=--i.degree;t.createImg(a),setTimeout((function(){e()}),60)}};a()},endRotate:function(){var e=this.scale;e.rotateLeft=!1,e.rotateRight=!1},startZoomAdd:function(e){var t=this,i=this.scale;i.zoomAddOn=!0;var a=function e(){if(i.zoomAddOn){var a=i.range>=100?100:++i.range;t.zoomImg(a),setTimeout((function(){e()}),60)}};a()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var t=this,i=this.scale;i.zoomSubOn=!0;var a=function e(){if(i.zoomSubOn){var a=i.range<=0?0:--i.range;t.zoomImg(a),setTimeout((function(){e()}),60)}};a()},endZoomSub:function(e){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,i=this.sourceImgMasking,a=this.scale,o=a.maxWidth,r=a.maxHeight,n=a.minWidth,s=a.minHeight,l=a.width,c=a.height,u=a.x,m=a.y,p=i,d=p.width,h=p.height,g=n+(o-n)*e/100,f=s+(r-s)*e/100,v=d/2-g/l*(d/2-u),b=h/2-f/c*(h/2-m);v>0&&(v=0),b>0&&(b=0),v<d-g&&(v=d-g),b<h-f&&(b=h-f),a.x=v,a.y=b,a.width=g,a.height=f,a.range=e,setTimeout((function(){a.range===e&&t.createImg()}),300)},createImg:function(e){var t=this.mime,i=this.sourceImg,a=this.scale,o=a.x,r=a.y,n=a.width,s=a.height,l=a.degree,c=this.sourceImgMasking.scale,u=this.$refs.canvas,m=u.getContext("2d");e&&(this.sourceImgMouseDown.on=!1),u.width=this.width,u.height=this.height,m.clearRect(0,0,this.width,this.height),m.fillStyle="#fff",m.fillRect(0,0,this.width,this.height),m.translate(.5*this.width,.5*this.height),m.rotate(Math.PI*l/180),m.translate(.5*-this.width,.5*-this.height),m.drawImage(i,o/c,r/c,n/c,s/c),this.createImgUrl=u.toDataURL(t)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,i=this.field,a=this.ki;this.$emit("crop-success",t,i,a),"string"===typeof e&&e?this.upload():(console.log("off"),this.upload(),this.off())},SetBaseImage:function(e){this.$emit("SetImage",e)},upload:function(){var e=this,t=this.lang,i=this.imgFormat,a=this.mime,o=(this.url,this.params),r=this.field,n=this.ki,s=this.createImgUrl,l=new FormData;l.append(r,D(s,a),r+"."+i),console.log("createImgUrl"),console.log(s),"object"===Object(j["a"])(o)&&o&&Object.keys(o).forEach((function(e){l.append(e,o[e])})),this.reset(),this.loading=1,this.setStep(3);var c={ID:void 0,FileType:"image",File:s.replace(/^data:image\/(png|jpg);base64,/,""),Status:0,TableName:"CompanyInfo",FKTable:1};Object(A["a"])(c).then((function(t){e.loading=2,e.SetBaseImage(s),e.$emit("crop-upload-success",t.data)})).catch((function(i){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=t.fail,e.$emit("crop-upload-fail",i,r,n))}))},closeHandler:function(e){!this.value||"Escape"!==e.key&&27!==e.keyCode||this.off()}}},B=M,U=(i("de53"),Object(m["a"])(B,E,T,!1,null,null,null)),L=U.exports,H=i("3cbc"),q={name:"TinymceDemo",components:{Tinymce:N,ImageCropper:L,PanThumb:H["a"]},data:function(){return{imagecropperShow:!1,imagecropperKey:0,tempForm:{ID:void 0,Name:"",NickName:"",TaxNumber:"",Logo:"",BusinessDescription:"",RateNumber:"",Address:"",PhoneNumber1:"",PhoneNumber2:"",Fax:"",Email:"",Website:"",HeaderReport:"",FooterReport:""},rulesForm:{Name:[{required:!0,message:"يجب إدخال إسم ",trigger:"blur"},{minlength:3,maxlength:50,message:"الرجاء إدخال إسم لا يقل عن 3 أحرف و لا يزيد عن 50 حرف",trigger:"blur"}]}}},created:function(){this.getdata()},methods:{SetBaseImage:function(e){console.log(e),this.tempForm.Logo=e},cropSuccess:function(e){console.log("i'm here "+e),this.imagecropperShow=!1,this.imagecropperKey=this.imagecropperKey+1},close:function(){this.imagecropperShow=!1},getdata:function(){var e=this;Object(z["b"])().then((function(t){console.log(t),e.tempForm=t,e.loading=!1})).catch((function(e){console.log(e)}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;console.log(e.tempForm.HeaderReport),Object(z["a"])(e.tempForm).then((function(t){e.getdata(),e.dialogFormVisible=!1,e.$notify({title:"تم",message:"تم التعديل بنجاح",type:"success",duration:2e3})})).catch((function(e){console.log(e)}))}))}}},W=q,K=(i("785f"),Object(m["a"])(W,a,o,!1,null,"7a82137a",null));t["default"]=K.exports},"6bba":function(e,t,i){},"785f":function(e,t,i){"use strict";i("ffae")},de53:function(e,t,i){"use strict";i("6bba")},e459:function(e,t,i){"use strict";i("44d6")},fd60:function(e,t,i){"use strict";i("532b")},ffae:function(e,t,i){}}]);