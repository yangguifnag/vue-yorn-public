import {doLogin} from '@/axios/api'
import utils from '@/lib/iutils'
export default {
	namespeced: true,
	state: {

	},
	actions: {
		login ({
			state, commit, dispatch
		}, data) {
			return new Promise((resolve, reject) => {
				doLogin(data).then(async res => {
					utils.cookie.set('userid', res.data.uid)
					await dispatch('yorn/user/setUserInfo', res.data, {root: true})
					resolve(res)
				}).catch(err => {
					reject(err)
				})
			})
		}
	}
}
