<template>
  <div class="index" style="border: 4px solid rgb(207, 27, 27);text-align: center">
    <h1>走路迷失,请返1111111回地球</h1>
    <button @click="goto">点击返回</button>
  </div>
</template>


<script>
let app = {};
let data = {
  a: "111",
  b: ""
};
export default {
  name: "index",
  data() {
    app = this;
    return data;
  },
  mounted() {},
  methods: {
    goto() {
        this.$router.replace("/");
    }
  }
};
</script>



<!-- <link rel="stylesheet" href="src/assets/bootstrap.css">
<link rel="stylesheet" href="src/assets/element_index.css"> -->