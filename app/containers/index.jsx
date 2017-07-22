import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStore'
import { bindActionCreators }  from 'redux'
import { connect } from 'react-redux'
import * as userinfoActionsFromOtherFile from '../redux/actions/userinfo'

class App extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        initDone:false
      }
    }
    render(){
      return(
        <div>
          {
            this.state.initDone
            ?this.props.children
            :<div>加载中...</div>
          }
        </div>
      )
    }

    componentDidMount(){
      // 数据请求等获取城市名字

      let cityName = LocalStore.getItem(CITYNAME);
      // 程序中 比较判断 都要用 ===  除了 判断 null 用 == 。既判断的 null 又 undefined
      if(cityName == null ){
        cityName = '北京'
      }


      // 将信息存储在redux中
      this.props.userinfoActions.update({
        cityName:cityName
      })
      // 更改状态
      this.setState({
        initDone:true
      })
    }
}
// 获取 redux 中的 state
function mapStateProps(state){
  return {

  }
}
// 获取 redux actions 中的方法
function mapDispatchToProps(dispatch){
  return{
    userinfoActions:bindActionCreators(userinfoActionsFromOtherFile,dispatch)

  }
}
export default connect(
  mapStateProps,
  mapDispatchToProps
)(App)
