<template>
	<div class="m-t-lg">
		<el-table :data="tableData" style="width: 100%" size="mini" v-loading="loading">
			<!-- <el-table-column align="center" type="index" label="编号" fixed min-width="100">
 			</el-table-column>
			<el-table-column align="center" prop="customerNo" label="客户号" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="customerName" label="客户姓名" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="sex" label="性别" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="age" label="年龄" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="birthday" label="出生日期" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="occupationTypeName" label="职业类别" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="occupationName" label="职业代码" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="marriageName" label="婚姻状况" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="salary" label="年薪" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="tagName" label="客户标签" min-width="100">
  			</el-table-column>
  			<el-table-column align="center" prop="customerStateName" label="客户状态" min-width="100">
  			</el-table-column> -->

  			<el-table-column v-for="col in colData" :key="col.$index" align="center" :prop="col.propname" :label="col.label" min-width="100">
  			</el-table-column> 
		</el-table>
		<el-pagination class="m-t-lg m-b-md" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.currentPage" :page-sizes="pages.pageSizes" :page-size="pages.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pages.total" :background="true">
	    </el-pagination>
    </div>
</template>
<script>
	export default {
		props : {
			formData : {},
			colData : Array
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
				this.$axios.customerScreen.customerScreen(data).then(res => {
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