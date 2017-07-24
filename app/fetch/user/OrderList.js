import { get } from '../get.js'
import { post } from '../post.js'

export function getOrderListData(username){
  const result = get('/api/orderList/'+username)
  return result;
}
export function postComment(id,comment){
  const result = post('/api/submitComment',{
    id:id,
    comment:comment
  })
  return result
}
