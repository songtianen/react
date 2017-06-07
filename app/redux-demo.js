import { createStore } from 'redux'

export default function(){


  //1. 定义计算规则，即 reducer

  function counter(state = 0 , action){
    switch (action.type) {
        case 'IN':
        return state + 1
        case 'OUT':
        return state - 1
        default:
        return state
    }
  }

  // 2.根据规则生成 store
  let store = createStore(counter);

  // 3. 数据变化之后的监听函数
  store.subscribe(()=>{
    console.log('定义state 变化之后的 派发规则',store.getState());
  })
  store.subscribe(()=>{
    console.log('2222222',store.getState());
  })

  // 4.触发数据数据的变化
  store.dispatch({type:'IN'})
  store.dispatch({type:'OUT'})


}
