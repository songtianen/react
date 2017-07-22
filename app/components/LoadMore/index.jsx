import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div className="load-more" ref="wraper">
          {
            this.props.isLoadMore
            ? <span>加载中...</span>
            :<span onClick={this.loadMoreHandle.bind(this)}>加载更多...</span>
          }
        </div>
      )
    }
    loadMoreHandle(){
      //执行传递过来的 loadMoreData() 函数
      this.props.loadMoreData()

    }
    componentDidMount(){
        // 拿到方法
        const loadmoreFn = this.props.loadMoreData;
        // 拿到 dom 元素
        const wraper = this.refs.wraper;

      // 截流 函数 连续触发 较少，
      let timeoutId;
      function callback(){
        // 拿到dom 匀速 距离顶部的值(注意这个函数)
        const top = wraper.getBoundingClientRect().top;
        // 拿到 window 高度
        const windowHeight = window.screen.height;
        // 当
        if(top && top < windowHeight){
          loadmoreFn()
        }
      }
      window.document.addEventListener('scroll', function (e) {
          if(this.props.isLoadMore){
            return
          }
          if(timeoutId){
            clearTimeout(timeoutId)
          }
          timeoutId = setTimeout(callback,50)
      }.bind(this),false)
    }
}

export default LoadMore
