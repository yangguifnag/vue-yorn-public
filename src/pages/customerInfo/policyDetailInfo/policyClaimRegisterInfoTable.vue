<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
			</el-table-column>
		 	<el-table-column align="center" prop="claimNo" label="赔案号" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="claimStatus" label="状态" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="customerNo" label="客户编码" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="customerName" label="客户姓名" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="customerType" label="客户类型" min-width="130">
			</el-table-column>
			<el-table-column align="center" prop="documentType" label="证件类型" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="documentNo" label="证件号码" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="claimResult" label="审核结论" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="claimMoney" label="赔款金额" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="claimAcceptDate" label="受理日期" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="accidentDate" label="事故日期" min-width="100">
			</el-table-column>
		</el-table>
	 
    </div>
</template>
<script>
	export default {
		props : {
			policyno : ''
		},
		data(){
			return {
				tableData : [],
				showData : [],
			 
			}
		},
		created(){
			this.getTableData()
		},
		methods:{
			getTableData(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					policyno : this.policyno
				})
				this.$axios.policyDetailInfo.policyClaimRegisterInfo(data).then(res => {
					this.tableData = res.data
					 
					
				})
			},
			 
		}

	}
</script>