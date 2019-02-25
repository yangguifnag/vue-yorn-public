<template>
	<div class="m-t-lg">
		<el-table :data="tableData" style="width: 100%" size="mini" v-loading="loading">
			<el-table-column align="center" type="index" label="编号" fixed min-width="100">
 			</el-table-column>
			 	<el-table-column align="center" prop="customerNo" label="客户号" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="customerName" label="客户姓名" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="sex" label="性别" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="birthday" label="出生日期" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="documentType" label="证件类型" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="documentNo" label="证件号码" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="department" label="服务机构" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="channel" label="渠道" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="suprid" label="疑似组号" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="checkState" label="审批状态" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="checkReason" label="审批意见" min-width="100">
  			</el-table-column>
  			 

		</el-table>
		<el-pagination class="m-t-lg m-b-md" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.currentPage" :page-sizes="pages.pageSizes" :page-size="pages.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pages.total" :background="true">
	    </el-pagination>
    </div>
</template>
<script>
	export default {
		props : {
			formData : {}
		},
		data(){
			return {
				loading : false,
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
			//this.getTableData()
		},
		watch : {
			formData : {
				handler (val){
					this.tableData = []
					this.formData = val
					this.pages.currentPage = 1
					this.getTableData()
				},
				deep : true
				
			},
			loading : {
				handler (val){
					this.$emit('isLoad',this.loading)
				}
			}
		},
		 
		methods:{
			getTableData(){
				this.loading = true
				
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					limit : this.pages.pageSize,
					offset : (this.pages.currentPage-1)*this.pages.pageSize,
					...this.formData
				})
				this.$axios.customerMerge.searchmerge(data).then(res => {
					this.tableData = res.data.rows
					this.pages.total = res.data.total
					this.loading = false
				}).catch(err => {
					this.tableData = []
					this.loading = false
				})
			},
			handleSizeChange(val){
				this.pages.pageSize = val
				this.getTableData()
				
			},
			handleCurrentChange(val){
				this.pages.currentPage = val
				
				this.getTableData()
			},
		}

	}
</script>