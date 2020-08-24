import React,{Component,Fragment} from 'react';
import './aside.css'

import AsideMenu from '../../../components/asideMneu/index'

export default class aside extends Component {
	constructor() {
		super()
		this.state={}
	}
	render() {
		return (
			<AsideMenu />
		)
	}
}