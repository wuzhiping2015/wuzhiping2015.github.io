webpackJsonp([5],{Gl3C:function(module,__webpack_exports__,__webpack_require__){"use strict";(function($){var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),__WEBPACK_IMPORTED_MODULE_1__shop_shop_vue__=__webpack_require__("atPC"),vm={},_data={a:"111",isActive:!0,peritemMrgingStyle:"itemStyle",b:6666,msg:"",content:"",selectDatas:[],cssStyles:[],datas:[{title:"标题1",content:[{name:"内容1"},{name:"内容2"},{name:"内容3"},{name:"内容4"},{name:"内容5"},{name:"内容6"},{name:"内容7"},{name:"内容8"},{name:"内容9"}]}],dataList:[{text:"标签11",isAction:!0},{text:"标签22",isAction:!1},{text:"标签33",isAction:!1},{text:"标签44",isAction:!1}],isFix:!1};__webpack_exports__.a={name:"cc",data:function(){return vm=this,_data},components:{abcd:__WEBPACK_IMPORTED_MODULE_1__shop_shop_vue__.default},beforeCreate:function(){},created:function(){console.log("创建完成："),console.log(this.$data)},beforeMount:function(){},mounted:function(){$("body").resize(),console.log(this.$data),window.addEventListener("scroll",this.handscroll),setTimeout(function(){},500)},beforeUpdate:function(){},updated:function(){console.log("==更新成功=="),console.log(this.$data)},beforeDestory:function(){console.log("销毁前：")},destoryed:function(){console.log("销毁完成：")},methods:{b2:function(t){this.a=t},select:function(t){this.dataList.forEach(function(t){t.isAction=!1}),t.isAction=!t.isAction},change:function(t,n){var e=n.target;if("contentitem"==e.className)e.className="contentitemSelect",this.selectDatas.push(e.innerText),this.cssStyles.push(e);else if("contentitemSelect"==e.className){e.className="contentitem",JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.selectDatas))}},handscroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.b=t;var n=this.$el.querySelector("#tabbar").offsetTop;this.isFix=t>n},operator:function operator(flag){switch(flag){case"clear":this.content=0;break;case"delete":this.content=this.content.slice(0,-1);break;case"7":case"8":case"9":case"*":case"4":case"5":case"6":case"/":case"1":case"2":case"3":case"-":case"0":case".":case"+":this.content+=flag;break;case"=":!isNaN(this.content)||this.isContains(this.content,"+")||this.isContains(this.content,"-")||this.isContains(this.content,"*")||this.isContains(this.content,"/")?(console.log(11111111111),this.content=eval(this.content)):(console.log(22222),alert("非法输入"))}},isContains:function(t,n){if(console.log(t),console.log(n),void 0!=t)return t.indexOf(n)>=0},clickitem:function(){}},filters:{filtersTitleers:function(t){return"我是一个过滤器"}},computed:{rescom:function(){return 3*(Number(vm.n)+Number(vm.n1))}},watch:{demo:function(t){this.value=this.demo,console.log(this.value+"aaaaaaaaaaaaaaaaaaaaaaa")}}}}).call(__webpack_exports__,__webpack_require__("7t+N"))},hb3Q:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("Gl3C"),i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cc",staticStyle:{border:"1px solid rgb(241, 151, 32)",padding:"10px",margin:"10px"}},[e("div",{attrs:{id:"tabbar"}},[t._l(t.dataList,function(n,o){return e("div",{staticClass:"flagdiv",class:{active:n.isAction},on:{click:function(e){return t.select(n)}}},[e("span",[t._v(t._s(n.text))])])}),t._v(" "),e("ul",{staticClass:"headul"},[t._v("AAAAAAAAAAAAAAAAAAA\n      "),t._l(t.datas,function(n,o){return e("li",[e("div",{staticClass:"header"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"contentul"},[e("ul",{staticClass:"contentul"},t._l(n.content,function(n,o){return e("li",{staticClass:"contentitem",on:{click:function(n){return t.change(o,n)}}},[t._v(t._s(n.name))])}),0)])])})],2),t._v(" "),t._l(t.selectDatas,function(n,o){return e("span",[t._v(t._s(n))])}),t._v(" "),e("h1",[t._v("显示高度 "+t._s(t.b))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"inputstyle",attrs:{type:"text",placeholder:"请输入数字"},domProps:{value:t.content},on:{input:function(n){n.target.composing||(t.content=n.target.value)}}}),t._v(" "),e("div",{staticClass:"firstdiv"},[e("button",{on:{click:function(n){return t.operator("clear")}}},[t._v("归零")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("delete")}}},[t._v("删除")])]),t._v(" "),e("div",{staticClass:"firstdiv"},[e("button",{on:{click:function(n){return t.operator("7")}}},[t._v("7")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("8")}}},[t._v("8")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("9")}}},[t._v("9")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("*")}}},[t._v("*")])]),t._v(" "),e("div",{staticClass:"firstdiv"},[e("button",{on:{click:function(n){return t.operator("4")}}},[t._v("4")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("5")}}},[t._v("5")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("6")}}},[t._v("6")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("/")}}},[t._v("/")])]),t._v(" "),e("div",{staticClass:"firstdiv"},[e("button",{on:{click:function(n){return t.operator("1")}}},[t._v("1")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("2")}}},[t._v("2")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("3")}}},[t._v("3")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("-")}}},[t._v("-")])]),t._v(" "),e("div",{staticClass:"firstdiv"},[e("button",{on:{click:function(n){return t.operator("0")}}},[t._v("0")]),t._v(" "),e("button",{on:{click:function(n){return t.operator(".")}}},[t._v(".")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("+")}}},[t._v("+")]),t._v(" "),e("button",{on:{click:function(n){return t.operator("=")}}},[t._v("=")])])],2),t._v(" "),e("h1",[t._v(" 全局过滤器 "+t._s(t._f("filtersTitleers")(t.b)))]),t._v(" "),e("abcd")],1)},staticRenderFns:[]};var c=function(t){e("wX7b")},s=e("VU/8")(o.a,i,!1,c,null,null);n.default=s.exports},mvHQ:function(t,n,e){t.exports={default:e("qkKv"),__esModule:!0}},qkKv:function(t,n,e){var o=e("FeBl"),i=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},wX7b:function(t,n){}});
//# sourceMappingURL=5.941ffbf40bef0bbfefe3.js.map