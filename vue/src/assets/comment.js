import Vue from "vue";



var flag_SignalTouch = sessionStorage.getItem('$SysType') == "SignalTouch" ? true : false;


sessionStorage.setItem("$SysType", "Smith");
var sysType = sessionStorage.getItem('$SysType');


console.log(sysType);
console.log(flag_SignalTouch);




/* JS传参数方法   import { bt1, pi, settino, Helios }  */
var toast = new Vue({});   //引入VUE 对象方法
export default {};
export function bt1() {
  return ("外部调用一个事件");
}
export let pi = "我是外部一个变量";
export let settino = sessionStorage.getItem('$SysType');

export let Helios = {
  login() {
   return ("vue 外部调用事件");
  },
  demo() {
    toast.$router.replace("/Index");
  }

}
