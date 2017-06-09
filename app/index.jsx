import React from 'react'
import { render } from 'react-dom'
import './static/css/common.less'
import Hello from './containers/Hello/index'
import Todo from './containers/Todo/index'
// --------------------------------------------------
// router
import {hashHistory} from 'react-router'
import RouteMap from './router/routerMap'
// --------------------------------------------------
// 3. redux
// 3.引入provider
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import Helloo from './containers/Hello/Hello'
// 2.第2步骤 创建store 之后 把store 传入 react 之中 
const store = configureStore()
// --------------------------------------------------
// 引用并且执行redux-demo
// import fn from './redux-demo.js'
// fn()
// --------------------------------------------------
// 浏览器 内 console -性能测试
import Perf from 'react-addons-perf'
if(__DEV__){
  window.Perf = Perf
}
// --------------------------------------------------
 // import { getData,postData } from './fetch/test'
 import { getData,postData } from './fetch/data'
getData();
postData();
console.log('1'+'1');


render(
  <Provider store={store}><Helloo/></Provider>,
  document.getElementById('root'))
