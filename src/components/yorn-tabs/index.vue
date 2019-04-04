<template>
	<div class="yorn-tabs">
		<el-tabs :value="current" type="card" :closable="true" @edit="handleTabsEdit" @tab-click="handleClick">
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
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
	data () {
		return {

		}
	},
	computed: {
		...mapState('yorn/page', ['opened', 'current'])
	},
	methods: {
		...mapActions('yorn/page', ['close','closeAll']),
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
			this[cmd]()
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
