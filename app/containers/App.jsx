import React from 'react'

class App extends React.Component{
  render(){
    console.log('主页',this.props)
    return(
      <div style={{backgroundColor:'gray'}}>这是主页App页：灰色{this.props.children}</div>
    )
  }

}
export default App
