const prefix = ''// '/api/v1' // 前缀

export default (config => {
	let copy = {}
	Object.keys(config).forEach((val) => {
		copy[val] = `${prefix}${config[val]}`
	})
	return copy
})({
	'getLoginDropdown': '/getall1', // 获取机构
	'searchInfo': '/getall',
	'login': '/employee/login',
	'menu': '/menu',
	'logout': '/logout'
})
