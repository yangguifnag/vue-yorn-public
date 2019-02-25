<template>
	<i-panel class="pagesbody clearfix">
		<section class="customerDetailInfoLeft">
			<div class="ipanel">
				<div class="ipanel-heading">
					联系方式
				</div>
				<table1 :customerNo="customerNo"></table1>
			</div>
			 

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					银行卡信息
				</div>
				<table2 :customerNo="customerNo"></table2>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					个险保单详情
				</div>
				<table3 :customerNo="customerNo"></table3>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					团体保单详情
				</div>
				<table4 :customerNo="customerNo"></table4>
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
				<table5 :customerNo="customerNo"></table5>
			</div>

			<div class="ipanel m-t-lg">
				<div class="ipanel-heading">
					价值指标
				</div>
				<el-table :data="[]" style="width: 100%">
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
	import table1 from './CustomerContactInfoTable';
	import table2 from './CustomerBankInfoTable';
	import table3 from './CustomerPolicyInfoTable';
	import table4 from './CustomerGroupPolicyInfoTable';
	import table5 from './CustomerContactHisInfoTable';

	export default{
		components : {
			table1,
			table2,
			table3,
			table4,
			table5

		},
		data (){
			return {
				customerNo : '',
				customerBaseInfo : {},
				customerPapersInfo : {},
				tagInfo : {},
				familyData : {},
				valueTargetInfo : {},

			 


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