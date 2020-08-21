import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { login } from "../../api/login";
import "./index.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onFinish = (values) => {
    login()
      .then((response) => {})
      .catch((error) => {});
    console.log("Received values of form: ", values);
  };
  goToLogin = () => {
    this.props.registerType("login");
  };
  render() {
    return (
      <div className="form-content">
        <div className="form-header">
          <h4 className="column">注册表单</h4>
          <span onClick={this.goToLogin}>登录</span>
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
                message: "邮箱不能为空!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="邮箱"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
              { min: 6, message: "不能小于6位" },
              { max: 16, message: "不能大于16位" }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
              { min: 6, message: "不能小于6位" },
              { max: 16, message: "不能大于16位" }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请重新输入密码"
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
                <Button type="danger" className="login-form-button">
                  获取验证码
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
