<template>
    <el-submenu :index="item.path">
        <template slot="title">
            <i-icon :name="item.icon" />
            {{item.name}}
        </template>
        <template v-for="(item,index) in item.children">
            <menu-item v-if="item.children === undefined" :item="item" :key="index" />
            <menu-sub v-else :item="item" :key="index"/>
        </template>
    </el-submenu>
</template>

<script>
export default {
	name: 'menu-sub',
	props: {
		item: {
			type: Object,
			require: true,
			default: () => {}
		}
	},
	components: {
	    menuItem: () => import('../menu-item/menu-item')
	}

}
</script>

<style scoped>

</style>
