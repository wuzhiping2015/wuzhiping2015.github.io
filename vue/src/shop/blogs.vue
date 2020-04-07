<template>
  <div id="blog">
    <mylogo :title="title1" :src="url"></mylogo>
    <el-button type="warning" plain @click="change_title">修改魔板标题</el-button>
    <p>ID: {{shid}}</p>
    <p>
      标题： {{title}}
    </p>
    <div>
    </div>
  </div>
</template>


<script>
  import mylogo from '@/shop/Logo.vue'

  let app = {};
  let data = {

    shid: "*****",
    title: "****",
    url: "",


    title1: "列表详情"
  };
  export default {
    name: "blog",
    data() {
      app = this;
      return data;
    },
    mounted() {

      this.shid = sessionStorage.getItem("shid");
      this.title = sessionStorage.getItem("title");
      this.url = sessionStorage.getItem("url");

      console.log(this.bolg);
      /* this.$http.get("http://jsonplaceholder.typicode.com/photos/2").then(
         response => {
           if (response.statusText) {
             //数据请求成功
             this.$notify({
               title: "成功",
               message: "数据请求成功",
               type: "success",
               duration: 1000
             });
             console.log(response.data);

           } else {
             toast.$message.error("错了哦，数据加载错误");
           }
         },
         response => {
           this.$message.error("错了哦，数据加载错误");
         }
       ); */

    },
    methods: {
      change_title() {
        this.title = "列表详情 22222";
      },
      linkurl(shid) {
        var currentPath = window.location.hash.slice(1); // 获取输入的路由

        //3中跳转方式
        /*  this.$router.push({
            name: 'blogs',
            query: {
              id: shid
            }
          }); */
        sessionStorage.setItem("shid", shid);

        this.$router.push("blogs");
        /*  this.$router.push({path:'bb',query:{plan:shid}}); */
      }

    },
    components: {
      mylogo
    }
  };
</script>


<style>


</style>
