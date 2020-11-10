import React, { useState, useEffect } from 'react';

import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const FormItem = Form.Item;

const Login = (props) => {
    const { history } = props;

    const onFinish = (values) => {
        console.log('Success:', values);
        history.push('/home');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="form-border login-form">
            <div className="login-logo">
                <img className="logo" src={require('../../src/images/CllapLogo.png')} />
            </div>
            <Form
                colon={false}
                {...layout}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <FormItem
                    label={<span className="login-input">관리자 ID</span>}
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input
                        type="text"
                    />
                </FormItem>

                <FormItem
                    label={<span className="login-input">관리자 PW</span>}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password
                        type="password"
                    />
                </FormItem>

                <Button className="btn-login" type="primary" htmlType="submit">로그인</Button>
            </Form>
        </div>



    )
}

export default Login