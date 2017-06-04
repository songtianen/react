import React from 'react'

class Header extends React.Component{
  render(){
    return(
      <div>
      // 不要试图修改 props,props 父组件向子组件传递数据的
      <p>{this.props.title}</p>
      <h5 style={{color:'red'}}>{this.props.val.b}</h5>
      </div>
    )
  }
}
export default Header;
