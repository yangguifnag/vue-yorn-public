<template>
	<i-panel>
		<div class="ipanel m-t-md">
			<i-table
				:formData="formDataTable"
				:columns="columns"
				:headtype="headtype"
				:operation="operation"
				:source="source"
				:responseHandle="rsh"
				:immediate ="!0"
				:vague = "false"
				@allData = "pageinfo"
				ref="datatable">
			</i-table>
		</div>
	</i-panel>

</template>
<script>
export default{
	data () {
		return {
			source: 'aa.searchInfo',
			headtype: 'selection',
			formDataTable: {},
			rsh : (res)  => res,
			columns: [{
				key: '__index__',
				name: '编号'
			}, {
				key: 'host',
				name: 'IP地址'
			},  {
				key: 'port',
				name: '端口号'
			}, {
				key: 'type',
				name: '代理模式'
			}, {
				key: 'country',
				name: '国家',
				render(h,params){
					return h('el-tag',params.value)
				}
			} ],
			operation: {
				fixed: 'right',
				list: [{
					name: '修改',
					type: 'primary',
					flag (row, index) {
						return true
					},
					method : (row, index) => {
						this.editData(row, index)
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
			}
		}
	},
	methods : {
		pageinfo(val){
			val.total = 20
		},
		editData(row,index,data){
			this.$refs.datatable.updataItem(row,{hobby :2})
		},
		delData(row,index,data){
			this.$refs.datatable.deleteItem(index)
		}
	}
}

</script>
