import service from '../utils/request'

export function login(data){
	service.request({
		url:"/login/",
		method:"post",
		data:data,//请求参数
		//params:data//请求类型为get时
	})
}