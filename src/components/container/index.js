import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'


import PrivateRouter from '../privateRouter/index'
import User from '../../view/user/manage'

class ContainerMain extends React.Component{
	constructor(){
		super()
		this.state={}
	}

	render() {
		return (
				<Switch>
					<PrivateRouter path="/home/general/icon" component={User} />
				</Switch>
		)
	}
}

export default ContainerMain;
