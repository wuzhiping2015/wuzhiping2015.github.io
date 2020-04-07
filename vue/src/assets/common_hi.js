import Vue from "vue";
var toast = new Vue({}); //引入VUE 对象方法

export default {
  methods: {
    abc: function(name) {
      return "你好,abc 方法 " + name;
    },
    ch2() {
      return "点击外部返回数据";
    },
    msg1() {

      Vue.prototype.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        toast.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        toast.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

      //  return 111111;
    }
  },

}

var aa = ["1,2,2,"];
var bb = ["d,d,d,d,d"];
var dd = {
  "a": 1111,
  "b": 2222
}
export {
  aa,
  bb,
  dd
}
