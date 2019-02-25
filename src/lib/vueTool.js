import Vue from 'vue'

let vueTool = {
	setData: (target, data) => {
		for (var key in data) {
			if (typeof target[key] === 'undefined') {
				Vue.set(target, key, data[key])
			} else {
				target[key] = data[key]
			}
		}
		return target
	}
}
export default vueTool
