<template>
  <el-form
    ref="formData" 
    :model="model" 
    :label-width="labelWidth"
  >
    <slot></slot>
  </el-form>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props:{
    model:{
      type: Object,
      default: () => {
        return {}
      }
    },
    labelWidth:{
      type: String,
      default: () => {
        return ''
      }
    }
  },
  methods:{
    onSubmit() {
      console.log('111111')
      this.$emit('onSubmit')
    }
  }
}
</script>