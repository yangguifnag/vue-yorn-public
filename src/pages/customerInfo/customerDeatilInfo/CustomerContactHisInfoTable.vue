<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini">
			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
 			</el-table-column>
			 	<el-table-column align="center" prop="contacttype" label="接触方式" min-width="150">
  			</el-table-column>
  			<el-table-column align="center" prop="contactdate" label="接触时间" min-width="150">
  			</el-table-column>
  			<el-table-column align="center" prop="contactfrom" label="发起方" min-width="150">
  			</el-table-column>
  			<el-table-column align="center" prop="contactreason" label="接触原因" min-width="150">
  			</el-table-column>
  			<el-table-column align="center" prop="contactresult" label="接触结果" min-width="200">
  			</el-table-column>
		</el-table>
		<el-pagination class="m-t-lg m-b-md" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.currentPage" :page-sizes="pages.pageSizes" :page-size="pages.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pages.total" :background="true">
	    </el-pagination>
    </div>
</template>
<script>
	export default {
		props : {
			customerNo : ''
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
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.selectCustomerContactHisInfo(data).then(res => {
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