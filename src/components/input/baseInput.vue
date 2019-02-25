<template>
	<i-col :label="label">
		<el-input 
		v-model="input"
		:maxlength="maxlength"
		:placeholder="`请输入${label}`" 
		@change="change"></el-input>
	</i-col>
</template>
<script>
	export default{
		props : {
			label : [String],
			value : {
				default : ''
			},
			maxlength : {
				type : [Number],
				default : 10
			}
		},
		data(){
			return {
				input : ''
			}
		},
		computed:{
			 
		},
		methods: {
			change(val){
				this.$emit('change',{
					value : val,
					label : this.label
				})
			}
		},
		watch : {
			value:{
				handler (val){
					this.input = val
				},
				immediate : true
			}
		},
	}
</script>