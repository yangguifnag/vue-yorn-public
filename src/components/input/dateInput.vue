<template>
	<i-col :label="label">
		<el-date-picker
			ref="dateinput"
			v-model="birthday"
			type="date"
			clearable
			:picker-options="pickerOptions"
			:placeholder="`选择${label}`"
			@change="handleChange">
		</el-date-picker>
	</i-col>
</template>
<script>
	export default{
		props : {
			hasDisabled : {
				type : [Boolean],
				default : false
			},
			label : [String]
		},
		data(){
			var that = this
			return {
				birthday : '',
				pickerOptions : {
					disabledDate(time) {
						if(that.hasDisabled)
							return time.getTime() > Date.now();
						else
							return false
					},
				}
			}
		},
		methods : {
			handleChange(val){
				return this.$emit('change',{
					label : this.label,
					value : val
				})
			}
		}
	}
</script>