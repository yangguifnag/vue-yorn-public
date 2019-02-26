<template>
	<div id="app" class="theme yorn" :class="theme">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return {
				windowWidth : document.body.clientWidth,
				windowHeight : document.body.clientHeight
			}
		},
		mounted (){
			let that = this;
			
			that.$store.commit('setWindowWidth',that.$data.windowWidth)
			that.$store.commit('setWindowHeight',that.$data.windowHeight)
			this.$store.commit(that.$data.windowWidth < 1250 ? 'closeMenuIsCollapse' : 'openMenuIsCollapse')
			window.onresize = () => { //监听屏幕变化
				 
				that.$data.windowWidth = document.body.clientWidth
				that.$data.windowHeight = document.body.clientHeight
				that.$store.commit('setWindowWidth',that.$data.windowWidth)
				that.$store.commit('setWindowHeight',that.$data.windowHeight)
				this.$store.commit(that.$data.windowWidth < 1250 ? 'closeMenuIsCollapse' : 'openMenuIsCollapse')
				
			}
		},
		computed : {
			theme(){
				return this.$store.state.theme
			}
		}

	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
#app {

}
</style>
