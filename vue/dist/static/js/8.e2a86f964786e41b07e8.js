webpackJsonp([8],{Kv7v:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c("PSfp"),i={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"bbb",staticStyle:{padding:"10px"}},[c("h3",[e._v("wewee")]),e._v("\n    "+e._s(e.c)+"\n    "),c("br"),e._v(" "),c("button",{on:{click:function(t){return e.b1()}}},[e._v("点击随机")]),e._v("\n    "+e._s(e.a)+"\n    "),c("div",{staticStyle:{border:"1px solid red"}},[c("div",{staticClass:"title",class:{active:e.count>2,active1:e.getCount,test:!0}},[e._v("测试 Class")]),e._v(" "),c("div",{staticClass:"title1",style:[{height:e.getCount()?"20px":"40px"},e.styleObj]},[e._v(":style测试")]),e._v(" "),c("div",{style:e.styleObj},[e._v("一个class")])]),e._v(" "),c("table",[c("tr",[c("td",[e._v(e._s(e.c))]),e._v(" "),c("td",[e._v(e._s("helios"+e.c))]),e._v(" "),c("td",[e._v(e._s(e.a))]),e._v(" "),c("td",[c("h3",{class:{active:0}},[e._v("一个样式文件")])]),e._v(" "),c("td"),e._v(" "),c("td")])]),e._v("\n    "+e._s(e.jia)+"\n    "),c("div",{class:{aaa:e.isActive,"text-danger":e.hasError}},[e._v("一个测试文件")]),e._v(" "),c("div",{class:e.classObject},[e._v("1222")]),e._v(" "),c("div",{attrs:{title:"表单"}},[c("h3",[e._v(" 表单")]),e._v(" "),c("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var c=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=t.target.multiple?c:c[0]}}},e._l(e.options,function(t){return c("option",{domProps:{value:t.value}},[e._v(e._s(t.text))])}),0),e._v(" "),c("span",[e._v("Selected: "+e._s(e.selected))]),e._v(" "),c("label",{attrs:{for:"jack"}},[c("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",value:"jack",id:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"jack")>-1:e.checked},on:{change:function(t){var c=e.checked,n=t.target,i=!!n.checked;if(Array.isArray(c)){var o=e._i(c,"jack");n.checked?o<0&&(e.checked=c.concat(["jack"])):o>-1&&(e.checked=c.slice(0,o).concat(c.slice(o+1)))}else e.checked=i}}}),e._v("\n   jack")]),e._v(" "),c("label",[c("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"john",value:"john"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"john")>-1:e.checked},on:{change:function(t){var c=e.checked,n=t.target,i=!!n.checked;if(Array.isArray(c)){var o=e._i(c,"john");n.checked?o<0&&(e.checked=c.concat(["john"])):o>-1&&(e.checked=c.slice(0,o).concat(c.slice(o+1)))}else e.checked=i}}}),e._v("\n    John")]),e._v(" "),c("label",[c("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"mike",value:"mike"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,"mike")>-1:e.checked},on:{change:function(t){var c=e.checked,n=t.target,i=!!n.checked;if(Array.isArray(c)){var o=e._i(c,"mike");n.checked?o<0&&(e.checked=c.concat(["mike"])):o>-1&&(e.checked=c.slice(0,o).concat(c.slice(o+1)))}else e.checked=i}}}),e._v("\n    mike")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"text"},domProps:{value:e.checked},on:{input:function(t){t.target.composing||(e.checked=t.target.value)}}}),e._v(" "),c("div",[c("label",[c("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"one",value:"1"},domProps:{checked:e._q(e.picked,"1")},on:{change:function(t){e.picked="1"}}}),e._v("\n        one\n      ")]),e._v("\n        \n     "),c("label",[c("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"tow",value:"2"},domProps:{checked:e._q(e.picked,"2")},on:{change:function(t){e.picked="2"}}}),e._v("\n       two\n     ")]),e._v(" "),c("span",[e._v("Picked "+e._s(e.picked))]),e._v(" "),c("input",{attrs:{type:"button",value:"点击 加"},on:{click:function(t){e.picked+=1}}}),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.picked,expression:"picked",modifiers:{trim:!0}}],domProps:{value:e.picked},on:{input:function(t){t.target.composing||(e.picked=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v("\n "+e._s(e.picked)+"\n"),c("button",{attrs:{type:"button",disabled:e.picked<=1},on:{click:function(t){e.picked-=1}}},[e._v("点击减")])])]),e._v(" "),1==e.picked?c("h1",[e._v("我是一")]):e._e(),e._v(" "),e.picked>=5?c("h1",[e._v(" 我是大于5")]):e._e(),e._v(" "),c("p",[e._v(" 搜索 匹配才显示")]),e._v(" "),c("ul",[e._l(e.options,function(t){return 0==t.text.indexOf("o")?c("li",[e._v("\n      模糊查询 ndexOf :-- "+e._s(t.text)+"\n  ")]):e._e()}),e._v(" "),e._l(e.name,function(t){return null==t.match("w")?c("li",[e._v("\n     模糊查询  match : ---"+e._s(t)+"\n  ")]):e._e()})],2),e._v(" "),c("br"),c("br"),c("br"),c("br"),c("br")])},staticRenderFns:[]};var o=function(e){c("ky9Y")},a=c("VU/8")(n.a,i,!1,o,"data-v-851f60e0",null);t.default=a.exports},PSfp:function(e,t,c){"use strict";(function(e){var n,i=c("bOdI"),o=c.n(i),a={},r=(n={selected:"1",isActive:!0,hasError:!0,picked:1,classObject:{active:!0},options:[{text:"one",value:"1"},{text:"two",value:"2"},{text:"three",value:"3"}],name:["abc","cde","drg","dfff","www","ww"],checked:[],a:11,dd:""},o()(n,"isActive",0),o()(n,"c","一个新的页面路由"),o()(n,"demo",""),o()(n,"value",""),o()(n,"count",5),o()(n,"styleObj",{"font-size":"20px",color:"red"}),n);t.a={name:"bbb",data:function(){return a=this,r},components:{},beforeCreate:function(){},created:function(){console.log("创建完成："),console.log(this.$data)},beforeMount:function(){},mounted:function(){var t=this;e("body").resize(),console.log(this.$data),this.$http.get("bbb").then(function(e){console.log(e.body),t.blogs=e.body.blogs},function(e){console.error(e)}),this.keydown()},beforeUpdate:function(){},updated:function(){console.log("==更新成功=="),console.log(this.$data)},beforeDestory:function(){},destoryed:function(){},methods:{b1:function(){a.a=Math.random(a.a+1)},getCount:function(){return!0},keydown:function(){alert("11111")}},filters:{filtersTitleers:function(e){return"我是一个过滤器"}},computed:{rescom:function(){return 3*(Number(a.n)+Number(a.n1))},jia:function(){return 2}},watch:{demo:function(e){this.value=this.demo,console.log(this.value)}}}}).call(t,c("7t+N"))},ky9Y:function(e,t){}});
//# sourceMappingURL=8.e2a86f964786e41b07e8.js.map