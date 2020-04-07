<template>
  <div>
    <ul>
      <template v-for="(item) in items">
        <li @mouseover="selectStyle (item) " :class="{'active':item.active}" @mouseout="outStyle(item)">
          {{item.select}}
          <span class="icon" v-show="item.active">{{item.icon}}</span>
        </li>
      </template>
    </ul>



    <fieldset>
      <form action="">
        <p>邮箱：<input type="text"></p>
        <p>密码：<input type="password" name="" id=""></p>
        <p id="demo" v-on:mouseenter="visible" @mouseleave="invisible"><input type="checkbox" id="miandenglu"><label
            for="miandenglu">十天内免登录</label>
          <span v-show="seen">为了您的信息安全，请不要在网吧或者公用电脑上使用此功能！</span>
        </p>
        <p>
          <input type="button" value="登 录">
          <input type="button" value="去注册">
        </p>
      </form>
    </fieldset>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: false,
        seen: false,
        items: [
          { select: '第一行', icon: 1 },
          { select: '第二行', icon: 2 },
          { select: '第三行', icon: 3 },
          { select: '第四行', icon: 4 }
        ]
      }
    },
    methods: {
      selectStyle(item) {
        var _this = this;
        this.$nextTick(function () {
          this.items.forEach(function (item) {
            _this.$set(item, 'active', false);
          });
          this.$set(item, 'active', true);
        });
      },
      outStyle(item) {
        this.$set(item, 'active', false);
      },




      visible: function () {
        this.seen = true;
      },
      invisible: function () {
        this.seen = false;
      }



    }
  }
</script>

<!-- 样式 -->
<style scoped>
  ul {
    overflow: hidden;
  }

  .width {
    width: 100px;
    text-align: center
  }

  li {
    float: left;
    color: #000;
    width: 100px;
    display: inline-block;
    text-align: center;
    transition: width .3s linear;
    outline: 1px solid red;
  }

  .active {
    color: red;
    background: chartreuse;
  }

  .icon {
    float: right;
    font-size: 12px;
  }
</style>