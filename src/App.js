import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
//引入组件
import Login from './view/login/index'
import Index from "./view/index/index"



class App extends React.Component{
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact component={Login} path="/login"></Route>
            <Route exact Component={Index} path="/"></Route>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
