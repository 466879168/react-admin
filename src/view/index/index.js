import React,{Component} from "react";
import {Layout} from 'antd'
const {Sider,Header,Main}=Layout


class Index extends Component{
	constructor(props){
		super(props)
		this.state={

		}
	}

	render(){
		return (
				<Layout>
					<Sider>
						6456456464654645645645645645646
					</Sider>
					<Layout>
						<Header>头部</Header>
						<Content>内容</Content>
					</Layout>
				</Layout>
		)
	}
}

export default Index