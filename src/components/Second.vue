<template>
    <div>
        <h3>用户详情信息</h3>
        <hr>
        <el-table :data="user_list" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="120"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="pwd" label="密码" width="150"></el-table-column>
            <el-table-column prop="bir" label="生日" width="250"></el-table-column>
            <el-table-column prop="salary" label="工资" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" width="100"></el-table-column>
            <!--      <el-table-column label="操作" width="300">-->
            <!--        <template slot-scope="scope">-->
            <!--          <el-button @click="checkUser(scope.row.id)" type="text" size="small">查看</el-button>-->
            <!--          |-->
            <!--          <el-button type="text" size="small">增加</el-button>-->
            <!--          |-->
            <!--          <el-button @click="del_user(scope.row.id)" type="text" size="small">删除</el-button>-->
            <!--        </template>-->
            <!--      </el-table-column>-->
        </el-table>
    </div>
</template>

<script>
export default {
    name: "Second",
    data() {
        return {
            user_list: [],
        }

    },
    methods: {
        get_emp() {
            //console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios({
                url: "http://127.0.0.1:8000/userapp/getall/" + id,
                method: 'get',

            }).then(res => {
                // console.log(res)
                // console.log(res.data)
                console.log(res.data.result)
                this.user_list=[res.data.result]

            })


        }

    },
    created() {
        this.get_emp();

    },
}
</script>

<style scoped>
h3 {
    color: red;
}

</style>
