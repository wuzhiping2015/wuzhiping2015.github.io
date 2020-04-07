<template>
  <div class="index" style="border: 4px solid rgb(207, 27, 27);text-align: center">
    <h1>测试</h1>
    <button @click="goto">点击返回</button>
    {{a}}
    <button @click="b1()">数据请求</button>

    <h1>数据循环</h1>
    <ul>
      <li v-for="ba  in cccc" v-if="ba.indexOf('5')" v-bind:style="'color'+mycolor">{{ba}}</li>
    </ul>
    <table border="1">
      <tr v-for="(v,i) in hobby2">
        <td>{{v.id}}</td>
        <td>{{v.phone}}</td>
        <td>{{v.age}}</td>
        <td>{{v.email}}</td>
        <td>{{v.companyId}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
  import Vue from "vue";
  var toast = new Vue({}); //引入VUE 对象方法
  let app = {};
  let data = {
    a: "这是一个测试文件,你知道VUE 的进步测试么",
    b: "",
    hobby2: [],
    cccc: ["ab", "dd", "cc", "we", "er"],
    mycolor: "red"
  };
  export default {
    name: "index",
    data() {
      app = this;
      return data;
    },
    mounted() {},


    methods: {
      goto() {
        this.$router.replace("/");
      },

      b1() {

        this.$http.get('http://localhost:3000/users').then(function(res) {
            app.hobby2 = (res.data);
           /* Vue.prototype.$notify({ */ /*  Vue.prototype  继承方法 */

              toast.$notify({

                title: "成功",
                message: "数据请求成功222",
                type: "success",
                duration: 1000
              });

            }, function() {
              console.log('请求失败处理');
            });






            /*    this.$http.get("http://siwei.me/api/interface/blogs/all").then(
                  response => {
                    this.abc = response;
                    console.log(response);
                  },
                  response => {
                    this.abc = response;
                    console.error(response);
                  }
                ); */
          }
        }
      };
</script>



<!-- <link rel="stylesheet" href="src/assets/bootstrap.css">
<link rel="stylesheet" href="src/assets/element_index.css"> -->
