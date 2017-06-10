import React from 'react'
import { Route,Router,IndexRoute ,hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import App from '../containers'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import NotFound from '../containers/Notfound'
import User from '../containers/User'
import City from '../containers/City'
import Search from '../containers/Search'

class RouteMap extends React.Component{
      constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
  render(){
    return(

      <Router history = {this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='city' component={City}/>
          <Route path='User' component={User}/>
          <Route path='search/type(/:keyword)' component={Search}/>
          <Route path='detail/:id' component={Detail}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>

    )
  }


}
export default RouteMap
