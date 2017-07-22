import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'

// 引用公共的header
import Header from '../../components/Header'
import Info from './subpage/info'
import Comment from './subpage/Comment'

import Buy from './subpage/buy.jsx'


class Detail extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      // 获取商户的 id
      const id = this.props.params.id
      return(
        <div>
          <Header title="商户详情"/>
          <Info id={id}/>
          <Buy id={id}/>
          <Comment id = {id}/>
        </div>
      )
    }


}

export default Detail
