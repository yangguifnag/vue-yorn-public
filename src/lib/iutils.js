import log from './util.log.js'
import jsCookie from 'js-cookie'

let iutils = {
	debug: true,
	log,

	c_log: (str = '') => {
		if (this.debug) {
			console.log(str)
		}
	},

	fullScreen () {
	    var el = document.documentElement
	    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
	        if (typeof rfs !== 'undefined' && rfs) {
	            rfs.call(el)
	        };
	},

	exitScreen () {
		if (document.exitFullscreen) {
			document.exitFullscreen()
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen()
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen()
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen()
		}
		if (typeof cfs !== 'undefined' && cfs) {
			cfs.call(el)
		}
	},
	cookie: {
		set (name = 'yornsys', value = '', options = {}) {
			const base = {
				expires: 1
			}
			Object.assign(base, options)
			return jsCookie.set(name, value, options)
		},
		get (name = 'yornsys') {
			return jsCookie.get(name)
		},
		getAll () {
			return jsCookie.get()
		},
		remove (name = 'yornsys') {
			return jsCookie.remove(name)
		}

	}
}

export default iutils

