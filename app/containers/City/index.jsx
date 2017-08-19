import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'

// ----react-redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userinfoActionsFromOtherFile from '../../redux/actions/userinfo'
// ---------localstorage
import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStore'
// ------------
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'

import CityList from '../../components/CityList'

class City extends React.Component{

    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    // 测试一下localstorage
    // componentDidMount(){
    //   console.log(LocalStore)
    //   console.log(CITYNAME)
    // }
    render(){
      return(
        <div>
        <Header title="选择城市"/>
        <CurrentCity cityName = {this.props.userinfo.cityName}/>
        <CityList changeFn = {this.changeCity.bind(this)}/>
        </div>
      )
    }
    // 改变城市的 方法
    changeCity(newCity){
      // 1.修改redux ，2修改 localStorage 3.跳转到首页。
      if(newCity == null) {
        return
      }
      //修改redux
      const userinfo  = this.props.userinfo
      userinfo.cityName = newCity
      this.props.userinfoActions.update(userinfo)

      // 修改localstorage
      LocalStore.setItem(CITYNAME,newCity)
      console.log(this.props);
      // 跳转到首页
      this.props.history.push('/');
      // console.log('1111111',this.props)

    }
}

// --------------redux react绑定-------------

function mapStateToProps(state){
  return{
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return{
    userinfoActions:bindActionCreators(userinfoActionsFromOtherFile,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
