<template>
<div class="login">
login
</div>
</template>

<script lang='ts' Fsetup>
import { 
  defineComponent, 
  getCurrentInstance, 
  reactive, 
  ref 
} from 'vue';
//defineComponent函数，只是对setup函数进行封装，返回options的对象；
//defineComponent最重要的是：在TypeScript下，给予了组件 正确的参数类型推断 。
// defineComponent函数支持typescript 的参数类型推断（专门为ts准备，若使用TS+VUE3 ,推荐使用他
export default defineComponent({
  name: 'LoginView',
  components: {
    // HelloWorld,
  },
});
</script>

<style lang="sass" scoped></style>