import axios from 'axios'
import router from './../router'
import store from './../vuex/store'

axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 100000

axios.interceptors.request.use(
	config => { // 全局请求拦截
		if (store.state.token == null || store.state.token === '') {

			// router.replace({ path: '/' })
		}

		return config
	},
	function (error) {
		return Promise.reject(error)
	})

axios.interceptors.response.use(
	response => {
		if (response.data.code && response.data.code.substring(0,2) + '' === '40') {
			store.commit('delToken')
			router.replace({
				path: '/'
			})
		}

		return response
	},
	err => {
		if (err && err.response) {
			switch (err.response.status) {
			case 400:
				console.log('错误请求')
				break
			case 401:
				console.log('未授权，请重新登录')
				break
			case 403:
				console.log('拒绝访问')
				break
			case 404:
				console.log('请求错误,未找到该资源')
				break
			case 405:
				console.log('请求方法未允许')
				break
			case 408:
				console.log('请求超时')
				break
			case 500:
				console.log('服务器端出错')
				break
			case 501:
				console.log('网络未实现')
				break
			case 502:
				console.log('网络错误')
				break
			case 503:
				console.log('服务不可用')
				break
			case 504:
				console.log('网络超时')
				break
			case 505:
				console.log('http版本不支持该请求')
				break
			default:
				console.log(`连接错误${err.response.status}`)
			}
		} else {
			console.log('连接到服务器失败')
		}

		return Promise.reject(err.response)
	})


export default axios
