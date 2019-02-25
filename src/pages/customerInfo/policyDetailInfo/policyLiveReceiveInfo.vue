<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini" :show-summary="true">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
 			</el-table-column>
			 	<el-table-column align="center" prop="policyNo" label="保单号" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="operationNo" label="业务号码" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="money" label="金额" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="getDate" label="领取日期" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="arrivalDate" label="财务到账日期" min-width="130">
  			</el-table-column>
  			<el-table-column align="center" prop="getWay" label="领取方式" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="bankName" label="开户银行" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="bankAccountNo" label="银行账户" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="bankAccountName" label="户名" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="isRiseTone" label="是否生调" min-width="100">
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
				this.$axios.policyDetailInfo.policyLiveReceiveInfo(data).then(res => {
					this.tableData = res.data
					 
					
				})
			},
			 
		}

	}
</script>