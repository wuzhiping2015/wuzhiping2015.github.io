<template>
  <div class="cc" style="border: 1px solid rgb(241, 151, 32);padding: 10px;margin: 10px">

    <div id="tabbar">
      <div class="flagdiv" v-for="(item,index) in dataList" :class="{active:item.isAction}" @click="select(item)">
        <span>{{item.text}}</span>
      </div>

      <ul class="headul">AAAAAAAAAAAAAAAAAAA
        <li v-for="(data,index) in datas">
          <div class="header">{{data.title}}</div>
          <div class="contentul">
            <ul class="contentul">
              <li class="contentitem" v-for="(content,index) in data.content" @click="change(index,$event)">{{content.name}}</li>
            </ul>
          </div>
        </li>
      </ul>
      <span v-for="(item,index) in selectDatas">{{item}}</span>
      <h1>显示高度 {{b}}</h1>



      <input type="text" placeholder="请输入数字" class="inputstyle" v-model="content">

      <div class="firstdiv">
        <button @click="operator('clear')">归零</button>
        <button @click="operator('delete')">删除</button>
      </div>
      <div class="firstdiv">
        <button @click="operator('7')">7</button>
        <button @click="operator('8')">8</button>
        <button @click="operator('9')">9</button>
        <button @click="operator('*')">*</button>
      </div>
      <div class="firstdiv">
        <button @click="operator('4')">4</button>
        <button @click="operator('5')">5</button>
        <button @click="operator('6')">6</button>
        <button @click="operator('/')">/</button>
      </div>
      <div class="firstdiv">
        <button @click="operator('1')">1</button>
        <button @click="operator('2')">2</button>
        <button @click="operator('3')">3</button>
        <button @click="operator('-')">-</button>
      </div>
      <div class="firstdiv">
        <button @click="operator('0')">0</button>
        <button @click="operator('.')">.</button>
        <button @click="operator('+')">+</button>
        <button @click="operator('=')">=</button>
      </div>
    </div>

    <h1> 全局过滤器 {{b |  filtersTitleers }}</h1>

    <!-- <CommonItem :class="{peritemMrgingStyle:isActive}"  :leftImg="require('../src/assets/images/ic_new_friends.png')"
        leftLable="新的朋友"
        :clickItem="clickitem"
        :isShowDivider=true
      /> -->


    <abcd></abcd>


  </div>
</template>



