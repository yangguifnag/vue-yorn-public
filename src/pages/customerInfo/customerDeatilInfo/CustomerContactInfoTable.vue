<template>
	<div class="m-t-lg">
		<el-table :data="showData" style="width: 100%" size="mini">
			<el-table-column align="center" type="index" label="编号" fixed min-width="50" >
			</el-table-column>
		 	<el-table-column align="center" prop="addresstype" label="地址类型" min-width="150" :show-overflow-tooltip="true">
			</el-table-column>
			<el-table-column align="center" prop="address" label="地址详情" min-width="250" :show-overflow-tooltip="true">
			</el-table-column>
			<el-table-column align="center" prop="homephone" label="家庭电话" min-width="150" :show-overflow-tooltip="true">
			</el-table-column>
			<el-table-column align="center" prop="mobile" label="移动电话" min-width="150" :show-overflow-tooltip="true">
			</el-table-column>
			<el-table-column align="center" prop="email" label="电子邮箱" min-width="150" :show-overflow-tooltip="true">
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
			this.selectCustomerContactInfo()
		},
		methods:{
			selectCustomerContactInfo(){
				var data = this.$qs.stringify({
					token : this.$store.state.token,
					customerno : this.customerNo
				})
				this.$axios.cusDetailInfo.selectCustomerContactInfo(data).then(res => {
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