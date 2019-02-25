<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini" >
			<el-table-column align="center" prop="mainRiskFlag" label="主附险" fixed min-width="100">
 			</el-table-column>
			 	<el-table-column align="center" prop="riskCode" label="险种编码" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="riskType" label="险种类型" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="riskName" label="险种名称" min-width="200">
  			</el-table-column>
  			<el-table-column align="center" prop="policyStartDate" label="保单生效日" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="policyEndDate" label="保单截止日" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="prem" label="保费/元" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="amnt" label="保额/元" min-width="100">
  			</el-table-column>
		</el-table>
		<el-pagination class="m-t-lg m-b-md" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.currentPage" :page-sizes="pages.pageSizes" :page-size="pages.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pages.total" :background="true">
	    </el-pagination>
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
				pages : {
					currentPage : 1,
					total : 0,
					pageSizes : [10,30,50],
					pageSize : 10
				}
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
				this.$axios.policyDetailInfo.policyRiskInfo(data).then(res => {
					this.tableData = res.data
					this.pages.currentPage = 1
					this.pages.total = res.data.length
					 
					if (this.pages.total/this.pages.pageSize > 1) {
						this.showData = res.data.slice(0,this.pages.pageSize*this.pages.currentPage)
					}else{
						 
						this.showData = res.data.slice(0)
					}
					
				})
			},
			handleSizeChange(val){
				this.pages.pageSize = val
				this.pages.currentPage = 1
				if (this.pages.total/this.pages.pageSize > 1) {
					this.showData = this.tableData.slice(0,this.pages.pageSize*this.pages.currentPage)
				}else{
					 
					this.showData = this.tableData.slice(0)
				}
			},
			handleCurrentChange(val){
				this.pages.currentPage = val
				if((this.pages.total-(this.pages.currentPage-1)*this.pages.pageSize)/this.pages.pageSize > 1){
					this.showData = this.tableData.slice(this.pages.pageSize*(this.pages.currentPage-1),this.pages.pageSize*this.pages.currentPage)
				}else{
					this.showData = this.tableData.slice(this.pages.pageSize*(this.pages.currentPage-1))
				}
				
			},
		}

	}
</script>