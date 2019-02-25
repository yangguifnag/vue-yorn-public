<template>
	 
		<el-popover
		    placement="left"
		    title="状态"
		    width='150'
		    trigger="hover" >
			<el-switch
				v-model="switchz"
				:active-color="activeColor"
				:inactive-color="inactiveColor"
				:active-text="activeText"
				:inactive-text="inactiveText"
				:disabled="disabled"
				@change="change">
			</el-switch>
			<span slot="reference">
				<slot v-if="state" name="active"/> 
				<slot v-else name="inactive"/> 
			</span>    	
		
		</el-popover>		
	 
</template>
<script>
	export default {
		
		name : 'Istatus',

		componentName : 'Istatus',

		data(){
			return {
				switchz : false,
				
				disabled : false
			}
		},
		watch : {
			state:{
				handler (val){
					 
					this.switchz = val
				},
				immediate : true
			}
		},
		 
		props : {
			activeColor :{
				default : '#13ce66'
			},
			inactiveColor : {
				default : '#ff4949'
			},
			activeText : {
				default : '正常'
			},
			inactiveText : {
				default : '关闭'
			},
 
			state : {
				 
				default : false
			}
 

		},
		methods: {
			changeStatus(){

			},
			change(val){
				this.disabled = true
				//this.$emit('update:updataState',{'success':'1','fail':'2'}[val])
				this.$emit('change',val)
			}
		},

	}
</script>