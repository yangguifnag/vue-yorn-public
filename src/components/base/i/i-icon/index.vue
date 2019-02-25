<template>
	<i class="fa" :class="`fa-${name}`" aria-hidden="true"></i>
</template>
<script>

	import './font-awesome/css/all.min.css'
	export default{
		
		name : 'i-icon',
		componentName : 'i-icon',

		props : {
			name : {
				type : String,
				default : 'smile',
				required : false
			}
		}
	}

</script>