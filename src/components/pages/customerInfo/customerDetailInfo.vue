<template>
	<i-panel class="pagesbody clearfix">
		<section class="customerDetailInfoLeft">
			<div class="ipanel">
				<div class="ipanel-heading">
					联系方式
				</div>
				<el-table :data="CustomerContactInfo" style="width: 100%" size="mini">
	      			<el-table-column align="center" type="index" label="编号" fixed min-width="50">
	     			</el-table-column>
	 			 	<el-table-column align="center" prop="addresstype" label="地址类型" min-width="150" :show-overflow-tooltip="true">
	      			</el-table-column>
	      			<el-table-column align="center" prop="address" label="地址详情" min-width="250" :show-overflow-tooltip="true">
	      			</el-table-column>
	      			<el-table-column align="center" prop="homephone" label="家庭电话" min-width="150" :show-overflow-tooltip="true">
	      			</el-table-column>
	      			<el-table-column align="center" prop="mobile" label="移动电话" min-width="150" :show-overflow-tooltip="true">
	      			</el-table-column>
	      			<el-table-column align="center" prop="email" label="电子邮箱" min-width="150" :show-overflow-tooltip="true">
	      			</el-table-column>
				</el-table>

				<div class="m-t-lg m-b-md">
					<el-pagination @size-change="CustomerContactInfo_handleSizeChange" @current-change="CustomerContactInfo_handleCurrentChange" :current-page="CustomerContactInfoPages.currentPage" :page-sizes="CustomerContactInfoPages.pageSizes" :page-size="CustomerContactInfoPages.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="CustomerContactInfoPages.total" :background="true">
				    </el-pagination>
				</div>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					银行卡信息
				</div>
				<el-table :data="tableData2" style="width: 100%">
	      			<el-table-column align="center" type="index" label="编号" fixed min-width="50">
	     			</el-table-column>
	 			 	<el-table-column align="center" prop="t1" label="账户名" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t2" label="开户省" min-width="100">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t3" label="开户市" min-width="100">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t4" label="开户银行名称" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t5" label="卡标记" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t6" label="公私标记" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t7" label="账户号码" min-width="200">
	      			</el-table-column>
				</el-table>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					个险保单详情
				</div>
				<el-table :data="tableData2" style="width: 100%">
	      			<el-table-column align="center" type="index" label="编号" fixed min-width="50">
	     			</el-table-column>
	 			 	<el-table-column align="center" prop="t1" label="保单号" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t2" label="险种名称" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t3" label="渠道" min-width="50">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t4" label="服务机构" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t5" label="应缴保费/元" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t6" label="保额/万元" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t7" label="保单生效日" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t8" label="缴费方式" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t9" label="投保人姓名" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t10" label="被保人姓名" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t11" label="保单状态" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t12" label="操作" min-width="100" fixed="right">
	      				<template slot-scope="scope">
	      					<router-link :to="{path:'/customerDetailInfo/'+scope.$index}">详情</router-link>
	      				</template>
	      			</el-table-column>
				</el-table>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					团体保单详情
				</div>
				<el-table :data="tableData2" style="width: 100%">
	      			<el-table-column align="center" type="index" label="编号" fixed min-width="50">
	     			</el-table-column>
	 			 	<el-table-column align="center" prop="t1" label="团单号" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t2" label="个单号" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t3" label="险种名称" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t4" label="投保人" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t5" label="被保人" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t6" label="保单生效日" min-width="200">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t7" label="保单终止日" min-width="200">
	      			</el-table-column>
				</el-table>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					家庭关系
				</div>
				<div id="familyCanvasDiv">
					<canvas id="icanvas">
						您的浏览器不支持canvas
					</canvas>
				</div>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					接触历史
				</div>
				<el-table :data="tableData2" style="width: 100%">
	      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
	     			</el-table-column>
	 			 	<el-table-column align="center" prop="t1" label="接触方式" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t2" label="接触时间" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t3" label="发起方" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t4" label="接触原因" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t5" label="接触结果" min-width="200">
	      			</el-table-column>
				</el-table>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					价值指标
				</div>
				<el-table :data="tableData2" style="width: 100%">
	      			<el-table-column align="center" prop="t0" label="类型" fixed min-width="150">
	     			</el-table-column>
	 			 	<el-table-column align="center" prop="t1" label="名称" min-width="150">
	      			</el-table-column>
	      			<el-table-column align="center" prop="t2" label="指标值" min-width="150">
	      			</el-table-column>
				</el-table>
			</div>
		</section>

		<section class="customerDetailInfoRight">
			<div class="ipanel">
				<div class="ipanel-heading">
					基本信息
				</div>
				<div class="ipanel-body clearfix">
					<div class="list-text clearfix">
						<div class="list-text-header">
							客户号:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.customerNo}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							客户姓名:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.customerName}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							性别:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.sex}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							出生日期:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.birthday}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							客户级别:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.levels}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							渠道:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.channelName}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							服务机构:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.deptName}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							个人爱好:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.hobbies}}
						</div>
					</div>

					<div class="list-text clearfix">
						<div class="list-text-header">
							单位电话:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.companyTel}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							收入情况:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.salary}}
						</div>
					</div>
					<div class="list-text clearfix">
						<div class="list-text-header">
							系统来源客户号:
						</div>
						<div class="list-text-info">
							{{customerBaseInfo.ssno}}
						</div>
					</div>

				</div>

			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					证件信息
				</div>
				<div class="ipanel-body clearfix">
					<div class="list-text clearfix" v-for="item in customerPapersInfo">
						<div class="list-text-header">
							{{item.documenttype}}:
						</div>
						<div class="list-text-info">
							{{item.documentno}}
						</div>
					</div>
 
				</div>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					标签信息
				</div>
				<div class="ipanel-body">
					<el-tag size="mini" v-for="item in tagInfo" class="m-r-sm m-b-sm">{{item.tagName}}</el-tag>
				</div>
			</div>
		</section>

	</i-panel>

