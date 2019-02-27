<template>
	<keep-alive>
	<div class="yorn-datatable" v-loading="loading">
		<div class="data-table-header">
			<div class="pull-left">
				<el-input
				    size="small"
				    placeholder="请输入查询内容"
				    v-model="searchInput"
				    @change="searchFunc"
				    clearable>
				</el-input>
			</div>
			<div class="pull-right">
				<el-tooltip class="item" effect="dark" content="刷新表格数据" placement="top-end">
				 	<el-button icon="el-icon-refresh" size="small" circle @click="handleRefresh"></el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="清空表格数据" placement="top-end">
					<el-button icon="el-icon-close" type="danger" size="small" plain circle @click="initTable"></el-button>
				</el-tooltip>
			</div>
		</div>
		<el-table :data="showTableData" style="width: 100%" size="mini" :stripe="true" max-height="600">
			<el-table-column v-if="headtype !== ''" align="center" :type="headtype" label="#" fixed min-width="50">
			</el-table-column>
		 	<el-table-column v-for="item in columns"
		 		:align="item.center || 'center'"
		 		:prop="item.key"
		 		:label="item.name"
		 		:width="item.width || 'auto'"
		 		min-width="100"
		 		:show-overflow-tooltip="true">
		 		<template slot-scope="scope">
		 			<template v-if="item.render">
		 				<render-dom 
		 					:item = "item"
							:row = "scope.row"
							:value ="scope.row[item.key+'']"
							:index = "scope.row.__index__"
							:render = "item.render"
		 				></render-dom>
		 			</template>
		 			<template v-else>
		 				<template v-if="item.format">
			 				<span v-html="item.format(scope.row,scope.row[item.key+''],scope.row.__index__)"></span>
			 			</template>
			 			<template  v-else>{{!!(scope.row[item.key+'']+'') ? scope.row[item.key+''] : '-'}}</template>
		 			</template>
		 			
		 		</template>
		 	</el-table-column>
		 	<el-table-column v-if="operation" align="center" label="操作"  min-width="150" :fixed="operation.fixed">
		 		<template slot-scope="scope">
					<template v-for="(btn, index) in operation.list">
						<el-button v-if="btn.flag(scope.row, scope.$index)" :type="btn.type" size="mini" :icon="btn.icon" :disabled="btn.disabled"
                           :plain="btn.plain" @click.native.prevent="btn.method(scope.row, scope.row.__index__,allTableData)">{{ btn.name }}
                		</el-button>
					</template>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination class="m-t-md" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.currentPage" :page-sizes="pages.pageSizes" :page-size="pages.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pages.total" :background="true">
	    </el-pagination>
    </div>
	</keep-alive>
