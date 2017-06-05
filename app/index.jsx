import React from 'react'
import { render } from 'react-dom'
import './static/css/common.less'
import Hello from './containers/Hello/index'
import Todo from './containers/Todo/index'

import {hashHistory} from 'react-router'
import RouteMap from './router/routerMap'


// 浏览器 内 console -性能测试
import Perf from 'react-addons-perf'
if(__DEV__){
  window.Perf = Perf
}
render(<RouteMap history={hashHistory}/>,document.getElementById('root'))
