<template lang="html">
	<div class="HEAD">
		<div class="head">
			<div class="header">
				<a href="javascript:;" class="go-back" @click="goBack">返回</a>
				<h4 class="header-cont">商品详情页</h4>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HEAD",
		/*  props: ["title", "src"], */
		methods: {
			goBack() {
				this.$router.replace("/model");
				//window.history.back();
			}
		}

	}
</script>

<style lang="css" scoped>
	.header {
		width: 100%;
		height: 4rem;
		position: fixed;
		left: 0;
		top: 0;
		background-color: #DEDEDE;
		border-bottom: 2px solid #ff8000;
	}

	.header .go-back {
		width: 2rem;
		height: 2rem;
		text-align: center;
		color: red;
		font-size: 0.8rem;
		float: left;
		line-height: 2rem;
		margin-left: 1rem;
		position: absolute;
		left: 0;
		top: 0;
	}

	.header .header-cont {
		width: 100%;
		text-align: center;
		line-height: 2rem;
		font-size: 1.2rem;
	}
</style>
