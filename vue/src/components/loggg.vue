<template>
		<div class="qqqww"  style="text-align: center;">
			<h1>logg 页面</h1>
			用户名：<Input /><br/>
			密码：<Input /><br/>
			<button @click="login">登录</button>
		</div>
	</template>
	
	<script>
		export default {
			name:"qqqww",
			methods: {
				login () {
					this.$router.replace('/')
				}
			}
		}
	</script>
