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

      <Router history = {this.props.history}>
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


}
export default RouteMap
