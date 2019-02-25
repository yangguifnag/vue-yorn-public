<template>
	<el-table :data="tableData2" style="width: 100%" size="mini">
			<el-table-column align="center" prop="t0" label="类型" fixed min-width="150">
			</el-table-column>
		 	<el-table-column align="center" prop="t1" label="名称" min-width="150">
			</el-table-column>
			<el-table-column align="center" prop="t2" label="指标值" min-width="150">
			</el-table-column>
	</el-table>
</template>