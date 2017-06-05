import React from 'react'
import { Route,Router,IndexRoute ,hashHistory } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/Notfound'

class RouteMap extends React.Component{

  render(){
    return(

      <Router history = {this.props.history} Update={this.updateHandle.bind(this)}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='list' component={List}>
          <Route path='detail/:id' component={Detail}/>
          </Route>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>

    )
  }

  updateHandle(){
    console.log(`每次router 变化之后都会触发`)
  }
}
export default RouteMap
