<template>
  <div class="index">

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: #004085;"> <img :src="src1" :width="w"></div>
        <div class="swiper-slide" style="background:#007BFF;"> <img :src="src2" :width="w"> Slide 2</div>
        <div class="swiper-slide" style="background:#0D6AAD;"><img :src="src3" :width="w"> Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>

    <div class="example">

      <ul class="list-group">
        <router-link to="/index" tag="li">index</router-link>
        <router-link to="/bb" tag="li">显示第一个VUE页面 </router-link>


        <router-link to="/bendiqingqiu" tag="li"> JSON-SERVER 请求</router-link>
        <router-link to="/blog" tag="li">调用真是的借口显示BLOG文章</router-link>

        <router-link to="/biaodan" tag="li">表单输入大全</router-link>

        <router-link to="/biaodantijiao" tag="li">表单提交</router-link>

        <router-link to="/" tag="li">组件的使用 列表 详情</router-link>


        <router-link to="#" tag="li">Min的例子</router-link>

        <router-link to="#" tag="li">Vuex倒计时</router-link>

        <li>
          <router-link to="#"> 倒计时页面2</router-link>
        </li>
      </ul>


    </div>
  </div>
</template>
<style scoped="scoped">
  .swiper-container {
    width: 500px;
    height: 300px;
    margin: 20px auto;
  }

  .list-group {
    float: left;
  }

  .list-group li {
    width: 300px;
  }
</style>
<script>
  import Swiper from "swiper"
  import "swiper/css/swiper.css"



  let app = {};
  let data = {
    a: "这是一个测试文件,你知道VUE 的进步测试么",
    b: "",
    cccc: ["ab", "dd", "cc", "we", "er"],
    mycolor: "red",
    src1: require('../assets/images/a.gif'),
    src2: require('../assets/images/l2.png'),
    src3: require('../assets/images/kefu.png'),
    w: "100"
  };
  export default {
    name: "index",
    data() {
      app = this;
      return data;
    },
    mounted() {
      new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        autoplay: true, //设置自动循环播放

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      })
    },

    methods: {

    }
  };
</script>



<style scoped="scoped">
  .example {
    width: 300px;
  }

  .example li {
    background: #dedede;
    padding: 5px 3px;
    margin-bottom: 3px;
  }
</style>
