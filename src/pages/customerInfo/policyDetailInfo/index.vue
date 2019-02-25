<template>
	<i-panel class="pagesbody">
		<div class="ipanel">
			<div class="ipanel-heading m-b-lg">
				合同信息 
			</div>
			<el-row :gutter="30" style="margin: 0;">
				<el-col :span="8">

					<el-row :gutter="20" class="m-b-md">
						<i-text title="保单号" :text="PolicyInfo.policyNo"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="签单机构" :text="PolicyInfo.signDeptName"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="签单日期" :text="PolicyInfo.signDate"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="续期缴费银行代码" :text="PolicyInfo.bankCode"></i-text>
					</el-row>
					
					<el-row :gutter="20" class="m-b-md">
						<i-text title="续期缴费户名" :text="PolicyInfo.bankAccountName"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="服务代理人姓名" :text="PolicyInfo.agentName"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="服务代理机构" :text="PolicyInfo.agentCom"></i-text>
					</el-row>

				</el-col>
				<el-col :span="8">
					<el-row :gutter="20" class="m-b-md">
						<i-text title="投保单号" :text="PolicyInfo.appPolicyNo"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="销售渠道" :text="PolicyInfo.saleChannel"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="回执签收日期" :text="PolicyInfo.customeGetPolDate"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="续期缴费银行名称" :text="PolicyInfo.bankName"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="缴费方式" :text="PolicyInfo.payMode"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="服务代理人在职状态" :text="PolicyInfo.agentStatus"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="服务代理人联系电话" :text="PolicyInfo.agentPhone"></i-text>
					</el-row>

				</el-col>
				<el-col :span="8">
					<el-row :gutter="20" class="m-b-md">
						<i-text title="服务机构" :text="PolicyInfo.deptName"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="保单当前状态" :text="PolicyInfo.policyStatus"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="回执核销日期" :text="PolicyInfo.getPolDate"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="续期缴费银行账号" :text="PolicyInfo.bankAccountNo"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="服务代理人编码" :text="PolicyInfo.agentCode"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="服务代理人组别" :text="PolicyInfo.agentGroup"></i-text>
					</el-row>

					 
				</el-col>
			</el-row>
		</div>

		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				险种信息
			</div>
			<table1 :policyno="policyno"  ></table1>
		</div>

		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				投保人信息
			</div>
			<el-row :gutter="30" style="margin: 0;">
				<el-col :span="8">

					<el-row :gutter="20" class="m-b-md">
						<i-text title="投保人信息" :text="PolicyAppnt.customerNo"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="出生日期" :text="PolicyAppnt.birthday"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="投保人年龄" :text="PolicyAppnt.age"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="婚姻状况" :text="PolicyAppnt.marriage"></i-text>
					</el-row>
					
					<el-row :gutter="20" class="m-b-md">
						<i-text title="通讯地址" :text="PolicyAppnt.linkAddress"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="住址" :text="PolicyAppnt.houseAddress"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="工作单位" :text="PolicyAppnt.company"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="职业类别" :text="PolicyAppnt.workType"></i-text>
					</el-row>

				</el-col>
				<el-col :span="8">
					<el-row :gutter="20" class="m-b-md">
						<i-text title="客户姓名" :text="PolicyAppnt.customerName"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="证件类型" :text="PolicyAppnt.documentType"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="国籍" :text="PolicyAppnt.country"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="电话" :text="PolicyAppnt.mobile"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="通讯地址邮编" :text="PolicyAppnt.zipcode"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="住址邮编" :text="PolicyAppnt.houseZipcode"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="职业" :text="PolicyAppnt.occupation"></i-text>
					</el-row>

				</el-col>
				<el-col :span="8">
					<el-row :gutter="20" class="m-b-md">
						<i-text title="性别" :text="PolicyAppnt.sex"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="证件号码" :text="PolicyAppnt.documentNo"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="户口所在地" :text="PolicyAppnt.permanentAddress"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="电子邮件" :text="PolicyAppnt.email"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="宅电" :text="PolicyAppnt.homePhone"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="单位电话" :text="PolicyAppnt.companyPhone"></i-text>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<i-text title="职业编码" :text="PolicyAppnt.workCode"></i-text>
					</el-row>
 					
				</el-col>
			</el-row>
		</div>

		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				被保人信息列表
			</div>
			<table2 :policyno="policyno"></table2>
		</div>

		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				受益人信息
			</div>
			<table3 :policyno="policyno"></table3>
		</div>

		<section class="more">
			<div class="showMoreBtn " @click="showMore = !showMore">
				<a class="moreA">
					<el-button type="primary" size="small">
					{{!showMore ? '更多' :'收起'}}
					<span>
						<i :class="!showMore ? 'el-icon-arrow-down' : 'el-icon-arrow-up' "></i>
					</span>
					</el-button>
				</a>
				
			</div>
			 
			<el-collapse-transition class="showMoreBody">
				<div v-show="showMore">
					<div class="ipanel">
						<div class="ipanel-heading pointer" @click="triggerTbp(1)">
							缴费信息
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp1">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										保单保费
									</div>
									<table11 :policyno="policyno" @choosePayCount="choosePayCount"></table11>
								</div>
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										险种保费
									</div>
									<table12 :policyno="policyno" :paycount="paycount"></table12>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(2)">
							生存金
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp2">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										险种保费
									</div>
									<table9 :policyno="policyno"></table9>
								</div>
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										领取信息
									</div>
									<table10 :policyno="policyno"></table10>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(3)">
							保单红利
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp3">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										保单红利
									</div>
									<table4 :policyno="policyno"></table4>
								</div>
							</div>
						</el-collapse-transition>
					</div>
 

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(5)">
							保全信息
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp5">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										保全信息
									</div>
									<table5 :policyno="policyno"></table5>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(6)">
							核保信息
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp6">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										核保信息
									</div>
									<table6 :policyno="policyno"></table6>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(7)">
							理赔信息
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp7">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										立案信息
									</div>
									<table7 :policyno="policyno"></table7>
								</div>
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										报案信息
									</div>
									<table8 :policyno="policyno"></table8>
								</div>
							</div>
						</el-collapse-transition>
					</div>
				</div>
			</el-collapse-transition>
		</section>
	</i-panel>

