import moment from 'moment'

const filters = {
	year: (val) => {
		return moment(val).format('YYYY')
	},
	week: (val) => {
		return moment(val).format('e')
	},
	formatDate: (val, format, dateType = 'YYYY-MM-DD') => {
		return moment(val, dateType).format(format)
	},
	hide (val, begin = 3, long = 4) {
		let len = val.length
		return val.split('').map((i, _) => (_ >= begin && _ < (begin + long)) ? '*' : i).join('')
	},
	


}

export default filters