<template>
	<div class="deckBox"  v-bind="$attrs" >
		<div class="title">
			{{str}}
		</div>
		<div class="">
			
		</div>
	</div>
</template>
<script>
	export default {
		
		name : 'IdeckBox',

		componentName : 'IdeckBox',

		data(){
			return {

			}
		},
		props : {
			str : [String,Number]
		},
		methods: {
			
		}
	}
</script>