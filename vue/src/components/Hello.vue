<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-row>
      <el-button @click="btn(this)">默认按钮</el-button>
      <el-button  type="primary">主要按钮</el-button>
      <el-button  type="success">成功按钮</el-button>
      <el-button  type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button  type="danger">危险按钮</el-button>
    </el-row>

    <div>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">{{age.a}} - {{age.b}}</el-link><br/>
      <el-link type="success">成功链接</el-link><br/>
      <el-link type="warning">警告链接</el-link><br/>
      <el-link type="danger">危险链接</el-link><br/>
      <el-link type="info">信息链接</el-link><br/>
    </div>
  </div>
</template>

<script>
  let vm = {};
  export default {
    name: 'hello',
    data() {
      vm = this;
      return {
        msg: 'Welcome to Your Vue.js App',
        age: {
          a: 1,
          b: 2,
          c: 3,
        }
      }
    },
    methods: {
      btn(e) {
        this.age.a =  2;
        this.age.b=(this.age.b)+"我的工资条";
      }
    }
  }
</script>

<style>
  h1 {
    color: red;
  }
</style>
