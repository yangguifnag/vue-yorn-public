
const ex = {}

ex.ex_classList = () => {
	if (!('classList' in document.documentElement)) {
		Object.defineProperty(HTMLElement.prototype, 'classList', {
			get: function () {
				var self = this
				function update (fn) {
					return function (value) {
						var classes = self.className.split(/\s+/g),
							index = classes.indexOf(value)
						fn(classes, index, value)
						self.className = classes.join(' ')
					}
				}

				return {
					add: update(function (classes, index, value) {
						if (!~index) classes.push(value)
					}),

					remove: update(function (classes, index) {
						if (~index) classes.splice(index, 1)
					}),

					toggle: update(function (classes, index, value) {
						if (~index) { classes.splice(index, 1) } else { classes.push(value) }
					}),

					contains: function (value) {
						return !!~self.className.split(/\s+/g).indexOf(value)
					},

					item: function (i) {
						return self.className.split(/\s+/g)[i] || null
					}
				}
			}
		})
	}
}

ex.ex_meta = () => {
	const metaList = [
		{
			'http-equiv': 'X-UA-Compatible',
			'content': 'IE=edge,chrome=1'
		}, {
			'name': 'renderer',
			'content': 'webkit'
		}, {
			'name': 'force-rendering',
			'content': 'webkit'
		}
	]
	const head = document.getElementsByTagName('head')[0]
	metaList.map(i => {
		const meta = document.createElement('meta')
		Object.keys(i).map(k => {
			meta.setAttribute(k, i[k])
		})
		head.appendChild(meta)
	})
}

export default ex
