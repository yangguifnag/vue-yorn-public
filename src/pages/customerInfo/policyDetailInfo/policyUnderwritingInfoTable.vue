<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
			</el-table-column>
		 	<el-table-column align="center" prop="policyNo" label="保单号" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="proposalNo" label="投保书号" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="riskName" label="险种名称" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="riskCode" label="险种代码" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="underWritingResult" label="核保结论" min-width="130">
			</el-table-column>
			<el-table-column align="center" prop="isIncreMoney" label="是否加费" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="isLimit" label="是否限额" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="operateDate" label="操作日期" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="underWriter" label="核保师" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="underWritingAnalysis" label="核保分析内容" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="isSpecial" label="是否特约" min-width="100">
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
				this.$axios.policyDetailInfo.policyUnderwritingInfo(data).then(res => {
					this.tableData = res.data
					 
					
				})
			},
			 
		}

	}
</script>