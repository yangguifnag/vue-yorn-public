<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini" :show-summary="true">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
 			</el-table-column>
			 	<el-table-column align="center" prop="reportNo" label="报案号" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="claimStatus" label="状态" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="customerNo" label="客户编码" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="customerName" label="客户姓名" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="customerType" label="客户类型" min-width="130">
  			</el-table-column>
  			<el-table-column align="center" prop="accidentDate" label="事故日期" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="reportCustomerName" label="报案人姓名" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="reportDate" label="报案时间" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="isCallBack" label="是否回访" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="isSendMessage" label="是否发送短信" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="isBigEvent" label="是否重大事件" min-width="100">
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
				this.$axios.policyDetailInfo.policyClaimReportInfo(data).then(res => {
					this.tableData = res.data
					 
					
				})
			},
			 
		}

	}
</script>