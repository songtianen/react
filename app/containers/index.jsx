import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'

class App extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        initDone:false
      }
    }
    render(){
      return(
        <div>
          {
            this.state.initDone
            ?this.props.children
            :<div>加载中...</div>

          }
        </div>
      )
    }

    componentDidMount(){
      // 数据请求等
      

      // 注意this 的值，
      setTimeout(()=>{
        this.setState({
          initDone:true
        })
      },1000)
    }
}

export default App
