<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini" :show-summary="true">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
			</el-table-column>
		 	<el-table-column align="center" prop="policyNo" label="保单号" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="edorAcceptNo" label="保全受理号" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="dealNo" label="批单号码" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="edorType" label="批改类型" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="appliDate" label="申请日期" min-width="130">
			</el-table-column>
			<el-table-column align="center" prop="edorValiDate" label="生效日期" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="edorState" label="批改状态" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="operator" label="操作员" min-width="100">
			</el-table-column>
			<el-table-column align="center" prop="edorAcceptWay" label="受理途径" min-width="100">
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
				this.$axios.policyDetailInfo.policyEdorMainInfo(data).then(res => {
					this.tableData = res.data
					 
					
				})
			},
			 
		}

	}
</script>