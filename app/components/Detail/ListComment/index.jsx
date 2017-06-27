import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Item from './Item'

class ListComment extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      const data = this.props.data;
      console.log('sdsdsdsdsdsdsdwqe32424323',data);
      return(
        <div className="comment-list">
        {
          data.map((item,index) => {
            return <Item key={index} data = {item}/>
          })
        }

        </div>
      )
    }
}

export default ListComment
