<template>
	<div id="header" class="header">
		<div class="header-left" :class="{'retract' : $store.state.menuIsCollapse }">
			<div class="head-title">
				<a class="menu-btn" :class="{'open' : !$store.state.menuIsCollapse }" @click="changeMenu" ><i class="el-icon-menu"></i></a>
				<a class="item" >
					i.System
				</a>
				
				
			</div>
		</div>

		<div class="header-right">
			
			<div class="header-tools clear">
				<div class="item">
					<el-tooltip content="日志" placement="top">
						<span >
							<el-badge is-dot :hidden="hasLog" :value="LogValue" :max="99">
								<font-awesome-icon class="fsicon" icon="bullseye"/>
							</el-badge>
						</span> 
					</el-tooltip>
				</div>

				<div class="item" @click="massageDialogVisible =! massageDialogVisible">
					<el-tooltip content="消息" placement="top">
						<span >
							<el-badge :hidden="hasMassage" :value="MassageValue" :max="99">
								<font-awesome-icon class="fsicon" icon="envelope"/>
							</el-badge>
						</span> 
					</el-tooltip>
				</div>

				<div class="item" @click="themeDialogVisible=!themeDialogVisible">
					<el-tooltip content="主题" placement="top">
						<span >
							<font-awesome-icon class="fsicon" icon="theater-masks" />
						</span> 
					</el-tooltip>
				</div>

				<div class="item" @click="changeFullScreen">
					<el-tooltip content="全屏" placement="top" v-show="!isFullScreen" >
						<span >
							<font-awesome-icon class="fsicon" icon="expand" />
						</span> 
					</el-tooltip>

					<el-tooltip content="退出全屏" placement="top" v-show="isFullScreen" >
						<span v-show="isFullScreen">
							<font-awesome-icon class="fsicon" icon="compress" />
						</span> 
					</el-tooltip>

				</div>
				
				<el-dropdown class="item" :show-timeout="100" @command="handleCommand">
					<span class="el-dropdown-link">
						 <font-awesome-icon class="fsicon" :icon="['fab', 'windows']" />
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item>修改密码</el-dropdown-item>

						<el-dropdown-item divided command="logOut">
							<font-awesome-icon class="f-bs-blue" icon="power-off" />
							&nbsp;退出
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- <div class="item f-bs-gray">
					<a href="">
						<font-awesome-icon class="f-bs-blue" icon="full-screen" />
						修改密码
					</a>
				</div>
				<div class="item f-bs-gray">
					<a href="">
						<font-awesome-icon class="f-bs-blue" icon="power-off" />
						退出系统
					</a>
				</div> -->
			</div>
			<el-dialog title="主题" :visible.sync="themeDialogVisible" width="30%" :append-to-body="true" >

			  	 <div class="theme-overview " :class="[theme == item.name ? 'theme-check' : '']" v-for="item of themes" :style="{backgroundColor: item.body}" @click="changetheme(item.name)">
			  	 	<p class="clr-box clr-header" :style="{backgroundColor: item.head}"></p>
			  	 	<p class="clr-box clr-header" :style="{backgroundColor: item.head2}"></p>
			  	 	<p class="clr-box" :style="{backgroundColor: item.menu}"></p>
			  	 	<p class="clr-point" :style="{backgroundColor: item.point}"></p>
			  	 	<span class="check-hock">
			  	 		<font-awesome-icon class="" icon="check" />
			  	 	</span>
			  	 </div>
			 
			</el-dialog>

			<el-dialog title="信息" :visible.sync="massageDialogVisible" :fullscreen="true" :append-to-body="true" >

			  
			 
			</el-dialog>
		</div>
	</div>
</template>
<script>
	
	export default{
		data () {
			return {
				themeDialogVisible : false,
				hasMassage : false,
				MassageValue : 0,
				massageDialogVisible : false,

				hasLog : false,
				LogValue : 0,
				themes : [{
					'name' : 'theme-dark',
					'body' : '#eff0f4',
					'head' : '#FFFFFF',
					'head2' : '#FFFFFF',
					'menu' : '#1b2b38',
					'point' : '#42b983'
 				},{
					'name' : 'theme-dark2',
					'body' : '#eff0f4',
					'head' : '#7266ba',
					'head2' : '#FFFFFF',
					'menu' : '#3a3f51',
					'point' : '#FFFFFF'
 				},{
					'name' : 'theme-dark3',
					'body' : '#eff0f4',
					'head' : '#16aad8',
					'head2' : '#16aad8',
					'menu' : '#dde6e9',
					'point' : '#FFFFFF'
 				}]
			}
		},
  
		methods : {
			handleCommand(command){
				this[command]()
			},
			changeMenu(){
				this.$store.commit('changeMenuIsCollapse')
			},
			changeFullScreen(){
				!this.$store.state.isFullScreen ? this.$utils.fullScreen() : this.$utils.exitScreen()
				this.$store.commit('changeIsFullScreen',!this.$store.state.isFullScreen)
			},
			logOut(){
				this.$confirm('确定退出登录吗?','提示',{
					confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	type: 'warning',
				}).then(()=>{

					this.$store.dispatch('destroyBaseInfo')
					this.$router.replace({ path: '/' })
				}).catch(()=>{
					return !1;
				})
			},
			changetheme(name){
				this.$store.commit('setTheme',name)			
			}

		},
		computed : {
			isFullScreen(){
				return this.$store.state.isFullScreen
			},
			theme(){
				return this.$store.state.theme
			}

		}
	}

</script>
