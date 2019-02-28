<template>
	<i-container class="dashboard">
		<i-menu
			:show.sync="menuShow"
			:x.sync="menuX"
			:y.sync="menuY"
		>sadfasfasf</i-menu>
		<el-card shadow="hover" @contextmenu.native="handleContextmenu">
			<div class="user-info-panel">
				<div class="avater">
					<img class="yorn-square-circle header-img" src="../../assets/img/head.jpg">
				</div>
				<div class="user-title">
					
				</div>
			</div>
		</el-card>
	</i-container>
</template>
<script>
	
	export default {
		data() {
			return {
				menuShow : false,
				menuX : 0,
				menuY : 0
			}
		},
		methods : {
			handleContextmenu(event){
				event.preventDefault()
        		event.stopPropagation()
        		this.menuX = event.clientX
        		this.menuY = event.clientY
        		this.menuShow = true
			}
		}

	}
</script>