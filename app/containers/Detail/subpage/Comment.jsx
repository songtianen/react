import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detail'
import LoadMore from '../../../components/LoadMore'
import ListComment from '../../../components/Detail/ListComment'
import './style.less'

class Comment extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        data:[],
        hasMore:false,
        isLoadingMore:false,
        page:0
      }
    }
    render(){

      return(
        <div className="detail-comment-subpage">
          <h2>用户点评</h2>
          {
            this.state.data.length
            ?<ListComment data ={this.state.data}/>
            :<div>......</div>
          }
          {
            this.state.hasMore
            ?<LoadMore isLoadMore={this.state.isLoadingMore} loadMoreData = {this.LoadMoreData.bind(this)}/>
            : " "
          }
        </div>
      )
    }

// 3 页面加载
    componentDidMount() {
      this.loadFirstPageData();
    }

// 1,请求数据的方法 获取首页的数据
    loadFirstPageData(){
      const id = this.props.id;
      const result = getCommentData(0,id);
      this.resultHandle(result);


    }

// 2,加载更多数据 按钮 事件函数
    LoadMoreData(){
      // 记录状态
      this.setState({
        isLoadingMore:true
      })
      const id = this.props.id;
      const page = this.state.page;
      const result  = getCommentData(page,id);
      this.resultHandle(result)
      // 改变 isLoadingMore 状态
      this.setState({
        isLoadingMore:false
      })

    }


// 3.处理数据的 函数(更新数据)
    resultHandle(result){
      result.then((res) => {
        return res.json();
      }).then(json => {
        // 增加page 的 计数
        const page = this.state.page;
        this.setState({
          page:page + 1
        });
        const hasMore = json.hasMore;
        const data = json.data;
        this.setState({
          hasMore:hasMore,
          // 拼接新的data
          data:this.state.data.concat(data)

        });
      }).catch(ex => {
        if(__DEV__){
          console.error('获取用户评论数据出错',ex.message);
        }
      })
    }
}

export default Comment
