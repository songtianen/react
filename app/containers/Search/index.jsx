import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {Link} from 'react-router-dom'
// 引进SearchHeader
import SearchHeader from '../../components/SearchHeader'

import SearchList from './subpage/List'

class Search extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      const params = this.props.match.params
      return(
        <div>
          <SearchHeader keyword={params.keyword} history={this.props.history}/>
          <SearchList keyword={params.keyword} category={params.category}/>
        </div>
      )
    }


    // 
    // clickHandle(e){
    //   window.history.back()
    // }
    //
    // enterHandle(value){
    //   const history = this.props.history
    //   history.push('/search/all/' + encodeURIComponent(value))
    //   console.log('is enter')
    // }

}

export default Search
