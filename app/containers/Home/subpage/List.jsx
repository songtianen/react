import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
// 引入 fetch 的获取list数据的方法
import { getListData } from '../../../fetch/home/home'
import ListComponent from '../../../components/List'
import './style.less'
// 引入加载更多
import LoadMore from '../../../components/LoadMore'

class ListSubpage extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        data : [],
        hasMore:false,//进入当前状态下 有没有更多
        isLoadMore:false, //记录 当前状态下，是“加载中..."" 还是 点击加载更多
        page:1 //下一页的页码
      }
    }
    render(){
      return(
        <div>
          <h2 className="home-list-title" >猜你喜欢</h2>
            {
              this.state.data.length
              ?<ListComponent data = {this.state.data}/>
              : <div>加载中...</div>
            }
            {
              this.state.hasMore
              ? <LoadMore isLoadMore={this.state.isLoadMore} loadMoreData = {this.loadMoreData.bind(this)}/>
              : ''
            }

        </div>
      )
    }
    componentDidMount(){
      //获取首页的数据
      this.loadFirstPageData();
    }
    // 获取首屏数据
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);
        this.resultHandle(result);
    }

    // 加载更多的数据
    loadMoreData(){
      //用到 this.resultHandle
      this.setState({
        isLoadMore:true
      })
      const cityName = this.props.cityName
      const page = this.state.page //下一页的页码
      const result = getListData(cityName,page)
      this.resultHandle(result)
      // 增加page 的  基数
      this.setState({
        page:page+1,
        isLoadMore:false
      })
    }
    // 数据处理函数
    resultHandle(result){
      result.then((res) => {
        return res.json();
      }).then((json) => {
        const  hasMore = json.hasMore
        const data = json.data
        // 存储
        this.setState({
          hasMore:hasMore,
          data:this.state.data.concat(data)
        })
      })
    }



}

export default ListSubpage
