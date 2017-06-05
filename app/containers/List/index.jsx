import React from 'react'
import { hashHistory } from 'react-router'

class List extends React.Component{
  render(){
      const arr = ['ni','wo','ta']
      return(
        <ul>
          {arr.map((item,index)=>{
            return <li style={{backgroundColor:'pink'}} key={index} onClick={this.clickHandler.bind(this,item)}>这是list页{item}{this.props.children}</li>
          })}
        </ul>
      )

  }

  clickHandler(item){
    // bind(this,item) 带的参数 就是 arr 的item
    // 利用hashHistory.push 把 item 传给 <Route path='detail/:id' component={Detail}/>
    hashHistory.push(this.props.route.path + '/detail/'+item);

  }
}

export default List