</template>
<script>
export default {
	props: {
		tools: {
			type: Boolean,
			default: false
		},
		headtype: {
			type: [String],
			default: ''
		},
		colData: {
			type: Array,
			default: () => []
		},
		columns: {
			type: Array,
			default: () => []
		},
		tableData: {
			type: Array,
			default: () => []
		},
		formData: Object,
		pageType: {
			type: [String],
			default: 'client'
		},
		operation: [Object, Boolean],
		source: String,
		responseHandle: {
			type : Function,
			default: (res) => res
		},
		immediate : {
			type : [Boolean],
			default: false
		},
		vague : {
			type : Boolean,
			default : true
		}
	},
	watch: {
		pageType: {
			handler(val){
				this.paging = val === 'client'
			},
			immediate : true
		},
		formData: {
			handler (val) {
				this.responseData = {}
				this._allTableData = []
				this.allTableData = []
				this.showTableData = []
				this.formData = val
				this.pages.currentPage = 1
				this.getTableData()
			},
			deep: true
		},
		allTableData: {
			handler (val) {
			},
			deep: true
		}
	},
	data () {
		return {
			searchField : [],
			searchInput : '',
			paging : true,
			responseData: {},
			_allTableData : [],
			allTableData: [],
			showTableData: [],
			loading: false,
			pages: {
				currentPage: 1,
				total: 0,
				pageSizes: [10, 30, 50],
				pageSize: 10
			}
		}
	},
	created () {
		if(this.immediate){
			this.getTableData()
		}
		this.searchField = this.columns.map(i => i.key)
		 
	},
	components : {
		renderDom : {
			functional : true,
			props:{
				row : Object,
				item : Object,
				index : [Number,String],
				render : Function,
				value : [Object,String,Array,Number,Boolean]
			},
			render : (h,ctx) => {
				let params = {
					row : ctx.props.row,
					value : ctx.props.value,
					index : ctx.props.index,
					item : ctx.props.item
				}
				return ctx.props.render(h,params)
			}
		}
	},
	computed : {
		// showTableData(){
		// 	return
		// }
	},
	methods: {
		searchFunc(){
			let _dataList = this._allTableData.filter(i => {
				let flag = this.searchField.filter(n => {
					return i[n] !== undefined ? this.vague ?
						(i[n]+'').toLowerCase().includes(this.searchInput.toLowerCase()) :
						(i[n]+'').toLowerCase() === this.searchInput.toLowerCase() :
						false
				})
				return !this.searchInput || flag.length

			})
			this.allTableData = _dataList
			this.render ()
		},
		getServer(str){
			let _chain = str ? (str.split('.').length ? str.split('.') : [str]) : []
			return _chain.reduce((_,item) => _[item], this.$axios)
		},
		initTable () {
			this.responseData = {}
			this._allTableData = []
			this.allTableData = []
		 	this.showTableData = []
		 	this.pages.currentPage = 1
		 	this.pages.total = 0
		},
		handleSizeChange (val) {
			this.pages.pageSize = val
			this.handlerChange()
		},
		handleCurrentChange (val) {
			this.pages.currentPage = val
			this.handlerChange()
		},
		handlerChange(){
			if(this.pageType.toLowerCase() === 'client'){
				this.render()
			}else{
				this.getTableData()
			}
		},
		getTableData (option = {noErrorUpdata: '', msg: ''}) {
			this.loading = true
			var data =  {
				limit: this.pages.pageSize,
				offset: (this.pages.currentPage - 1) * this.pages.pageSize,
				...this.formData
			}
			this.getServer(this.source)(data).then(res => {
				this.responseData = this.formatResponseData(this.responseHandle(res.data))
				this.allTableData = this.formatTableData(this.responseData.rows)
				this._allTableData = Object.assign([],this.allTableData)
				this.render()
				this.loading = false
				if (option.msg) {
					this.$message({
				        message: '数据请求成功!',
				        type: 'success'
			        })
				}
			}).catch(err => {
				console.log(err)
			 	if (!option.noErrorUpdata) {
			 		this.initTable()
			 	}
				this.loading = false
				if (option.msg) {
					this.$message({
				        message: '数据请求失败! 请重试',
				        type: 'error'
			        })
				}
			})
		},
		getTotal (data) {
			return this.pageType.toLowerCase() === 'client' ? data.length : this.responseData.total || data.length
		},
		render () {
			this.pages.total = this.getTotal(this.allTableData)
			this.pages.total <= this.pages.pageSize ? this.pages.currentPage = 1 : ''
			if (this.pageType.toLowerCase() === 'client') {
				this.renderClient(this.allTableData)
			} else {
				this.renderServer(this.allTableData)
			}
		},
		renderClient (data) {
			let _start = (this.pages.currentPage - 1) * this.pages.pageSize,
				_end = _start + this.pages.pageSize
			this.showTableData = data.slice(_start, _end)
			if(this.pages.currentPage !== 1 && this.showTableData.length == 0){
				this.pages.currentPage -- ;
				this.renderClient (data)
			}
		},
		renderServer(data){
			this.showTableData = data
		},
		getOption () {
			// this.$emit('allData', this.allTableData)
			// this.$emit('currentData', this.showTableData)
			// this.$emit('paginationInfo', this.pages)
		},
		handleRefresh () {
			this.getTableData({
				noErrorUpdata: true,
				msg: true
			})
		},
		formatResponseData (data) {
			if (typeof data.rows === 'undefined') {
				return data instanceof Array ? { rows: data } : {rows: [data]}
			}
			return data
		},
		formatTableData (data) {
			return data.map((item, i) => {
				if(typeof item.__index__ == 'undefined'){
					item = {
						...item,
						__index__: i
					}
				}else{
					item.__index__ = i
				}
				return item
			})
		},
		refresh (){
			if(this.pageType.toLowerCase() === 'client'){
				this.formatTableData(this.allTableData)
				this.handlerChange()
			}else{
				this.getTableData()
			}
		},
		deleteItem (index){
			if(this.paging){
				this.allTableData.splice(index, 1);
				this.formatTableData(this.allTableData)
				this.handlerChange()
			}else {
				this.getTableData()
			}
		},
		updataItem (row,data){
			if(this.paging){
				this.$vT.setData(row,data)
				this.formatTableData(this.allTableData)
				this.handlerChange()
			}else {
				this.getTableData()
			}
		},
		addItem(data){
			this.allTableData.unshift(data);
		},
		emitAllData () {
			this.$emit('allData', this.allTableData)
		},
		emitCurrentData () {
			this.$emit('currentData', this.showTableData)
		},
		emitPaginationInfo () {
			this.$emit('paginationInfo', this.pages)
		}
	}
}
</script>
