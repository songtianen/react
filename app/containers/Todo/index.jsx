import React from 'react'
import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
  }

render(){
  return(
    <div>
      <Input submitFn={this.submitFn.bind(this)}></Input>
      <List todos={this.state.todos} deleteFn = {this.deleteFn.bind(this)}/>
    </div>
  )
}

submitFn(value){
  const flag = this.state.todos.length
    this.setState({
      todos:this.state.todos.concat({
        flag:flag,
        text:value
      })
    })
}

deleteFn(flag){
  let data = this.state.todos
  this.setState({
    todos:data.filter((item) => {
      if(item.flag !==flag ){
        return item;
      }
    })
  })

  console.log(flag);

}
}
export default Todo
