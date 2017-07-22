import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../redux/actions/userinfo'
// 引入header
import Header from '../../components/Header'

import LoginComponent from '../../components/Login'




class Login extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        // 正在检查
        checking:true
      }
    }
    render(){
      return(
        <div>
          <Header title="登陆"/>
          {

            this.state.checking
            ?<div>{/*等待。。。*/}</div>
            :<LoginComponent loginHandle ={ this.loginHandle.bind(this) }>这里是将要展示登陆的组件</LoginComponent>
          }
        </div>
      )
    }
    componentDidMount() {
      // 执行检查的方法
      this.doCheck()
    };
    doCheck(){
      // 从reudx 中获取 userinfo
      const userinfo = this.props.userinfo;
      if(userinfo.username){
        //已经登陆
        this.goUserPage()
      }else{
        //尚未登陆
        this.setState({
          checking:false
        });
      };
    };
    // 区用户中心页面
    goUserPage(){
      // 没有登陆就调到个人中心。
      hashHistory.push('/User');
    }

    // 登陆之后的业务处理 用智能组件来做
    loginHandle(username){
      //保存用户名
      const actions = this.props.userInfoActions;
      let userinfo = this.props.userinfo;
      userinfo.username = username;
      actions.update(userinfo)
      //跳转连接
      const params = this.props.params
      const router = params.router
      if(router) {
        //跳转指定的页面
        hashHistory.push(router)
      }else {
        //跳转到默认页面 就是 用户中心页面
        this.goUserPage();
      }
    }
}

// -----redux
function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
