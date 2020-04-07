<template>
        <div id="temp">
          <!-- 所有的动态页面，都在这里 -->
          <!--    <Index></Index> -->
      
          <h1 style="text-align: center">登录</h1>
          <div> 姓名 <el-input v-model="name"></el-input>
          </div>
          <div> 密码 <el-input v-model="pass"></el-input>
          </div>
          <div style="text-align: center">
            <el-button type="primary" plain @click="login">登录</el-button>
            <el-button type="success" plain @click="resule">取消</el-button>
          </div>
          <div style="border:1px solid red;margin: 10px;padding: 10px;">
            <el-tag type="warning" @click="open">参数方法</el-tag>
          </div>
        </div>
      </template>
      <style>
      
      </style>
      <script>
      
      
        sessionStorage.removeItem('$user');
        sessionStorage.removeItem('$session');
        sessionStorage.removeItem("$mod_arrs");
      
        let vm = {};
      
        //引入VUE 后期对弹窗做处理
        import Vue from "vue";
        import { Message } from 'element-ui';
      
        import router from '@/router'
      
      
        var toast = new Vue({});   //引入VUE 对象方法
      
        console.log(toast);
      
        //这里引入一个JS 文件  //这是调用的方法 bt1, pi , Helios 
      
        import { bt1, pi, settino, Helios } from "@/assets/add.js";
        var sysType = sessionStorage.getItem('$SysType');
        console.log(sysType);
        
        
        
      
      
        let data = {
          name: "",
          pass: "",
          value: ''
        }
      
        export default {
          name: "temp",
          data() {
            vm = this;
            return data;
          },
      
          components: {
      
          },
          methods: {
            open() {
              toast.$notify({
                title: '成功',
                message: '数据请求成功',
                type: 'success',
                duration: 1000
              });
            },
      
            login: function () {
              if (this.name == "" || this.pass == "") {
      
                toast.$notify.error({
                  type: 'success',
                  duration: 2000,
                  title: '错误',
                  message: '用户名密码不能为空'
                });
              } else {
                sessionStorage.setItem('$user', 11111)
                let userlogin = sessionStorage.getItem('$user');
                //  this.$router.replace('/dd');
                this.$router.replace('/')
              }
      
      
            },
            resule() {
              this.name = "";
              this.pass = "";
            },
      
      
      
            b9() {
              this.qqq = this.qqq;
            },
      
      
          }
        };
      
      
        // ES6 import/export用法
      
        export var name = "Mark";
        var name = "1";
        var age = 12;
      
        export var c = { name, age };
        console.log(c);
      
        export function setName(name) {
          console.log("exprot--" + name);
        }
        setName(111);
      
      </script>
      
      <style scoped>
        #login {
          width: 600px;
          margin: 0px auto;
      
        }
      </style>