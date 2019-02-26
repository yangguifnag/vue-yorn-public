<template>
	<div class="i-vtext">
		<div class="i-vtext-title">
			{{title}}
		</div>
		<div class="i-vtext-info">
			<div class="i-vtext-warp">
				{{text}}
			</div>
			
		</div>
	</div>
</template>
<script>
	export default {
		props : {
			title : {
				type : [String,Number],
				default : ''
			},
			text : {
				type : [String,Number],
				default : '-'
			}
		}
	}
</script>