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
			<el-dropdown>
				<span class="el-dropdown-link">
					下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>黄金糕</el-dropdown-item>
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
		computed : {
			...mapState('yorn/page', ['opened','current'])
		},
		methods : {
			handleClick(tag){
				const page = this.opened.find(i => i.fullPath === tag.name)
				const { name, params, query } = page
				if(page){
					this.$router.push({name,params,query})
				}
				console.log(tag)	
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
		.el-tabs__item{
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			&.is-active{
				background-color: #FFF;
			}
			
		}
		.yorn-tools-btn{
			position: absolute;
			right: 0;
			top: 0;
		}
	}
</style>