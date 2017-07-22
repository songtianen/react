import { combineReducers } from 'redux'
import userinfo from './userinfo'
import store from './store.js'

// 定义规则
const rootReducer  = combineReducers({
  userinfo:userinfo,
  store:store
})
export default rootReducer
