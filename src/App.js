import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
//引入组件
import Login from './view/login/index'



class App extends React.Component{
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact component={Login} path="/"></Route>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
