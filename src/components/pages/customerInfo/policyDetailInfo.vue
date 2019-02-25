<template>
	<i-panel class="pagesbody">
		<div class="ipanel">
			<div class="ipanel-heading m-b-lg">
				合同信息
			</div>
			<el-row :gutter="30" style="margin: 0;">
				<el-col :span="8">

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">保单号</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">签单机构</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">签单日期</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">续期缴费银行代码</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>
					
					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">续期缴费户名</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">服务代理人姓名</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">服务代理机构</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

				</el-col>
				<el-col :span="8">
					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">投保单号</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">销售渠道</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">回执签收日期</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">续期缴费银行名称</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">缴费方式</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">服务代理人在职状态</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">服务代理人联系电话</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

				</el-col>
				<el-col :span="8">
					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">服务机构</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">保单当前状态</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">回执核销日期</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">续期缴费银行账号</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">服务代理人编码</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">服务代理人组别</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">私人银行</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</div>

		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				险种信息
			</div>
			<el-table :data="tableData1" style="width: 100%">
      			<el-table-column align="center" prop="t0" label="主附险" fixed min-width="100">
     			</el-table-column>
 			 	<el-table-column align="center" prop="t1" label="险种编码" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t2" label="险种类型" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t3" label="险种名称" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t4" label="保单生效日" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t5" label="保单截止日" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t6" label="保费/元" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t7" label="保额/万元" min-width="100">
      			</el-table-column>
			</el-table>
		</div>

		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				投保人信息
			</div>
			<el-row :gutter="30" style="margin: 0;">
				<el-col :span="8">

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">客户号</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">出生日期</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">投保人年龄</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">婚姻状况</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>
					
					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">通讯地址</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">住址</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">工作单位</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">职业类别</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

				</el-col>
				<el-col :span="8">
					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">客户姓名</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">证件类型</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">国籍</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">电话</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">通讯地址邮编</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">住址邮编</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">职业</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

				</el-col>
				<el-col :span="8">
					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">性别</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">证件号码</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">户口所在地</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">电子邮件</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">宅电</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">单位电话</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20" class="m-b-md">
						<el-col :span="7" class="text-r">
							<label class="lh-40 input-group-label">职业编码</label>
						</el-col>
						<el-col :span="17">
							<div class="el-input is-disabled">
								<div class="el-input__inner"></div>
							</div>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</div>

		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				被保人信息列表
			</div>
			<el-table :data="tableData3" style="width: 100%">
      			<el-table-column align="center" type="index" label="编号" fixed min-width="100">
     			</el-table-column>
 			 	<el-table-column align="center" prop="t1" label="客户号" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t2" label="被保人姓名" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t3" label="性别" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t4" label="出生日期" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t5" label="证件类型" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t6" label="证件号码" min-width="100">
      			</el-table-column>
			</el-table>
		</div>

		<div class="ipanel m-t-lg">
			<div class="ipanel-heading">
				受益人信息
			</div>
			<el-table :data="tableData4" style="width: 100%">
      			<el-table-column align="center" type="index" label="编号" fixed min-width="100">
     			</el-table-column>
 			 	<el-table-column align="center" prop="t1" label="客户号" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t2" label="被保人姓名" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t3" label="性别" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t4" label="出生日期" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t5" label="证件类型" min-width="100">
      			</el-table-column>
      			<el-table-column align="center" prop="t6" label="证件号码" min-width="100">
      			</el-table-column>
			</el-table>
		</div>

		<section class="more">
			<div class="showMoreBtn " @click="showMore = !showMore">
				<a class="moreA">
					更多
					<span>
						<i class="el-icon-arrow-down"></i>
					</span>
				</a>
			</div>
			 
			<el-collapse-transition class="showMoreBody">
				<div v-show="showMore">
					<div class="ipanel">
						<div class="ipanel-heading pointer" @click="triggerTbp(1)">
							缴费信息
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp1">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										保单保费
									</div>
									<el-table :data="tableData9" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="保单号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="开户银行" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="银行账号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="缴费年度" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="缴费类型" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="现缴至日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="缴费期数" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="保单缴费合计" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="缴费频率" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										险种保费
									</div>
									<el-table :data="tableData10" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="业务号码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="险种名称" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="缴费年度" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="缴费类型" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="现交至期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="缴费方式" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="缴费次数" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="实收金额" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="缴费止期" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(2)">
							生存金
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp2">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										险种保费
									</div>
									<el-table :data="tableData11" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="保单号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="险种名称" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="险种代码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="给付金额" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="应付日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="业务处理日期" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="分配方式" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										领取信息
									</div>
									<el-table :data="tableData12" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="保单号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="业务号码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="金额" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="领取日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="财务到账日期" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="领取方式" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="开户银行" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="银行账户" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="户名" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="是否生调" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(3)">
							保单红利
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp3">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										保单红利
									</div>
									<el-table :data="tableData14" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="保单号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="会计年度" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="红利金额" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="分配标志" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="应分日期" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="领取方式" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="分配日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="增额交清的保额" min-width="130">
						      			</el-table-column>
									</el-table>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(4)">
							银行划款
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp4">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										银行划款
									</div>
									<el-table :data="tableData15" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="保单号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="机构代码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="机构名称" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="代扣金额" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="开户银行" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="账号姓名" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="投保人姓名" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="渠道" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t9" label="报盘日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t10" label="上载日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t11" label="成功标记" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t12" label="险种代码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t13" label="险种名称" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(5)">
							保全信息
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp5">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										保全信息
									</div>
									<el-table :data="tableData16" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="保单号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="保全受理号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="批单号码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="批改类型" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="申请日期" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="生效日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="批改状态" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="操作员" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t9" label="受理途径" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(6)">
							核保信息
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp6">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										核保信息
									</div>
									<el-table :data="tableData17" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="保单号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="投保书号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="险种名称" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="险种代码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="核保结论" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="是否加费" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="是否限额" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="操作日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t9" label="核保师" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t10" label="核保分析内容" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t11" label="是否特约" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
							</div>
						</el-collapse-transition>
					</div>

					<div class="ipanel m-t-lg">
						<div class="ipanel-heading pointer" @click="triggerTbp(7)">
							理赔信息
						</div>
						<el-collapse-transition>
							<div v-show="moreTable.tbp7">
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										立案信息
									</div>
									<el-table :data="tableData18" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="赔案号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="状态" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="客户编码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="客户姓名" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="客户类型" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="证件类型" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="证件号码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="审核结论" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t9" label="赔款金额" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t10" label="受理日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t11" label="事故日期" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
								<div class="ipanel-body">
									<div class="ipanel-heading-sub">
										报案信息
									</div>
									<el-table :data="tableData19" style="width: 100%">
						      			<el-table-column align="center" type="index" label="序号" fixed min-width="50">
						     			</el-table-column>
						 			 	<el-table-column align="center" prop="t1" label="报案号" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t2" label="状态" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t3" label="客户编码" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t4" label="客户姓名" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t5" label="客户类型" min-width="130">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t6" label="事故日期" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t7" label="报案人姓名" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t8" label="报案时间" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t9" label="是否回访" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t10" label="是否发送短信" min-width="100">
						      			</el-table-column>
						      			<el-table-column align="center" prop="t11" label="是否重大事件" min-width="100">
						      			</el-table-column>
									</el-table>
								</div>
							</div>
						</el-collapse-transition>
					</div>
				</div>
			</el-collapse-transition>
		</section>
	</i-panel>

</template>
<script>
	export default {
		data:() =>({
			showMore : false,
			moreTable : {
				tbp1 : false,
				tbp2 : false,
				tbp3 : false,
				tbp4 : false,
				tbp5 : false,
				tbp6 : false,
				tbp7 : false
			},
			tableData1  : [],
			tableData3  : [],
			tableData4  : [],
			tableData9  : [],
			tableData10 : [],
			tableData11 : [],
			tableData12 : [],
			tableData13 : [],
			tableData14 : [],
			tableData15 : [],
			tableData16 : [],
			tableData17 : [],
			tableData18 : [],
			tableData19 : []
		}),
		methods : {
			triggerTbp(e){
				let _this = this;
				_this.moreTable['tbp'+e] = !_this.moreTable['tbp'+e]
			}
		},
		created(){

			console.log(this.$route.params)
	 
		}
	}
</script>
<style scoped>
	
	.showMoreBody{
		width: 100%;
		height: auto;
	}

	.moreA{
		text-align: center;
		display: block;
		width: 250px;
		margin: 0 auto;
		padding:0 0 20px 0;
		position: relative;
		font-size: 14px;
		cursor: pointer;
	}	
	
	.more{
		
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding-bottom: 20px;
		padding-top: 20px;
	}
</style>