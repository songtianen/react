import { get } from '../get.js'

export function getOrderListData(username){
  const result = get('/api/orderList/'+username)
  return result;
}
