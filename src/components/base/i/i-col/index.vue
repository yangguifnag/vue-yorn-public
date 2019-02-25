<template>
	<el-col :span="6" >
		<el-form-item :label="label">
			<slot></slot>
		</el-form-item>
	</el-col>
</template>
<script>
	export default{
		props : {
			label : {
				type  : [String , Number],
				//default : '　'
				default : () => ''
			}
		}
	}
</script>