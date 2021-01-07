<template>
    <div>
        <h3>这是修改用户信息页面</h3>
        <hr>
        <el-form :data="user" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="id" prop="ID">
                <el-input type="text" v-model="user.id" ></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="user.name" ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input type="text" v-model="user.pwd" ></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="user.age"></el-input>
            </el-form-item>
            <el-form-item label="生日" prop="bir">
                <el-input v-model="user.bir"></el-input>
            </el-form-item>
            <el-form-item label="工资" prop="salary">
                <el-input v-model="user.salary"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model="user.address"></el-input>
            </el-form-item>
            <el-form-item>
<!--                <el-button type="primary" @click="change_user">提交</el-button>-->
                <el-button type="primary" >提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "ChangeUser",
    data() {

        return {
            user:[],
        };
    },
    methods: {


        },



}
</script>

<style scoped>

</style>
