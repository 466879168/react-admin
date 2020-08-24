import React,{Component,Fragment} from 'react';
import {Link,withRouter} from 'react-router-dom'
import Router from "../../router/index"

import {Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const {SubMenu}=Menu

 class aside extends Component {
	constructor() {
		super()
		this.state={
			selectedKeys:[],
			openKeys:[]
		}
	}
	componentDidMount(){
		const pathname=this.props.location.pathname
		// let arr=pathname.split("/")//拆分字符串为数组
		// let array=arr.slice(0,3)//截取数组前三个
		// let str=array.join("/")//将数组转为字符串
		let menuKey=pathname.split("/").slice(0,3).join("/")
		// this.setState({
		// 	selectedKeys:[pathname],
		// 	openKeys:[menuKey]
		// })
		const menuHigh={
			pathname,
			menuKey
		}
		this.selectMenuHigh(menuHigh)
		console.log(this.props)
	}

	 /**
		* 选择菜单
		* @param item
		* @param key
		* @param keyPath
		* @param domEvent
		*/
	 selectMenu=({item,key,keyPath,domEvent})=>{
		 const menuHigh={
			 pathname:key,
			 menuKey:keyPath[keyPath.length-1]
		 }
		 console.log(keyPath)
		 // this.setState({
			//  selectedKeys:[key],
			//  openKeys:[keyPath[keyPath.length-1]]
		 // })
		 this.selectMenuHigh(menuHigh)
	}
	 /**
		* 菜单高亮
		*/
	 selectMenuHigh=({pathname,menuKey}) => {
		 this.setState({
			 selectedKeys:[pathname],
			 openKeys:[menuKey]
		 })
	 }
	 openMenu=(openKeys)=>{
		 console.log(openKeys)
		 this.setState({
			 openKeys:[openKeys[openKeys.length-1]]
		 })
	 }
	//子级菜单处理
	renderSubMwnu=({key,title,children})=>{
		return (
				<SubMenu key={key} icon={<UserOutlined />} title={title}>
					{
						children&&children.map(item=>{
							return item.children&&item.children.length>0?this.renderSubMwnu(item):this.renderMenu(item)
						})
					}
				</SubMenu>
		)

	}
	renderMenu=(data)=>{
		return <Menu.Item key="data.key">
			<Link to={data.key}>{data.title}</Link>
		</Menu.Item>
}
	render() {
		const {selectedKeys,openKeys}=this.state
		return (
				<Fragment>
					<h1 className="logo">
						<span>
							logo
						</span>
					</h1>
					<Menu
							onOpenChange={this.openMenu}
							onClick={this.selectMenu}
							theme="dark"
							mode="inline"
							selectedKeys={selectedKeys}
							openKeys={openKeys}
							style={{ height: '100%', borderRight: 0 }}
					>
						{
							Router&&Router.map(firstItem=>{
								return firstItem.children&& firstItem.children.length>0?this.renderSubMwnu(firstItem):this.renderMenu(firstItem)
							})
						}
					</Menu>
				</Fragment>
		)
	}
}

export default withRouter(aside)