<template>
  <div class="home">
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    import axios from 'axios'


    export default {
        name: 'Home',
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            // axios.get('/user/userInfo').then(res => {
            //     console.log(res)
            // })

            axios.get('/data/index').then(res => {
                console.log(res.data)
                this.tableData = res.data.userTableData

            })



        }

    }
</script>

<style lang="less" scoped>

</style>