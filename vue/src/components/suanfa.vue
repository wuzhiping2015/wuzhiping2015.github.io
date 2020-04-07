<template>
  <div class="hello">
    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">

      <div v-show="show" class="transition-box" @click="btn0()">.el-fade-in-linear</div>



      <el-button @click="btn2()">按钮2</el-button>

      <el-button @click="btn1()">btn1</el-button>
      {{msg}}
    </div>
    <div>
      点我看看外部一个事件:<h2>{{msg}}</h2>
    </div>
    <h4>
      <b>测试vuex 的一个方法</b>：<br>
      <!-- {{this.$store.state.count}}<br />
      {{this.$store.state.arr}}<br />
      {{this.$store.state.abc()}}<br /> -->

    </h4>
    <div>
      <el-button id="abc"> jquery 点击事件</el-button>
    </div>
    <div class="col-md-12">
      <div class="box">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">Bordered Table</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th> number/10: {{number/10}}</th>
                  <th>{{keys==1?true:false}}</th>
                  <th>{{msgww.split("-")}}</th>
                  <th style="width: 40px">
                    <el-button class="button">QQ</el-button>
                  </th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td><a href="javascript:void(0);" v-for="(i,v) in arr">({{v}}-{{i}})-</a></td>
                  <td><input type="text" v-model="arr"></td>
                  <td>1.</td>
                  <td>Update software</td>
                  <td>1.</td>
                  <td>Update software</td>
                  <td>1.</td>
                  <td>Update software</td>

                  <td>
                    <div :class="[msgww,qq]">绑定Claas</div>
                    <div :style="alertstyle">绑定style 样式</div>


                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <!-- /.box-body -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  $(function() {
    $("#abc").click(function(e) {
      $(this).css({
        "margin-left": "+=" + 20 + "px",
      });
      console.log(e);
    });
    var b = 1;
    $(".button").click(function(e) {
      if (b == 1) {
        $("#abc").hide();
        b = 2;
      } else {
        $("#abc").show();
        b = 1;
      }
    });
  })
  //引入一个脚本文件*************
  import CommonHi from "@/assets/common_hi";
  //引入vue
  import Vue from "vue";
  /* Vue.directive("my-directive", function(value) {
   bind:function(){}
  }); */

  Vue.directive('hello', {
    bind: function() {
      alert("一个测试文件");
    },
    update: function(value) {
      this.el.innerHTML = 'NAME-' + this.name
    }
  })

  export default {
    name: 'hello',
    data: () => ({
      show: true,
      msg: "",
      msgww: "title",
      number: 100,
      keys: 1,
      qq: "qq",
      arr: [1, , 23, 4, 5, 67],
      alertstyle: {
        color: "red",
        fontSize: "20px"
      },

    }),
    mixins: [CommonHi],
    methods: {
      goBack() {
        this.msg = 'go back';
      },
      btn1() {
        this.msg = this.ch2();
      },
      btn0() {
        this.msg = this.abc("你好");
      },
      btn2() {
        this.msg1();
      }

    },

    mounted() {
      $("body").resize();
      console.log("创建完成：111111111111");
      // this.msg1();
      this.msg = this.ch2()
    },
    created() {

      this.msg = this.ch2()

      //  this.msg1();
      //console.log("创建完成：111111111111");
      //console.log(this.$router);
    }
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

  .title,
  .qq {
    font-size: 12px;
    color: red;
  }
</style>
