<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini" highlight-current-row @current-change="handleCurrentChange">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
			</el-table-column>
		 	<el-table-column align="center" prop="policyNo" label="保单号" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="bankName" label="开户银行" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="bankAccountNo" label="银行账号" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="confirmDate" label="缴费年度" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="payType" label="缴费类型" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="payToDate" label="现缴至日期" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="payCount" label="缴费期数" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="sumPayMoney" label="保单缴费合计" min-width="130">
			</el-table-column>
			<el-table-column align="center" prop="payInterval" label="缴费频率" min-width="100">
			</el-table-column>
		</el-table>
		 
    </div>
</template>
<script>
	export default {
		props : {
			policyno : '',
			 
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
					policyno : this.policyno,
					 
				})
				this.$axios.policyDetailInfo.policyRenewalInfo(data).then(res => {
					this.tableData = res.data
					 
					
				})
			},
			handleCurrentChange(currentRow){
				console.log(currentRow)
				this.$emit('choosePayCount',currentRow.payCount)
			}

			 
		}

	}
</script>