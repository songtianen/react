import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'
import SearchInput from '../SearchInput'

import './style.less'
class HomeHeader extends React.Component{

    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

      this.state = {
        kwd:''
      }
    }
    render(){
      return(
        <div id="home-header" className="clear-fix">
          <div className="float-left">
            <Link to="city">
              <span>{this.props.cityName}</span>
              &nbsp;
              <i className="icon-angle-down"></i>
            </Link>
          </div>
          <div className="float-right">
            <Link to="Login">
              <i className="icon-user"></i>
            </Link>
            </div>
          <div className="home-header-middle" >
            <div className="search-container">
              <i className="icon-search"></i>
              <SearchInput value ="" enterHandle = {this.enterHandle.bind(this)}/>
            </div>
          </div>
        </div>
      )
    }

    enterHandle(value){
      const history = this.props.history
      history.push('/search/all/' + encodeURIComponent(value))
    }

}

export default HomeHeader
