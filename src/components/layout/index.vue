<template>
	<el-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">
		<el-form-item :label="label">
    		<slot></slot>
  		</el-form-item>
	</el-col>
</template>
<script>
export default {
	props: {
		xs: {
			type: Number,
			default: 8
		},
		sm: {
			type: Number,
			default: 6
		},
		md: {
			type: Number,
			default: 6
		},
		lg: {
			type: Number,
			default: 4
		},
		xl: {
			type: Number,
			default: 3
		},
		label: {
			type: [String],
			default: () => ''
		}
	}
}
</script>
