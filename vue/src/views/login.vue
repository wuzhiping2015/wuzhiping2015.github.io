<template>
  <div id="login">
    <!-- 路由出口 -->

    <h2>二级导航</h2>
    <ul>
      <router-link to="/" tag="li">欢迎!主DOME</router-link>
      <router-link to="/login/temp"> 登录 </router-link>
      <router-link to="/login/temp1" tag="li"> 登录11 </router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>
<style>

</style>
<script>
export default {
  props: ['title'],
}
</script>