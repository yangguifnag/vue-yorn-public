<template>	
	<div class="menus">
 			<el-scrollbar :native="false">
 				 <!-- background-color="#1b2b38" text-color="#869fb1"  -->
	    		<el-menu class="" @open="handleOpen" @close="handleClose" :router="true"  :collapse="isCollapse" :unique-opened="true" :collapse-transition="false"  :default-active="getPath" >
	    			<el-menu-item index="/dashboard">
						<i class="el-icon-menu"></i>
						<span slot="title">首页</span>
					</el-menu-item>

					<el-submenu index="/part1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span class="title_menu">客户信息查询</span>
						</template>
							<el-menu-item index="/customerMainInfo">
								 
								<span slot="title">360视图</span>
							</el-menu-item>
							<el-menu-item index="/customerScreen/fromMenu">
								 
								<span slot="title">客户筛选</span>
							</el-menu-item>
							<el-menu-item index="/customerMerge">
								 
								<span slot="title">待并归信息查询</span>
							</el-menu-item>
							<el-menu-item index="/handworkMerge">
								 
								<span slot="title">手工归并</span>
							</el-menu-item>
					</el-submenu>

					<!-- <el-menu-item index="/customerMainInfo">
						<i class="el-icon-menu"></i>
						<span slot="title">首页1</span>
					</el-menu-item> -->
					<el-submenu :index="item.nodeId" v-for="item of menulist" :key="item.nodeId">
						<template slot="title">
							<i class="el-icon-location"></i>
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
	
	export default{
		data(){
			return {
				meunid : 0,
				activeName : '1',
				//isCollapse: true,
				menulist : [],
			}
			
		},
		computed : {
			isCollapse(){
				return this.$store.state.menuIsCollapse
			},
			getPath(){
				 
				return this.$route.path
			}
		},
		created(){
		 

			var data = this.$qs.stringify({
				token : this.$store.state.token,
				employeeNumber : 'Iadmin'
			})
			// this.$axios.post('/api/v1/menu/search/menu',data) // 获取菜单数据
			// 	.then(res => {
			// 		this.$store.commit('setMenudata',res.data)
			// 		this.menulist = this.$store.getters.getMenuFormat
			// })
			this.$axios.getMenu(data) // 获取菜单数据
				.then(res => {
					this.$store.commit('setMenudata',res.data)
					this.menulist = this.$store.getters.getMenuFormat
			})
		},
		methods:{
			getID(id){
				return id;
			},
			openmenu(arg){

			},
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
	      	},
	      	handleClose(key, keyPath) {
		        console.log(key, keyPath);
	      	}
		}
	}

</script>

<style scoped>
 
	.bg-blue {
	    background-color: #1b2b38;
	}
	.menus{
		width: 100%;
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

 
</style>