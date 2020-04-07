<template>
  <div id="bendiqingqiu">
    这是一个组件
    <mylogo :title="titles"></mylogo>
    <h2>{{titles}}</h2>
    <table border="1">
      <tr v-for="(v,i) in hobby2">
        <td>{{v.id}}</td>
        <td>{{v.phone}}</td>
        <td>{{v.age}}</td>
        <td>{{v.email}}</td>
        <td>{{v.companyId}}</td>
      </tr>
    </table>
    -------- <input type="button" value="数据请求AJAX" @click="AJAX()">-----------


    <table border="1">
      <tr v-for="(v,i) in hobby3">
        <td>{{v.id}}</td>
        <td>{{v.name}}</td>
        <td>{{v.age}}</td>
        <td>{{v.email}}</td>
        <td>{{v.companyId}}</td>
      </tr>
    </table>

  </div>
</template>


<script>
  import mylogo from '@/shop/Logo.vue'
  import Vue from "vue"
  import {
    wzp
  } from "@/assets/add.js"



  let app = {};
  let data = {
    title: "表单输入",
    titles: wzp.mydatalist(),
    testMix: this.text,


    input_value: '',
    textarea: '',
    radio: '',
    checkbox: '',
    selectval: 'C',
    hobby2: [],

    hobby3: [],
    options: [{
        text: '红烧肉',
        value: 'A'
      },
      {
        text: '囊包肉',
        value: 'B'
      },
      {
        text: '水煮鱼',
        value: 'C'
      }
    ]

  };
  export default {
    name: "bendiqingqiu",
    data() {
      app = this;
      return data;
    },
    methods: {

    },
    created() {

    },

    mounted() {
      this.$http.get('http://localhost:3000/users').then(function(res) {
        app.hobby2 = (res.data);
        console.log(app.hobby2);

      }, function() {
        console.log('请求失败处理');
      });

    },
    methods: {

      AJAX() {
        Vue.prototype.$message(wzp.mydatalist());
        (wzp.ajaxbox("http://localhost:3000/users", app.hobby3));

        // app.hobby3=app.hobby2

      },

    },
    components: {
      mylogo
    },
    /* mixins: [wzp], */
    mixins: [wzp],

  };
</script>


<style>


</style>
