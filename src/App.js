import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
//引入组件
import Login from './view/login/index'
import Index from './view/index/index'
import Home from './view/home/index'
import About from './view/about/index'

import PrivateRouter from './components/privateRouter/index'


class App extends React.Component{
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact component={Login} path="/login" />
            <PrivateRouter  component={Index} path="/" />
            <Route exact component={Home} path="/home" />
            <Route component={About} path="/about" />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
