<template>
  <div id="Logo">
    <h2>
      <router-link to="/shop" style="font-size: 16px;">
        < 返回列表页</router-link> {{title}} </h2> <img src='http://zxpic.imtt.qq.com/zxpic_imtt/2019/08/12/1420/originalimage/142135_5059947_1_720_480.jpg'
          style="width: 100px;" />
        <img :src="src" style="width: 100px;" />
       <img :src="src1" :width="w"  >
  </div>
</template>


<script>
  export default {
    props: ["title", "src"],
    data: function() {
      return {
        src1:require('../assets/images/a.gif'),
        w:"150"
      }
    }
  };
</script>


<style>


</style>
