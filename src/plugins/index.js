
import '@/components/base'
import '@/components'

import L from '@/components/yorn-loading'

export default {
	install (Vue, options) {
		Vue.prototype.$load = L
	}
}
