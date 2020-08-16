import React, { Component } from 'react';
import "./index.scss"
//登录组件
import Login from './Login'
//注册组件
import Register from './Register'
//导入antd表单


export default class Login extends Component {
	constructor() {
		super()
		this.state = {
			type:"login"
		}
	}
	switchType=(value)=>{
		this.setState({
			type:value
		})
	}
	render() {
		return (
			<div className="form-wrap">
				{
					this.state.type==='login'?<Login loginType={this.switchType}></Login>:<Register registerType={this.switchType}></Register>
				}
			</div>
		)
	}
}