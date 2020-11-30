<template>
  <div>
    <h1>{{msg}}</h1>
    <h1>{{mixinMsg}}</h1>
    <h1 style="cursor:pointer;" @click="onclick">点击</h1>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="活动名称：">
        <el-input v-model="form.name" placehold="请输入名称"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import mixin from '../mixin/demo.js'
export default {
  mixins:[mixin],
  data() {
    return {
      form:{
        name:''
      },
    }
  },
  mounted(){
    this.msg = '这是form组件的'
  }
}
</script>