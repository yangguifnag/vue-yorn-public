<template>
	<div class="yorn-box">
		<div class="yorn-box-body">
			<slot />
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style lang="scss">
	.yorn-box{
		border-radius: 3px;
		background-color: #FFF;
		.yorn-box-body{
			padding: 20px;
		}
	}
</style>