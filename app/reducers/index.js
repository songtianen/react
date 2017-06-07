import { combineReducers } from 'redux'
import userinfo from './userinfo'
// 1.定义规则
const rootReducer = combineReducers({
  userinfo:userinfo
})

export default rootReducer
