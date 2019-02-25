<template>
	<div class="pagesbody">
		<div class="ipanel">
			<div class="ipanel-heading m-b-lg">
				查询条件
			</div>
			<el-form :label-position="labelPosition" :model="formData"  label-width="80px" size="small" :rules="rules" ref="form">
				<el-row :gutter="20">
					<el-col :span="6"> 
						<el-form-item label="客户级别">
						    <el-select v-model="formData.rankCode" placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.customerLevel"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="客户角色">
						    <el-select v-model="formData.customerRoleCode" clearable  placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.customerRole"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="渠道">
						    <el-select v-model="formData.canalCode" multiple collapse-tags placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.canal"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="年龄区间">
							<el-row :gutter="0">
						     	<el-col :span="11">
						     		<el-form-item prop="ageStart" class="m-b-n">
							     		<el-input
								     		placeholder="请输入起始年龄"
								     		v-model.number="formData.ageStart" :maxlength="3" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');">
								     	</el-input>
								     </el-form-item>
						     	</el-col>
						     	<el-col class="line" :span="2">&nbsp;</el-col>
					     		<el-col :span="11">
					     			<el-form-item prop="ageEnd"  class="m-b-n">
						     			<el-input
								     		placeholder="请输入结束年龄"
								     		v-model.number="formData.ageEnd" :maxlength="3" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');">
								     	</el-input>
								     </el-form-item>
					     		</el-col>
					     	</el-row>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="险种类型">
						    <el-select v-model="formData.insuranceCode" clearable placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.insurance"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="险种名称">
						    <el-select v-model="formData.riskCode" clearable filterable placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.risk"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="服务机构">
							<el-popover
						  		placement="bottom-start"
						  		width="400"
						  		trigger="click">
						     	<div class="departmentDrapPanel">
						     		<el-tree 
						     			node-key='id'
						     			ref="departmentTree"
						     			:data="selectData.department" 
						     			:props="departmentProps"
						     			:show-checkbox="true"
						     			@check-change='getDepTreeKey'></el-tree>
						     	</div>
						     	<el-input slot="reference"
						     		readonly
						     		placeholder="请选择服务机构"
						     		v-model="departmentText" >
						     	</el-input>
						    </el-popover>
						     
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="年薪区间">
							<el-row :gutter="0">
						     	<el-col :span="11">
						     		<el-input
							     		placeholder="请输入起始年薪"
							     		v-model="formData.salaryStart" >
							     	</el-input>
						     	</el-col>
						     	<el-col class="line" :span="2">&nbsp;</el-col>
					     		<el-col :span="11">
					     			<el-input
							     		placeholder="请输入结束年薪"
							     		v-model="formData.salaryEnd" >
							     	</el-input>
					     		</el-col>
					     	</el-row>
						</el-form-item>
					</el-col>
					<el-col :span="6" v-show='more'>
						<el-form-item label="客户标签">
						    <el-select v-model="formData.tagId" filterable multiple collapse-tags placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.tag"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="6" v-show='more'>
						<el-form-item label="客户状态">
						    <el-select v-model="formData.customerStateCode" clearable placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.customerState"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="6" v-show='more'>
						<el-form-item label="客户性别">
						    <el-select v-model="formData.customerSexCode" clearable placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.customerSex"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>

					<el-col :span="6" v-show='more'>
						<el-form-item label="婚姻状况">
						    <el-select v-model="formData.marriageCode" clearable placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.marriage"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>

					<el-col :span="6" v-show='more'>
						<el-form-item label="职业类别">
						    <el-select v-model="formData.occupationTypeCode" multiple collapse-tags placeholder="请选择" @change="occupationTypeChange">
						    	<el-option
							    	v-for="item in selectData.occupationType"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>

					<el-col :span="6" v-show='more'>
						<el-form-item label="职业代码" >
						    <el-select v-loading="loading" v-model="formData.occupationCode" filterable clearable placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.occupation"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>

					<el-col :span="6" v-show='more'>
						<el-form-item label="筛选数量" prop="screeningNum">
						    <el-input
					     		placeholder="请输入筛选数量"
					     		v-model="formData.screeningNum" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');">
					     	</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-button size=small @click="more = !more">{{more ? '收起' :'更多'}}<i class="el-icon-arrow-down el-icon--right" :class="more ? 'el-icon-arrow-up' :'el-icon-arrow-down'"></i></el-button>
					<div class="pull-right">
						<el-button type="primary" icon="el-icon-search" size=small @click="searchClick('form')">查询</el-button>
						<el-button type="primary" icon="el-icon-edit" size=small @click="addTag">贴标签</el-button>
					</div>
				</el-row>
			</el-form>
		</div>

		<div class="ipanel m-t-md">
			<table1 :formData="formDataTable" :colData="colData" ref="datatable"></table1>
		</div>

		<el-dialog title="添加标签" :visible.sync="addTagModal" >
			<el-form :model="addTagForm" size="small"  label-width="80px" :rules="addTagFormRules" ref="addTagForm">
				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="标签类型" prop="labelTypeCode">
						    <el-select v-loading="loading" v-model="addTagForm.labelTypeCode" clearable placeholder="请选择">
						    	<el-option
							    	v-for="item in selectData.labelType"
							    	:key="item.value"
							    	:label="item.codeName"
							    	:value="item.code">
							    </el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="标签名称" prop="labelName">
						    
					    	<el-input
					    		maxLength="50"
				     			placeholder="请输入标签名称"
				     			v-model="addTagForm.labelName">
					     	</el-input>
							 
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="标签名称" prop="labelDescription">
							<el-input
								maxLength="300"
								type="textarea"
								:autosize="{ minRows: 2, maxRows: 4}"
								placeholder="请输入标签描述"
								v-model="addTagForm.labelDescription">
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addTagModal = false" size="small">取 消</el-button>
				<el-button type="primary" @click="submitAddTagForm('addTagForm')" size="small" :loading="addTagModalLoading">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>

	import table1 from './table'

	export default{
		components : {
			table1
		},

		data(){
			
			var checkAgeStart = (rule, value, callback) => {
				if(!!this.formData.ageEnd){
					if(!value){
						return callback(new Error('起始年龄不能为空'));
					}else if (value > this.formData.ageEnd) {
						return callback(new Error('起始年龄不能大于终止年龄'));
					}else{
						callback();
					}
				}else{
					callback();
				}
				
			}
			var checkAgeEnd = (rule, value, callback) => {
				if(!!this.formData.ageStart){
					if(!value){
						return callback(new Error('终止年龄不能为空'));
					}else if (value < this.formData.ageStart) {
						return callback(new Error('终止年龄不能小于起始年龄'));
					}else {
						callback();
					}
				}else {
					callback();
				}
			}
			return {
				colData : [{
					propname : 'customerNo',
					label : '客户号'
				}],
				departmentText : '',
				loading : false,
				addTagModalLoading : !1,
				labelPosition: 'right',
				formDataTable : {},
				more : false,
				addTagModal : true,
				addTagForm : {
					labelTypeCode : '',
					labelName : '',
					labelDescription : '',


				},
				formData : {
					rankCode : '',
					customerRoleCode : '',
					canalCode : '',
					ageStart : '',
					ageEnd : '',
					insuranceCode : '',
					departmentId : '',
					salaryStart : '',
					salaryEnd : '',
					customerStateCode : '',
					tagId : [],
					marriageCode : '',
					occupationTypeCode : '',
					occupationCode : '',
					screeningNum : '',
					riskCode : '',
					departmentId : '',
					

				},
				selectData : {
					customerLevel : [], //客户等级
					customerRole : [], //客户角色
					canal : [],//渠道
					insurance : [],//险种类型
					department : [],//服务机构
					tag : [], //客户标签
					customerState : [],//客户状态
					customerSex : [],//客户性别
					marriage : [], //婚姻状况
					occupationType : [],//职业类别
					occupation  : [],//职业代码
					risk :[],// 险种名称
				 	labelType : [],//标签类型
				},
				rules : {
					ageStart: [
			            { validator: checkAgeStart, trigger: 'blur' },
			             
		          	],
		          	ageEnd : [
		          		{ validator : checkAgeEnd , trigger : 'blur' },
		          		 
		          	],

		           	 
				},
				addTagFormRules : {
					labelTypeCode : [
						{required: true, message: '请选择标签类型', trigger: 'change'}
					],
					labelName : [
						{required: true, message: '请输入标签名称', trigger: 'blur'}
					] 
				},
				departmentProps : {
					children: 'nodes',
					label: 'text'
				}
			}
		},
		created (){
			this.getDowpdown('customerRole')
			this.getDowpdown('canal')
			this.getDowpdown('insurance')
			this.getDowpdown('risk')
			this.getDowpdown('tag')

			this.getDowpdown('customerState')
			this.getDowpdown('customerSex')
			this.getDowpdown('marriage')
			this.getDowpdown('occupationType')
			this.getDowpdown('occupation')
			this.getDowpdown('labelType')
			this.$axios.getDepartment().then(res => {
				this.selectData.department = res.data.rows
				 
			})

		},
		methods :{
			searchClick(formName){
				
				this.$refs[formName].validate((valid) => {
					if (valid) {
					 	
						
						this.formDataTable = JSON.parse(JSON.stringify(this.formData))
						for(let i in this.formDataTable){
							this.formDataTable[i] = this.formDataTable[i] instanceof Array ? this.formDataTable[i].join(',') : this.formDataTable[i]
						} 
						
					} else {

						return false;
					}
				});
				
			},
		 	getDowpdown(name){
		 		this.$axios.getDropdown(this.$qs.stringify({
					token : this.$store.state.token,
					codeType : name
				})).then(res => {
		 			this.selectData[name] = res.data
				})
		 	},
		 	occupationTypeChange (val){
		 		this.loading = true
		 		this.$axios.getDropdown(this.$qs.stringify({
					token : this.$store.state.token,
					codeType : 'occupation',
					occupationTypeCode : val.join(',')
				})).then(res => {
		 			this.selectData['occupation'] = res.data
		 			this.formData.occupationCode = ''
		 			this.loading = false
				}).catch(err => {
					this.loading =false
				})
		 	},
		 	getDepTreeKey(){
		 		var ary = []
		 		this.$refs.departmentTree.getCheckedNodes().map(item => {
		 			ary.push(item.text)
		 		})
		 		this.departmentText = ary.join(',')
		 		this.formData.departmentId = this.$refs.departmentTree.getCheckedKeys().join(',')
		 		 
		 	},
		 	addTag(){
		 		 
		 		if(this.$refs.datatable.tableData.length <= 0){
		 			this.$alert('查询列表中无数据!', '提示', {
			          	confirmButtonText: '确定',
			        });

		 		}else{
		 			this.addTagModal = !0
		 		}
		 	},
		 	submitAddTagForm(formName){
		 		
		 		this.$refs[formName].validate((valid) => {
					if (valid) {
						this.addTagModalLoading = !0
					 	var data = {
					 		...JSON.parse(JSON.stringify(this.formDataTable)),
					 		...JSON.parse(JSON.stringify(this.addTagForm))
					 	}

						for(let i in data){
							data[i] =data[i] instanceof Array ? data[i].join(',') : data[i]
						} 
						this.$axios.customerScreen.addlabel(data).then(res => {
							this.$alert(res.data.msg, '提示', {
					          	confirmButtonText: '确定',
					        });
					        this.addTagModal = !1
					        this.addTagModalLoading = !1
						}).catch(err => {
							this.addTagModalLoading = !1
							this.$alert('标签新增失败', '提示', {
					          	confirmButtonText: '确定',
					        });
						})

					} else {

						return false;
					}
				});
		 	}
		}
	}
</script>
<style scoped>
	.m-b-n{
		margin-bottom: 0px !important;
	}
</style>