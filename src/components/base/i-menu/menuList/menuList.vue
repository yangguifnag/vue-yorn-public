<template>
    <div class="yorn-menulists">
        <div class="yorn-menulist-item"
            v-for="item in menulist"
            @click="handleClick(item.cmd)">
            <i-icon class="fsicon" :name="item.icon"></i-icon>
            <div class="yorn-menulist-item-title" >
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'menu-list',
	props: {
		menulist: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		handleClick (cmd) {
			this.$emit('cmd', cmd)
		}
	}
}
</script>

<style scoped lang="scss">
    .yorn-menulists{
        .yorn-menulist-item{
            display: flex;
            justify-content: flex-start;
            width: 100%;
            height: 35px;
            padding: 0px 10px;
            box-sizing: border-box;
            align-items: center;
            cursor: pointer;
            color: #606266;
            i{
                width: 20px;
                text-align: center;
                font-size: 14px;
            }
            &:hover{
                color: #409EFF;
                background: #ecf5ff;
            }
            .yorn-menulist-item-title{
                padding-left: 8px;
                font-size: 13px;
            }
        }
    }
</style>
