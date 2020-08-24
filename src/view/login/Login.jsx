import React,{Component} from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { message } from 'antd';
import {login,GetCode} from "../../api/login"
import {withRouter} from 'react-router-dom'
import "./index.css";
import {setToken} from '../../utils/session'

 class Login extends Component {
  constructor(){
    super()
    this.state={
      username:"",
      codeBtnDisabled:true,
      codeBtnLoading:false,
      btnText:"获取验证码",
    }
  }
  onFinish = values => {
    console.log(values)
    login().then(response=>{
      this.setState({
        loading:false
      })
      setToken("admin")
      //路由跳转
    this.props.history.push('/')
    }).catch(error=>{

    })
    console.log('Received values of form: ', values);
  };
  getCode=()=>{
    if (!this.state.username){
      message.error('请输入用户名！');
      return
    }
    const params={
      username:this.state.username,
      module:"login"
    }
    this.setState({
      codeBtnLoading:true,
      btnText:"发送中"
    })
    GetCode(params).then(response=>{
      console.log(response)
      this.setState({
        codeBtnLoading:false
      })
      this.countDown()
    }).catch(error=>{
      console.log(error)
      this.setState({
        codeBtnLoading:false,
        btnText:"重新获取"
      })
    })
  }
  /**
   * 倒计时
   */
  countDown=()=>{
    let timer=null

    let sec=60
    this.setState({
      codeBtnDisabled:true,
      codeBtnLoading:false,
      btnText:`${sec}S`
    })
    timer=setInterval(()=>{
      sec--;
      if (sec <=0){
        this.setState({
          btnText:"重新获取",
          codeBtnDisabled:false
        })
        clearInterval(timer)
        return
      }
    },1000)
  }
  goToRegister=() => {
    this.props.loginType("register")
    console.log(11111)
  }
  inputChange=(e)=>{
    e.persist()
    console.log(e);
    let value=e.target.value
    this.setState({
      username:value
    })
  }
  render(){
    return (
        <div className="form-content">
          <div className="form-header">
            <h4 className="column">登录表单</h4>
            <span onClick={this.goToRegister}>账号注册</span>
          </div>
          <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
          >
            <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
            >
              <Input value={this.state.username} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                  {min:6,message:"不能小于6位"},
                  {max:16,message:"不能大于16位"}
                  // {pattern:/^[0-9]*$/,message:"请输入数字"}
                ]}
            >
              <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
              />
            </Form.Item>
            <Form.Item name="">
              <Row gutter={16}>
                <Col className="gutter-row" span={15}>
                  <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Code"
                  />
                </Col>
                <Col className="gutter-row" span={9}>
                  <Button disabled={this.state.codeBtnDisabled} onClick={this.getCode}  loading={this.state.codeBtnLoading} type="danger"  className="login-form-button">{this.state.btnText}</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
            </Form.Item>
          </Form>
        </div>
    )
  }
}


export default withRouter(Login)