import axios from 'axios'
//第一步创建实例
const service=axios.cerate({
	baseUrl:"devApi",
	timeout:5000,
})
//第二步请求拦截
service.interceptors.request.use(function(config){
	//在发送之前做什么
	return config;
},function(error){
	return Promise.reject(error)
})
//第三步响应拦截
service.interceptors.response.use(function(response){
	return response;
},function(error){
	return Promise.reject(error)
})

export default service;