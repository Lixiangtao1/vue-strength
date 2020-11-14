import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count: 100,
    todos:[
      { id: 1, text: '....', done: true},
      { id: 2, text: '....', done: false},
    ]
  },
  getters:{//gette可以看做时store的一个计算属性  getter的返回值会根据他的依赖被缓存起来, 且只有当他的依赖值发生了改变的时候才会被重新计算
    // getter接收state作为死一个参数

    doneTodos: state => {
      return state
    }
  },

  mutations:{//更改vuex的store中的状态的唯一方法是提交mutation. vuex中mutation非常类似于事件：每个mutation都有一个字符串的事件类型（type）和一个回调函数(handler)
    // 这个回调函数就是我们实际进行更改状态的地方,并且它会接受state作为第一个参数

    increment(state, params) {
      // 变更状态
      console.log(state.count)
      if(state.count === 105){
        state.count = params.params
      }else{
        state.count++;
      }
    }
  },

  actions:{
    increment(context){
      console.log(context)
    }
  }
})
