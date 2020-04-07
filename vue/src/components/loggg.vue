<template>
		<div>
			<h1>登录界面</h1>
			用户名：<Input /><br/>
			密码：<Input /><br/>
			<button @click="login">登录</button>
		</div>
	</template>
	
	<script>
		export default {
			methods: {
				login () {
					this.$router.replace('/')
				}
			}
		}
	</script>
