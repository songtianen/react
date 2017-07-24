import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { getOrderListData } from '../../../fetch/user/OrderList.js'
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
            ?<OrderListComponent data={this.state.data}/>
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
      })
    }
}

export default OrderList
