<template>
	<div>
		<el-form v-bind="$attrs" :model="formModel" :label-position="labelPosition" status-icon :rules="" ref="form" label-width="100px" >
			
		</el-form>
	</div>
</template>
<script>

	export default = {
		data(){
			return {

			}
		},
		props : {
			labelPosition : {
				type : String,
				default : 'left'
			},
			formModel : {
				type : Object,
				default : () => ({}),
				required : true
			},
			formRules : {
				type : Object,
				required : true
			},
			formOptions : {
				type : Object,
				required : true
			}
		}
	}

</script>