import React from 'react'
// -----------------------------------------------------------------------------
// react-redux 导入 connect () 函数 用来链接 helloo 组件
import { connect } from 'react-redux'
// 导入 bindActionCreators() 传递一个 action 参数 和 派发dispatch 参数数  用来派发
import { bindActionCreators } from 'redux'
// 导入 action文件（数据状态 和 方法）
import * as userinfoActions from '../../redux/actions/userinfo'
// -----------------------------------------------------------------------------
import A from '../../components/A'
import B from '../../components/B'
import C from '../../components/C'

class Helloo extends React.Component{
  render(){
    return(
      <div>
        <p>hello world</p>
        <hr/>
        <A userinfo={this.props.userinfo}></A>
        <hr/>
        <B userinfo={this.props.userinfo}></B>
        <hr/>
        <C actions={this.props.userinfoActions}></C>
      </div>
    )
  }

  componentDidMount(){
    // 模拟登陆
    this.props.userinfoActions.login({
      userid:'abc',
      city:'beijing'
    })
  }
}




// 3. 传递 state 更新 数据mapStateToProps（）   ：mapDispatchProps（） 和监听  更新 ，
// ----------------------------------------------------------------
// 这个函数会 传进来state 参数，返回的 return 的 userinfo 就是ABC组件的 this.props.userinfo
function mapStateToProps(state){
  // 这个函数有更新state的作用 一旦 state 发生变化 react就是立刻触发更新
  return{
    userinfo:state.userinfo
    // state.userinfo ，就是 reducer文件夹 combineReducers({userinfo:userinfo})这个函数
  }
}
// 4.绑定 导入action 规则 并进行触发派发
function mapDispatchProps(dispatch){
  return{
    userinfoActions:bindActionCreators(userinfoActions,dispatch)
  }
}
// 5:把两个函数 用connect 处理 并且 传入Helloo 组件
export default connect(
  mapStateToProps,
  mapDispatchProps
)(Helloo)
