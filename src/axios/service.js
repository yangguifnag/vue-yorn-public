import Vue from 'vue'
import {get} from 'lodash'
import axios from './api'
import conf from './config.js'
import qs from 'qs'
import store from '@/vuex/store.js'

const dparams = params => {
	return qs.stringify({
		token: store.state.token,
		...params
	})
}

const API = p => get(service,p)

const post = (url, data) => axios.post(url, dparams(data))


const service = {
	getLoginDropdown (params = {}) {
		return post(conf.getLoginDropdown, params)
	},
	aa: {
		searchInfo (params = {}) {
			return post(conf.searchInfo, params)
		}
	}
}

export default service

export {
	API,
	service
}