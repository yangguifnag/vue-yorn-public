import yornFilters from './filter/index'

export default {
	install (Vue, options) {
		Object.keys(yornFilters).forEach(i => Vue.filter(i, yornFilters[i]))
	}
}
