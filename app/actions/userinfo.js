import * as actionTypes from '../constants/userinfo'
// 1.定义规则之前 的action
export function login(data){
  return {
    type:actionTypes.USERINFO_LOGIN,
    data
  }
}

export function update(data){
  return{
    type:actionTypes.UPDATE_CITYNAME,
    data
  }
}
