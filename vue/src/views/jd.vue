<template>
  <div id="JD">
    <h1>
      {{msg }}
    </h1>
    <input type="text" v-model="m" placeholder="测试输入看看">
    <div style="padding: 20px; border: 1px solid red;">
      <h3> TAB 切换</h3>
      <p v-if="red" style="color:red">{{red}}</p>
      <p v-else>{{red}}</p>

      <div class="slide">
        <b v-for="(value,index) in users" :class="{active:num==index}" @click="acon(index)">{{index}}</b>
      </div>
      <ul>
        <li v-for="(value,index) in users" v-show="index==num">{{index}}:{{value.tag}}</li>
      </ul>
    </div>

    <h1 v-if="seen">
      这是一个测试: {{msg}}
    </h1>
    <h1 v-else> {{q}}</h1>

    <ul style="font-size: 20px; width: 60px;">
      <li v-for="(value,index) in pri">{{value}}</li>
    </ul>
    <el-button type="primary" @click="json">测试join() {{msg}}</el-button>



  </div>

</template>

<script>
  let vm;
  export default {
    data() {
      return {
        fullname: 111111111,
        selected: "a",
        m: "a",
        options: [{
          text: "111",
          value: "a"
        }],
        seen: true,
        num: 0,
        vm: this,
        isH5Plus: true,
        q: "你看到了",
        red: false,
        msg: "Welcome to you vue.js app",
        pri: {
          fir: "ddi",
          last: "fe",
          age: 4
        },
        users: [{
          tag: "aa"
        }]
      };
    },
    onLoad() {},
    methods: {
      abc: function(a) {
        console.log(a);
      },
      acon(i) {
        this.num = i;
      },
      json() {
        this.msg = 122222;
      }
    },
    computed: {
      classobj: function() {

      }
    },
    mounted() {},
    filters: {
      canpitalize(value) {
        if (value) {
          return 111;
        } else {
          return 3333;
        }
      }
    },
    watch: {

    }
  };
</script>


<style scoped>
  ul li {
    padding: 3px;
    border: 1px solid red;
    margin: 2px;
  }

  .slide b {
    font-size: 14px;
    margin-right: 20px;
    padding: 5px;
    background: #DEDEDE;
  }

  .box .label,
  .list .li {
    float: left;
    margin-right: 20px;
  }

  .active {
    color: red;
  }
</style>
