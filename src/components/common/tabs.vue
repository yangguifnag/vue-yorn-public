<template>
	<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
		<el-tab-pane
			:key="item.name"
			v-for="(item, index) in opened"
			:label="item.title"
			:name="item.name"
		>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
	export default {
		data(){
			return {
				opened : []
			}
		}
	}

</script>