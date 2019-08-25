<template>
    <el-menu :default-active="getPath" mode="horizontal" :router="true">
        <template v-for="(item,index) in menu">
            <menu-item v-if="item.children === undefined" :key="index" :item="item"/>
            <menu-sub v-else :key="index" :item="item"/>
        </template>
    </el-menu>
</template>

<script>
export default {
	name: 'yorn-menu',
	props: {
		menu: Array,
		require: true,
		default: () => []
	},
	components: {
	    menuSub: () => import('./menu-sub/menu-sub'),
		menuItem: () => import('./menu-item/menu-item')
	},
	computed: {
		getPath () {
			return this.$route.path
		}
	}
}
</script>

<style scoped>

</style>
