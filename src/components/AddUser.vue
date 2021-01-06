<template>
    <div>
        <h3>添加用户</h3>
        <hr>
        <el-form :data="user" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                <el-button type="primary" @click="add_user">提交</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
export default {
    name: "AddUser",
    data() {
        return {
            user: {
                name: '',
                pwd: '',
                age: '',
                bir: '',
                salary: '',
                address: '',
            }
        }
    },
    methods:{
      add_user(){
          this.$axios({
              url:"http://127.0.0.1:8000/userapp/adduser/",
              method:'get',
              params:{
                  name:this.user.name,
                  pwd:this.user.pwd,
                  age:this.user.bir,
                  salary:this.user.salary,
                  address:this.user.address,
              }
          }).then(res=>{
              if (res.data){
                  this.$router.go(-1)
              }
          })
      }
    },
}
</script>

<style scoped>
h3{
    color: blue;
}

</style>
