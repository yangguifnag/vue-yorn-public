<template>
	<div class="yorn-weather yorn-weather-mini">
		<div class="yorn-weater-warp">
			<div class="yorn-weater-icon">
				<i-icon :name="">
			</div>
		</div>
		
	</div>
</template>
<script>
	export default {
		props : {
			data : {
				type : Object,
				require : true
			}
		},
		computed : {
			w_icon(){
				
			}
		}
	}
</script>