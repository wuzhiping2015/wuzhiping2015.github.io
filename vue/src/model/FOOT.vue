<template lang="html">
	<div class="FOOT">
		<ul class="footer-cont">




			<li @click="goto('/ceshi')" class="ceshi" :class="{on:'/ceshi'===$router.history.current.path}">
				{{$router.history.current.path}}
				路由高亮 魔板</li>

			<li @click="goto('/shop')" class="ceshi" :class="{on:'/shop'==$router.history.current.path}">路由高亮 商城</li>

			<li @click="goto('/anli')" class="ceshi" :class="{on:'/anli'===$router.history.current.path}">路由高亮 案例1</li>

			<li @click="goto('/ES6')" class="ceshi" :class="{on:'/ES6'===$router.history.current.path}">路由高亮 ES6</li>



		</ul>
	</div>
</template>


<script>
	export default {
		name: "FOOT",
		methods: {
			goto(path) {
				this.$router.replace(path);
			},
		}
	}
</script>

<style lang="css">
	.FOOT {
		height: 4rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 2px solid #ccc;
		background-color: #DEDEDE;
	}

	.footer-cont li {
		float: left;
		width: 25%;
		height: 1.8rem;
		line-height: 1.8rem;
		font-size: 1.4rem;
		color: #ff8000;
		text-align: center;
	}

	.footer-cont li:active {
		background-color: #ccc;
	}

	.footer-cont:after {
		content: '';
		display: block;
		clear: both;
		width: 0;
		height: 0;
	}
</style>
