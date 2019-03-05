import api from '@/axios/api'
import utils from '@/lib/iutils'
export default {
	namespaced: true,
	actions: {
		login ({
			state, commit, dispatch
		}, data) {
			return new Promise((resolve, reject) => {
				api.doLogin(data).then(async res => {
					utils.cookie.set('userid', res.data.data.uid)
					utils.cookie.set('token', res.data.token)
					await dispatch('yorn/user/setUserInfo', res.data.data, {root: true})
					await dispatch('load')
					resolve(res)
				}).catch(err => {
					console.log(err)
					reject(err)
				})
			})
		},
		logout ({
			state, commit, dispatch
		}, data) {
			return new Promise((resolve, reject) => {
				api.doLogout(data).then(async res => {
					await dispatch('yorn/user/setUserInfo', {}, {root: true})
					await dispatch('yorn/menu/setMenuList', {}, {root: true})
					utils.cookie.remove('userid')
					utils.cookie.remove('token')
					resolve(res)
				}).catch(err => {
					console.log(err)
					reject(err)
				})
			})
		},
		load ({state, commit, dispatch}) {
			return new Promise(async resolve => {
				await dispatch('yorn/page/openedLoad', null, {root: true})
				await dispatch('yorn/theme/load', null, {root: true})
				await dispatch('yorn/user/loadUserInfo', null, {root: true})
				await dispatch('yorn/menu/load', null, {root: true})
				await dispatch('yorn/options/loadUserAgent', null, {root: true})
				resolve()
			})
		}

	}
}
