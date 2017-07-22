import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ListItem from './item'


class ListComponent extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      const data = this.props.data
      return(
        <div>
          {data.map((item,index) => {
            {/*把复杂 的 一些小元素 放在单独的一个组件中*/}
            return <ListItem key={index} data = {item}/>
          })}
        </div>
      )
    }
}

export default ListComponent
