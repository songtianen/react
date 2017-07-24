import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
// redux

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../../redux/actions/userinfo'

import * as storeActionsFromFile from '../../../redux/actions/store.js'

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        // 当前商户是否已经收藏
        isStore:false
      }
    }
    render(){
      return(
        <div>
          <BuyAndStore isStore = {this.state.isStore} buyHandle = {this.buyHandle.bind(this)} storeHandle = {this.storeHandle.bind(this)}/>
        </div>
      )
    }

    componentDidMount() {

      this.checkStoreState()
    }

    checkStoreState(){
      // 检验当前商户是否已经收藏
        const id = this.props.id;
        const store  = this.props.store;

        // some 只要一个满足即可
        store.some(item => {
          if(item.id === id){
            this.setState({
              isStore:true
            })
            //跳出循环
            return true
          }
        })
    }

    // 验证登陆
    loginCheck(){
      const id = this.props.id
      const userinfo = this.props.userinfo
      if(!userinfo.username){
        //跳转到登陆页面
        hashHistory.push('Login/'+ encodeURIComponent('/detail/'+id))
        return false;
      }
      return true;
    }

    storeHandle(){
      //收藏事件

      // 1 验证登陆
      const loginFlag = this.loginCheck()
      if(!loginFlag){
        return
      }

      const id = this.props.id;
      const storeActions = this.props.storeActions;
      if(this.state.isStore){
        //当前商户已经被收藏，点击时取消收藏
        storeActions.rm({id:id})
      }else {
        // 当前商户尚未被收藏，点击时要执行收藏
        storeActions.add({id:id})
      }
      // 修改状态
      this.setState({
        isStore:!this.state.isStore
      })
    }



    buyHandle(){
      //购买事件
      // 1 验证登陆
      const loginFlag = this.loginCheck()
      if(!loginFlag){
        return
      }
      //购买流程
      // 。。。
      // 。。。

      // 跳转到用户主页
      hashHistory.push('/User')

    }


}
    function mapStateToProps(state){
      return{
        userinfo:state.userinfo,
        store:state.store
      }
    }
    function mapDispatchToProps(dispatch){
      return{
        storeActions:bindActionCreators(storeActionsFromFile,dispatch)
      }
    }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy)
