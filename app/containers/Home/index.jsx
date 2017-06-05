import React from 'react'
import {Link} from 'react-router'

class Home extends React.Component{
  render(){
    return(
      <div>
        <p>Home页</p>
        <Link to="/list">link 下一页</Link>
      </div>
    )
  }
}

export default Home
