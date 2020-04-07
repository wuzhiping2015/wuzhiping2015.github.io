<template>
  <div id="dome">
    <el-row>
      <h5 style="text-align: left;">脚本内容 ：{{b}}</h5>
      <el-button plain @click="b1">脚本调用事件</el-button>
      <el-button @click="b2" type="primary" plain>方法调用</el-button>
      <el-button @click="b3" type="success" plain>方法参数</el-button>
    </el-row>
    <span>组件引入 </span>

    <shop></shop>
  </div>
</template>

<script>
  //组件


  //这里引入一个JS 文件  //这是调用的方法 bt1, pi , Helios
  import {
    bt1,
    pi,
    settino,
    Helios
  } from "@/assets/add.js";

  //这里调用一个组件
  import shop from "@/shop/shop.vue";

  import Vue from "vue";

  let data = {
    ishow: "false",
    b: "脚本事件",
  };
  let vm = new Vue({});
  let app = {};

  export default {
    name: "dome",
    data() {
      app = this;
      return data;
    },
    methods: {
      b1() {
        this.b = pi;
        Helios.b2();
      },
      b2() {
        this.b = bt1() + "：---：" + pi + ":" + settino + ":" ;
         
         Helios.b6()
      },
      b3() {
        this.b = bt1();
      }
    },
    components: {
      shop
    },

    beforeCreate() {
      /* console.log("创建前：");
           console.log(this.$data); */
    },
    created() {
      // console.log("创建完成：");
      //  console.log(this.$data);
    },
    beforeMount() {
      /* console.log("挂载前：");
          console.log(this.$data); */
    },
    mounted() {
      /*  console.log(99999999999999999);
         window.addEventListener('hashchange', (e) => {
           var currentPath = window.location.hash.slice(1); // 获取输入的路由
           console.log(currentPath);
           if (this.$router.path !== currentPath) {
             this.$router.push(currentPath); // 动态跳转
             console.log(currentPath);
           }
         }, false); */

      //JS 外部调用


      window.addEventListener(
        "hashchange", e => {
          console.log("2222222222222222");
          console.log(e.oldURL);
          console.log(e.newURL);
          var currentPath = window.location.hash.slice(1); // 获取输入的路由
          console.log(currentPath);
          if (this.$router.path !== currentPath) {
            this.$router.push(currentPath); // 动态跳转
          }
        },
        false
      );

      /*  $("body").resize();
         console.log(this.$data); */
    },
    beforeUpdate() {
      /*console.log('=即将更新渲染=');
          console.log(this.$data); */
    },
    updated() {
      // console.log("==更新成功==");
      // console.log(this.$data);
    },
    beforeDestory() {
      /*console.log("销毁前："); */
    },
    destoryed() {
      /*  console.log("销毁完成："); */
    },
    onLoad() {
      //加载
      this.init();
    },
    //事件
    //我是一个过滤器
    filters: {
      filtersTitleers: function(value) {}
    },
    //我是监听器
    computed: {},
    //它可以用来监测Vue实例上的数据变动
    watch: {},
    mixins: [],
  };
</script>

<style>
  .obj {
    border: 1px solid red;
    padding: 4px;
  }

  .obj1 {
    font-weight: 600;
    font-size: 20px;
  }
</style>
