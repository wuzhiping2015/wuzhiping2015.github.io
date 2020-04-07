<template>
  <div class="bb">
    我是一个1111外部中间件
    <input v-model="dd" />
    <el-input v-model="dd"></el-input>
    {{dd}}


    <h3>1、使用 v-if 来切换按钮上的文字和 div 的显示样式</h3>


    <button v-on:click="cheangeDiv()" style="width:100px;">{{theWord}}</button>
    <!--  如果 flag 为 true 的话那么就显示 div -->
    <div v-if="flag">
      <div id="showDiv">我显示出来了</div>
    </div>
    <!-- 否则显示圆形的 div -->
    <div v-else>
      <div id="showBuleDiv">
        <span style="color:white">哈哈</span>
      </div>
    </div>
    <hr />
    <h3>2、使用 v-for 来循环数组</h3>

    <span>列举出你喜欢吃的水果</span>
    <br />我喜欢吃的水果有
    <ul>
      <li v-for="item in fruit">
        <span>{{item}}</span>
      </li>
    </ul>

    <h3>3、使用 v-for 循环输出 以下 json 串</h3>
    <p>
      mydatas:[
      {"name":"TigerChain","age":"保密","address":"地球中国","lover":"不告诉你"},
      {"name":"张三","age":"23","address":"地球中国","lover":"打游戏"},
      {"name":"李四","age":"25","address":"地球中国","lover":"读书"},
      {"name":"王五","age":"30","address":"是中唯一不下雪的地方","lover":"写代码"},
      {"name":"赵六","age":"18","address":"中国北京","lover":"写博客"},
      {"name":"钱七","age":"27","address":"中国陕西","lover":"做菜"}
      ]
    </p>
    <table border="1">
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>地址</th>
        <th>爱好</th>
      </tr>
      <tr v-for="(item,index) in mydatas">
        <!-- 其中 index 是索引，也就是数组的角标 -->
        <td>
          <span>{{index}}</span>
        </td>
        <td>
          <span>{{item.name}}</span>
        </td>
        <td>
          <span>{{item.age}}</span>
        </td>
        <td>
          <span>{{item.address}}</span>
        </td>
        <td>
          <span>{{item.lover}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>



<script>
  let vm = {};

  let data = {
    a: "111",
    dd: "",
    c: "一个新的页面路由",
    demo: "",
    value: "",
    theWord: "圆形",
    flag: false,
    msg: "show me",
    mydatas: [{
        name: "TigerChain",
        age: "保密",
        address: "地球中国",
        lover: "不告诉你"
      },
      {
        name: "张三",
        age: "23",
        address: "地球中国",
        lover: "打游戏"
      },
      {
        name: "李四",
        age: "25",
        address: "地球中国",
        lover: "读书"
      },
      {
        name: "王五",
        age: "30",
        address: "是中唯一不下雪的地方",
        lover: "写代码"
      },
      {
        name: "赵六",
        age: "18",
        address: "中国北京",
        lover: "写博客"
      },
      {
        name: "钱七",
        age: "27",
        address: "中国陕西",
        lover: "做菜"
      }
    ],
    fruit: ["苹果", "香蕉", "葡萄", "美国香瓜"]
  };

  export default {
    name: "bb",
    data() {
      vm = this;
      return data;
    },
    methods: {
      cheangeDiv() {
        this.flag = !this.flag;
        if (this.theWord == "圆形") {
          this.theWord = "方形";
        } else {
          this.theWord = "圆形";
        }
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
</style>
