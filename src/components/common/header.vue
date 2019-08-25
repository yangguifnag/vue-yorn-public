<template>
	<div id="header" class="header">
		<div class="header-left yorn-aside-width" :class="{'retract' : getMenuIsCollapse }">
			<div class="head-title">
				<a class="menu-btn" :class="{'open' : !getMenuIsCollapse }" @click="changeMenu" ><i-logo :size="30" /></a>
				<a class="item" >
					YORN Admin
				</a>
			</div>
		</div>
		<div class="navMenu">
			<NavMenu></NavMenu>
		</div>
		<div class="header-right">
			<div class="header-tools clear">
				<div class="item">
					<el-tooltip content="日志" placement="top">
						<span >
							<el-badge is-dot :hidden="hasLog" :value="LogValue" :max="99">
								<i-icon class="fsicon" name="bullseye"/>
							</el-badge>
						</span>
					</el-tooltip>
				</div>

				<div class="item" @click="massageDialogVisible =! massageDialogVisible">
					<el-tooltip content="消息" placement="top">
						<span >
							<el-badge :hidden="hasMassage" :value="MassageValue" :max="99">
								<i-icon class="fsicon" name="envelope"/>
							</el-badge>
						</span>
					</el-tooltip>
				</div>

				<div class="item" @click="themeDialogVisible=!themeDialogVisible">
					<el-tooltip content="主题" placement="top">
						<span >
							<i-icon class="fsicon" name="theater-masks" />
						</span>
					</el-tooltip>
				</div>

				<div class="item" @click="changeFullScreen">
					<el-tooltip content="全屏" placement="top" v-show="!isFullScreen" >
						<span >
							<i-icon class="fsicon" name="expand" />
						</span>
					</el-tooltip>

					<el-tooltip content="退出全屏" placement="top" v-show="isFullScreen" >
						<span v-show="isFullScreen">
							<i-icon class="fsicon" name="compress" />
						</span>
					</el-tooltip>

				</div>

				<el-dropdown class="yorn-header-item item" :show-timeout="100" @command="handleCommand">
					<span class="el-dropdown-link">
						<!-- <f-icon class="fsicon" :icon="['fab', 'windows']" /> -->
						<span class="yorn-header-user">
							<span class="yorn-header-avater">
								<img :src="userInfo.avater">
							</span>
							<span class="yorn-header-username fsicon">{{userInfo.name}}</span>
						</span>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item>修改密码</el-dropdown-item>

						<el-dropdown-item divided command="logOut">
							<i-icon class="f-bs-blue" name="power-off" />
							&nbsp;退出
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<el-dialog title="主题" :visible.sync="themeDialogVisible" width="30%" :append-to-body="true" >

			  	 <div class="theme-overview " :class="[activeTheme === item.name ? 'theme-check' : '']" v-for="item of themeList" :style="{backgroundColor: item.body}" @click="changetheme(item.name)">
			  	 	<p class="clr-box clr-header" :style="{backgroundColor: item.head}"></p>
			  	 	<p class="clr-box clr-header" :style="{backgroundColor: item.head2}"></p>
			  	 	<p class="clr-box" :style="{backgroundColor: item.menu}"></p>
			  	 	<p class="clr-point" :style="{backgroundColor: item.point}"></p>
			  	 	<span class="check-hock">
			  	 		<i-icon name="check" />
			  	 	</span>
			  	 </div>

			</el-dialog>

			<el-dialog title="信息" :visible.sync="massageDialogVisible" :fullscreen="true" :append-to-body="true" >


			</el-dialog>
		</div>
	</div>
</template>
<script>
import {mapActions, mapState, mapMutations, mapGetters} from 'vuex'
export default{
	components : {
		NavMenu : () => import('./navMenu.vue')
	},
	data () {
		return {
			themeDialogVisible: false,
			hasMassage: false,
			MassageValue: 0,
			massageDialogVisible: false,
			hasLog: false,
			LogValue: 0
		}
	},
	methods: {
		handleCommand (command) {
			this[command]()
		},
		changeMenu () {
			this.changeMenuIsCollapse()
		},
		logOut () {
			const that = this
			let load
			this.$confirm('确定退出登录吗?', '提示', {
				confirmButtonText: '确定',
		          	cancelButtonText: '取消',
		          	type: 'warning',
		          	async beforeClose (action, instance, done) {
					if (action === 'confirm') {
						load = that.$load('logout')
						await that.logout({})
						done()
					} else {
						done()
					}
		          	}
			}).then(async () => {
				load && load.close()
				this.$router.push({ name: 'login' })
			}).catch(() => {
				load && load.close()
				return !1
			})
		},
		async changetheme (name) {
			await this.set(name)
		},
		...mapActions('yorn/theme', ['set']),
		...mapActions('yorn/menu', ['changeMenuIsCollapse']),
		...mapActions('yorn/options', ['changeFullScreen']),
		...mapActions('yorn/account', ['logout'])


	},
	computed: {
		...mapState('yorn/options', ['isFullScreen']),
		...mapGetters('yorn/menu', ['getMenuIsCollapse']),
		...mapState('yorn/theme', ['themeList', 'activeTheme']),
		...mapState('yorn/user', ['userInfo'])
	}
}

</script>
