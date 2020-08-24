const router=[
	{
		title:"控制台",
		icon:'home',
		key:'/home'
	},{
		title:"用户管理",
		icon:'laptop',
		key:'/user/index',
		children:[
			{
				title:"用户列表",
				icon:'',
				key:'/user/index'
			},{
			title: "添加用户",
				key:"/home/general/icon",
				icon:""
			},
			{
				title:"这是11",
				icon:'',
				key:'/user/amoed'
			}
		]
	}
]

export default router