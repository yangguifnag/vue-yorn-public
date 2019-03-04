import ieex from './ie/index'

const _options = {
	ie: false
}

export default {
	install (Vue, options) {
		options = Object.assign(_options, options)

		options.ie && (ieex.ex_classList())
	}
}
