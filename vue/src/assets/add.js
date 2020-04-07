import Vue from "vue";

var systemType = new Array("tetra", "Relay das", "BroadBand", "DMR", "Multi Fequency", "BroadBand_multi", "SignalTouch",
  "Malaysia");

//设置
/* sessionStorage.setItem('$SysType', "BroadBand");
sessionStorage.setItem('$bandNum', 111);
sessionStorage.setItem('$user', "user"); */
//获取菜单
/* sessionStorage.setItem('$Menulist', 222); */


//获取
/* var logUserName = sessionStorage.getItem('$user') || "";
var session = sessionStorage.getItem('$session');
var mods = JSON.parse(sessionStorage.getItem('$mod_arrs')); */


//清楚设置
/* sessionStorage.removeItem('$user');
sessionStorage.removeItem('$session');
sessionStorage.removeItem("$mod_arrs"); */

var flag_SignalTouch = sessionStorage.getItem('$SysType') == "SignalTouch" ? "SignalTouch" : "nnnn";
var sysType = sessionStorage.getItem('$SysType');

console.log(sysType);
console.log(flag_SignalTouch);

var toast = new Vue({}); //引入VUE 对象方法

let StringUtil = {
  //是否为空判断
  isNull: function(text) {
    if (undefined == text) {
      return 33333333333;
    }
    if (text.length == "" || text.length == 0) {
      return 444444444444444;
    }
    return 555555555555555;
  },
  btn: function() {
    alert("我是外部就是");
    Vue.prototype.$message('这是一条消息提示');

  },
  btn1: function() {
    sessionStorage.setItem('$SysType', "c");
  }
};
/* VUE 原型引入 JS 方法 */
Vue.prototype.StringUtil = StringUtil;


/* JS传参数方法   import { bt1, pi, settino, Helios }  */

export default {
  methods: {
    ceshiyigewenjian: function(name) {
      return "你好" + name;
    }
  }
};




export let pi = "我是外部一个变量";


export let settino = sessionStorage.getItem('$SysType');

export let settions = "固定变量";

// 导出函数
export function bt1() {
  return ("外部调用一个事件");
}



// 导出对象
export let Helios = {
  b2: function() {

    /* Vue.prototype.$message('对象事件方法'); */

    toast.$notify({
      title: "成功",
      message: "数据请求成功",
      type: "success",
      duration: 1000
    });

  },
  b3: function() {
    return "对象事件一个变量"
  },
  b4(x, y) {
    return x + y;
  },
  b5(x) {
    setInterval(function() {
      if (10 < (x)) {
        return x;
      } else {
        x = x + 1;
      }
      console.log(x)
      Vue.prototype.$message(x);

    }, 1000);
    /*  () =>  方法*/
    /*  setInterval(() => {
       if (5 < (x)) {
         return x;
       } else {
         x = x + 1;
       }
       console.log(x)
     }, 800); */
    console.log(this.$data);
  },
  b6() {
    let c = {
      a: "对象数据111",
      b: "对象数据22"
    };

    Vue.prototype.$message(c.a);

    Vue.prototype.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      toast.$message({
        type: 'success',
        message: '删除成功!'
      });
    }).catch(() => {
      toast.$message({
        type: 'info',
        message: '已取消删除'
      });
    });



    //   return c.a;
  }

}




import axios from 'axios' // npm 安装axios，数据请求

export const wzp = {
  data() {
    return {
      text: "---外部事件变量"
    }
  },
  mydatalist() {
    return "我的数据表格"
  },
  ajaxbox(url,arrdata) {
    var p = new Promise(function(resolve, reject) {
      $.ajax({
        url: url,
        dataType: "json",
        type: "get",
        //async: false,
        success: function(data, status) {
          var rsp = data;
          resolve(rsp); //成功
          reject(rsp); //失败
          console.log(status);
          console.log(data);
          
          if (rsp.status == 'success') {
            //   callback(rsp);
            resolve(rsp);
          } else {
            if (rsp.data == "401") {
              alert("not authorized");
              window.location.href = "../login.html";
            } else {
              // util.error(rsp.data);
              //   callback(rsp);
              resolve(rsp);
            }
          }
        },
        error: function(req, status, err) {
          console.log(req);
          console.log(status);
          console.log(err);
          //   callback(err);
          resolve(err); //成功
          reject(err); //失败
        }
      });

    });
    return p;







  }





}
