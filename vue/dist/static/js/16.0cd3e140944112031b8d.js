webpackJsonp([16],{"98wc":function(t,e){},OQIE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s=n("bOdI"),a=n.n(s),i=n("SHs9"),_=n("7+uW"),l=n("tnAa"),u={},r={title:"表单输入",titles:l.f.mydatalist(),testMix:this.text,input_value:"",textarea:"",radio:"",checkbox:"",selectval:"C",hobby2:[],hobby3:[],options:[{text:"红烧肉",value:"A"},{text:"囊包肉",value:"B"},{text:"水煮鱼",value:"C"}]},d=(o={name:"bendiqingqiu",data:function(){return u=this,r},methods:{},created:function(){},mounted:function(){this.$http.get("http://localhost:3000/users").then(function(t){u.hobby2=t.data,console.log(u.hobby2)},function(){console.log("请求失败处理")})}},a()(o,"methods",{AJAX:function(){_.default.prototype.$message(l.f.mydatalist()),l.f.ajaxbox("http://localhost:3000/users",u.hobby3)}}),a()(o,"components",{mylogo:i.a}),a()(o,"mixins",[l.f]),o),v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bendiqingqiu"}},[t._v("\n  这是一个组件\n  "),n("mylogo",{attrs:{title:t.titles}}),t._v(" "),n("h2",[t._v(t._s(t.titles))]),t._v(" "),n("table",{attrs:{border:"1"}},t._l(t.hobby2,function(e,o){return n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.phone))]),t._v(" "),n("td",[t._v(t._s(e.age))]),t._v(" "),n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.companyId))])])}),0),t._v("\n  -------- "),n("input",{attrs:{type:"button",value:"数据请求AJAX"},on:{click:function(e){return t.AJAX()}}}),t._v("-----------\n\n\n  "),n("table",{attrs:{border:"1"}},t._l(t.hobby3,function(e,o){return n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.age))]),t._v(" "),n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.companyId))])])}),0)],1)},staticRenderFns:[]};var c=n("VU/8")(d,v,!1,function(t){n("98wc")},null,null);e.default=c.exports}});
//# sourceMappingURL=16.0cd3e140944112031b8d.js.map