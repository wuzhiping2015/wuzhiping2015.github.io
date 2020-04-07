<template lang="html">
	<div style="width: 750px; margin: 0px auto ; padding: 10px; background: #DEDEDE;">
		<h3 style="font-size: 20px; color: red;">我是详情页0419</h3>
		<h3 style="font-size: 20px; color: red;">我是详情页0419</h3>
		<h3 style="font-size: 20px; color: red;">我是详情页0419</h3>
		<h3 style="font-size: 20px; color: red;">我是详情页0419</h3>
	</div>
</template>

<script>
	let data = {
		src1: require('../assets/images/a.gif'),
	}
	let app = {};
	export default {
		props: ['price', 'title', 'img'],
		data() {
			app = this;
			return data;
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
