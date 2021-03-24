<template>
    <div class="contianer">
        <div class="banner">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="#" width="180" type="index"> </el-table-column>
                <el-table-column prop="name" label="标题" width="180">
                     <template slot-scope="scope">
                         <span @click="getlist(scope.row.id)">{{scope.row.name || ''}}</span>
                    </template>
</el-table-column>
<el-table-column prop="copywriter" label="描述"> </el-table-column>
<el-table-column prop="copywriter" label="图片">
    <template slot-scope="scope">
                        <el-image style="width: 50px; height: 50px" :src="scope.row.picUrl"></el-image>
                    </template>
</el-table-column>
</el-table>
</div>
</div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'logbook',
        data() {
            return {
                tableData: [], // 歌单标哥
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                axios.get('http://muisc-api.zxzx.shop/personalized?limit=10').then((res) => {
                    this.tableData = res.data.result || [];
                    console.log('页面首次加载数据res', res.data.result);
                });
            },
            // 获取歌单详情
            getlist() {
                console.log('[获取歌单详情数据事件]');
            },
        }

    }
</script>