<template>
	<div class="yorn-contextmenu"
		v-show="flag"
		:style="style"
		ref="contextmenu">

		<slot />
	</div>
</template>
<script>

export default {
	name: 'yorn-contextmenu',
	props: {
		show: {
			type: Boolean,
			default: false
		},
		x: {
			type: Number,
			default: 0
		},
		y: {
			type: Number,
			default: 0
		}

	},
	computed: {
		flag: {
			get () {
				if (this.show) {
					window.addEventListener('mousedown', this.watchContextmenu)
				}
				return this.show
			},
			set (newValue) {
				this.$emit('update:show', newValue)
			}
		},
		style () {
			this.$nextTick(() => {
				if ((document.body.clientWidth - this.x) < this.$el.offsetWidth) {
					this.$emit('update:x', document.body.clientWidth - this.$el.offsetWidth)
				}
				if ((document.body.clientHeight - this.y) < this.$el.offsetHeight) {
					this.$emit('update:y', document.body.clientHeight - this.$el.offsetHeight)
				}
			})
			return {
				left: `${this.x}px`,
				top: `${this.y}px`,
				display: this.show ? 'block' : 'none'
			}
		}
	},
	methods: {
		menuStyle () {

		},
		watchContextmenu (event) {
			(!this.$el.contains(event.target) || event.button !== 0) && (this.flag = false)
			window.removeEventListener('mousedown', this.watchContextmenu)
		}
	},
	mounted () {
		document.querySelector('body').appendChild(this.$el)
		this.$nextTick(() => {
			this.elWidth = this.$el.offsetWidth
		})
	}

}
</script>
