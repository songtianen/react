import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Star extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      // 获取 star 数量 并且 取余5 （最多5哥star）
      let star = this.props.star || 0;
      if( star > 5){
        star = star % 5
      }
      const iconNum= [1,2,3,4,5];
      return(
        <div className="star-container">
          {iconNum.map((item,index) => {
            const lightClass = star >= item ? ' light' :' ' ;
            return <i key={index} className={"icon-star" + lightClass }/>

          })}
        </div>

      )
    }
}

export default Star
