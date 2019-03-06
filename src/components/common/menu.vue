<template>	
	<div class="menus yorn-menu yorn-aside-width" :class="{[`yorn-aside-width-collapse`]:getMenuIsCollapse }">
 			<el-scrollbar :native="false">
 				 <!-- background-color="#1b2b38" text-color="#869fb1"  -->
	    		<el-menu class="" @open="handleOpen" @close="handleClose" :router="true"  :collapse="getMenuIsCollapse" :unique-opened="true" :collapse-transition="false"  :default-active="getPath" >
	    			<el-menu-item index="/index">
						<i-icon class="menu-icon" name="tachometer-alt" />
						<span slot="title">首页</span>
					</el-menu-item>

					<el-submenu index="/part1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span class="title_menu">测试菜单</span>
						</template>
							<el-menu-item index="/customerMainInfo">
								<span slot="title">废弃页1</span>
							</el-menu-item>
							<el-menu-item index="/customerScreen/fromMenu">
								<span slot="title">废弃页2</span>
							</el-menu-item> 
							<el-menu-item index="/customerMerge">
								<span slot="title">废弃页3</span>
							</el-menu-item>
							<el-menu-item index="/handworkMerge">
								<span slot="title">基础表格</span>
							</el-menu-item>
					</el-submenu>

					<!-- <el-menu-item index="/customerMainInfo">
						<i class="el-icon-menu"></i>
						<span slot="title">首页1</span>
					</el-menu-item> -->
					<el-submenu :index="item.nodeId" v-for="item of getMenu" :key="item.nodeId">
						<template slot="title">
							<!-- <i class="el-icon-location"></i> -->
							<i-icon class="menu-icon" :name="item.icon"/>
							<span class="title_menu">{{item.nodeName}}</span>
						</template>
						
						<el-menu-item :index="subitem.nodeHref" v-for="subitem in item.c_list" :key="subitem.nodeId">
							<a>{{subitem.nodeName}}</a>
						</el-menu-item>
						
					</el-submenu>

				</el-menu>
		  	</el-scrollbar>	 
	</div>

</template>

<script>
	
	import {mapActions, mapState ,mapMutations ,mapGetters} from 'vuex'
	export default{
		data(){
			return {
				meunid : 0,
				activeName : '1',
				menulist : [],
			}
		},
		computed : {
			...mapGetters('yorn/menu',['getMenuIsCollapse','getMenu']),
			getPath(){
				return this.$route.path
			}
		},
		created(){
			var data = this.$qs.stringify({
				employeeNumber : 'Iadmin'
			})
			this.$axios.menu(data) // 获取菜单数据
				.then(res => {
					this.setMenuList(res.data)
			})
		},
		methods:{
			...mapActions('yorn/menu',['setMenuList','loadMenuList']),
			getID(id){
				return id;
			},
			openmenu(arg){

			},
			handleOpen(key, keyPath) {
		        //console.log(key, keyPath);
	      	},
	      	handleClose(key, keyPath) {
		       //  console.log(key, keyPath);
	      	}
		}
	}

</script>

<style scoped>
 
	.bg-blue {
	    background-color: #1b2b38;
	}
	.menus{
		height: 100%;
		min-height: 100%;
		overflow: hidden;
		 
	}
	.menu-main{
		color: #FFF;
		width: 100%;
		height: 100%;
		 
	}
	a{
		display: block;
		text-decoration: none;
		color: inherit;
	}
 
 	.el-scrollbar__view{
 		height: 100%;
 		overflow-x: hidden;
 	}
 	.menu-icon{
 		text-align: center;
 		width: 24px;
 		margin-right:5px ;
 	}

 
</style>