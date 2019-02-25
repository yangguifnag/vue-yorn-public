<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini">
			<el-table-column align="center" type="index" label="编号" fixed min-width="50" :show-overflow-tooltip="true">
 			</el-table-column>
			 	<el-table-column align="center" prop="accName" label="账户名" min-width="150" :show-overflow-tooltip="true">
  			</el-table-column>
  			<el-table-column align="center" prop="accountProvince" label="开户省" min-width="100" :show-overflow-tooltip="true">
  			</el-table-column>
  			<el-table-column align="center" prop="accountCity" label="开户市" min-width="100" :show-overflow-tooltip="true">
  			</el-table-column>
  			<el-table-column align="center" prop="bankName" label="开户银行名称" min-width="150" :show-overflow-tooltip="true">
  			</el-table-column>
  			<el-table-column align="center" prop="cardFlag" label="卡标记" min-width="200" :show-overflow-tooltip="true">
  			</el-table-column>
  			<el-table-column align="center" prop="privateFlag" label="公私标记" min-width="200" :show-overflow-tooltip="true">
  			</el-table-column>
  			<el-table-column align="center" prop="bankAccNo" label="账户号码" min-width="200" :show-overflow-tooltip="true">
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
				this.$axios.cusDetailInfo.selectCustomerBankInfo(data).then(res => {
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