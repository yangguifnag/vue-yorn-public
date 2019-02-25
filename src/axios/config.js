const prefix = ''// '/api/v1' // 前缀

export default (config => {
	let copy = {}
	Object.keys(config).forEach((val) => {
		copy[val] = `${prefix}${config[val]}`
	})
	return copy
})({
	'getMenu': '/menu/search/menu', // 获取菜单
	'doLogin': '/employee/login', // 登录
	'getLoginDropdown': '/getall1', // 获取机构


	'getSearchInfo': '/customer/info/search/info', // 查询页的表格
	'addSearchHistory': '/customer/info/insert/history', // 将搜索的数据添加到数据库
	'getSearchHistory': '/customer/info/search/history', // 搜索历史信息列表
	'getDepartment': '/customer/screen/search/department', // 获取部门

	// customerDetailinfo
	'getBaseInfo': '/customer/info/search/selectCustomerBaseInfo', // 获取个人信息
	'getPapersInfo': '/customer/info/search/selectCustomerPapersInfo', // 获取证件信息
	'getTagInfo': '/customer/info/search/selectCustomerTagInfo', // 获取标签信息
	'getFamilyRelation': '/customer/info/search/selectCustomerFamilyRelation', // 获取家庭信息
	'getCustomerValueTargetInfo': '/customer/info/search/selectCustomerValueTargetInfo', // 获取价值指标
	'selectCustomerContactInfo': '/customer/info/search/selectCustomerContactInfo', // 客户联系方式信息查询
	'selectCustomerBankInfo': '/customer/info/search/selectCustomerBankInfo', // 客户银行卡信息查询
	'selectCustomerPolicyInfo': '/customer/info/search/selectCustomerPolicyInfo', // 客户个体保单信息查询
	'selectGroupPolicyInfo': '/customer/info/search/selectGroupPolicyInfo', // 团体保单表格
	'selectCustomerContactHisInfo': '/customer/info/search/selectCustomerContactHisInfo', // 客户接触历史信息表格初始化
	'selectCustomerValueTargetInfo': '/customer/info/search/selectCustomerValueTargetInfo', // 价值指标
	// policyDetailinfo

	'policyRiskInfo': '/policy/info/PolicyRisk/info', // 保单险种信息
	'policyInsuredInfo': '/policy/info/PolicyInsured/info', // 保单被保人信息
	'policyBenefitInfo': '/policy/info/PolicyBenefit/info', // 保单受益人信息
	'policyRenewalInfo': '/policy/info/PolicyRenewal/info', // 保单续期缴费
	'riskRenewalInfo': '/policy/info/PolicyRiskReneal/info', // 保单续期缴费列表中选中某一行查询对应的险种续期缴费信息
	'policyLivePremiumInfo': '/policy/info/PolicyLivePremium/info', // 查询保单生存金生成信息
	'policyLiveReceiveInfo': '/policy/info/PolicyLiveReceive/info', // 查询保单生存金领取信息
	'policyDividendInfo': '/policy/info/PolicyDividend/info', // 保单红利信息
	'policyEdorMainInfo': '/policy/info/PolicyEdorMain/info', // 保单保全信息
	'policyUnderwritingInfo': '/policy/info/PolicyUnderwriting/info', // 保单核保信息
	'policyClaimRegisterInfo': '/policy/info/PolicyClaimRegister/info', // 保单理赔_立案信息
	'policyClaimReportInfo': '/policy/info/PolicyClaimReport/info', // 保单理赔_报案信息
	'policyBeneficiaryInfo': '/policy/info/PolicyBenefit/info', // 受益人信息
	'getPolicyInfo': '/policy/info/Policy/info', // 获取保单信息
	'getPolicyAppnt': '/policy/info/PolicyAppnt/info', // 获取投保人信息

	// customerScreen

	'customerScreen': '/customer/screen/search', //
	'addlabel': '/customer/screen/insert/label', // 添加贴标签


	'searchmerge': '/merge/search/merge', // 查询列表

	'exportList': '/merge/export/list', // 清单导出

	'searchInfo': '/getall'

})