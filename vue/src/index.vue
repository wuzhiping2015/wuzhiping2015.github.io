<template>
	<div id="dome">

		<div id="shortcut">
			<div class="w" role="navigation" aria-label="顶部导航" tabindex="0">
				<ul class="fr">
					<li>
						<router-link to="/" tag="li">欢迎! 登录</router-link>
					</li>
					<router-link to="/Index" tag="li">首页</router-link>
					<router-link to="/erjiluyou" tag="li">二级路由</router-link>

					<li @mouseenter.stop="lihover" @mouseleave.stop="invisible" style="position: relative;">
						二级路由
						<ul v-show="ishow" v-if="ishow" id="abcdef">
							<li>
								<router-link to="/erjiluyou" tag="li">模板</router-link>
							</li>
							<li>
								<router-link to="/erjiluyou/temp" tag="li">登录</router-link>
							</li>
							<li>
								<router-link to="/erjiluyou/temp1" tag="li">事件</router-link>
							</li>
						</ul>
					</li>
					<router-link to="/Main" tag="li">Main</router-link>

					<router-link to="/bb" tag="li">循环 切换 事件</router-link>
					<router-link to="/bbb" tag="li">VUE 常用</router-link>
					<router-link to="/cc" tag="li">cc -全家桶</router-link>
					<!--    <router-link to="text" tag="li"></router-link> -->

					<!--    <router-link to="/text" tag="li">text</router-link> -->
					<router-link to="/element" tag="li">element</router-link>
					<router-link to="/Hello" tag="li">element ui</router-link>
				</ul>
			</div>
		</div>


		<div class="link">
			<ul>
				<router-link to="/ceshi" tag="li">组件</router-link>
				<router-link to="/ceshi1" tag="li">组件 通信 </router-link>
				<router-link to="/suanfa" tag="li"> mixins 综合练习</router-link>
				<router-link to="/jd" tag="li">JD</router-link>
				<router-link to="/bd" tag="li">表单 bd</router-link>
				<router-link to="/loggg" tag="li">loggg</router-link>
				<router-link to="/ES6" tag="li">ES6</router-link>

				<router-link to="/ceshi" tag="li">魔板</router-link>
				<router-link to="/anli" tag="li">案例1</router-link>
				<router-link to="/shop" tag="li">商城</router-link>

				<router-link to="/model" tag="li">移动端</router-link>
			</ul>
		</div>



		<div class="headertop">
			<h3> 路由当前高亮</h3>
			<span @click="goto('/ceshi')" class="ceshi" :class="{on:'/ceshi'===$router.history.current.path}">
				{{$router.history.current.path}}
				路由高亮 魔板</span>

			<span @click="goto('/shop')" class="ceshi" :class="{on:'/shop'==$router.history.current.path}">路由高亮 商城</span>

			<span @click="goto('/anli')" class="ceshi" :class="{on:'/anli'===$router.history.current.path}">路由高亮 案例1</span>

			<span @click="goto('/ES6')" class="ceshi" :class="{on:'/ES6'===$router.history.current.path}">路由高亮 ES6</span>

			<span @click="goto('/bendiqingqiu')" class="ceshi" :class="{on:'/bendiqingqiu'===$router.history.current.path}">AJAX
				请求</span>
			<img src="@/assets/11.gif" style="display: block;width: 40px;	margin: 0 auto;" />
		</div>



		<chachao :title="title">
			<p slot="left" class="left" @click="goto('/shop')"><b>插槽</b> shop</p>
			<p slot="right" class="right" @click="goto('/erjiluyou')">插槽 login</p>
		</chachao>
		<!-- <img :src="src1" style="width: 100px;"> -->
		<!-- 路由出口 -->
		<router-view></router-view>

		<!--判断哪些显示 -->


		<FOOT v-show="'/shop'!=$router.history.current.path"></FOOT>

	</div>

</template>

