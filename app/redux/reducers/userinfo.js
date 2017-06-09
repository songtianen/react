import * as actionTypes from '../constans/userinfo'
// 1.定义规则
const initialState = {}; //初始化一个state数据 的值

export default function userinfo(state = initialState,action){
  switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
        return action.data
        case actionTypes.UPDATE_CITYNAME:
        return action.data
    default:
    return state
  }
}
