import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class Login extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        phone:''
      }
    }
    render(){
      return(
        <div id = "login-container">
          <div className="input-container phone-container">
            <i className='icon-tablet'></i>
            <input
              type="text"
              placeholder="输入手机号"
              onChange={this.changeHandle.bind(this)}
              value={this.state.phone}/>
            </div>
          <div className="input-container password-container">
            <i className="icon-key"></i>
            <button>发送验证码</button>
            <input type="text" placeholder="输入验证码"/>
          </div>
            <button className="btn-login" onClick={this.clickHandle.bind(this)}>登陆</button>
        </div>
      )
    }
    changeHandle(e){
      //约束性组件

      this.setState({
        phone:e.target.value
      })
    }
    clickHandle(e){
      const username = this.state.phone
      const loginHandle = this.props.loginHandle
      loginHandle(username)

    }
}

export default Login
