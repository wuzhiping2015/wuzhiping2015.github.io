// /******/

// import vue from 'vue.vue';
// var toast = new Vue({});

// import axios from "axios"


// export const ajax1 = {
//   methods: {
//     ajax1(url, data = {}, type = "GET") {
//       var p = new Promise(function(resolve, reject) {
//         $.ajax({
//           url: url,
//           dataType: "json",
//           type: "get",
//           //async: false,
//           success: function(data, status) {
//             var rsp = data;
//             console.log(data);
//             console.log(status);
//             if (rsp.status == 'success') {
//               callback(rsp);
//               resolve(rsp);
//             } else {
//               if (rsp.data == "401") {
//                 alert("not authorized");
//                 window.location.href = "../login.html";
//               } else {
//                 // util.error(rsp.data);
//                 callback(rsp);
//                 resolve(rsp);
//               }
//             }
//           },
//           error: function(req, status, err) {
//             console.log(req);
//             console.log(status);
//             console.log(err);
//             callback(err);
//             resolve(err); //成功
//             reject(err); //失败
//           }
//         });

//       });
//       return p;
//     }
//   }
// }

import Vue from "vue";
var toast = new Vue({}); //引入VUE 对象方法




export default {
  methods: {
    ch2() {
      return "点击外部返回数据";
    },

/*
    ajax1(url, data = {}, type = "GET") {
      var p = new Promise(function(resolve, reject) {
        $.ajax({
          url: url,
          dataType: "json",
          type: "get",
          //async: false,
          success: function(data, status) {
            var rsp = data;
            console.log(data);
            console.log(status);
            if (rsp.status == 'success') {
              callback(rsp);
              resolve(rsp);
            } else {
              if (rsp.data == "401") {
                alert("not authorized");
                window.location.href = "../login.html";
              } else {
                // util.error(rsp.data);
                callback(rsp);
                resolve(rsp);
              }
            }
          },
          error: function(req, status, err) {
            console.log(req);
            console.log(status);
            console.log(err);
            callback(err);
            resolve(err); //成功
            reject(err); //失败
          }
        });

      });
      return p;
    }
 */
    //  return 111111;
  }


}
