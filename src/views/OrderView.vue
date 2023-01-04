<template>
  <div class="order">
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="selectData.title" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="selectData.body" placeholder="请输入关键字">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table border :data="tableData[selectData.page]" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="title" label="标题" width="180" />
      <el-table-column prop="body" label="详情" />
    </el-table>
    <el-pagination
      @current-change="currentChange"
      layout="prev, pager, next"
      :total="selectData.count"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, onMounted } from 'vue'
// import type { FormInstance } from 'element-plus'
import { ListInt, selectInt, Initdata } from '../types/order'
import { getList } from '../http/api'
const data = reactive(new Initdata())
let selectData = data.selectData
let tableData = data.list
let dataList = data.dataList
// const ruleFormRef = ref<FormInstance>()
const onSubmit = () => {
  console.log('submit!', selectData)
  let arr: ListInt[] = []
  if (selectData.title || selectData.body) {
    if (selectData.title) {
      arr = dataList.filter((v) => v.title.indexOf(selectData.title) != -1)
    }
    if (selectData.body) {
      arr = (selectData.title ? arr : dataList).filter(
        (v) => v.body.indexOf(selectData.body) != -1
      )
    }
  } else {
    arr = dataList
  }
  selectData.count = arr.length
  sliceList(arr)
}
onMounted(() => {
  loadCategoryList()
})
const loadCategoryList = async () => {
  const res = await getList({ page: selectData.page })
  selectData.count = res.data.length
  dataList = res.data
  console.log(res, '列表')
  sliceList(res.data)
}
const sliceList = (list: ListInt[]) => {
  tableData = []
  for (let index = 0; index < list.length; index += 10) {
    let arr: any = list.slice(index, index + 10)
    tableData.push(arr)
  }
  console.log(tableData, 'tableData')
}
const currentChange = (page: number) => {
  selectData.page = page - 1
  // loadCategoryList()
}
</script>

<style lang="scss" scoped></style>
