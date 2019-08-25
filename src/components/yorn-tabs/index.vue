<template>
	<div class="yorn-tabs">
		<el-tabs :value="current" type="card" :closable="true" @edit="handleTabsEdit" @tab-click="handleClick" @contextmenu.native="handleContextMenu">
	  		<el-tab-pane
	  			class="yorn-tabs-btn"
			    :key="item.fullPath"
			    v-for="(item, index) in opened"
			    :name="item.fullPath"
			    :label="item.meta.title"

			>
			</el-tab-pane>
		</el-tabs>
		<div class="yorn-tools-btn">
			<el-dropdown size="small" trigger="click" @command="handleTabCommand">
				<span class="el-dropdown-link">
					<div class="yorn-tools-btn-body">
						<i-icon name="cog"/>
					</div>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="closeAll" icon="el-icon-error">关闭全部</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<i-menu :menulist="menuList"
				:show.sync="show"
				:x="menuX"
				:y="menuY">
			<menu-list :menulist="menuList" @cmd="handleCMD"></menu-list>
		</i-menu>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
	components: {
		MenuList: () => import('@/components/base/i-menu/menuList/menuList.vue')
	},
	data () {
		return {
			show: false,
			menuY: 0,
			menuX: 0,
			menuList: [{
				icon: 'chevron-circle-right',
				cmd: 'closeRight',
				title: '关闭右侧'
			},{
				icon: 'chevron-circle-left',
				cmd: 'closeLeft',
				title: '关闭左侧'
			},{
				icon: 'times-circle',
				cmd: 'closeAll',
				title: '关闭全部'
			},{
				icon: 'arrows-alt-h',
				cmd: 'closeOthers',
				title: '关闭其他'
			}],
			tagName: '/index'
		}
	},
	computed: {
		...mapState('yorn/page', ['opened', 'current'])
	},
	methods: {
		...mapActions('yorn/page', ['close', 'closeAll', 'closeLeft', 'closeRight','closeOthers']),
		handleClick (tag) {
			const page = this.opened.find(i => i.fullPath === tag.name)
			const { name, params, query } = page
			if (page) {
				this.$router.push({name, params, query})
			}
		},
		handleTabsEdit (targetName, action) {
			if (action === 'remove') {
				this.close({targetName})
			}
		},
		handleTabCommand (cmd) {
			this.handleCMD(cmd)
		},
		handleContextMenu (event) {
			let target = event.target,
				flag = false
			if (target.className.indexOf('el-tabs__item') > -1) {
				flag = true
			} else if (target.parentNode.className.indexOf('el-tabs__item') > -1) {
				target = target.parentNode
				flag = true
			}
			if (flag) {
				event.preventDefault()
				event.stopPropagation()
				this.menuX = event.clientX
				this.menuY = event.clientY
				this.tagName = target.getAttribute('aria-controls').slice(5)
				this.show = true
			}
		},
		handleCMD (cmd) {
			this.show = false
			this[cmd]({pagePath : this.tagName})
		}


	}
}
</script>
<style lang='scss'>
	.yorn-tabs{
		width: 100%;
		position: relative;
		box-sizing: border-box;
		padding: 0 10px;
		padding-right: 100px;
		.el-tabs__item{
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			background-color: #FFF;
			color:#C0C4CC;
			&.is-active{

			}

		}
		.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
			background-color: #eff0f4;
			border-bottom-color:  #409EFF;
			color :#409EFF;
		}

		.el-tabs__nav-next, .el-tabs__nav-prev{
			line-height: 33px;
			text-align: center;
			width: 30px;
			border: 1px solid #e4e7ed;
			//border-top: 1px solid #e4e7ed;
			height: 30px;
			&:hover{
				background-color: #FFF;
				color:#000;
			};

		}
		.el-tabs__item:first-child{
			&.is-closable:hover{
				padding:0 20px;
			}
			.el-icon-close{
				display: none;

			}

		}
		.el-tabs__header{
			margin-bottom: 0;
		}
		.el-tabs__nav-wrap.is-scrollable{
			padding: 0 30px;
		}
		.yorn-tools-btn{
			position: absolute;
			right: 0;
			top: 0;
			.yorn-tools-btn-body{
				height: 30px;
				width: 50px;
				background: #FFF;
				line-height: 30px;
				text-align: center;
				border-top-right-radius: 3px;
				border-top-left-radius: 3px;
				border: 1px solid #DCDFE6;
				cursor: pointer;
				&:hover{
					background: #EBEEF5;
				}
			}
		}
	}
</style>
