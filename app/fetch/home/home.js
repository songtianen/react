import { get } from '../get'

export function getAdData(){
  const result = get('/api/homead')
  return result;
}

export function getListData(city,page){
  const result = get('/api/homeList/'+ encodeURIComponent(city)+'/'+page)
  return result;
}
