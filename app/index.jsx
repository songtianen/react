import React from 'react'
import { render } from 'react-dom'
import './static/css/common.less'
import Hello from './containers/Hello/index'
import Todo from './containers/Todo/index'

import {hashHistory} from 'react-router'
import RouteMap from './router/routerMap'
// --------------------------------------------------
// 3. redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Helloo from './containers/Hello/Hello'
// 3.创建redux 的store 对象
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


render(
  <Provider store={store}><Helloo/></Provider>,
  document.getElementById('root'))
