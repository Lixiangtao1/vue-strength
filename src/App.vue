<template>
  <div id="app">
    <h2>{{$store.state.count}}</h2>
    <button @click="addCunt">count++</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      dataCount: 11
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
    }
  },
  mounted() {
    console.log(this.$store.state.count)
    console.log(this.dataCount)
    console.log(this.$store.getters.doneTodos)

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
