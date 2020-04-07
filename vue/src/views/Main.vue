<template>
  <div id="main">
    <div style="width: 600px; margin:0px auto; text-align:center;">
      <h1>主页面</h1>
      <ul>
        <li @click="login">
          !
          <b>点击登录</b>
        </li>
        <li @click="demo">
          !
          <b>点击登录DEMO</b>
        </li>
      </ul>

      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>

      <button @click="ch">export 外部调用点击事件</button>
      <button @click="ch1">按钮二</button>

      <h1>语言 {{msg}}</h1>
      <input type="text" v-model="msg" />

      <div>
        <img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" style="display: block; 	width: 45%; 		margin: 0 auto;" />
      </div>

      <img src="@/assets/11.gif" style="display: block;width: 45%;	margin: 0 auto;" />
    </div>
  </div>
</template>
<script>
  import CommonHi from "@/assets/common_hi";

  export default {
    data() {
      return {
        radio: "1",
        msg: ""
      };
    },
    methods: {
      login() {
        this.$router.replace("/login");
      },
      demo() {
        this.$router.replace("/Index");
      },
      ch() {
        this.msg = this.hi("测试");
      },
      ch1() {
        this.msg = this.ch2();
      }
    },
    mixins: [CommonHi],
    mounted() {
      //	console.log(this.$router);
    },
    created() {
      //console.log("创建完成：111111111111");
      //console.log(this.$router);
    }
  };
</script>
