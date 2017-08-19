
import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader/index'
import { connect } from 'react-redux'
import Category from '../../components/Category'

import Ad from './subpage/Ad'
import ListSubpage from './subpage/List'

class Home extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div>
          <HomeHeader cityName={this.props.userinfo.cityName} history={this.props.history}/>
          <Category/>
          <div style={{height:'15px' ,backgroundColor:'red'}}></div>
          <Ad/>
          <ListSubpage cityName = {this.props.userinfo.cityName}/>
        </div>
      )
    }
}
// 获取 redux 中的 state
function mapStateProps(state){
  return {
    userinfo:state.userinfo
  }
}
// 获取 redux actions 中的方法
function mapDispatchToProps(dispatch){
  return{

  }
}
export default connect(
  mapStateProps,
  mapDispatchToProps

)(Home)
