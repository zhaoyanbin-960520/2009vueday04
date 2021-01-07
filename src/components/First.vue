<template>
  <div>
    <el-table :data="user_list" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="pwd" label="密码" width="150"></el-table-column>
      <el-table-column prop="bir" label="生日" width="250"></el-table-column>
      <el-table-column prop="salary" label="工资" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="100"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="checkUser(scope.row.id)" type="text" size="small">查看</el-button>|
          <el-button  @click="add_user" type="text" size="small">增加</el-button>|
          <el-button @click="del_user(scope.row.id)" type="text" size="small">删除</el-button>|
          <el-button @click="change_page(scope.row.id)" type="text" size="small">修改</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  name: "First",
  methods: {
    checkUser(row) {
      //console.log(row);
      this.$router.push("/second/" + row)
    },
    del_user(id){
      //console.log(id);
      this.$axios({
        url: "http://127.0.0.1:8000/userapp/deluser/",
        method: 'get',
        params: {'id': id},
      }).then(res => {
       if (res.data){
         this.$router.go(0)
         alert('删除成功')
       }
      })
    },
    change_page(row){
        console.log(row)
      this.$router.push("/change/?id="+row)
    },

    add_user(){
      this.$router.push("/adduser")
    },

  },

  data() {
    return {
      user_list: [],

    }
  },
  created() {
    this.$axios({
      url: "http://127.0.0.1:8000/userapp/getall/",
      //请求方式
      method: "get",
    }).then(response => {
      // 请求成功后可以走到这个回调函
        //console.log(response.data.result)
        this.user_list =response.data.result
    })
  },
}
</script>

<style scoped>

</style>
