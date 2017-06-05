import React from 'react'
class Detail extends React.Component{
  render(){
    return(
      <p style={{color:'green'}}> Detail页 ,url参数：{this.props.params.id}</p>
    )
  }
}

export default Detail
