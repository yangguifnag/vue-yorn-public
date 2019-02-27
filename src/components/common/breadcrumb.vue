<template>
	<div class="main-breadcrumb yorn-breadcrumb">
		<span class="main-breadcrumb-title"><i class="el-icon-location"></i>当前位置：</span>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path : '/dashboard'}" v-if="isShow">Dashboard</el-breadcrumb-item>
			<el-breadcrumb-item v-for='item in breadcrumbList' :to="{ path: item.path }" :key="item.path">{{item.meta.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				breadcrumbList : [],
				isShow : false
			}
		},
		created(){
			this.getBreadcrumb()
		},
		methods : {
			getBreadcrumb(){
				console.log(this.$route)
				this.isShow = !this.$route.matched.find(item => item.path == '/dashboard') ? true : false
				this.breadcrumbList = this.$route.matched.filter(item => item.path != '/index')
			}
		},
		watch : {
			$route(){
				this.getBreadcrumb()
			}
		}
	}
</script>
