<template>

	<div class="index">


		<chachao :title="title">
			<p slot="left" @click="goto('/shop')" class="ceshi" :class="{on:'/shop'==$router.history.current.path}"> <B>插槽</B>
				shop </p>
			<p slot="right" @click="goto('/model')" class="ceshi" :class="{on:'/model'==$router.history.current.path}">移动端</p>
		</chachao>





		<h2>Index.vue</h2>

		<el-tag>标签一</el-tag>
		<el-tag type="success" @click="btn1">内部一个方法</el-tag>
		<el-tag type="info" @click="btn2">调用外部JS 方法</el-tag>
		<el-tag type="warning" @click="btn3">标签四</el-tag>
		{{systype1}}
		<div v-if="systype1=='c'">显示 {{systype1}}</div>
		<div v-else>不显示 {{systype1}}</div>

		<el-tag type="danger">标签五</el-tag>
		<el-input size="mini" class="w-180" v-model="a"></el-input>

		<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
		<el-switch v-model="value" active-text="按月付费" inactive-text="按年付费"></el-switch>
		<el-switch style="display: block" v-model="value" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费"
		 inactive-text="按年付费"></el-switch>

		<div style="border: 1px solid red">
			<h1>外部调用事件</h1>
			<el-tag type="success" @click="b1">内部一个方法</el-tag>
			<el-tag type="info" @click="b2">调用外部JS 方法</el-tag>
			<el-tag type="warning" @click="b3">一个变量</el-tag>
			<el-tag type="warning" @click="b4(a,dd)">参数方法</el-tag>
			<el-tag type="warning" @click="b5(setI)">一个定时器</el-tag>
			<el-tag type="warning" @click="b6()">对象参数方法</el-tag>

			<el-button type="primary" @click="b7()" v-bind:disabled="t" style="color: #fff;">数据请求 不能点击了</el-button>

			<el-button type="primary" @click="b8()" style="color: #fff;">重复请求数据</el-button>

			<h4>{{value}}</h4>

			<table v-show="t">
				<tr>
					<td>数据</td>
					<td>
						<el-input v-model="obj.completed"></el-input>
					</td>
				</tr>
				<tr>
					<td>数据2</td>
					<td>
						<el-input v-model="obj.id"></el-input>
					</td>
				</tr>
				<tr>
					<td>数据3</td>
					<td>
						<el-input v-model="obj.title"></el-input>
					</td>
				</tr>
				<tr>
					<td>数据4</td>
					<td>
						<el-input v-model="obj.userId"></el-input>
					</td>
				</tr>
			</table>
			<table v-show="t1">
				<tr>
					<td>
						<img :src="b.thumbnailUrl" />
						<div>{{b.title}}</div>
					</td>
				</tr>
			</table>
			<ul class="phontxunhuan">
				<li v-for="photo  in photos">
					<img :src="photo.url" :title="photo.title" />
					<h4>{{photo.title.slice(0,6)}}</h4>
					<h3>{{setI}}</h3>
				</li>
			</ul>
		</div>
	</div>
</template>