</template>
<script>
	
	import table1 from './policyRiskInfoTable'
	import table2 from './policyInsuredInfoTable'
	import table3 from './policyBenefitInfoTable'
	import table4 from './policyDividendTable'
	import table5 from './policyEdorMainInfoTable'
	import table6 from './policyUnderwritingInfoTable'
	import table7 from './policyClaimRegisterInfoTable'
	import table8 from './policyClaimReportInfoTable'
	import table9 from './policyLivePremiumInfo'
	import table10 from './policyLiveReceiveInfo'
	import table11 from './policyRenewalTable'
	import table12 from './policyRiskRenewalTable'


	export default {
		components : {
			table1,
			table2,
			table3,
			table4,
			table5,
			table6,
			table7,
			table8,
			table9,
			table10,
			table11,
			table12,

		},
		data:() =>({
			policyno : '',
			showMore : false,
			PolicyInfo : [],
			PolicyAppnt : {},
			paycount : '',
			moreTable : {
				tbp1 : false,
				tbp2 : false,
				tbp3 : false,
				tbp4 : false,
				tbp5 : false,
				tbp6 : false,
				tbp7 : false
			},
		 
		}),
		methods : {
			triggerTbp(e){
				let _this = this;
				_this.moreTable['tbp'+e] = !_this.moreTable['tbp'+e]
			},
			getPolicyInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					policyno : this.policyno
				})
				this.$axios.policyDetailInfo.getPolicyInfo(data).then(res => {
					this.PolicyInfo = res.data.policyInfo
				})
			},
			getPolicyAppnt(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					policyno : this.policyno
				})
				this.$axios.policyDetailInfo.getPolicyAppnt(data).then(res => {
					this.PolicyAppnt = res.data[0]
				})
			},
			choosePayCount(val){
				console.log(val)
			}
		},
		created(){
			this.policyno = this.$route.params.id
		 	this.getPolicyInfo()
		 	this.getPolicyAppnt()
	 		
		}
	}
</script>
<style scoped>
	
	.showMoreBody{
		width: 100%;
		height: auto;
	}

	.moreA{
		text-align: center;
		display: block;
		width: 250px;
		margin: 0 auto;
		padding:0 0 20px 0;
		position: relative;
		font-size: 14px;
		cursor: pointer;
	}	
	
	.more{
		
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding-bottom: 20px;
		padding-top: 20px;
	}
</style>