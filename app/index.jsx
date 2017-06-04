import React from 'react'
import { render } from 'react-dom'
import './static/css/common.less'
import Hello from './containers/Hello/index'
import Todo from './containers/Todo/index'
// 浏览器 内 console -性能测试
import Perf from 'react-addons-perf'
if(__DEV__){
  window.Perf = Perf
}
render(
    <div>
      <Todo/>
      <Hello/>
    </div>,
    document.getElementById('root')
)
