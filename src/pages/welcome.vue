<template>
	<el-container class="index yorn-el-container">
		<el-header class="shodow theme-header yorn-header" height="auto">
			<headers /> 
		</el-header>
		<el-container class="yorn-main-container">
			<el-aside width="auto" class="theme-aside yorn-aside ">
				<menus /> 
			</el-aside>
			<el-main class="yorn-main">
				<!-- <breadcrumb/> -->
				<div class="main-container">
					<keep-alive :include="keepAlivePages">
						<transition name="yorn-router">
							<router-view/>
						</transition>
					</keep-alive>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>

	import headers from '@/components/common/header'
	import menus from '@/components/common/menu'
	import breadcrumb from '@/components/common/breadcrumb'

	export default {
		components : {
			headers,
			menus,
			breadcrumb
		},
		data(){
			return{
				show : true
			}
		},
		computed : {
			keepAlivePages(){
				return true
			}
		}
	}

</script>


<style scoped>
.el-header,.el-aside{
 
	overflow: hidden;
}
.el-menu{
	border-right: none;
}
.index{
	width: 100%;
	height: 100%;
}
.shodow{
	z-index: 1000;
}
.sidebar {
	position: fixed;
	border-right: 1px solid rgba(0,0,0,.07);
	overflow-y: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	transition: transform .25s ease-out;
	width: 300px;
	z-index: 3;
}
.sidebar::-webkit-scrollbar {
	width: 4px
}

.sidebar::-webkit-scrollbar-thumb {
	background: transparent;
	border-radius: 4px
}

.sidebar:hover::-webkit-scrollbar-thumb {
	background: rgba(0, 0, 0, 1.0)
}

.sidebar:hover::-webkit-scrollbar-track {
	background: hsla(0,0%,53%,.1)
}
</style>
