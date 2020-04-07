<template>
  <div class="elemT">
    <h1>组件通信</h1>

    <el-row :gutter="20">
      <el-col :span="16">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用"></el-checkbox>
        </el-checkbox-group>

        {{checkList}}
        <el-time-select
          v-model="msg"
          :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
          placeholder="选择时间"
        ></el-time-select>

        {{msg}}
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">点击按钮</el-button>
        </el-badge>

        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-button type="primary" @click="set1">一个点击事件</el-button>
      </el-col>
      <el-col :span="8">
        <el-input v-model="n" placeholder="请输入内容"></el-input>
        {{n}}
        <el-input v-model="n1" placeholder="请输入内容"></el-input>

        {{n1}}
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费"></el-switch>
    {{value3}}
    <el-switch
      style="display: block"
      v-model="value4"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    ></el-switch>

    {{value4}}
  </div>
</template>
  <script>
var SiteInfoDate = {
  //正则验证
  isValidIP: function(ip) {
    var reg = /((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/;
    return reg.test(ip);
  },

  /************** 第一条数据 **************/

  red1: function(msg) {
    console.log("这是一条不归路");
  },

  set1: function() {
    alert("错了哦，这是一条错误消息");
  },
  /************** 第一条数据 end **************/

  /************** 第2条数据 **************/
  red2: function(msg) {},
  set2: function() {}
};

let vm = {};

export default {
  name: "elemT",
  data: function() {
    vm = this;
    return {
      filtersTitle: "VUE data filter",
      msg: "",
      a: ["a", "b", "c"],
      n: "",
      n1: "",
      show: true,
      value3: true,
      value4: true,
      checkList: ["选中且禁用", "复选框 A"]
    };
  },

  /* data:()=>({
     vm = this;
     return {
      filtersTitle: "VUE data filter",
      msg: "",
      a: ["a", "b", "c"],
      n: "",
      n1: "",
      show: true,
      value3: true,
        value4: true,
      checkList: ["选中且禁用", "复选框 A"]
    };
  }), */

  beforeCreate() {
    /* console.log("创建前：");
       console.log(this.$data); */
  },
  created() {
    console.log("创建完成：");
    console.log(this.$data);
  },
  beforeMount() {
    /* console.log("挂载前：");
          console.log(this.$data); */
  },
  mounted() {
    $("body").resize();
    console.log(this.$data);
    setTimeout(function() {
      // SiteInfoDate.set1();
    }, 500);
  },
  beforeUpdate() {
    /*console.log('=即将更新渲染=');
      console.log(this.$data); */
  },
  updated() {
    console.log("==更新成功==");
    console.log(this.$data);
  },
  beforeDestory() {
    console.log("销毁前：");
  },
  destoryed() {
    console.log("销毁完成：");
  },
  //事件
  methods: {
    set1() {
      console.log(this);

      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息"
      });
    }
  },
  //我是一个过滤器
  filters: {
    filtersTitleers: function(value) {
      var c = value;
      c = "this is filter";
      return c;
    }
  },
  //我是监听器
  computed: {
    rescom: function() {
      return (Number(vm.n) + Number(vm.n1)) * 3; //重点this vm
    }
  }
};
</script>
<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>