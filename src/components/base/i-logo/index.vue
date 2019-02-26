<template>
	<div>
		<img :style="logoStyle" src="../../../assets/img/logo.png" />
	</div>
</template>

<script>
	export default{
		data () {
			return{
				baseSize : 10,
				logoStyle : {
					width : `10px`
				}
			}
		},
		props : {
			size :{
				type : String,
				required : false,
				default : 'simall'
			}
		}
	}
</script>