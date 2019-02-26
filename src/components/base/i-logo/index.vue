<template>
	<div class="logo" >
		<div class="logo-img" :style="logoStyle">
			<img src="../../../assets/img/logo-s.png" >
		</div>
	</div>
</template>

<script>
	export default{
		computed : {
			logoStyle () {
				const baseSize = 10
				const _size = {
					'sm' : 2,
					'xs' : 1,
					'md' : 3,
					'lg' : 5,
					'xl' : 8
				}
				const _style = px => ({
					height : `${px || baseSize }px`,
					width : `${px || baseSize }px`
				})
				return typeof this.size === 'string' ?
				 	_style(_size[this.size]*baseSize) :
				 	_style(this.size)
			}
		},
		props : {
			size :{
				type : [String,Number],
				required : false,
				default : 'small'
			}
		}
	}
</script>
<style scoped>
	.logo{
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.logo-img{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.logo-img > img{
		display: block;
		width: 100%;
		height: 100%;
	}
</style>