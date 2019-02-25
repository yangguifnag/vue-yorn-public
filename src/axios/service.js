import Vue from 'vue'
import axios from './api'
import conf from './config.js'
import qs from 'qs'
import store from '@/vuex/store.js'

var dparams = params => {
	return qs.stringify({
		token: store.state.token,
		...params
	})
}

let post = (url, data) => axios.post(url, dparams(data))


var service = {
	getMenu (params = {}) {
		return axios.post(conf.getMenu, params)
	},
	doLogin (params = {}) {
		return axios.post(conf.doLogin, params)
	},
	getLoginDropdown (params = {}) {
		return axios.post(conf.getLoginDropdown, params)
	},

	getSearchInfo (params = {}) {
		return post(conf.getSearchInfo, params)
	},

	addSearchHistory (params = {}) {
		return axios.post(conf.addSearchHistory, params)
	},

	getSearchHistory (params = {}) {
		return axios.post(conf.getSearchHistory, params)
	},
	getDropdown (params = {}) {
		return axios.post(conf.getLoginDropdown, params)
	},
	getDepartment (params = {}) {
		return axios.post(conf.getDepartment, dparams(params))
	},
	cusDetailInfo: {
		getBaseInfo (params = {}) {
			return axios.post(conf.getBaseInfo, params)
		},
		getPapersInfo (params = {}) {
			return axios.post(conf.getPapersInfo, params)
		},
		getTagInfo (params = {}) {
			return axios.post(conf.getTagInfo, params)
		},
		getFamilyRelation (params = {}) {
			return axios.post(conf.getFamilyRelation, params)
		},
		getCustomerValueTargetInfo (params = {}) {
			return axios.post(conf.getCustomerValueTargetInfo, params)
		},
		selectCustomerContactInfo (params = {}) {
			return axios.post(conf.selectCustomerContactInfo, params)
		},

		selectCustomerBankInfo (params = {}) {
			return axios.post(conf.selectCustomerBankInfo, params)
		},
		selectCustomerPolicyInfo (params = {}) {
			return axios.post(conf.selectCustomerPolicyInfo, params)
		},
		selectGroupPolicyInfo (params = {}) {
			return axios.post(conf.selectGroupPolicyInfo, params)
		},
		selectCustomerContactHisInfo (params = {}) {
			return axios.post(conf.selectCustomerContactHisInfo, params)
		},
		selectCustomerValueTargetInfo (params = {}) {
			return axios.post(conf.selectCustomerValueTargetInfo, params)
		}
	},

	policyDetailInfo: {
		policyRiskInfo (params = {}) {
			return axios.post(conf.policyRiskInfo, params)
		},
		policyInsuredInfo (params = {}) {
			return axios.post(conf.policyInsuredInfo, params)
		},
		policyBenefitInfo (params = {}) {
			return axios.post(conf.policyBenefitInfo, params)
		},
		policyRenewalInfo (params = {}) {
			return axios.post(conf.policyRenewalInfo, params)
		},
		riskRenewalInfo (params = {}) {
			return axios.post(conf.riskRenewalInfo, params)
		},
		policyLivePremiumInfo (params = {}) {
			return axios.post(conf.policyLivePremiumInfo, params)
		},
		policyLiveReceiveInfo (params = {}) {
			return axios.post(conf.policyLiveReceiveInfo, params)
		},
		policyDividendInfo (params = {}) {
			return axios.post(conf.policyDividendInfo, params)
		},
		policyEdorMainInfo (params = {}) {
			return axios.post(conf.policyEdorMainInfo, params)
		},
		policyUnderwritingInfo (params = {}) {
			return axios.post(conf.policyUnderwritingInfo, params)
		},
		policyClaimRegisterInfo (params = {}) {
			return axios.post(conf.policyClaimRegisterInfo, params)
		},
		policyClaimReportInfo (params = {}) {
			return axios.post(conf.policyClaimReportInfo, params)
		},
		policyBeneficiaryInfo (params = {}) {
			return axios.post(conf.policyBeneficiaryInfo, params)
		},
		getPolicyInfo (params = {}) {
			return axios.post(conf.getPolicyInfo, params)
		},
		getPolicyAppnt (params = {}) {
			return axios.post(conf.getPolicyAppnt, params)
		}
	},


	customerScreen: {
		customerScreen (params = {}) {
			return axios.post(conf.customerScreen, params)
		},
		addlabel (params = {}) {
			return axios.post(conf.addlabel, dparams(params))
		}

	},

	customerMerge: {
		searchmerge (params = {}) {
			return axios.post(conf.searchmerge, params)
		}
	},
	aa: {
		searchInfo (params = {}) {
			return post(conf.searchInfo, params)
		}
	}
}

export default service
