import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header/index.jsx'
import UserInfo from '../../components/userInfo/index.jsx'
import OrderList from './subpage/OrderList.jsx'

class User extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div>
          <Header title="用户中心" backRouter="/"/>
          <UserInfo username={this.props.userinfo.username} cityName={this.props.userinfo.cityName}/>
          <OrderList username={this.props.userinfo.username}/>
        </div>
      )

    }

    componentDidMount() {
      //如果未登陆，就跳转到登陆页面
      if(!this.props.userinfo.username) {
        hashHistory.push('/Login')
      }
    }
}

function mapStateToProps(state){
  return{
    userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch){
  return{

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
