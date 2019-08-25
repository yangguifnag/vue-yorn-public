<template>
    <div>
        <yorn-menu :menu="navMenu">

        </yorn-menu>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'navMenu',
	data () {
		return {

		}
	},
	computed: {
		...mapState('yorn/menu', ['navMenu']),
		activeIndex () {
		    console.log(this.$route.path)
			return this.$route.path
		}
	}
}
</script>

<style scoped>

</style>
