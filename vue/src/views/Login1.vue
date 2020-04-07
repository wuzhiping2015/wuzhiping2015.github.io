<template>
  <div id="login1">
    <div id="login">
      <!-- 所有的动态页面，都在这里 -->
      <!--    <Index></Index> -->
      <h1 style="text-align: center">Helios-admin </h1>
      <div class="elemform">

        <svg class="icon" viewBox="0 0 1024 1024" id="icon-user">
          <path
            d="M504.951 511.98c93.49 0 169.28-74.002 169.28-165.26 0-91.276-75.79-165.248-169.28-165.248-93.486 0-169.287 73.972-169.279 165.248-0.001 91.258 75.793 165.26 169.28 165.26z m77.6 55.098H441.466c-120.767 0-218.678 95.564-218.678 213.45V794.3c0 48.183 97.911 48.229 218.678 48.229H582.55c120.754 0 218.66-1.78 218.66-48.229v-13.77c0-117.887-97.898-213.45-218.66-213.45z"
            p-id="7987"></path>
        </svg>

        <input type="text" v-model="name" autocomplete="off" class="el-input__inner">
      </div>
      <div class="elemform">
        <svg class="icon" viewBox="0 0 1024 1024" id="icon-user">
          <path
            d="M504.951 511.98c93.49 0 169.28-74.002 169.28-165.26 0-91.276-75.79-165.248-169.28-165.248-93.486 0-169.287 73.972-169.279 165.248-0.001 91.258 75.793 165.26 169.28 165.26z m77.6 55.098H441.466c-120.767 0-218.678 95.564-218.678 213.45V794.3c0 48.183 97.911 48.229 218.678 48.229H582.55c120.754 0 218.66-1.78 218.66-48.229v-13.77c0-117.887-97.898-213.45-218.66-213.45z"
            p-id="7987"></path>
        </svg>


        <input type="text" v-model="pass" autocomplete="off" class="el-input__inner">
      </div>
      <div style="text-align: center">
        <el-button type="primary" class="el-button-primary" plain @click="login">Sign in</el-button>
        <!-- <el-button type="success" plain @click="resule">取消</el-button> -->
      </div>


    </div>
  </div>
</template>
<style>

</style>
<script>
  let vm = {};

  sessionStorage.removeItem('$user');
  sessionStorage.removeItem('$session');
  sessionStorage.removeItem("$mod_arrs");
  vm.name = "11";
  vm.pass = "222";

  //引入VUE 后期对弹窗做处理
  import Vue from "vue";
  import {  Message  } from 'element-ui';
  import router from '@/router';


  var toast = new Vue({}); //引入VUE 对象方法


  //这里引入一个JS 文件  //这是调用的方法 bt1, pi , Helios

  import {
    bt1,
    pi,
    settino,
    Helios
  } from "@/assets/add.js";

  var sysType = sessionStorage.getItem('$SysType');
  console.log(sysType);


  let data = {
    name: "Login1",
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
  created() {
          //  console.log("创建完成：");
          let that = this;
          document.onkeypress = function (e) {
              var keycode = document.all ? event.keyCode : e.which;
              if (keycode == 13) {
                  that.login();
                  return false;
              }
          };

      },

    methods: {
      login: function () {
        if (this.name === "" || this.pass === "" || this.name === undefined) {
          toast.$notify.error({
            type: 'success',
            duration: 2000,
            title: '错误',
            message: '111111'
          });
        } else if (this.pass != 1) {
          console.log(this.name);
          toast.$notify.error({
            type: 'success',
            duration: 2000,
            title: '错误  1',
            message: '密码 1'
          });
        } else {
          sessionStorage.setItem('$user', 99999)
          let userlogin = sessionStorage.getItem('$user');
          //  this.$router.replace('/dd');
          this.$router.replace('/index')
        }
      },
      resule() {
        this.name = "";
        this.pass = "";
      },

    }
  };
  // ES6 import/export用法
  export var name = "Mark";
  var name = "1";
  var age = 12;

  export var c = {
    name,
    age
  };
  console.log(c);
  export function setName(name) {
    console.log("exprot--" + name);
  }
  setName(111);

</script>

<style scoped>
  .icon {
    padding: 6px 5px 6px 15px;
    color: #fff;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    font-size: 20px;
    fill: currentColor;
    overflow: hidden;
  }


  #login1 {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #2d3a4b;
  }

  #login1,
  html {
    height: 100%;
  }

  h1 {
    font-size: 26px;
    font-weight: 400;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .elemform {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    margin-bottom: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;

  }


  .elemform input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #eee;
    height: 47px;
    position: absolute;

    top: 0px;
    width: 80%;
    left: 5%;
  }


  .el-button-primary {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    width: 100%;
    background-color: #409eff;
    border-color: #409eff;
  }


  .el-input--small .el-input__inner {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #eee;
    height: 47px;
  }



  #login {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }

</style>
