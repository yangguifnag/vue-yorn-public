<template>
    <el-menu-item :index="item.path">
        <i-icon :name="item.icon" />
        {{item.name}}
    </el-menu-item>
</template>

<script>
export default {
	name: 'menu-item',
	props: {
		item: {
			type: Object,
			require: false,
			default: () => {}
		}
	}
}
</script>

<style scoped>

</style>
