<template>
  <div class="user">
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="selectData.nikeName" placeholder="请输入姓名" />
        </el-form-item>
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
      </el-form>
    </div>
    <el-table border :data="list" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="nikeName" label="姓名" width="180" />
      <el-table-column prop="role" label="角色">
        <template #default="scope">
          <el-button
            v-for="i in scope.row.role"
            :key="i.role"
            type="primary"
            size="small"
            >{{ i.roleName }}</el-button
          ></template
        >
      </el-table-column>
      <el-table-column prop="action" label="操作">
        <template #default="scope">
          <el-button type="primary" size="small" @click="editFun(scope.row)"
            >编辑</el-button
          ></template
        >
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" title="编辑">
      <el-form :model="active">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input
            v-model="active.nikeName"
            placeholder="请输入姓名"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="active.role" multiple placeholder="请选择角色">
            <el-option
              v-for="item in roleList"
              :key="item.roleId"
              :label="item.roleName"
              :value="item.roleId"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="userChange"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs, ref } from 'vue'
// import type { FormInstance } from 'element-plus'
import { ListInt, selectInt, Initdata } from '../types/user'
import { getUserList, getRoleList } from '../http/api'
// const data = reactive(new Initdata())
// let selectData = data.selectData
// let tableData = data.list
// let roleList = data.roleList
// // const ruleFormRef = ref<FormInstance>()
// const onSubmit = () => {
//   console.log('submit!', selectData)
// }

export default defineComponent({
  name: 'UserView',
  setup() {
    const data = reactive(new Initdata())
    let selectData = data.selectData
    // let tableData = data.list
    // let roleList = data.roleList
    onMounted(() => {
      getUserList().then((res) => {
        data.list = res.data
        data.dataList = res.data
        console.log(res, data.list, 'user')
      })
      getRoleList().then((res) => {
        data.roleList = res.data
        console.log(res, 'role')
      })
    })
    const onSubmit = () => {
      console.log('submit!', data.selectData)
      let arr: ListInt[] = []
      if (data.selectData.nikeName || data.selectData.role) {
        if (selectData.nikeName) {
          arr = data.dataList.filter(
            (v: any) => v.nikeName.indexOf(selectData.nikeName) != -1
          )
        }
        if (selectData.role) {
          arr = (selectData.nikeName ? arr : data.dataList).filter((v: any) =>
            v.role.find((i: any) => i.role === selectData.role)
          )
        }
      } else {
        arr = data.dataList
      }
      data.list = arr
    }
    // let dialogFormVisible = ref(false)
    const formLabelWidth = '50px'
    // const form = reactive({
    //   name: '',
    //   region: '',
    //   date1: '',
    //   date2: '',
    //   delivery: false,
    //   type: [],
    //   resource: '',
    //   desc: '',
    // })
    const editFun = (row: ListInt) => {
      console.log(row, 'row编辑')
      data.dialogFormVisible = true
      data.active = {
        ...row,
        role: row.role.map((i:any) => i.role || i.roleId) || [],
      }
      // data.active.role = row.role.map((v) => v.role)
      // console.log(data.active, 'row编辑')
    }
    const userChange = () => {
      const obj: any = data.list.find((v: any) => v.id === data.active.id)
      // (obj as ListInt).obj
      obj.nikeName = data.active.nikeName
      // 当前id在数组里面存在
      obj.role = data.roleList.filter(
        (v) => data.active.role.indexOf(v.roleId) !== -1
      )
      console.log(obj, 'userchange')
      data.dialogFormVisible = false
    }
    return {
      ...toRefs(data),
      onSubmit,
      editFun,
      formLabelWidth,
      userChange,
    }
  },
})
</script>

<style lang="scss" scoped></style>
