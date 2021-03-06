import db from '@/lib/db.js'
import {cloneDeep} from 'lodash'
import utils from '@/lib/iutils'

function initPath ({
	dbName = 'database',
	path = '',
	user = true,
	validator = () => true,
	defaultValue = ''
}) {
	const userid = utils.cookie.get('userid') || 'yorn-uuid'
	const currentPath = `${dbName}.${user ? `user.${userid}` : 'anonymous'}${path ? `.${path}` : ''}`
	const value = db.get(currentPath).value()
	if (!(value !== undefined && validator(value))) {
		db.set(currentPath, defaultValue).write()
	}
	return currentPath
}

export default {
	namespaced: true,
	actions: {

		set (context, {
			dbName = 'database',
			path = '',
			value = '',
			user = false
		}) {
			db.set(initPath({
				dbName,
				path,
				user
			}), value).write()
		},

		get (context, {
			dbName = 'database',
			path = '',
			defaultValue = '',
			user = false
		}) {
			return new Promise(resolve => {
				resolve(cloneDeep(db.get(initPath({
					dbName,
					path,
					user,
					defaultValue
				})).value()))
			})
		},

		getDatabase (context, {
			user = false
		} = {}) {
			return new Promise(resolve => {
				resolve(db.get(initPath({
					dbName: 'database',
					path: '',
					user,
					defaultValue: {}
				})))
			})
		},

		clearDatabase (context, {
			user = false
		} = {}) {
			return new Promise(resolve => {
				resolve(db.get(initPath({
					dbName: 'database',
					path: '',
					user,
					validator: () => false,
					defaultValue: {}
				})))
			})
		},

		getPageData (context, {
			vm,
			basis = 'name',
			user = false
		}) {
			return new Promise(resolve => {
				resolve(db.get(initPath({
					dbName: 'database',
					path: `$page.${vm.$route[basis]}.$data`,
					user,
					default: vm.$data
				})).value())
			})
		},

		setPageData (context, {
			vm,
			basis = 'name',
			user = false
		}) {
			return new Promise(resolve => {
				resolve(db.get(initPath({
					dbName: 'database',
					path: `$page.${vm.$route[basis]}.$data`,
					user,
					validator: () => false,
					defaultValue: vm.$data
				})))
			})
		},

		clearPageDate (context, {
			vm,
			basis = 'name',
			user = false
		}) {
			return new Promise(resolve => {
				resolve(db.get(initPath({
					dbName: 'database',
					path: `$page.${vm.$route[basis]}.$data`,
					user,
					validator: () => false,
					defaultValue: {}
				})))
			})
		},

		clearPage (context, {
			vm,
			basis = 'name',
			user = false
		}) {
			return new Promise(resolve => {
				resolve(db.get(initPath({
					dbName: 'database',
					path: `$page.${vm.$route[basis]}`,
					user,
					validator: () => false,
					defaultValue: {}
				})))
			})
		}

	}
}
