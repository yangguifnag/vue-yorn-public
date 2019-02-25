<template>
	<div class="pagesbody" >
		<v-contextmenu ref="contextmenu">
			<v-contextmenu-item @click="handleClick">菜单1</v-contextmenu-item>
			<v-contextmenu-item @click="handleClick">菜单2</v-contextmenu-item>
			<v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>
		</v-contextmenu>
		<deckbox data-id str="sdsfs"></deckbox>
		<el-table :data="tableData" :stripe="true" size="small" :fit="true" @select="handleSelect">
			<el-table-column type="selection" width="55" ></el-table-column>
			<el-table-column label="id" :show-overflow-tooltip="true">
      			<template slot-scope="scope">{{ scope.row.id }}</template>
    		</el-table-column>
    		<el-table-column label="性别" >
    			<template slot-scope="scope">
	    			<el-tag size="mini" :type="scope.row.sex === '1' ? '' : 'danger'">{{scope.row.sex | sexFilter}}</el-tag>
	    		</template>
    		</el-table-column>
    		<el-table-column label="姓名" prop="name"></el-table-column>
    		<el-table-column label="状态" prop="status" class-name="is-center" width="50">
    			<template slot-scope="scope">
    				<Istatus :state="scope.row.status | statusFilter" @change="(val) => {handleChange(val,scope.$index,scope.row.id)}">
    					<i-icon
			              name="check-circle"
			              style="font-size: 20px; line-height: 32px; color: #67C23A;"
			              slot="active"></i-icon>
			            <i-icon
			              name="times-circle"
			              style="font-size: 20px; line-height: 32px; color: #F56C6C;"
			              slot="inactive"></i-icon>

    				</Istatus>
    			</template>
    		</el-table-column>
    		<el-table-column label="介绍" prop="intro">
    			
    		</el-table-column>
		</el-table>
	</div>
	
</template>
<script>


	import deckbox from '@/components/base/deckbox';
	import Istatus from '@/components/base/status';
	 

	export default {
		data(){
			return {
				chartData: {
					columns: ['日期', '访问用户', '下单用户'],
					rows: [
					{ '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },
					{ '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },
					{ '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }
					]
				},
				tableData : [{
					id : 'C540DA48-FEeF-eDfe-5F4C-7bafB9d7CA70',
					sex : '1',
					name : '王卞',
					status : '2',
					intro : '日期我让你家,啥都发发发发,啊发发发'
				},{
					id : 'C540DD48-FEeF-eDfe-5F4C-7bafB9d7CA70',
					sex : '1',
					name : '王卞',
					status : '1',
					intro : 'afdafaadfadfaa'
				},{
					id : 'E540DA48-FEeF-eDfe-5F4C-7bafB9d7CA70',
					sex : '2',
					name : '王卞',
					status : '2',
					intro : '日期我让你家,啥都发发发发,啊发发发'
				},{
					id : 'F540DA48-FEeF-eDfe-5F4C-7bafB9d7CA70',
					sex : '2',
					name : '农行卡',
					status : '2',
					intro : '日期我让你家,啥都发发发发,啊发发发'
				},{
					id : 'V540DA48-FEeF-eDfe-5F4C-7bafB9d7CA70',
					sex : '1',
					name : '杀毒琺',
					status : '2',
					intro : '日期我让你家,啥都发发发发,啊发发发'
				}],
			}
		},
		created(){
			 
		},
		components : {
			deckbox,
			Istatus,

		},
		filters : {
			sexFilter(value){

				if(!value) return '-';
				else  return value === '1' ? '男' : '女';

			},
			statusFilter(value){

				return {'1': true ,'2': false }[value] 

			}
		},
		methods : {
			state(){
				return 'loading'
			},
			handleChange(arg,index,id){
				console.log(id)
				var that = this
				setTimeout(()=>{
					that.tableData[index].status = arg ? '1' : '2'
				},3000)
			},
			handleSelect(selection, row){
				console.log(selection)
				console.log(row)
			},
		 
		}
	}
</script>