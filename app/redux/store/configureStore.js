import { createStore } from 'redux'
import rootReducer from '../reducers/index'

// 生成 store()
export default function configureStore(initialState){
  const store = createStore(rootReducer,initialState,
    
    window.devToolsExtension? window.devToolsExtension():undefined
  )
  return store
}
