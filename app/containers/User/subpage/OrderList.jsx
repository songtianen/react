import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { getOrderListData , postComment } from '../../../fetch/user/OrderList.js'
import OrderListComponent from '../../../components/OrderList/index.jsx'
class OrderList extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        data:[]
      }
    }
    render(){
      return(
        <div className="order-list-container">
          <h2>您的订单</h2>
          {
            this.state.data.length
            ?<OrderListComponent submitComment={this.submitComment.bind(this)} data={this.state.data}/>
            :""
          }
        </div>
      )
    }

    componentDidMount() {
      const username = this.props.username;

      if(username){
        this.loadOrderList(username)
      }
    }

    loadOrderList(username){
      const result = getOrderListData(username)
      result.then((res) => {
        return res.json()
      }).then((json) => {
        this.setState({
          data:json
        })
      }).catch((err) => {
        if(__DEV__){
          console.error('用户获取数据报错',err.message);
        }
      })
    }

    // 提交评价
    submitComment(id,val,callback){
      const result = postComment(id,val)
      result.then((res) => {
        return res.json()
      }).then(json =>{
        if (json.errno === 0){
          // 已经评价
          callback()
        }
      })
    }
}

export default OrderList
