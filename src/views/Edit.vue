<template>

    <div>
        <!-- <h1>edit:{{this.$route.params.id}}</h1> -->
        <!-- {{this.editData}} -->
        <el-form ref="form" :model="editData    " label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="editData.name" class="inp"></el-input>
            </el-form-item>

            <el-form-item label="地址">
                <el-input v-model="editData.address" class="inp"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                editData: {}

            }
        },
        mounted() {
            axios.get('/data/index').then(res => {

                let arr = res.data.userTableData
                console.log(arr)
                const index = arr.findIndex((item) => {
                    return this.$route.params.id == item.id
                })

                console.log(index)
                this.editData = arr[index]

            })
        }

    }
</script>

<style scoped>
    .inp {
        width: 200px;
    }
</style>