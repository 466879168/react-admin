import React,{Fragment} from 'react'

import { MenuFoldOutlined } from '@ant-design/icons';

export default class TopHeader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			collapsed:props.collapsed
		}
	}

	//生命周期：监听父级的props的值得变化
	componentWillReceiveProps({collapsed}) {
		console.log(collapsed)
		this.setState({
			collapsed
		})
	}

	toggleMenu=()=>{
		this.props.toggle()
	}
	render() {
		const {collapsed} =this.state
		return (
			<Fragment>
				<h1 className={collapsed?'header close':'header'} >
					<span onClick={this.toggleMenu}>
						<MenuFoldOutlined />
					</span>
					<span>
						这是头部hahahhahahhahahahhah
					</span>
				</h1>
			</Fragment>
		)
	}
}