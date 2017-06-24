import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class SearchInput extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value:''
    }
  }
  render(){
    return(
      <input
        className="search-input"
        placeholder="请输入"
        value = {this.state.value}
        onChange = {this.changeHandle.bind(this)}
        onKeyUp = {this.KeyUpHandle.bind(this)}/>
    )
  }

  componentDidMount(){
    // j接收默认
    this.setState({
      value:this.props.value || ''
    })
  }

  changeHandle(e){
    this.setState({
      value:e.target.value
    })
  }
  KeyUpHandle(e){
    // 监控 键盘 事件
    if(e.keyCode !== 13 ){
      return
    }
    this.props.enterHandle(this.state.value)
  }
}
export default SearchInput
