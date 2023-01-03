<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="70px"
      class="demo-ruleForm"
    >
      <h1>后台管理系统</h1>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <!-- <el-form-item label="Age" prop="age">
        <el-input v-model.number="ruleForm.age" />
      </el-form-item> -->
      <el-form-item>
        <el-button
          class="sub-btn"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue'
//defineComponent函数，只是对setup函数进行封装，返回options的对象；
//defineComponent最重要的是：在TypeScript下，给予了组件 正确的参数类型推断 。
// defineComponent函数支持typescript 的参数类型推断（专门为ts准备，若使用TS+VUE3 ,推荐使用他
import type { FormInstance } from 'element-plus'
import { LoginFormInt } from '@/types/login'
// type LoginFormInt = {
//   username: string
//   password: string
// }

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<LoginFormInt>({
  username: '',
  password: '',
})
const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      min: 6,
      max: 24,
      message: '账号长度在6-24之间',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      min: 6,
      max: 24,
      message: '账号长度在6-24之间',
      trigger: 'blur',
    },
  ],
})
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
  // formEl.validate((valid) => {
  //   if (valid) {
  //     console.log('submit!')
  //   } else {
  //     console.log('error submit!')
  //     return false
  //   }
  // })
}
// export default defineComponent({
//   name: 'LoginView',
//   components: {
//     // HelloWorld,
//   },
// })
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  // background-position: center;
  background-size: cover;
  background: url('../assets/bg.jpg') no-repeat center;
  box-sizing: border-box;
  padding-top: 200px;
  .demo-ruleForm {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    margin: 0 auto;
    .sub-btn {
      width: 100%;
    }
    h1 {
      text-align: center;
      margin: 20px 0;
    }
  }
}
</style>
