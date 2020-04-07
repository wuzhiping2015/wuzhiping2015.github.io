<template>
  <div id="app">

    <el-container>

      <!-- 头部 start -->
      <el-header>
        <ul>
          <li>
            <router-link :to="{name: 'Index'}" exact> 返回首页 </router-link>
            <router-link :to="{name: 'bb'}" exact> 新闻 </router-link>
          </li>
        </ul>
        <!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="true">展开</el-radio-button>
          <el-radio-button :label="false">收起</el-radio-button>
        </el-radio-group> -->
      </el-header>
      <!-- 头部 endt -->


      <el-container style="padding-top:59px">

        <!-- 左侧菜单 start -->
        <el-aside width="200px">
          <el-col :span="24">
            <h5>前端技术文档</h5>
            <!--   <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"> -->
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <router-link :to="{name: 'Index'}"> Index </router-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <router-link :to="{name: 'Hello'}"> Hello </router-link>
                  </el-menu-item>

                  </el-menu-item>

                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>

              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>

        </el-aside>
        <!-- 左侧菜单 end -->

        <!--中心内容区域 start -->
        <el-main>
          <div class="commenter">

            <div style="border: 2px solid rgb(147, 161, 13))">
              <h2>APP.VUE</h2>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>
                  <a href="/">活动管理</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>


            <!-- 路由出口 -->
            <!--  <router-view></router-view> -->

            <div style="padding:10px;margin: 10px;">
              <div style="border: 2px solid rgb(97, 26, 26)">
                <h2>APP.VUE 区域</h2>
                父组件props传给子:<input type="text" v-model="qqq">
                <el-button type="primary" @click="b9()" style="color: #fff;">点击修改子组件</el-button>
              </div>
              <!-- 定义一个组件 -->

              <!--   @changeNew="b2 子组件传父组件 -->
              <cc :msg="qqq" @changeNew="b2" :outdata="qqq" v-model="qqq"></cc>
            </div>
          </div>
        </el-main>
        <!--中心内容区域 end -->
      </el-container>
    </el-container>

    <!-- 所有的动态页面，都在这里 -->
    <!--    <Index></Index> -->

  </div>
</template>


<!-- //app.vue  -->
<style lang="scss">
  /*  @import './styles/index.scss'; */
  /*  // 全局自定义的css样式  */
</style>




<script>
  import Index from "@/components/Index";
  import cc from "@/components/cc";
  let vm = {};

  let data = {
    a: "111",
    dd: "",
    c: "一个新的页面路由",
    demo: "",
    value: "",
    qqq: ""
  };

  export default {
    name: "bb",
    data() {
      vm = this;
      return data;
    },

    components: {
      Index,
      cc
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      b9() {
        this.qqq = this.qqq;
      },
      //子组件穿父组件
      b2(event) {
        //event 参数是接收 子组件传来的值，可以自己打印一下
        this.qqq = event;
      }

    }
  };


  // ES6 import/export用法

  export var name = "Mark";

  var name = "1";
  var age = 12;

  export var c = { name, age };
  console.log(c);


  export function setName(name) {
    console.log("exprot--" + name);
  }
  setName(111);

</script>

<style>
  .router-link-active {
    font-weight: 600;
    color: red
  }

  .commenter {
    background: #fff;
    padding: 20px;
  }

  .el-header,
  .el-footer {
    background-color: #fff;
    text-align: center;
  }

  .el-aside {
    background-color: #32323a;
    text-align: center;
  }

  .el-menu {
    background-color: #32323a !important;
    text-align: left !important;
  }

  .el-submenu__title {
    color: #ebedf0 !important;
  }

  .el-menu-item:focus,
  .el-menu-item:hover,
  .el-submenu__title:hover {
    outline: 0;
    color: #ebedf0 !important;
    background-color: #28282e !important;
  }

  a {
    color: #32323a !important;
  }


  .el-main {
    color: #2c343d !important;
  }

  .el-main {
    background-color: #f1f2f7;
    color: #2c343d;
    text-align: center;

  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-container {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0;
    bottom: 0;
  }

  .el-header {
    padding: 0;
    z-index: 1000;
  }

  /* // header菜单需要靠右的添加.fr即可(如：<el-menu-item class="fr" index="3">消息中心</el-menu-item>) */
  .el-header .fr {
    float: right;
  }

  .el-header .el-menu {
    border-bottom: none;
  }


  .el-col-24 h5 {
    height: 35px;
    line-height: 45px;
  }

  .el-aside .el-menu {
    border-right: none;
  }

  * {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #app {
    height: 100%;
  }
</style>