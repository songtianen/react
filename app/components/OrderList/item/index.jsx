import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class Item extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        commentState:2 //0未评价，1评价中 2已评价
      }
    }
    render(){
      const data = this.props.data

      return(
        <div className="order-item-container">
      <div className="clear-fix">
          <div className="order-item-img float-left">
              <img src={data.img}/>
          </div>
          <div className="order-item-comment float-right">
            {
              this.state.commentState === 0
              //未评价
              ?<button className="btn" onClick = {this.showComment.bind(this)}>评价</button>
              : this.state.commentState === 1
                // 评价中
                ? ""
                //已评价
                :<button className="btn unseleted-btn">已评价</button>
            }

          </div>
          <div className="order-item-content float-left">
              <span>商户：{data.title}</span>
              <span>数量：{data.count}</span>
              <span>价格：￥{data.price}</span>
          </div>
      </div>

      {
          this.state.commentState === 1
          ? <div className="comment-text-container">
              <textarea style={{width: '100%', height: '80px'}} ref= "commentText"></textarea>
              <button className="btn" onClick = {this.submitClick.bind(this)}>提交</button>
              <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
            </div>
          : ""

      }

  </div>
      )
    }
    componentDidMount() {
       this.setState({
         commentState:this.props.data.commentState
       })
    }
    // 显示输入框
    showComment(){
      this.setState({
        commentState:1
      })
    }
    // 隐藏输入框
    hideComment(){
      this.setState({
        commentState:0
      })
    }
    //提交按钮事件
    submitClick(){
      const submitComment = this.props.submitComment
      // 获取id
      const id = this.props.data.id
      const commentTextDOM = this.refs.commentText
      const value = commentTextDOM.value.trim()
      if(!value){
        return
      }
      // 提交评论内容
      submitComment(id,value,this.commentOK.bind(this));
    }
    commentOK(){
      this.setState({
        commentState:2
      })
    }
}

export default Item
