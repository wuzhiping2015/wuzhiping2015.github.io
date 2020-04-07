<template>
  <div id="blog">
    <mylogo :title="title"></mylogo>


    text area <textarea v-model="textarea"></textarea>{{textarea}}
    <hr />
    radio:<label><input type="radio" v-model="radio" value="a" />A</label>
    <label><input type="radio" v-model="radio" value="b" />B</label>
    <label><input type="radio" v-model="radio" value="c" />C</label>
    {{radio}}
    <hr />
    checkbox:<input type="checkbox" v-bind:true-value="true" v-bind:false-value="false" v-model="checkbox">{{checkbox}}

    <br />
    多选：
    <label>
      <input type="checkbox" v-model="hobby2" value="游泳">游泳</label>
    <label> <input type="checkbox" v-model="hobby2" value="健身">健身</label>
    <label> <input type="checkbox" v-model="hobby2" value="旅游">旅游</label>
    <span v-if="hobby2.length>0"> {{hobby2}}</span>
    <hr />
    <select v-model="selectval">
      <option v-for="e in options" v-bind:value="e.value">
        {{e.text}}
      </option>
    </select> {{selectval}}
    <input type='button' @click='submit' value='留言' />
  </div>
</template>


<script>
  import mylogo from '@/shop/Logo.vue'

  import {
    wzp
  } from "@/assets/add.js"

  let app = {};
  let data = {
    title: "表单提交",
    titles: wzp.mydatalist(),
    testMix: this.text,


    input_value: '',
    textarea: '',
    radio: '',
    checkbox: '',
    selectval: 'C',
    hobby2: [],
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
    name: "blog",
    data() {
      app = this;
      return data;
    },
    mounted() {


    },
    methods: {
      change_title() {
        this.title = "列表页面111";
      },
      linkurl(shid) {
        /*  this.$router.push({path:'bb',query:{plan:shid}}); */
        /*  this.$router.push({name: 'blogs', query: {id: shid} }); */
      },
      submit() {
        this.$http.post('/api/interface/blogs/add_comment', {
            content: this.content
          })
          .then((response) => {
              alert("提交成功!, 刚才提交的内容是：" + response.body.content)
            },
            (response) => {
              alert("出错了")
            }
          )

      }
    },
    components: {
      mylogo
    },
    mixins: [wzp],

  };
</script>


<style>


</style>
