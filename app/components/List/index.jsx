import React from 'react'

class List extends React.Component{
  constructor(props,context){
    super(props,context)
    this.state={

    }
  }
  render(){
    const data = this.props.todos;

    return(
      <div>
      <ul style={{marginTop:'10px',fontSize:'20px',lineHeight:'30px'}}>
        {data.map((item,index)=>{
          return <li key={index} onClick={this.clickHandler.bind(this,item.flag)}>{item.text}</li>
        })}
      </ul>
      </div>
    )
  }


// 删除
  clickHandler(flag){
    this.props.deleteFn(flag)

  }
}

export default List
