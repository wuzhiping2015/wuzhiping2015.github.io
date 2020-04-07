<template>
  <div class="index" style="border: 4px solid rgb(207, 27, 27);text-align: center">
    <h1>测试</h1>
    <button @click="goto">点击返回</button>
    {{a}}
    <button @click="b1()">事件2</button>
    <button @click="b3()"> 外部事件3 </button>
    <button v-on:click='qqq+=1'>{{qqq}}</button>
    <ul>
      <li v-for="ba  in cccc" v-if="ba.indexOf('5')" v-bind:style="'color'+mycolor">{{ba}}</li>
    </ul>

    <h5>{{shijian}}啊啊啊啊啊啊啊啊啊啊啊啊</h5>

    <ceshi1></ceshi1>

  </div>
</template>


<script>
  //这里调用一个组件
  import ceshi1 from "@/views/ceshi1.vue";

  //引入事件方法
  import conhi from "@/assets/add.js";

  //引入事件方法
  import {
    Helios
  } from "@/assets/add.js";

  let app = {};
  let data = {
    a: "这是一个测试文件,你知道VUE 的进步测试么",
    b: "",
    qqq: 11,
    cccc: ["ab", "dd", "cc", "we", "er"],
    mycolor: "red",
    shijian: ""
  };
  export default {
    //引入JS
    mixins: [conhi],

    name: "index",
    data() {
      app = this;
      return data;
    },
    mounted() {
    //  this.shijian = this.ceshiyigewenjian("--我是外部调用的事件");
    },

    components: {
      ceshi1: ceshi1
    },

    methods: {
      goto() {
        this.$router.replace("/");
      },
      b1() {
        this.shijian = this.ceshiyigewenjian("111111111");
      },
      b3() {
        Helios.b2();
      }
    }
  };
</script>



<!-- <link rel="stylesheet" href="src/assets/bootstrap.css">
<link rel="stylesheet" href="src/assets/element_index.css"> -->
