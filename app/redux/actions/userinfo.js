import * as actionTypes from '../constans/userinfo'
// 1. 定义之前 的action ,action是把数据从应用 传到store 的 有效载荷，它是store 数据的唯一来源，一般
// 来说，你会通过 store.dispath()将action传到store
export function login(data){
  return{
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
