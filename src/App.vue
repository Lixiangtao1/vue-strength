<template>
  <div id="app">
    <!-- <h2>{{$store.state.count}}</h2>
    <button @click="addCunt">count++</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 style="color:red">{{msg}}</h1>
    <el-button @click="form">form组件</el-button>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import pinyin from 'js-pinyin'
import mixin from './mixin/demo.js'

export default {
  mixins:[mixin],
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      dataCount: 11,
      english: '安徽省'
    }
  },
  methods:{
    addCunt(){
      // this.$store.commit('increment')

      // 对象形式的提交
      this.$store.commit({ 
        type:'increment',
        params: '选填参数'
      })
    },
     form(){
      this.$router.push({
        path:'/form',
        name:'form'
      })

      console.log(this.$route)
    }
  },
  mounted() {
    console.log(this.$store.state.count)
    console.log(this.dataCount)
    console.log(this.$store.getters.doneTodos)
    // console.log(pinyin.getCamelChars('安徽省'))
    console.log(pinyin.getFullChars('安徽省'))
    console.log(this.testGlobal(),'111111111111111111')
    console.log(this)
    this.msg = '这是app.vue组件的'

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