<script>
  import abcd from "@/com/moban";

  let vm = {};

  let data = {
    a: "111",
    isActive: true,
    peritemMrgingStyle: 'itemStyle',
    b: 6666,
    msg: "",
    content: "",
    selectDatas: [],
    cssStyles: [],
    datas: [{
      title: "标题1",
      content: [{
          name: "内容1"
        },
        {
          name: "内容2"
        },
        {
          name: "内容3"
        },
        {
          name: "内容4"
        },
        {
          name: "内容5"
        },
        {
          name: "内容6"
        },
        {
          name: "内容7"
        },
        {
          name: "内容8"
        },
        {
          name: "内容9"
        }
      ]
    }],
    dataList: [{
        text: "标签11",
        isAction: true
      },
      {
        text: "标签22",
        isAction: false
      },
      {
        text: "标签33",
        isAction: false
      },
      {
        text: "标签44",
        isAction: false
      }
    ],
    isFix: false
  };

  export default {
    name: "cc",
    data() {
      vm = this;
      return data;
    },
    components: {
      abcd,
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
      window.addEventListener("scroll", this.handscroll);
      setTimeout(function() {
        //  SiteInfoDate.red1();
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
      /*   select(data) {
        this.dataList.forEach(function(item) {
          item.isAction = false;
        });
        // 选中那个让那个显示样式
        data.isAction = !data.isAction;
      }, */
      b2(event) {
        //event 参数是接收 子组件传来的值，可以自己打印一下
        this.a = event;
      },
      select(data) {
        this.dataList.forEach(function(itme) {
          itme.isAction = false;
        });
        data.isAction = !data.isAction;
      },

      change(index, event) {
        var e = event.target;
        if (e.className == "contentitem") {
          e.className = "contentitemSelect";
          this.selectDatas.push(e.innerText);
          this.cssStyles.push(e);
        } else if (e.className == "contentitemSelect") {
          var cccc = [];
          e.className = "contentitem";
          cccc = (JSON.parse((JSON.stringify(this.selectDatas))));

          // this.selectDatas.remove(e.innerText);
        }
      },

      handscroll() {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        this.b = scrollTop;
        var offsetTop = this.$el.querySelector("#tabbar").offsetTop;
        if (scrollTop > offsetTop) {
          this.isFix = true;
        } else {
          this.isFix = false;
        }
      },

      operator(flag) {
        switch (flag) {
          case "clear":
            this.content = 0;
            break;
          case "delete":
            // 逐个删除
            this.content = this.content.slice(0, -1);

            break;
          case "7":
          case "8":
          case "9":
          case "*":
          case "4":
          case "5":
          case "6":
          case "/":
          case "1":
          case "2":
          case "3":
          case "-":
          case "0":
          case ".":
          case "+":
            this.content += flag;
            break;
          case "=":
            // 这里只是做个简单判断，有问题，不严格
            if (
              !isNaN(this.content) ||
              this.isContains(this.content, "+") ||
              this.isContains(this.content, "-") ||
              this.isContains(this.content, "*") ||
              this.isContains(this.content, "/")
            ) {
              console.log(11111111111);
              this.content = eval(this.content);
            } else {
              console.log(22222);
              alert("非法输入");
            }

            break;
        }
      },
      isContains(str, substr) {
        console.log(str);
        console.log(substr);
        if (undefined != str) {
          return str.indexOf(substr) >= 0;
        }
      },
      clickitem() {

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
    //我是监听器
    computed: {
      rescom: function() {
        return (Number(vm.n) + Number(vm.n1)) * 3;
      }
    },
    //它可以用来监测Vue实例上的数据变动
    watch: {
      demo(val) {
        this.value = this.demo;
        console.log(this.value+"aaaaaaaaaaaaaaaaaaaaaaa");
         
      }
    }
  };
</script>
<style>
  .rootstyle {}

  /* 修改侧边栏的样式，这里注意 style 就不能写 scoped 了，这个样式是在 mint ui 的 styles.css 中
  scoped 只对本级起作用，不会重写 styles.css
 */
  .mint-indexlist-nav {
    border-left: 0px solid #ddd;
    background-color: transparent;
  }

  /* 侧边栏点击产生的背景效果 */
  .mint-indexlist-nav:active {
    background-color: #b8bbbf;
  }

  /* 修改侧边栏A-z的样式 */
  .mint-indexlist-navitem {
    font-size: 16px;
  }

  /* 列表导航 A——Z 的样式 */
  .mint-indexsection-index {
    background-color: #d9d9d9;
    height: 10px;
    display: flex;
    align-items: center;
  }

  /* 修改默认点击侧边栏显示出的提示框样式 */
  .mint-indexlist-indicator {
    background-color: #b8bbbf;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
  }

  .peritemMrgingStyle {
    padding-left: 10px;
    padding-right: 10px
  }

  .rootDiv {
    display: flex;
    flex-wrap: wrap;
  }

  .flagdiv.active {
    background-color: red;
  }

  .flagdiv {
    margin: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    /* 默认颜色 */
    background-color: #ffeecc;
  }

  html body {
    margin: 0;
    padding: 0;
  }

  #container {
    display: flex;
    flex-direction: column;
  }

  .inputstyle {
    height: 50px;
    margin: 4px;
    flex: 1;
  }

  .firstdiv {}

  .firstdiv button {
    flex: 1;
    margin: 4px;
    border: 1px solid #e5e5e5;
    background: #e6e4e2;
    padding: 5px;
  }

  .headul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .contentul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
  }

  .contentitem {
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
  }

  .contentitemSelect {
    border: 1px solid orange;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
  }
</style>
