<template>
	<i-panel class="pagesbody">
		<div class="ipanel">
			<el-row class="m-t-lg m-b-lg">
				<el-col :xs="22" :sm="20" :md="17" :lg="12" :xl="12" class="transverse-center float-none" >
					<el-row :gutter="20">
						<el-col :span="20">
							<el-input v-model="input" size="small" placeholder="姓名 / 证件号 / 手机号"></el-input>
						</el-col>
						<el-col :span="4" >
							<el-button type="warning" size="small" class="full-w" @click="search">搜索</el-button>
						</el-col>
					</el-row>
					<el-row>
						<div class="searchHistory m-t-md o-hidden">
							<span>搜索历史：</span>
							<a class="p-r-md" href="#" v-for="item in SearchHistory" @click="clickSearch(item.historyName)">{{item.historyName}}</a>
							
						</div>
					</el-row>
				</el-col>
				
			</el-row>
			<el-form :label-position="labelPosition"  label-width="80px" size="small"   ref="form">
				<el-row>
					<y-item :label="'阿斯顿发'">
						<el-input v-model.number="num" size="mini" placeholder="审批人"></el-input>
					</y-item>
					<y-item :label="'阿斯顿发'">
						<el-input v-model.number="num" size="mini" placeholder="审批人"></el-input>
					</y-item>
					<y-item :label="'阿斯顿发'">
						<el-input v-model.number="num" size="mini" placeholder="审批人"></el-input>
					</y-item>
				</el-row>
			</el-form>


			
		</div>
		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				查询列表
			</div>

			<i-table
				:formData="formDataTable"
				:columns="columns"
				:headtype="headtype"
				:operation="operation"
				:source="source"
				:responseHandle="rsh"
				ref="datatable">
			</i-table>

		    <!-- <el-table :data="tableData" style="width: 100%" size="mini">
      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
     			</el-table-column>
 			 	<el-table-column align="center" prop="customerno" label="客户号" min-width="150">
      			</el-table-column>
      			<el-table-column align="center" prop="customername" label="客户姓名" min-width="150">
      			</el-table-column>
      			<el-table-column align="center" prop="sex" label="性别" min-width="50">
      			</el-table-column>
      			<el-table-column align="center" prop="birthday" label="出生日期" min-width="150">
      			</el-table-column>
      			<el-table-column align="center" prop="documenttype" label="证件类型" min-width="200">
      			</el-table-column>
      			<el-table-column align="center" prop="documentno" label="证件号码" min-width="250">
      			</el-table-column>
      			<el-table-column align="center" prop="mobiletel" label="手机号" min-width="200">
      			</el-table-column>
      			<el-table-column align="center" prop="t9" label="操作" min-width="100" fixed="right">
      				<template slot-scope="scope">
      					<el-button size="mini" type="primary" round>
      						<router-link :to="{path:'/customerDetailInfo/'+scope.row.customerno}">查看</router-link>
      					</el-button>
      				</template>
      			</el-table-column>
			</el-table> -->


			<!-- <div class="m-t-lg m-b-md">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.currentPage" :page-sizes="pages.pageSizes" :page-size="pages.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pages.total" :background="true">
			    </el-pagination>
			</div> -->
		</div>
	</i-panel>

	

</template>
<script>
	export default {
		data() {
			return {

				source: 'getSearchInfo',
				headtype: 'selection',
				formDataTable: {
					customerSearchCondition : ''
				},
				rsh : (res) => res,
				columns: [{
					key: 'customerno',
					name: 'ECIF客户号',
					format (row,value,index){
						return `<a>${value}</a>`
					}
				}, {
					key: 'customername',
					name: '客户姓名'
				}, {
					key: 'sex',
					name: '性别'
				}, {
					key: 'birthday',
					name: '出生日期'
				}, {
					key: 'documenttype',
					name: '证件类型',
					render :(h,params) => {
						return h('el-progress',{
							props : {
							 
								percentage : this.num,
								width : 20,
								strokeWidth : 2,
								showText : false
							}
						},params.value)
					}
				}, {
					key: 'mobiletel',
					name: '手机号'
				}],
				operation: {
					fixed: 'right',
					list: [{
						name: '查看',
						type: 'primary',
						flag (row, index) {
							return true
						},
						method : (row, index) => {
							this.show(row, index)
						}
					}, {
						name: '删除',
						type: 'danger',
						flag (row, index) {
							return true
						},
						method :(row, index,allData) => {
							this.delData(row, index,allData)
						}
					}]
				},
				labelPosition: 'right',
				input: '',
				tableData : [],
				pages : {
					currentPage : 1,
					total : 0,
					pageSizes : [10,30,50],
					pageSize : 10
				},
				SearchHistory : [],
				num : 0
			}
		},
		created(){
			this.getSearchHistory()
		},
		
		methods: {
			delData(){
				this.num
			},
			show(row,index){
				this.$router.push({ name: 'customerDetailInfo', params: { id: row.customerno }})
			},
			search(){
				// var data = this.$qs.stringify({
				// 	token : this.$store.state.token,
				// 	customerSearchCondition : this.input
				// })
				this.formDataTable.customerSearchCondition = this.input
				
				console.log(this.formDataTable)
				//this.getSearchInfo(data)
			},
			handleSizeChange(val){

			},
			handleCurrentChange(val){

			},
			handleEdit(index , row){
				this.$router.push({
		          	path: '/describe/${id}',
		        })
			},
			getSearchInfo(data){
				this.$axios.getSearchInfo(data).then(res => {
				 	
					this.tableData = res.data
					this.pages.total = res.data.length
					this.pages.currentPage = 1
					
					this.addSearchHistory()
					

				})
			},
			addSearchHistory(){
				let data1 = this.$qs.stringify({
					token : this.$store.state.token,
					value : this.input
				})
				this.$axios.addSearchHistory(data1).then(res => {
					this.getSearchHistory()
				})
			},
			getSearchHistory(){
				let data = this.$qs.stringify({
					token : this.$store.state.token,
				})
				this.$axios.getSearchHistory(data).then(res => {
					this.SearchHistory = res.data
				})
			},
			clickSearch(val){

				this.input = val
				this.search()
			}
			
    	},
	}
</script>
<style scoped>
	.searchHistory{
		font-size: 12px;
		color: #bebebe;
		word-break: break-all;
    	word-wrap: break-word;
	}
</style>