<script>
	import chachao from '@/views/chachao.vue'


	let app = {};
	//引入VUE 后期对弹窗做处理
	import Vue from "vue";
	var toast = new Vue({}); //引入VUE 对象方法




	//这里引入一个JS 文件  //这是调用的方法 bt1, pi , Helios
	import {
		bt1,
		pi,
		settino,
		Helios
	} from "@/assets/add.js";



	var sysType = sessionStorage.getItem("$SysType");

	let data = {
		title: "购物车",
		a: "111",
		b: "一个测试文件",
		systype1: '0',
		setI: 1,
		t: false,
		t1: false,
		username: sysType,
		c: "一个新的页面路由",
		demo: "",
		obj: {},
		photos: {},
		value: "",
		tableData: [{
				date: "2016-05-03",
				name: "王小虎",
				address: "上海市普陀区金沙江路 1518 弄"
			},
			{
				date: "2016-05-02",
				name: "王小虎",
				address: "上海市普陀区金沙江路 1518 弄"
			}
		]
	};

	export default {
		name: "index",
		data() {
			app = this;
			return data;
		},
		components: {
			chachao
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

			var b = this.StringUtil.isNull("sfds");

			console.log("外部引入" + b);
			console.log("外部引入:----" + Helios.b3());

			setTimeout(function() {
				//  SiteInfoDate.red1();
			}, 500);
		},
		beforeUpdate() {
			/*console.log('=即将更新渲染=');
			    console.log(this.$data); */
		},
		updated() {
			console.log(this.$data);
		},
		beforeDestory() {
			/*    console.log("销毁前："); */
		},
		destoryed() {
			/*   console.log("销毁完成："); */
		},
		//事件
		methods: {
			btn1: function() {
				alert(app.a);
			},

			//这是一个外部JS 事件  这是调用的方法 bt1, pi , Helios  add.js
			b1: function() {
				// alert(bt1() + "--和一个事件--" + pi);
				app.setI++;
				app.value = bt1() + "：---：" + pi + ":" + settino;
			},
			b2() {
				Helios.b2();
			},
			b3() {
				let c3 = Helios.b3();
				app.value = c3;
			},
			b4(x, y) {
				app.value = Helios.b4(x, y);
			},
			b5(x) {
				//console.log(y);
				Helios.b5(x);
			},
			b6() {
				app.value = Helios.b6();
			},
			b7() {
				this.$http.get("https://jsonplaceholder.typicode.com/photos").then(
					response => {
						/*    console.info(response.body);
						   console.log(response.json()); */
						let photos = {};
						photos = response;
						if (photos == "") {
							toast.$message("发送请求成功");
						} else {
							let c = {};
							c = photos;
							if (c.status) {
								//数据请求成功
								toast.$notify({
									title: "成功",
									message: "数据请求成功",
									type: "success",
									duration: 1000
								});
								/*  app.t = true;
								app.obj.completed = c.data.completed;
								app.obj.id = c.data.id;
								app.obj.title = c.data.title;
								app.obj.userId = c.data.userId; */

								//  app.photos =  response.data[Math.floor(Math.random() * response.data.length)];
								app.photos = c.data.slice(0, 5);
								console.log(app.photos);
							} else {
								toast.$message.error("错了哦，这是一条错误消息");
							}
						}
					},
					response => {
						// console.error(response);
						app.obj = response;
					}
				);
			},
			b8() {
				/* http://jsonplaceholder.typicode.com/posts */
				this.$http.get("http://jsonplaceholder.typicode.com/photos").then(
					response => {
						if (response.statusText) {
							//数据请求成功
							toast.$notify({
								title: "成功",
								message: "数据请求成功",
								type: "success",
								duration: 1000
							});
							app.t1 = true;
							let o = response.data[Math.floor(Math.random() * response.data.length)];
							let c = {};
							c.thumbnailUrl = o.thumbnailUrl;
							c.title = o.title;
							app.b = c;

							//显示4条数组
							const b1 = Array(4).fill(120);
							console.log(b1);
						} else {
							toast.$message.error("错了哦，这是一条错误消息");
						}
					},
					response => {
						console.error(response);
					}
				);

			},

			//引入外部事件
			btn2: function() {
				this.StringUtil.btn();
			},
			//引入外部事件
			btn3: function() {
				this.StringUtil.btn1();
				sysType = sessionStorage.getItem("$SysType");
				app.systype1 = ("外部JS 映入一个脚本") + sysType;

			},
			goto(math) {
				this.$router.replace(math)

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
				console.log(this.value);
			}
		}
	};
</script>



<style scoped="scoped">
	.phontxunhuan {
		clear: both;
	}

	.phontxunhuan li {
		float: left;
		width: 20%;
		height: 150px;
		text-align: center;
	}

	.phontxunhuan li img {
		width: 100px;
		height: 100px;
	}
</style>

<!-- <link rel="stylesheet" href="src/assets/bootstrap.css">
<link rel="stylesheet" href="src/assets/element_index.css"> -->
