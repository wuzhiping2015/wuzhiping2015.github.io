<template>
  <div id="FOOT">
    <h1> {{mycolor}}    组件哪些显示哪些隐藏</h1>
  </div>

</template>

<script>
  let app = {};
  let data = {
    a: "这是一个测试文件,你知道VUE 的进步测试么",
    b: "",
    cccc: ["ab", "dd", "cc", "we", "er"],
    mycolor: "FOOT"
  };
  export default {
    name: "FOOT",
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
        this.$http.get("http://siwei.me/api/interface/blogs/all").then(
          response => {
            console.log(response);
          },
          response => {
            console.error(response);
          }
        );
      }
    }
  };
</script>

<style>
</style>
