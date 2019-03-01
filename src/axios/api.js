
import {get} from 'lodash'
import axios from './config'
import s from './service'
import qs from 'qs'
import utils from '@/lib/iutils'

const dparams = params => {
	return qs.stringify({
		token: utils.cookie.get('token'),
		...params
	})
}

const API = p => get(api, p)

const post = (url, data) => axios.post(url, dparams(data))


const api = {
	menu (params = {}) {
		return post(s.menu, params)
	},
	doLogin (params = {}) {
		return post(s.login, params)
	},
	getLoginDropdown (params = {}) {
		return post(s.getLoginDropdown, params)
	},
	aa: {
		searchInfo (params = {}) {
			return post(s.searchInfo, params)
		}
	},
	doLogout (params = {}) {
		return post(s.logout, params)
	}

}

export default api

export {
	API,
	api
}
