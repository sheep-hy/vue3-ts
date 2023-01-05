<template>
  <div class="about">
    <h1>
      
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, onMounted, ref } from 'vue'
// import type { FormInstance } from 'element-plus'
import { queryInt } from '../types/authority'
import { getRoleList } from '../http/api'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route, 'route')
const query: any = route.query
const data = reactive({
  id: query.id,
  authority: query.authority.split(','),
})
</script>

<style lang="scss" scoped>
.role {
  margin-bottom: 20px;
}
</style>
