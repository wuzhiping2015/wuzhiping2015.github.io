<template>
  <div class="logo">
    <H1>es6</H1>

    <h2>ES6 调用方法传参：{{msg}}</h2>

    <h2>ES6 调用方法： {{msg1}}</h2>
    <h2>数组：{{array}}</h2>

    <button v-if="showbtn" @click="handleclick">click me</button>

    <ul>
      <li v-for="book in book">{{book.name}}</li>
    </ul>
  </div>
</template>

<script>
  function f() {
    let n = 5;
    if (true) {
      let n = 10;
    }
    console.log(n);
  }
  f();

  let s = "Hello world";
  s.startsWith("Hello");
  s.includes("o");

  function example() {
    return [1, 2, 3];
  }
  let [a, b, c] = example();

  console.log(example());

  function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
      throw new Error(

      )
    }
  }

  window.a = 1;
  a = 2;
  window.a;

  var constantize = obj => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
      if (typeof obj[key] === "object") {
        constantize(obj[key]);
      }
    });
  };

  //ES6 对象
  let vm = {};

  let data = {
    argum: cbd, //引用方法
    msg: "测试",
    qq: "",
    username: "测试名",
    age: "122",
    showbtn: true,
    msg1: "",
    array: "",
    book: [{
        name: "<<Javascript 高级程序设计>>"
      },
      {
        name: "<javascript 语言精粹>"
      },
      {
        name: "javascript 经典"
      }
    ]
  };

  /* class Calc {
    constructor() {
      console.log("calc constructor");
      console.log(vm);
    }
    add(a, b) {
      return a + b;
    }
  }

  var c = new Calc();
  c.constructor();

  console.log(c.add(1, 2)); */

  const pi = 12222.22;
  console.log(pi);

  const person = {
    username: "小暖",
    age: 18,
    sayhello: () => {
      setInterval(() => {
        console.log("我叫 -" + vm.username + "-我今年-" + vm.age + "-岁");
      }, 5000);
    }
  };
  person.sayhello();

  class cale {
    constructor() {
      console.log("calc constructor");
    }
    add(a, b) {
      return a + b;
    }
    add1() {
      return 1 + 3 + "aaaaaa";
    }
  }
  var cbd = new cale();

  export default {
    name: "logo",
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
      // console.log("创建后");
    },
    beforeMount() {
      /* console.log("挂载前：");
         console.log(this.$data); */
    },
    mounted() {
      /* console.log("载入后");*/
      $("body").resize();
      /* 
      this.msg = this.$data.argum.add(2, 4);
      this.msg1 = this.$data.argum.add1(); */

      console.log(this.$data);

      let c = [];
      let c1 = [];

      for (let i = 0; i < 10; i++) {
        c.push(i);
        c1[i] = function() {
          console.log(i);
        };
      }

      this.array = c;

      c1[6]();

      function bar(x = 3, y = x) {
        //  return [x,y];
        console.log([x, y] + "---88888");
      }

      bar();

      const foo = Object.freeze({});

      () => console.log(111);
    },
    beforeUpdate() {
      /*console.log('更新前');
       console.log(this.$data); */
    },
    updated() {
      console.log("==更新后==");
    },
    beforeDestory() {
      console.log("销毁前：");
    },
    destoryed() {
      console.log("销毁后：");
    },
    //事件
    methods: {
      handleclick() {
        alert(this.$data.showbtn);
      }
    },
    //我是一个过滤器
    filters: {},
    //我是监听器
    computed: {},
    //它可以用来监测Vue实例上的数据变动
    watch: {}
  };
</script>

<style scoped>
</style>
