import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
//导入 获取数据 的方法
import{ getInfoData } from '../../../fetch/detail/detail'

// 引用 木偶组件
import DetailInfoPage from '../../../components/Detail/DetailInfo'



class Info extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        info:false
      }
    }
    render(){

      return(
        <div>
          {
            this.state.info
            ?<DetailInfoPage data={this.state.info}/>
            :""
          }
        </div>
      )
    }

    componentDidMount(){
      // id
      var id = this.props.id;
      // 获取ID 详情 数据
      var result = getInfoData(id)
      result.then((res) => {
        return res.json()
      }).then(json => {
        this.setState({
          info:json
        })
      })
    }
}

export default Info
