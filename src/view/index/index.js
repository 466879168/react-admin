import React from 'react';
import {Layout} from 'antd'
import './index.css'
import Aside from "./components/aside.js"
import TopHeader from './components/topHeader'
import ContainerMain from '../../components/container/index'


const {Header,Sider,Content} =Layout





class Index extends React.Component{
	constructor(props) {
		super(props)
		this.state={
			collapsed:true
		}
	}

	componentDidMount() {
		const collapsed=JSON.parse(sessionStroage.getItem("collapsed"))
		this.setState({collapsed})
	}

	toggleCollapsed=()=>{
		const collapsed=!this.state.collapsed
		this.setState({
			collapsed:!this.state.collapsed
		})
		sessionStorage.setItem('collapsed',collapsed)
	}

	render() {
		return (
				<Layout className="layout-wrap">
					<Sider collapsed={this.state.collapsed} width="250px">
						<Aside />
					</Sider>
					<Layout>
						<Header className="layout-header">
							<TopHeader toggle={this.toggleCollapsed} collapsed={this.state.collapsed} />
						</Header>
						<Content className="layout-content">
							<ContainerMain />
						</Content>
					</Layout>
				</Layout>
		)
	}
}

export default Index