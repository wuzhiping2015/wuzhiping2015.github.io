webpackJsonp([16],{IjQ5:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={a:"111",dd:"",c:"一个新的页面路由",demo:"",value:"",theWord:"圆形",flag:!1,msg:"show me",mydatas:[{name:"TigerChain",age:"保密",address:"地球中国",lover:"不告诉你"},{name:"张三",age:"23",address:"地球中国",lover:"打游戏"},{name:"李四",age:"25",address:"地球中国",lover:"读书"},{name:"王五",age:"30",address:"是中唯一不下雪的地方",lover:"写代码"},{name:"赵六",age:"18",address:"中国北京",lover:"写博客"},{name:"钱七",age:"27",address:"中国陕西",lover:"做菜"}],fruit:["苹果","香蕉","葡萄","美国香瓜"]},s={name:"bb",data:function(){return this,t},methods:{cheangeDiv:function(){this.flag=!this.flag,"圆形"==this.theWord?this.theWord="方形":this.theWord="圆形"}}},r={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"bb"},[e._v("\n  我是一个1111外部中间件\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.dd,expression:"dd"}],domProps:{value:e.dd},on:{input:function(a){a.target.composing||(e.dd=a.target.value)}}}),e._v(" "),n("el-input",{model:{value:e.dd,callback:function(a){e.dd=a},expression:"dd"}}),e._v("\n  "+e._s(e.dd)+"\n\n\n  "),n("h3",[e._v("1、使用 v-if 来切换按钮上的文字和 div 的显示样式")]),e._v(" "),n("button",{staticStyle:{width:"100px"},on:{click:function(a){return e.cheangeDiv()}}},[e._v(e._s(e.theWord))]),e._v(" "),e.flag?n("div",[n("div",{attrs:{id:"showDiv"}},[e._v("我显示出来了")])]):n("div",[e._m(0)]),e._v(" "),n("hr"),e._v(" "),n("h3",[e._v("2、使用 v-for 来循环数组")]),e._v(" "),n("span",[e._v("列举出你喜欢吃的水果")]),e._v(" "),n("br"),e._v("我喜欢吃的水果有\n  "),n("ul",e._l(e.fruit,function(a){return n("li",[n("span",[e._v(e._s(a))])])}),0),e._v(" "),n("h3",[e._v("3、使用 v-for 循环输出 以下 json 串")]),e._v(" "),n("p",[e._v('\n    mydatas:[\n    {"name":"TigerChain","age":"保密","address":"地球中国","lover":"不告诉你"},\n    {"name":"张三","age":"23","address":"地球中国","lover":"打游戏"},\n    {"name":"李四","age":"25","address":"地球中国","lover":"读书"},\n    {"name":"王五","age":"30","address":"是中唯一不下雪的地方","lover":"写代码"},\n    {"name":"赵六","age":"18","address":"中国北京","lover":"写博客"},\n    {"name":"钱七","age":"27","address":"中国陕西","lover":"做菜"}\n    ]\n  ')]),e._v(" "),n("table",{attrs:{border:"1"}},[e._m(1),e._v(" "),e._l(e.mydatas,function(a,t){return n("tr",[n("td",[n("span",[e._v(e._s(t))])]),e._v(" "),n("td",[n("span",[e._v(e._s(a.name))])]),e._v(" "),n("td",[n("span",[e._v(e._s(a.age))])]),e._v(" "),n("td",[n("span",[e._v(e._s(a.address))])]),e._v(" "),n("td",[n("span",[e._v(e._s(a.lover))])])])})],2)],1)},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"showBuleDiv"}},[a("span",{staticStyle:{color:"white"}},[this._v("哈哈")])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("tr",[n("th",[e._v("序号")]),e._v(" "),n("th",[e._v("姓名")]),e._v(" "),n("th",[e._v("年龄")]),e._v(" "),n("th",[e._v("地址")]),e._v(" "),n("th",[e._v("爱好")])])}]};var v=n("VU/8")(s,r,!1,function(e){n("Ukvj")},null,null);a.default=v.exports},Ukvj:function(e,a){}});
//# sourceMappingURL=16.c3b168203f4343f12d47.js.map