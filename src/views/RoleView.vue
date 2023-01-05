<template>
  <div class="role">
    <!-- <div class="select-box">
       <el-form :inline="true" :model="selectData" class="demo-form-inline">
  
        <el-form-item label="角色">
          <el-select
            v-model="selectData.role"
            class="m-2"
            placeholder="请选择角色"
          >
            <el-option label="全部" :value="0" />
            <el-option
              v-for="item in roleList"
              :key="item.roleId"
              :label="item.roleName"
              :value="item.roleId"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>  </div> -->
    <el-button type="primary" @click="addRole">添加角色</el-button>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="roleId" label="ID" width="180" />
      <el-table-column prop="roleName" label="角色名" width="180" />
      <el-table-column prop="action" label="操作">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="authorityChange(scope.row)"
            >修改权限</el-button
          ></template
        >
      </el-table-column>
      <!-- <el-table-column prop="action" label="操作">
        <template #default="scope">
          <el-button type="primary" size="small"
          @click="editFun(scope.row)"
            >修改权限{{ scope }}</el-button
          >
        </template>
      </el-table-column> -->
    </el-table>
    {{ list }}
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, onMounted, ref } from 'vue'
// import type { FormInstance } from 'element-plus'
import { ListInt, selectInt, Initdata } from '../types/role'
import { getRoleList } from '../http/api'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
let list = reactive<ListInt[]>([
  {
    roleName: '超级管理员',
    roleId: 1,
    authority: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    roleName: '管理员',
    roleId: 2,
    authority: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    roleName: '业务员',
    roleId: 3,
    authority: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    roleName: '客服',
    roleId: 4,
    authority: [1, 2, 4, 5, 6, 7, 9],
  },
  {
    roleName: '财务',
    roleId: 5,
    authority: [],
  },
])
// let list = reactive<ListInt[]>([])
// let dataList = reactive<ListInt[]>([])
// let isAdd = ref(false)

const data = reactive(new Initdata())
// let list = data.list
onMounted(async () => {
  const res = await getRoleList()
  console.log(res, '角色')
  list = res.data
  // dataList = res.data
})
const addRole = () => {
  ElMessageBox.prompt('请输入角色名', '添加', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  })
    .then(({ value }) => {
      list.unshift({
        roleName: value,
        roleId: list.length + 1,
        authority: [],
      })
      ElMessage({
        type: 'success',
        message: '新增成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消操作',
      })
    })
}

const authorityChange = (row: ListInt) => {
  // console.log(row, 11)
  router.push({ name: 'authority',query:{
    id:row.roleId,
    authority:row.authority.join(',')

  }})
}
</script>

<style lang="scss" scoped>
.role {
  margin-bottom: 20px;
}
</style>