<script>
	import {
		Helios
	} from "@/assets/comment.js";
	import Vue from "vue";

	import chachao from '@/views/chachao.vue'
	import FOOT from '@/views/FOOT'
	import HEAD from '@/views/HEAD'

	import Router from 'vue-router'


	let data = {
		ishow: false,
		title: "首页我的订单"
		/* src1: require('assets/images/a.gif'), */
	};
	let vm = new Vue({});
	let app = {};

	export default {
		name: "dome",
		data() {
			app = this;
			return data;
		},
		components: {
			chachao,
			FOOT,
			HEAD
		},


		mounted() {

			/*  console.log(99999999999999999);
			   window.addEventListener('hashchange', (e) => {
			     var currentPath = window.location.hash.slice(1); // 获取输入的路由
			     console.log(currentPath);
			     if (this.$router.path !== currentPath) {
			       this.$router.push(currentPath); // 动态跳转
			       console.log(currentPath);
			     }
			   }, false); */

			//JS 外部调用
			Helios.login();

			window.addEventListener(
				"hashchange", e => {
					console.log("2222222222222222");
					console.log(e.oldURL);
					console.log(e.newURL);
					var currentPath = window.location.hash.slice(1); // 获取输入的路由
					console.log(currentPath);
					if (this.$router.path !== currentPath) {
						this.$router.push(currentPath); // 动态跳转
					}
				},
				false
			);

			/*  $("body").resize();
			   console.log(this.$data); */
		},





		methods: {
			lihover() {
				this.ishow = !this.ishow;
				//  console.log(111);
			},
			invisible() {
				this.ishow = !this.ishow;
			},

			index() {
				this.$router.replace("/");
			},
			login() {
				this.$router.replace("/login/temp");
			},
			Inde() {

				this.$router.replace("/Index");
				console.log(this);
				console.log(vm);
			},

			goto(path) {
				this.$router.replace(path);
			},
			JD() {
				this.$router.replace("/jd");
			},

		},
		beforeCreate() {

			console.log(this.$router.history.current.path + "-------------");




			/* console.log("创建前：");
			     console.log(this.$data); */
		},
		created() {
			// console.log("创建完成：");
			//  console.log(this.$data);
		},
		beforeMount() {
			/* console.log("挂载前：");
			    console.log(this.$data); */
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
			//加载
			this.init();
		},
		//事件
		//我是一个过滤器
		filters: {
			filtersTitleers: function(value) {}
		},
		//我是监听器
		computed: {},
		//它可以用来监测Vue实例上的数据变动
		watch: {}
	};
</script>


<style scoped>
	/* @import 'https://unpkg.com/element-ui/lib/theme-chalk/index.css';
    @import 'https://getbootstrapadmin.com/remark/global/css/bootstrap.min.css?v4.0.2'; */

	@import "assets/first-screen.chunk.css";

	@import "assets/bootstrap.css";

	#dome {
		padding: 4rem 0 4rem 0;
	}

	/* @import  'assets/element_index.css';  */
	.fr a {
		margin-right: 20px;
	}

	.headertop {
		height: 75px;
	}

	.headertop span {
		margin-right: 15px;
	}

	.headertop span.on {
		font-weight: bold;
		color: red;
	}

	#abcdef {
		position: absolute;
		left: 0px;
		top: 20px;
		display: node;
		width: 80px;
		background: #fff;
		padding: 3px;
	}

	#abcdef li {
		width: 100px;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-to

	/* .fade-leave-active below version 2.1.8 */
		{
		opacity: 0;
	}

	.nav li {
		float: left;
		margin-right: 30px;
		text-align: center;
	}

	.nav ul li {
		height: 30px;
		position: relative;
		line-height: 30px;
	}

	.nav ul li ul {
		position: absolute;
		left: 8px;
		top: 30px;
		width: 94px !important;
		text-align: left;
		box-sizing: content-box;
	}

	.nav ul li ul li {
		display: block;
		float: none;
		font-weight: 200;
	}

	ul li {
		float: left;
		margin-right: 40px;
	}

	.link {
		padding: 20px;
		height: 30px;
		background: #DEDEDE;
		color: #000;
		margin-bottom: 20px;
	}

	.link a {
		float: left;
		margin-right: 10px;
	}
</style>
