<template lang="html">
	<div style="width: 750px; margin: 0px auto ;">
		<HEAD></HEAD>
		<img :src="src1" alt="" />
		
		<img src="@/assets/11.gif" style="display: block;width: 40px;	margin: 0 auto;" />
		
		
		<p class="site-title">树懒果园 泰国进口大金煌芒果</p>
		<ul>
			<router-link to="/xq" tag="li">
				<p class="site-cont">点击我 跳出子级菜单</p>
			</router-link>
		</ul>
		<div>
			<router-view></router-view>
		</div>
		
		<FOOT></FOOT>
	</div>



</template>

<script>
	import FOOT from '@/model/FOOT.vue'
	import HEAD from '@/model/HEADxq.vue'

	let data = {
		src1: require('../assets/images/a.gif'),
	}
	let app = {};
	export default {
		props: ['price', 'title', 'img'],
		data() {
			app = this;
			return data;
		},
		components: {
			FOOT,
			HEAD
		}
	}
</script>

<style lang="css">
	.detail {
		padding: 0.25rem;
		font-size: 12px;
	}

	.detail>img {
		display: block;
		width: 80%;
		margin: 0 auto 0.5rem;
	}

	.detail>p {
		font-size: 1.1rem;
		line-height: 1.5rem;
		text-align: left;
		padding-bottom: 0.5rem;
	}

	.detail>p.site-title {
		color: #ff8000;
	}

	p.site-cont {
		color: #666;
		font-size: 0.9rem;
	}

	div.show {
		color: #f00;
		font-size: 0.9rem;
	}
</style>
