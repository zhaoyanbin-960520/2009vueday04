import Vue from 'vue'
import Router from 'vue-router'
import First from "../components/First";
import Second from "../components/Second";
import ChangeUser from "../components/ChangeUser";
import AddUser from "../components/AddUser";


Vue.use(Router)

export default new Router({
    routes: [
        {path: "/first", component: First},
        {path: "/second/:id", component: Second},
        {path:"/change/:id",component:ChangeUser},
        {path:"/adduser",component:AddUser},
    ]
})
