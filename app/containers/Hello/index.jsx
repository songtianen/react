import React from "react";
import Header from "../../components/Header/index"
import Carousel from "./subpage/Carousel"
import List from "./subpage/List"
import Recommend  from "./subpage/Recommend"

class Hello extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      now:new Date().toLocaleString()
    }
  }
  render(){
      const obj = {
        a:100,
        b:200
      }
    return(
      <div>
        <Header title="Header" val={obj} />
        <p onClick = {this.clickHandler.bind(this)}>{this.state.now}Hello world</p>
        <hr/>
        <Carousel/>
        <Recommend/>
        <List/>
      </div>
    )
  }

  clickHandler() {
  const tm = new Date().toLocaleString();
    this.setState({
      now:tm
    })
  }
  //生命周期
  componentDidMount(){
    // 渲染完成
    console.log(`组件第一次架子啊渲染完成的，一般在此获得网络数据，实际项目开始开发时会经常用到`)
  }

  componentDidUpdate(){
    // 重新 setState({}) 的 更新的时候 会用到
    console.log(`组件触发更新完成`)
  }

  componentWillUnmount(){
    // 组件即将消失的时候
    // 组件销毁之前触发的事件，一般用户存储一些特殊的信息，以及清理setTimeout事件等
    console.log(`组件销毁之前 做了点事情`)
  }

}

export default Hello;
