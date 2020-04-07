<template>
  <div class="index" >
    <div class="bs-example" data-example-id="simple-list-group">
    <ul class="list-group">
      <li class="list-group-item">H</li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
      <li class="list-group-item"></li>
    </ul>
  </div>
  </div>
</template>

<script>

let app = {};
let data = {
  a: "这是一个测试文件,你知道VUE 的进步测试么",
  b: "",
  cccc: ["ab", "dd", "cc", "we", "er"],
  mycolor: "red"
};
export default {
  name: "index",
  data() {
    app = this;
    return data;
  },
  mounted() {

  },

  methods: {

  }
};
</script>
<style scoped="scoped">


</style>
