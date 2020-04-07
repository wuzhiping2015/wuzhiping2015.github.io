/*VUEX 使用测试*/

import Vue from 'vue'  //引入VUE
import Vuex from 'vuex' //引入VUEX
// 使用VUEX
Vue.use(Vuex);
//创建VUE 实例
 const store=new Vuex.Store({
    state:{
      count:"我是一个VUEX 的例子 ",
      arr:[1,2,23,4,5],
      abc:function(){
         return "一个数字";
      },
    }
 });


//导出store

export default store
