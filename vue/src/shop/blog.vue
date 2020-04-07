<template>
  <div id="blog">
    <mylogo :title="title" :src="src"></mylogo>
    <el-button type="warning" plain @click="change_title">修改魔板标题</el-button>
    <p> 外部导入一个脚本 ：<font style="color: red;">{{titles}} {{ this.text}}</font>
    </p>
    <table border="1">

      <tr v-for="(v,i) in bolg ">
        <td style="width: 60px;">
          <router-link to="/bb">
            {{v.id}}
          </router-link>
        </td>
        <td>
          <div style="width: 250px;" @click="linkurl(v.id)">{{v.title}}</div>
        </td>
        <td><img :src="(v.url)" width="100"></td>
      </tr>
    </table>
<!-- src1:require('../assets/images/a.gif'), -->


    <div>

    </div>
  </div>
</template>


<script>
  import mylogo from '@/shop/Logo.vue'

  import {
    wzp
  } from "@/assets/add.js"

  let app = {};
  let data = {
    bolg: {},
    title: "列表页面",
    src: "",
    titles: wzp.mydatalist(),
    testMix: this.text
  };
  export default {
    name: "blog",
    data() {
      app = this;
      return data;
    },
    mounted() {
      this.title = "列表页面";

      /*  this.$http.get('http://localhost:3000/photos").then(
           response => {
             if (response.statusText) {
               //数据请求成功
               this.$notify({
                 title: "成功",
                 message: "数据请求成功",
                 type: "success",
                 duration: 1000
               });
               this.bolg = response.data.slice(0, 10)
               console.log(response.data.slice(0, 10));
             } else {
               toast.$message.error("错了哦，数据加载错误");
             }
           },
           response => {
             this.$message.error("错了哦，数据加载错误");
           }
         ); */

      this.$http.get('http://localhost:3000/photos').then(response => {

        //数据请求成功
        this.$notify({
          title: "成功",
          message: "数据请求成功",
          type: "success",
          duration: 1000
        });
        this.bolg = response.data.slice(0, 10)
        console.log(response.data.slice(0, 10));

        console.log(this.bolg)
      }, response => {
        this.$message.error("错了哦，数据加载错误");
      });




    },
    methods: {
      change_title() {
        this.title = "列表页面111";
      },
      linkurl(shid) {
        var currentPath = window.location.hash.slice(1); // 获取输入的路由


        // 获取数据 存储起来
        let shop = this.bolg[parseInt(shid - 1)];
        sessionStorage.setItem("shid", shop.id);
        sessionStorage.setItem("title", shop.title);
        sessionStorage.setItem("url", shop.url);

        //魔板传参数
        this.src = shop.url;

        //页面跳转方法
        this.$router.push("blogs");
        /*  this.$router.push({path:'bb',query:{plan:shid}}); */
        /*  this.$router.push({name: 'blogs', query: {id: shid} }); */
      }
    },
    components: {
      mylogo
    },
    mixins: [wzp],

  };
</script>


<style>


</style>
