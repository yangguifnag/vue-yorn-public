<template>
	<div class="login login-page">
		
		<div class="frame-panel">
			<div class="logo">
				<img src="../assets/img/logo-yorn-s.png" height="50px">
			</div>
			<div class="loginFormapanel">
				<el-form :model="loginform" status-icon :rules="rule" ref="loginform"  class="" size="medium">
					<el-form-item   prop="userNo">
						<el-input type="text" v-model="loginform.userNo" auto-complete="off" placeholder="用户名">
							<template slot="prepend">
								<i-icon name="user" />
							</template>
						</el-input>
					</el-form-item>
					<el-form-item  prop="passWord">
						<el-input type="password" v-model="loginform.passWord" auto-complete="off" placeholder="密码">
							<template slot="prepend">
								<i-icon name="unlock-alt" />
							</template>
						</el-input>
					</el-form-item>
					<el-form-item   prop="institution">
						<el-select v-model="loginform.institution" filterable placeholder="请选择机构">
							<el-option v-for="item in options" :key="item.code" :label="item.code + item.codeName" :value="item.code">
							</el-option>
						</el-select>
					</el-form-item>	 
					<el-button class="login-btn" type="primary" @click="submitForm('loginform')" size="medium">登录</el-button>
						<!-- <el-button @click="resetForm('loginform')" size="medium">重置</el-button> -->
				</el-form>

			</div>
			<div class="form-item">
				<a class="func" href="">忘记密码</a>
			</div>
			<div class="form-item">
				<el-button class="login-btn" type="success" @click="submitForm('loginform')">没有账号? 立即注册</el-button>
			</div>
		</div>
		<div class="login-footer">
			<p>
				<span>
					Copyright 
					<i-icon name="copyright"/> 2019
					 YORN Porject
				</span>
				<a>作者 @yangguifang</a>
				<span>官网 yorn.ink</span>
			</p>
		</div>
		
	</div>
</template>
<script>

import {mapActions, mapState ,mapMutations} from 'vuex'

export default{
	data () {
		return {
			options: [],
			loginform: {
				userNo: 'ygf',
				passWord: 'aa000000',
				institution: ''
			},
			rule: {
				userNo: [{
					required: true,
					message: '请输入用户名',
					trigger: 'blur'
				}],

				passWord: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'
				}],

				institution: [{
					required: true,
					message: '请选择机构',
					trigger: 'blur'
				}]
			}


		}
	},
	methods: {
		...mapMutations('yorn/user',['setToken']),
		...mapActions('yorn/account',['login']),
		submitForm (formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.login(
						this.loginform
					).then((res) => {
						this.setToken(res.data.token)
						// await this.setUserInfo(res.data.data)
						this.$router.push({path: '/index'})
					}).catch((err) => {
						this.$message({
					          	message: '对不起登录失败!! 请重试!',
					          	type: 'warning'
					        })
					})
				} else {
					return false
				}
			})
		},
		resetForm (formName) {
			this.$refs[formName].resetFields()
		}
	},
	created () {
		var data = this.$qs.stringify({
			codeType: 'DeptName'
		})
		this.$axios.getLoginDropdown(data).then((res) => {
			this.options = res.data
		})
	}
}
</script>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	.login{
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.loginFormapanel{
		width: 240px;
		height: auto;
		padding: 20px 18px;
	/* 	//box-shadow: 0 0 25px #cac6c6; */
	/* 	position: absolute;
		top: 0;
		left: 0;
		right:0;
		bottom: 0; */
		/* border: 1px solid #cac6c6; */
		border-radius: 3px;
		background: #FFF;
		margin: auto;
		margin-top: 5%;
	}
	.el-select{
		width: 100%;
	}
	h3{
		letter-spacing: 5px;
	}
</style>
