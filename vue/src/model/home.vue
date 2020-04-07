<template lang="html">

	<div class="container">
		<HEAD></HEAD>


		<div class="content">
			<ul class="cont-ul">
				<list v-for="item in hobby3" :price="item.price" :title="item.title" :img="item.img"></list>
			</ul>
		</div>
		<FOOT></FOOT>

	</div>


</template>

<script>
	import Vue from "vue"
	import HEAD from '@/model/HEAD.vue'
	import FOOT from '@/model/FOOT.vue'
	import list from '@/model/list.vue'

	let app = {};
	let data = {
		hobby3: [],
	};


	export default {
		name: "container",
		data() {
			app = this;
			return data;
		},
		components: {
			HEAD,
			FOOT,
			list
		},
		created() {
			/* this.$http.get('/api/goods').then((data) => {
				this.items = data.body.data;
			}) */
			this.$http.get('http://localhost:3000/goods').then(function(res) {

				app.hobby3 = (res.data);
				console.log(app.hobby3);
			}, function() {
				console.log('请求失败处理');
			});


		}
	}
</script>

<style lang="css" scoped>
	.container {
		width: 100%;
		margin: 0 auto;
	}

	.content {
		margin-bottom: 1.8rem;
	}

	.cont-ul {
		padding-top: 0.5rem;
		background-color: #ccc;
	}

	.cont-ul::after {
		content: '';
		display: block;
		clear: both;
		width: 0;
		height: 0;
	}
</style>
