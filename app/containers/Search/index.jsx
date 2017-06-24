import React from 'react'
// 导入性能优化
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link,hashHistory } from 'react-router'
// 引进SearchHeader
import SearchHeader from '../../components/SearchHeader'

import SearchList from './subpage/List'

class Search extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      const params = this.props.params
      return(
        <div>
          <SearchHeader keyword={params.keyword}/>
          <SearchList keyword={params.keyword} category={params.category}/>
        </div>
      )
    }

    clickHandle(e){
      window.history.back()
    }

    enterHandle(value){
      hashHistory.push('/search/all/' + encodeURIComponent(value))
    }

}

export default Search
