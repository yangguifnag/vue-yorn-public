<template>
	<div class="yorn-clock">
		{{}}
	</div>
</template>
<script>
	export default {
		data () {
			nowTime : ''
		},
		props : {
			
			format : {
				type : String,
				default : 'YYYY-MM-DD'
			}
		}
		created() {
			let that = this
			this.__nowTime = setInterval(() => {
				that.nowTime = that.$utils.time.now
			},1000)
		}
	}
</script>