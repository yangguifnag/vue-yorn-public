import moment from 'moment'

const time = {}
time.nowSect = (h) => {
	let hour = moment().hour()
	if (hour < 9) {
		return '早上'
	} else if (hour < 11) {
		return '上午'
	} else if (hour < 13) {
		return '中午'
	} else if (hour < 18) {
		return '下午'
	} else {
		return '晚上'
	}
}
time.now = (format = 'YYYY-MM-DD') => moment().format(format)

export default time
