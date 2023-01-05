<template>
  <div class="authority">
    <el-button type="primary" @click="addRole">确认修改</el-button>
    <el-tree
      ref="treeRef"
      :data="tree"
      show-checkbox
      node-key="roleId"
      :default-checked-keys="data.authority"
      :props="defaultProps"
      :check-strictly="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, onMounted, ref } from 'vue'
// import type { FormInstance } from 'element-plus'
import { queryInt, listInt } from '../types/authority'
import { getAuthority } from '../http/api'
import { useRoute } from 'vue-router'
import { ElTree } from 'element-plus'
const route = useRoute()
interface Tree {
  name: string
  roleId: number
  viewRole?: string
  roleList?: Tree[]
}
// console.log(route, 'route')
const query: any = route.query
const data = reactive({
  id: query.id,
  authority: query.authority.split(','),
})
const tree = ref<listInt[]>([])
onMounted(() => {
  getAuthority().then((res) => {
    console.log(res, '权限')
    tree.value = res.data
  })
})
const defaultProps = {
  children: 'roleList',
  label: 'name',
}
const treeRef = ref<InstanceType<typeof ElTree>>()
const addRole = () => {
  console.dir(treeRef.value!.getCheckedKeys(), 11)
  // 拿到所有的选中节点后， 提交数据
}
</script>

<style lang="scss" scoped>
.authority {
  .el-button {
    margin-bottom: 20px;
  }
}
</style>
