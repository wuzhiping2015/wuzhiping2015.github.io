<template>
  <div class="bbb" style="padding:10px;">
    <h3>wewee</h3>
    {{c}}
    <br />
    <button @click="b1()">点击随机</button>
    {{a}}
    <div style="border:1px solid red">
      <div class="title" :class="{'active':count > 2,'active1':getCount,'test':true}">测试 Class</div>

      <div class="title1" :style="[{'height':getCount() ? '20px' : '40px'},styleObj]">:style测试</div>
      <div :style="styleObj">一个class</div>
    </div>
    <table>
      <tr>
        <td>{{c}}</td>
        <td>{{"helios"+c}}</td>
        <td>{{2<3?a:c}}</td>
        <td>
          <h3 :class="{active:0}">一个样式文件</h3>
        </td>
        <td></td>
        <td></td>
      </tr>
    </table>
    {{jia}}
    <div :class="{ aaa: isActive, 'text-danger': hasError }">一个测试文件</div>

    <div :class="classObject">1222</div>

    <div title="表单">
      <h3> 表单</h3>
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
      </select>
      <span>Selected: {{ selected }}</span>

      <label for="jack"><input type="checkbox" value="jack" id="checkbox" v-model="checked" />
        jack</label>
      <label><input type="checkbox" id="john" value="john" v-model="checked" />
        John</label>
      <label><input type="checkbox" id="mike" value="mike" v-model="checked" />
        mike</label>
      <input type="text" v-model="checked">


      <div>
        <label><input type="radio" id="one" value="1" v-model="picked">
          one
        </label>
        &nbsp;&nbsp;
        <label>
          <input type="radio" id="tow" value="2" v-model="picked">
          two
        </label>
        <span>Picked {{picked}}</span>

        <input type="button" @click="picked+=1" value="点击 加"></button>
        <input v-model.trim="picked">
        {{picked}}
        <button type="button" @click="picked -=1" :disabled="picked<=1">点击减</button>
      </div>
    </div>

    <h1 v-if="picked==1">我是一</h1>

    <h1 v-if="picked>=5"> 我是大于5</h1>

    <p> 搜索 匹配才显示</p>
    <ul>
      <li v-for=" tech in options" v-if="tech.text.indexOf('o')==0">
        模糊查询 ndexOf :-- {{tech.text}}
      </li>

      <li v-for="n in name" v-if="n.match('w')==null">
        模糊查询 match : ---{{n}}
      </li>
    </ul>

    <br /><br /><br /><br /><br />
  </div>
</template>



<script>
  /* Vue.components("todoitem", {
  props: ["todo"],
  template: "<li>ddddd</li>"
});
 */





  let vm = {};

  let data = {
    selected: "1",
    isActive: true,
    hasError: true,
    picked: 1,
    classObject: {
      active: true
    },
    options: [{
        text: "one",
        value: "1"
      },
      {
        text: "two",
        value: "2"
      },
      {
        text: "three",
        value: "3"
      }
    ],
    name: ["abc", "cde", "drg", "dfff", "www", "ww"],
    checked: [],
    a: 11,
    dd: "",
    isActive: 0,
    c: "一个新的页面路由",
    demo: "",
    value: "",
    count: 5,
    styleObj: {
      "font-size": "20px",
      color: "red"
    }
  };

  export default {
    name: "bbb",
    data() {
      vm = this;
      return data;
    },
    components: {
      // App,
    },
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

      this.$http.get("http://localhost:3000/users").then((response) => {
        console.log(response.data)
         this.blogs = response.data
      }, (response) => {
        console.error(response);
      })


      this.keydown();
      /*   setTimeout(function() {
              //  SiteInfoDate.red1();
          }, 500); */
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
      /*   console.log("销毁前："); */
    },
    destoryed() {
      /* console.log("销毁完成："); */
    },
    //事件
    methods: {
      b1: function() {
        vm.a = Math.random(vm.a + 1);
      },
      getCount() {
        return true;
      },
      keydown() {
        console.log("方法马上调用-----------------------");
      }
    },
    //我是一个过滤器
    filters: {
      filtersTitleers: function(value) {
        var c = value;
        c = "我是一个过滤器";
        return c;
      }
    },
    //我是监听器 计算属性
    computed: {

      rescom: function() {
        return (Number(vm.n) + Number(vm.n1)) * 3;
      },
      jia() {
        return 1 + 1;
      }
    },
    //它可以用来监测Vue实例上的数据变动
    watch: {
      demo(val) {
        this.value = this.demo;
        console.log(this.value);
      }
    }
  };
</script>


<style scoped>
  .active {
    background: #dedede;
    color: #409eff;
    font-size: 15px;
  }

  td {
    border: 1px solid blue;
    padding: 10px;
  }

  .active {
    font-size: 14px;
    font-weight: 600;
  }

  .test {
    font-size: 30px;
  }

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
