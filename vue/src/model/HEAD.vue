<template lang="html">
  <div class="HEAD">
    <div class="header">
      <h4 class="header-cont">主页</h4>
    </div>
  </div>
</template>

<script>
  export default {
	    name: "HEAD",
   /*  props: ["title", "src"], */
 
  }
</script>

<style lang="css" scoped>
.head{
  width: 100%;
  height: 2rem;
}
.header{
  width: 100%;
  height: 4rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color:#DEDEDE;
  border-bottom: 2px solid #ff8000;
}
.header h4 {
  width: 100%;
  text-align: center;
  line-height: 2rem;
  font-size: 1.4rem;
}
</style>
