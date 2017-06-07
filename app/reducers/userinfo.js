import * as actionTypes from '../constants/userinfo'

// 1.定义规则
const initialState = {}

export default function userinfo(state = initialState,action){
  switch (action.type) {
    // 登陆
    case actionTypes.USERINFO_LOGIN:
        return action.data
    // 修改城市
    case actionTypes.UPDATE_CITYNAME:
        return action.data
    default:
        return state

  }
}
