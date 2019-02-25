<template>
	<div class="pagesbody">
		<div class="ipanel">
			<div class="ipanel-heading m-b-lg">
				待并归信息
			</div>
			<el-form :label-position="labelPosition" :model="formData"  label-width="80px" size="small" :rules="rules" ref="form">
				<el-row :gutter="20">


					<i-input label='客户姓名' :value='input' @change='cNChange' :maxlength="20"></i-input>

					<t-select label='客户性别' @change="sexChange" itype='customerSex' clearable></t-select>

					<t-select label='证件类型' @change="docTChange" itype='documentType' clearable></t-select>

					<i-input label='证件号码' :value='input' @change='docNoChange' :maxlength="20"></i-input>

					<i-date-input label='出生日期' :hasDisabled="!0" @change="brChange"></i-date-input>

					<t-select label='渠道' @change="channelChange" itype='allChannel' clearable></t-select>

				</el-row>

				<el-row>
					<div class="pull-right">
						<el-button type="primary" size="small" icon="el-icon-search" :loading="btnLoad" @click="search">查询</el-button>
						<el-button type="primary" size="small" icon="el-icon-download">清单导出</el-button>
					</div>
				</el-row>
			</el-form>

		</div>
		<div class="ipanel m-t-md">
			<div class="ipanel-heading m-b-lg">
				查询列表
			</div>
			<table1 :formData="formDataTable" ref="datatable" @isLoad="isLoad => {btnLoad = isLoad}"></table1>
		</div>

	</div>
</template>
<script>

import table1 from './table'

export default {
	components: {
		table1
	},
	data () {
		return {
			btnLoad: false,
			input: '',
			formDataTable: {},
			labelPosition: 'right',

			formData: {
				sex: '',
				customerName: '',
				documentType: '',
				documentNo: '',
				birthday: '',
				channel: ''

			},
			rules: {

			},
			selectData: {
				customerSex: [], // 性别
				documentType: [], // 证件类型
				allChannel: [] // 渠道
			}
		}
	},
	methods: {
		cNChange (val) {
			this.formData.customerName = val.value
		},
		 	sexChange (val) {
			 	this.formData.sex = val.code
		},
		docTChange (val) {
			this.formData.documentType = val.code
		},
		docNoChange (val) {
			this.formData.documentNo = val.value
		},
		channelChange (val) {
			this.formData.channel = val.code
		},
		brChange (val) {
			this.formData.birthday = val.value
		},

		search () {
			this.formDataTable = JSON.parse(JSON.stringify(this.formData))
		}
		 },
		 created () {

		 }


}
</script>
