import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Item from './item/index.jsx'
class OrderList extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      const data = this.props.data;
      const submitComment = this.props.submitComment;
      return(
        <div>
          {
            data.map((item,index) =>{
              return <Item key={index} submitComment = {submitComment} data={item}></Item>
            })
          }
        </div>
      )
    }
}

export default OrderList
