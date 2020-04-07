<template>

  <div style="border: 1px blue solid; margin-top: 10px;">
    <h3>组件插槽</h3>
    <div style="height: 30px;">
      <slot name="left"></slot>

      <P> --- <span style="color: red; font-size: 18px;"> {{title}}</span></P>

      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
   /*  props: ["title", "src"], */
   props: {
      title: String
    }
  }
</script>

<style scoped="scoped">
  h1 {
    font-size: 15px;
  }

  p {
    float: left;
    margin-right: 15px;
  }

  .left {
    color: #125ACD;
  }

  .right {
    color: #00FFFF;
  }
</style>
