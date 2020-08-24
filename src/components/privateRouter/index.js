import React from 'react';
import {Route,Redirect} from 'react-router-dom'

import {getToken} from '../../utils/session'

const PrivateRouter=({component:Component,...rest})=>{
	return (
			<Route
					{...rest}
					render={(routeProps)=>(
							// getToken()?<Component {...routeProps} />:<Redirect to="/login" />
							true?<Component {...routeProps} />:<Redirect to="/login" />
					)}
			/>
	)
}
export default PrivateRouter

