import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Header extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div id="common-header">
          <span className="back-icon" onClick={this.clickHandle.bind(this)}>
          <i className = "icon-chevron-left"></i>
          </span>
          <h1>{this.props.title}</h1>
        </div>
      )
    }
    clickHandle(){
      console.log('backRouter',this.props)
      const backRouter = this.props.backRouter;
      if(backRouter){
        const history = this.props.history
        history.push(backRouter)
      }else {
        window.history.back()
      }
    }
}

export default Header
