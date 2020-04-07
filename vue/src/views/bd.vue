<template>
  <div id="biaodan">



    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{option.text}}
      </option>
    </select>
    <h1>11 {{selected}} </h1>
    <el-button type="primary" @click="cheshi">测试</el-button>

    <el-button @click="start">start</el-button>

    <div class="abc"></div>
    {{name}}



    <div id="qw"></div>


  </div>


</template>


<script>
  //对象
  class calc {
    add(a, b) {
      console.log(a + b)
    }
    xunhuan(bac) {
      bac = "asdasdfasdfasdfasd";
      $(".abc").html(bac);
    }
  }
  var c = new calc();
  c.add(4, 5);

  var a = [];
  for (var i = 0; i < 10; i++) {
    a[i] = function() {
      console.log(i);
    }
  }
  a[6]();

  let name = "bob",
    time = "today";

  function move({
    x,
    y
  } = {
    x: 0,
    y: 0
  }) {
    return [x, y];
  }




  function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  }
  factorial(4);

  function factorial(n, total) {
    if (n == 1) return total;
    return factorial(n - 1, n * total);
  }
  factorial(5, 1);


  function foo() {
    setTimeout(() => {
      console.log(`args：`, arguments);
    }, 100);
  }
  foo(111, 2, 3, 3, 4);

  var arr1 = [0, 1, 2, 3];
  var arr2 = [2, 3, 4];
  Array.prototype.push.apply(arr1, arr2);


  let jsonData = {
    id: 12,
    status: "ok",
    data: [23, 4]
  }

  let {
    id,
    status,
    data: number
  } = jsonData;

  console.log(id, status, number);
  $("#qw").html(id, status, number);


  const makp = new Map();
  makp.set("sirst", "hello");
  makp.set("second", "world");
  for (let [key, value] of makp) {
    console.log(key + "----is---" + value);
  }

  let name11 = "----------";
  let str = "return" + "`hello ${name11}`";

  let etmplate = ``;



  jQuery.ajax = function(url, {
    async = true,
    beforeSend = function() {},
    cache = true,
    complete = function() {},
    crossDomain = false,
    global = true,
  }) {};



  let app = {};
  let data = {
    name: "eeeeeeeeeeeeee",
    selected: 'a',
    hhhh: `hello  <b>${name}</b>,how are you <b>${time}</b>`.trim(),
    da: "2222222",
    options: [{
        text: '11',
        value: 'a'
      },
      {
        text: '22',
        value: 'b'
      },
      {
        text: '33',
        value: 'c'
      }
    ],
  };

  export function f() {

  }




  export default {
    name: "biaodan",
    data() {
      app = this;
      return data;
    },
    methods: {
      cheshi: function(event) {
        console.log(event);
      },
      start: function() {
        this.$notify({
          title: 'It works!',
          type: 'success',
          message: 'hing epic!',
          duration: 5000
        })
      }
    },
    created() {

    },
    beforeCreate() {
      /* console.log("创建前：");
           console.log(this.$data); */

    },
    beforeMount() {
      /* console.log("挂载前：");
          console.log(this.$data); */
    },
    mounted() {
      /*  $("body").resize();*/
      c.xunhuan(this.name);
      $("#eeeee").html(this.hhhh);
    },
    beforeUpdate() {
      /*console.log('=即将更新渲染=');
          console.log(this.$data); */

    },
    updated() {
      // console.log("==更新成功==");
      // console.log(this.$data);

    },
    beforeDestory() {
      /*console.log("销毁前："); */
    },
    destoryed() {
      /*  console.log("销毁完成："); */
    },
    onLoad() {

    },
    //事件
    //我是一个过滤器
    filters: {

    },
    //我是监听器
    computed: {},
    //它可以用来监测Vue实例上的数据变动
    watch: {}

  }
</script>

<style>
</style>
