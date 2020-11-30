export default {
  data() {
    return {
      msg: '这是混入的数据',
      mixinMsg: '这是mixinMsg的数据',
    }
  },
  methods: {
    onclick() {
      console.log('触发了mixmin中的click数据')
    }
  }
}