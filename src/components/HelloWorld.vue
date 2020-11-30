<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>{{$store.state.count}}</h2>
    <button @click="success">生成json</button><br><br> -->
    <h1>{{msg}}</h1>
    <h1>{{mixinMsg}}</h1>
  </div>
</template>

<script>
import dataJson from './../assets/中国.json'
import pinyin from 'js-pinyin'
import tableForm from './table'
import mixin from '../mixin/demo.js'
export default {
  mixins: [mixin],
  components:{ tableForm },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      dataList: [],
      formData:{
        test:''
      }
    }
  },
  methods:{
    success() {
      var FileSaver = require('file-saver'); 
      var content = JSON.stringify(this.dataList[0]);
      var blob = new Blob([content ], {type: "text/plain;charset=utf-8"}); 
      FileSaver.saveAs(blob, "hello world.json");
    },
    save(){
      console.log('保存执行')
    },
    sssss(){
      console.log(this)
    }
  },
  mounted(){
    // console.log(JSON.parse(JSON.stringify(dataJson)).features)
    this.dataList = JSON.parse(JSON.stringify(dataJson)).features
    this.dataList.forEach( item => {
      item.properties.nameEn = pinyin.getFullChars(item.properties.NAME)
    })
    // console.log(JSON.stringify(this.dataList[0]))


    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
