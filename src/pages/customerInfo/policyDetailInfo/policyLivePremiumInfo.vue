<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini" :show-summary="true">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
 			</el-table-column>
			 	<el-table-column align="center" prop="policyNo" label="保单号" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="riskName" label="险种名称" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="riskCode" label="险种代码" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="payMoney" label="给付金额" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="shouldPayDate" label="应付日期" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="dealDate" label="业务处理日期" min-width="130">
  			</el-table-column>
  			<el-table-column align="center" prop="allocationType" label="分配方式" min-width="100">
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
				this.$axios.policyDetailInfo.policyLivePremiumInfo(data).then(res => {
					this.tableData = res.data
					 
					
				})
			},
			 
		}

	}
</script>