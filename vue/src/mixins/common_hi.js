export default {
  methods: {
    hi: function(name){
      return "你好, " + name;
    }
  },
  created(){
    console.log(this.hi("122"));
    console.log(22222);
  }
}
