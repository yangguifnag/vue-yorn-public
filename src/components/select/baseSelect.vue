<template>
	<i-col :label="label">
		<el-select v-model="code" 
	    	:clearable="clearable" 
	    	:multiple="multiple"
	    	:filterable="filterable"
	    	:collapse-tags="collapseTags"
	    	placeholder="请选择" @change="handleChange">
	    	<el-option
		    	v-for="item in data"
		    	:key="item.value"
		    	:label="item.codeName"
		    	:value="item.code">
		    </el-option>
		</el-select>
	</i-col>
		    
	 
</template>
<script>
	export default {

		name : 'Iselect',

		componentName : 'Iselect',

		props : {
			label : [String , Number],
			multiple : [Boolean],
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
			selectdata : {
				type : [Array],
				default : []
			}
		},
		watch : {
			selectdata:{
				handler (val){
					 
					this.data = val
				},
				immediate : true,
				deep : true
			}
		},
		data() {
			var selfGetData = name => {
				this.$axios.getDropdown(this.$qs.stringify({
					token : this.$store.state.token,
					codeType : name
				})).then(res => {
		 			this.data = res.data
				})
			}
			return {
				data : [],
				code : '',
				text : '',
				codeStr : ''
			}
		},
		created() {
			
		},
		methods : {
			handleChange(){
				
				var t = [],b = []
				var x = this.code.split('')
				var str = ''
				var codeT = ''
				var codeNameT = ''
				if (this.code instanceof Array) {
					codeT = this.code.join(',')
				}else {
					codeT = this.code
				}
				if(x instanceof Array ){
					for(var i in x){
						var obj = this.data.find(item => {
							return item.code+'' === x[i]+''
						})
						t.push(obj)
					}
				}
				for(var z in t){
					b.push(t[z].codeName)
				}
				codeNameT = b.join(',')
				console.log(this.code)
				console.log(b)
				this.$emit('bigChange',{
					code : this.code,
					codeName : b,
					codeT,
					codeNameT
				})
			}
		}
	}
</script>