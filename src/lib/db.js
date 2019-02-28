import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/localStorage'
import setting from '@/setting.js'

const adapter = new LocalStorage(`isystem-${setting.releases.version}`)
const db = low(adapter)

db.defaults({
	sys: {}, // 框架系统存储对象
	database: {}, // 后台数据缓存
	user: {}	// 用户数据缓存
}).write()

export default db
