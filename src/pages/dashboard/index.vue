<template>
	<i-container class="dashboard">
		<i-menu
			:show.sync="menuShow"
			:x.sync="menuX"
			:y.sync="menuY"
		>sadfasfasf</i-menu>
		<!--  @contextmenu.native="handleContextmenu" -->
		<el-card shadow="hover">
			<div class="user-info-card">
				<div class="user-info-panel">
					<div class="avater">
						<img class="yorn-square-circle header-img" :src="userInfo.avater">
					</div>
					<div class="user-title">
						<p class="user-title-welcome">{{time}}好、<b>{{userInfo.name}}</b></p>
						<p class="user-title-word">勇敢坚毅真正之才智乃刚毅之志向{{'18640579572' | hide}}</p>
					</div>
					
				</div>
				<div class="user-right-box">
						
				</div>
			</div>
			
		</el-card>
	</i-container>
</template>
<script>
	
	import {mapActions, mapState ,mapMutations ,mapGetters} from 'vuex'

	export default {
		data() {
			return {
				menuShow : false,
				menuX : 0,
				menuY : 0,
				time : this.$utils.time.nowSect()
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
		},
		computed : {
			...mapState('yorn/user',['userInfo'])
		}

	}
</script>