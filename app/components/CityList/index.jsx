import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CityList extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div className="city-list-container">
          <h1>热门城市</h1>
          <ul className="clear-fix">
            <li>
            <span onClick={this.clickHandle.bind(this,'北京')}>北京</span>
            </li>
            <li>
            <span onClick={this.clickHandle.bind(this,'上海')}>上海</span>
            </li>
            <li>
            <span onClick={this.clickHandle.bind(this,'南京')}>南京</span>
            </li>
            <li>
            <span onClick={this.clickHandle.bind(this,'杭州')}>杭州</span>
            </li>
            <li>
            <span onClick={this.clickHandle.bind(this,'天津')}>天津</span>
            </li>
            <li>
            <span onClick={this.clickHandle.bind(this,'重庆')}>重庆</span>
            </li>
          </ul>
        </div>
      )
    }
    clickHandle(newCity){
        console.log(newCity)
      const changeFn = this.props.changeFn;
      changeFn(newCity);
    }
}

export default CityList
