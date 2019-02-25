<template>
	<i-table ref="table" :tableData="tableData" :colDate="colDate" @pagesChange="pagesChange"></i-table>
</template>
<script>
	export default{
		data(){
			var getTableData = () => {
				var data = this.$qs.stringify({

				})
			},
			return {
				tableData : [],
				colDate :[{
					key : 'customerNo',
					name : '客户号'
				},{
					key : 'customerName',
					name : '客户姓名'
				},{
					key : 'sex',
					name : '性别'
				},{
					key : 'birthday',
					name : '出生日期'
				},{
					key : 'documentType',
					name : '证件类型'
				},{
					key : 'documentNo',
					name : '证件号码'
				},{
					key : 'department',
					name : '服务机构'
				},{
					key : 'channel',
					name : '渠道'
				},{
					key : 'suprid',
					name : '疑似组号'
				},{
					key : 'checkState',
					name : '审批状态'
				},{
					key : 'checkDesc',
					name : '审批意见'
				}]
			}
		},
		created() {

		},
		methods : {
			pagesChange(){

			}
		}

	}
</script>