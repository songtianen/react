import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import {matchPath} from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import App from '../containers'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import NotFound from '../containers/Notfound'
import Login from '../containers/Login'
import User from '../containers/User'
import City from '../containers/City'
import Search from '../containers/Search'

class RouteMap extends React.Component{
      constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      }
      updateHandle(){
        //统计pv
      }
  render(){

    return(
      <Router history={this.props.history}  >
      <div>
        <Route  component={(props) => (
          <App {...props}>
          <Switch>
            <Route  exact path='/' component={Home}/>
            <Route  path='/city' component={City}/>
            <Route  path='/Login/:router?' component={Login}/>
            <Route path='/User' component={User}/>
            <Route path='/search/:category/:keyword?' component={Search}/>
            <Route path='/detail/:id' component={Detail}/>
            <Route path="*" component={NotFound}/>
          </Switch>
          </App>
        )}>
         </Route>
         </div>
      </Router>

    )
  }


componentDidMount() {
  console.log('........',this.props)
}

}
export default RouteMap
