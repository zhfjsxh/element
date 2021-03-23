<template>
    <div class="app-container">
        <!-- 头部搜索 start -->
        <div class="contianer">
            <div class="serch-continar">
                <span>用户名称</span>
                <el-input v-model="userInfo.userName" placeholder="请输入用户名称" size="small" />
            </div>
            <div class="serch-continar">
                <span>手机号</span>
                <el-input v-model="userInfo.phone" placeholder="请输入手机号" size="small" />
            </div>
            <div class="serch-continar">
                <span>性别</span>
                <el-input v-model="userInfo.sex" placeholder="请输入性别" size="small" />
                <el-button type="primary" class="btn-serch" @click="SerchData" size="small" :disabled="disabled" >搜索</el-button>
            </div>
            <el-dropdown>
                <el-button type="primary" size="small">
                    显示列<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-checkbox-group v-model="checkList" border @change="changeChenk">
                        <el-checkbox v-for="(item,index) in currentcheckList" :key="index" :label="item"></el-checkbox>
                    </el-checkbox-group>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <!-- 头部搜索 end -->
        <!-- 中间表格 start -->
        <div class="main">
            <el-table :data="tableData" border empty-text="暂无数据"  v-loading="loading" >
                <el-table-column label="#" align="center" width="50" type="index" v-if="checkList.indexOf('#') !=-1" /> 
                <el-table-column prop="userName" label="用户名" align="center" width="100" v-if="checkList.indexOf('用户名') !=-1" /> 
                <el-table-column prop="UserImg" label="头像" align="center" width="100" v-if="checkList.indexOf('头像') !=-1">
                    <template slot-scope="scope">
                        <el-image style="width: 50px; height: 50px;border-radius: 50%;" :src="scope.row.UserImg || ErrorImg" />
                    </template>
                </el-table-column>
                <el-table-column prop="phone" label="手机号" align="center" width="120" v-if="checkList.indexOf('手机号') !=-1" />
                <el-table-column prop="balance" label="余额" align="center" width="70" v-if="checkList.indexOf('余额') !=-1" /> 
                <el-table-column prop="date" label="注册时间" align="center" v-if="checkList.indexOf('注册时间') !=-1" /> 
                <el-table-column label="性别" align="center" width="100" v-if="checkList.indexOf('性别') !=-1"> 
                    <template slot-scope="scope">
                        <span v-if="scope.row.sex==1">男</span>
                        <span v-else>女</span>
                    </template>
                </el-table-column>
                <el-table-column label="状态" align="center" width="100" v-if="checkList.indexOf('状态') !=-1"> 
                    <template slot-scope="scope">
                        <font v-if="scope.row.state==0" color="red">异常</font>
                        <font v-else color="blue">正常</font>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="地址" align="center" v-if="checkList.indexOf('地址') !=-1" /> 
                <el-table-column prop="address" label="操作" align="center" width="240" v-if="checkList.indexOf('操作') !=-1" >
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row.id)" type="primary">修改</el-button>
                        <el-button size="mini" @click="handleEdit(scope.row.id)" type="success" v-if="scope.row.state != '1'">启用</el-button>
                        <el-button size="mini" @click="handleEdit(scope.row.id)" type="danger" v-else>禁用</el-button>
                        <el-button size="mini" @click="DeleteItem(scope.row.id)" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 中间表格 end -->
        <!-- 底部分页 start -->
        <div class="bottom">
            <el-pagination
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                :total="400"
                background
                layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <!-- 底部分页 end -->

    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Documentation',
	components: {},
	data() {
		return {
			userInfo: {																											// 用户信息
				userName: '',																									// 用户姓名
				phone: '',																										// 用户手机号
				sex: ''																											// 用户性别
			},
			tableData: [],																										// 表格list
			ErrorImg: 'https://bpic.i588ku.com/element_origin_min_pic/19/04/10/e87e154ddafd724a915a119fb21c38b9.jpg',			// 头像加载失败显示
			loading: true,																										// 加载动画
			disabled: false,																									// 搜索防抖
			checkList: ['#','用户','头像','手机号','余额','注册时间','性别','状态','地址','操作'],									// 当前显示的checkList																														// 显示列
			currentcheckList: ['#','用户','头像','手机号','余额','注册时间','性别','状态','地址','操作'],							// 显示列list
		}
	},
    created(){
		this.init();
	},
    methods: {
        init(){
            this.disabled = true;
            this.loading = true;
            axios.get('https://mock.mengxuegu.com/mock/60587df50d58b864da03d4e6/vuedemo/tablelist').then((res) => {
                if(res.status != 200){
                    return false;
                }
                // 这是为展示加载动以及防抖设置
                setTimeout(()=>{
                        this.loading = false;
                        this.disabled = false;
                        let re = res.data.data.tablelist;
                        this.tableData = re || [];
                    },1000)
                console.log('[首次加载页面的数据]',res);
            });
		},
        // 搜索
		SerchData(){
			// @待完成 这里就重新渲染了
			this.init();
		},
        // 操作按钮事件
		handleEdit(){

		},
        // 删除当前项
		DeleteItem(id){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
			}).then(() => {
				this.tableData.map((item,index)=>{
					if(item.id == id){
						this.tableData.splice(index,1);
					}
				})
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			})
		},
        // 控住显示列
		changeChenk(e){
			console.log('[更新后的只]',e);
		}
    }
	
}
</script>
<style scoped>
.contianer{
	display: flex;
	align-items: center;
}
.contianer .serch-continar{
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
}
.contianer .serch-continar span{
    display: block;
    width: 100px;
    margin-right: 10px;
}
.contianer .serch-continar .btn-serch{
    margin-left: 30px;
}
/* 中间表格 */
.main{
	margin-top: 10px;
}
.bottom{
	margin-top: 20px;
}
</style>
