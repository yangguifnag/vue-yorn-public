<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini" :show-summary="true">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
			</el-table-column>
		 	<el-table-column align="center" prop="policyNo" label="保单号" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="accountYear" label="会计年度" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="dividendMoney" label="红利金额" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="allocationSign" label="分配标志" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="shouldAllocationDate" label="应分日期" min-width="130">
			</el-table-column>
			<el-table-column align="center" prop="getMode" label="领取方式" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="allocationDate" label="分配日期" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="incrAmntAlreadyPay" label="增额交清的保额" min-width="130">
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
				this.$axios.policyDetailInfo.policyDividendInfo(data).then(res => {
					this.tableData = res.data
					 
					
				})
			},
			 
		}

	}
</script>