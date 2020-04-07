<template>

  <div class="events">
    <p>
      {{msg}}
    </p>
    <h1> {{a[0]}} </h1>

    <input type="text" v-model="filtersTitle">
    <h1 v-text="filtersTitle"></h1>
    <p>
      这是个过滤器：
      {{111 | filtersTitleers}}
    </p>
    <p>
      这是个监听器：
      <input v-model="n" type="number" maxlength="1" placeholder="请输入">
      <input v-model="n1" type="number" maxlength="1" placeholder="请输入">
      :监听器 {{rescom}}
    </p>


    <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>


  </div>
</template>
<script>
  var SiteInfoDate = {
    //正则验证
    isValidIP: function (ip) {
      var reg = /((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/;
      return reg.test(ip);
    },

    /************** 第一条数据 **************/

    red1: function (msg) {
      console.log("这是一条不归路");
    },

  };

  let vm = {};

  export default {
    name: "events",
    data: function () {
      vm = this;
      return {
        filtersTitle: "VUE data filter",
        msg: "",
        a: ["a", "b", "c"],
        n: "",
        n1: "",
        show: true
      };
    },

    /*   data:()=>({
    
      }), */

    beforeCreate() {
      /* console.log("创建前：");
         console.log(this.$data); */
    },
    created() {
      console.log("创建完成：");
      console.log(this.$data);
    },
    beforeMount() {
      /* console.log("挂载前：");
            console.log(this.$data); */
    },
    mounted() {
      $("body").resize();
      console.log(this.$data);
      /*  setTimeout(function () {
         SiteInfoDate.red1();
       }, 500); */
    },
    beforeUpdate() {
      /*console.log('=即将更新渲染=');
        console.log(this.$data); */
    },
    updated() {
      /*  console.log("==更新成功==");
       console.log(this.$data); */
    },
    beforeDestory() {
      /*    console.log("销毁前："); */
    },
    destoryed() {
      /*  console.log("销毁完成："); */
    },
    //事件
    methods: {
      /*  btn_red1: function () {
         SiteInfoDate.red1("read success");
       },
       btn_set1: function () {
         SiteInfoDate.set1();
       },
       btn_red2: function () {
         SiteInfoDate.red2("read success");
       },
       btn_set2: function () {
         SiteInfoDate.set2();
       } */
    },
    //我是一个过滤器
    filters: {
      filtersTitleers: function (value) {
        var c = value;
        c = "this is filter";
        return c;
      }
    },
    //我是监听器
    computed: {
      rescom: function () {
        return (Number(vm.n) + Number(vm.n1)) * 3;
      }
    }
  };
</script>
<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>