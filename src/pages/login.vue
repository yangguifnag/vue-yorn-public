<template>
	<div class="login">
		<div class="loginFormapanel">
			<h3 class="t-center m-b-lg">登录</h3>
			<el-form :model="loginform" status-icon :rules="rule" ref="loginform"  class="demo-ruleForm" size="medium">
				<el-form-item   prop="userNo">
					<el-input type="text" v-model="loginform.userNo" auto-complete="off" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item  prop="passWord">
					<el-input type="password" v-model="loginform.passWord" auto-complete="off" placeholder="密码"></el-input>
				</el-form-item>
				<el-form-item   prop="institution">
					<el-select v-model="loginform.institution" filterable placeholder="请选择机构">
						<el-option v-for="item in options" :key="item.code" :label="item.code + item.codeName" :value="item.code">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('loginform')" size="medium">登录</el-button>
					<el-button @click="resetForm('loginform')" size="medium">重置</el-button>
				</el-form-item>

			</el-form>
		</div>

	</div>
</template>
<script>


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
		submitForm (formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$axios.doLogin(
						this.$qs.stringify(this.loginform)
					).then((res) => {
						this.$store.commit('setToken', res.data.token)
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
		background: #fff;
		position: relative;
	}
	.loginFormapanel{
		max-width: 350px;
		height: 250px;
		padding: 35px;
		box-shadow: 0 0 25px #cac6c6;
		width: 40%;
		position: absolute;
		top: 0;
		left: 0;
		right:0;
		bottom: 0;
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
	/* .el-form-item__label{
		line-height: 1;
	} */
</style>
