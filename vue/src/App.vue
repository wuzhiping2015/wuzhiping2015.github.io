<template>
  <div id="dome"> 
    <router-view></router-view>
  </div>
</template>
<style>
/*@import 'https://unpkg.com/element-ui/lib/theme-chalk/index.css';
  @import 'https://getbootstrapadmin.com/remark/global/css/bootstrap.min.css?v4.0.2'; */

/* @import  'assets/element_index.css';  */

/* 引入css方法 */
@import "assets/bootstrap.css";

</style>


<script>
import { Helios } from "@/assets/comment.js";



import Vue from "vue";

let data = {
  ishow: "false"
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
    lihover() {
      this.ishow = true;
      //  console.log(111);
    },
    invisible() {
      this.ishow = false;
    },
    index() {
      this.$router.replace("/");
    },
    login() {
      this.$router.replace("/login/temp");
    },
    Inde() {
      //this.$router.replace("/Index");
      this.$router.replace("/Index");
      console.log(this);
      console.log(vm);
    }
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

    window.addEventListener(
      "hashchange",
      e => {
        console.log(e.oldURL);
        console.log(e.newURL);

        var currentPath = window.location.hash.slice(1); // 获取输入的路由
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
  watch: {}
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

.nav li {
  float: left;
  margin-right: 30px;
  text-align: center;
}

.nav ul li {
  height: 30px;
  position: relative;
  line-height: 30px;
}

.nav ul li ul {
  position: absolute;
  left: -28px;
  top: 30px;
  width: 94px !important;
  text-align: left;
  box-sizing: content-box;
}

.nav ul li ul li {
  display: block;
  float: none;
  font-weight: 200;
}

ul li {
  float: left;
  margin-right: 40px;
}

ul {
  height: 30px;
}
</style>
