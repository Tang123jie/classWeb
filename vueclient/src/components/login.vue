<template>
	<div>
		<div class="login-box">
			<div class="title">后台登录</div>
			<div>
				<input class="myInput"  type="text" placeholder="手机号/密码" v-model="username" />
			</div>
			<div>
				<input class="myInput" type="password" placeholder="口令" v-model="password" />
			</div>
			<div class="login-other">
				<a href="javascript:;">找回密码</a>
				<input type="checkbox" id="remenberme" />
				<label for="remenberme">记住我</label>
			</div>
			<button :disabled="disablebtn" class="login" @click="login">{{loginText}}</button>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				loginText: '登录',
				username:'汤杰',
				password:'123456',
				disablebtn:false
				
			}
		},
		methods:{
			login(){
				var _this = this;
				this.disablebtn = true;
				this.loginText = "登录中...";
				this.$reqs.post("/users/login",{
					username : this.username,
					password : this.password
				}).then(function(result){
					//成功
					console.log(result)
					_this.disablebtn = false;
					_this.loginText = "登录";
				}).catch(function (error){
					//失败
					_this.disablebtn = false;
					_this.loginText = "登录";
				});
			}
		}
		
	}
</script>

<style>
.login-box{
	width: 320px;
	margin: 80px auto;
	
}
.title{
	font-size: 20px;
	margin: 0 0 20px 0;
	text-align: center;
}
.myInput{
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 5px 0 10px;
	border: solid 1px #cad3de;
	outline: none;
	border-radius: 8px;
	padding: 0 10px;
	box-sizing: border-box;
}
.myInput:focus{
	border: solid 1px #4289dc;
}
.login-other a{
	float: right;
	color: #727f8f;
	text-decoration: none;
}
.login-other input,.login-other label{
	float: left;
	color: #727f8f;
}
.login-other input{
	margin: 4px 5px 0 0;
}
.login{
	width: 100%;
	height: 44px;
	line-height: 44px;
	border-radius: 8px;
	outline: none;
	font-size: 20px;
	color: #fff;
	background: #4187db;
	border: none;
	margin-top: 10px;
	cursor: pointer;
}
.login:hover{
	background: #2668b5;
}

</style>