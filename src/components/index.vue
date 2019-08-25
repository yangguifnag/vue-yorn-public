<template>
	<div class="index">
		<div class="headers">
			<headers></headers>
		</div>
		<div class="menulist">
			<menus></menus>
		</div>
		<div class="body">
			<router-view/>
		</div>
	</div>

</template>

<script>
import headers from '@/components/common/header'
import menus from '@/components/common/menu'

export default {
	components: {
		headers,
		menus
	},
	data () {
		return {
			show: true
		}
	}
}
</script>

<style scoped>

	*{
		margin : 0;
		padding : 0;
	}
	.index{
		background: #efefef;
		height: 100%;
		width: 100%;
	}
	.headers{
		width: 100%;
		height: 70px;
	}
	.menulist{
		margin-top: 70px;

		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}
	.body{

		height: calc(100% - 70px);
		margin-left: 16%;
	}
</style>