</template>
<script>
	
	//import {init} from './../../../assets/js/ft.js' ;

	export default{
		data (){
			return {
				customerNo : '',
				customerBaseInfo : {},
				customerPapersInfo : {},
				tagInfo : {},
				familyData : {},
				valueTargetInfo : {},

				CustomerContactInfo : [],
				CustomerContactInfoPages : {
					currentPage : 1,
					total : 0,
					pageSizes : [10,30,50],
					pageSize : 10
				},


				CustomerBankInfo :[],
				CustomerPolicyInfo : [],
				GroupPolicyInfo : [],
				CustomerContactHisInfo : [],
				CustomerValueTargetInfo : []

			}
		},
		
		created(){
			console.log(this.$route.params)
	 		this.customerNo = this.$route.params.id
	 		this.getBaseInfo()
	 		this.getPapersInfo()
	 		this.getTagInfo()
	 		this.getFamilyRelation()
	 		this.getCustomerValueTargetInfo()
	 		this.selectCustomerContactInfo()
	 		this.selectCustomerBankInfo()
	 		this.selectCustomerPolicyInfo()
	 		this.selectCustomerContactHisInfo()
	 		this.selectCustomerValueTargetInfo()
	 		this.selectCustomerValueTargetInfo()
		},
		methods:{
			//init();
			getBaseInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.getBaseInfo(data).then(res => {
					this.customerBaseInfo = res.data[0]
				})
			},
			getPapersInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.getPapersInfo(data).then(res => {
					this.customerPapersInfo = res.data
				})
			},
			getTagInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerNo : this.customerNo
				})
				this.$axios.cusDetailInfo.getTagInfo(data).then(res => {
					this.tagInfo = res.data
				})
			},
			getFamilyRelation(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.getFamilyRelation(data).then(res => {
					this.familyData = res.data
				})
			},
			getCustomerValueTargetInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.getCustomerValueTargetInfo(data).then(res => {
					this.valueTargetInfo = res.data
				})
			},
			selectCustomerContactInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.selectCustomerContactInfo(data).then(res => {
					this.CustomerContactInfo = res.data
				})
			},
			selectCustomerBankInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.selectCustomerBankInfo(data).then(res => {
					this.CustomerBankInfo = res.data
				})
			},
			selectCustomerPolicyInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.selectCustomerPolicyInfo(data).then(res => {
					this.CustomerPolicyInfo = res.data
				})
			},
			selectGroupPolicyInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.selectGroupPolicyInfo(data).then(res => {
					this.GroupPolicyInfo = res.data
				})
			},
			selectCustomerContactHisInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.selectCustomerContactHisInfo(data).then(res => {
					this.CustomerContactHisInfo = res.data
				})
			},
			selectCustomerValueTargetInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.selectCustomerValueTargetInfo(data).then(res => {
					this.CustomerValueTargetInfo = res.data
				})
			},


			//
			CustomerContactInfo_handleSizeChange(val){
				
			},
			CustomerContactInfo_handleCurrentChange(val){

			},

		}
	}
</script>
<style scoped>
	.customerDetailInfoLeft{
		float: left;
		width: 79%;
		box-sizing: border-box;
		padding-right: 20px;
	}
	.customerDetailInfoRight{
		float: left;
		width: 21%;

	}
	#familyCanvasDiv{
		min-height: 500px;
		min-width: 700px;
		width: 100%;
		height: 500px;
	}
	.list-text{
		width: 100%;
		box-sizing: border-box;
		padding: 5px 10px;
	}
	.list-text-header,.list-text-info{
		float: left;
		font-size: 13px;
		line-height: 20px;
	}
	.list-text-header{
		width: 35%;
		font-weight: bold;
		color: #747474;
	}
	.list-text-info{
		width: 65%;
		color: #afafaf;
		word-break: break-all;
	}
</style>