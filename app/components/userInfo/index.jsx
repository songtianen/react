import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class UserInfo extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div>
          <p>
            <i className="icon-user"></i>
            {this.props.username}
          </p>
          <p>
            <i className="icon-map-marker"></i>
            {this.props.cityName}
          </p>
        </div>
      )
    }
}

export default UserInfo
