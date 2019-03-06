import customerDetailInfo from '@/pages/customerInfo/customerDeatilInfo/index.vue'
import policyDetailInfo from '@/pages/customerInfo/policyDetailInfo/index.vue'
import customerScreen from '@/pages/customerScreen/customerScreen/index.vue'

import customerMerge from '@/pages/customerMerge/customerMerge/index.vue'
import handworkMerge from '@/pages/customerMerge/handworkMerge/index.vue'

import baseTable from '@/pages/baseTable/index.vue'

export default [{
	path: 'customerDetailInfo/:id',
	name: 'customerDetailInfo',
	component: customerDetailInfo,
	meta: {
		title: '废弃页1'
	}
}, {
	path: 'policyDetailInfo/:id',
	name: 'policyDetailInfo',
	component: policyDetailInfo,
	meta: {
		title: '废弃页1'
	}
}, {
	path: 'customerScreen/:type',
	name: 'customerScreen',
	component: customerScreen,
	meta: {
		title: '废弃页2'
	}
}, {
	path: 'customerMerge',
	name: 'customerMerge',
	component: customerMerge,
	meta: {
		title: '废弃页3'
	}
}, {
	path: 'handworkMerge',
	name: 'handworkMerge',
	component: baseTable,
	meta: {
		title: '基础表格'
	}
}]
