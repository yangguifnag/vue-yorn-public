import log from './util.log.js'


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
	}


}

export default iutils

