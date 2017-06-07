import React from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../actions/userinfo'

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




// 3.redux
// 这个函数会 传进来state 参数，返回的 return 的 userinfo 就是ABC组件的 this.props.userinfo
function mapStateToProps(state){
  // 这个函数有更新state的作用 一旦 state 发生变化 react就是立刻触发更新
  return{
    userinfo:state.userinfo
    // state.userinfo ，就是 reducer文件夹 combineReducers({userinfo:userinfo})这个函数
  }
}
// 4.派发 触发
function mapDispatchProps(dispatch){
  return{
    userinfoActions:bindActionCreators(userinfoActions,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Helloo)
