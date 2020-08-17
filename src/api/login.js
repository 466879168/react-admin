import service from '../utils/request'

/**
 * 登录接口
 * @param data
 */
export function login(data){
	service.request({
		url:"/login/",
		method:"post",
		data:data,//请求参数
		//params:data//请求类型为get时
	})
}

/**
 * 获取验证码
 */
export function GetCode(data){
	return service.request({
		url:"/getSms/",
		method:"post",
		data
	})
}