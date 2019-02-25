<template>
	<i-select :label="label" 
	@bigChange="bigChange" 
	:selectdata="data"
	:multiple='multiple'
	:collapseTags='collapseTags'
	:filterable='filterable'
	:clearable='clearable'></i-select>
</template>
<script>
	export default{
		 
		data(){
			return {
				data : []
			}
			
		},
		props : {
			label : [String],
			itype : {
				type : [String],
				default : ''
			},
			clearable : {
				type : [Boolean],
				default : false
			},
			multiple :{
				type : [Boolean],
				default : false
			},
			collapseTags : {
				type : [Boolean],
				default : false
			},
			filterable : {
				type : [Boolean],
				default : false
			},
			 
		},
		created() {
			this.getDowpdown(this.itype)
		},
		methods : {
			getDowpdown(name){
		 		this.$axios.getDropdown(this.$qs.stringify({
					token : this.$store.state.token,
					codeType : name
				})).then(res => {
		 			this.data = res.data
				})
		 	},
			bigChange(val){
			 	this.$emit('change',val)
			}
		}
	}
</script>