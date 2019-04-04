<template>
	<div id="app" class="theme yorn" :class="activeTheme">
		<router-view/>
	</div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
	name: 'App',
	data () {
		return {
			windowWidth: document.body.clientWidth,
			windowHeight: document.body.clientHeight
		}
	},
	mounted () {
		let that = this
		this.load()
		this.updateMenuCollapse()
		window.onresize = () => { // 监听屏幕变化
			that.$data.windowWidth = document.body.clientWidth
			that.$data.windowHeight = document.body.clientHeight
			this.updateMenuCollapse()
		}
	},
	computed: {
		// theme(){
		// 	return this.$store.state.theme
		// },
		...mapState('yorn/theme', ['activeTheme'])
	},
	methods: {
		...mapActions('yorn/theme', ['load']),
		...mapMutations('yorn/options', ['updateWindowWidth', 'updateWindowHeight']),
		...mapMutations('yorn/menu', ['updateMenuIsCollapse']),
		updateMenuCollapse () {
			this.updateWindowWidth(this.windowWidth)
			this.updateWindowHeight(this.windowHeight)
			this.updateMenuIsCollapse(this.windowWidth < 1250)
		}
	}

}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
#app {

}
</style>
