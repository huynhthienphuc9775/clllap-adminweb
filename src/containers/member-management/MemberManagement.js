import React, { useState } from 'react';
import './MemberManagement.scss'
import moment from 'moment';
import * as _ from 'lodash';
import { Input, Row, Col, Table, Menu, Dropdown, Button } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';

const { Search } = Input;

const MemberManagement = (props) => {

    const menu = (
        <Menu>
            <Menu.Item key="1">
                1st menu item
          </Menu.Item>
            <Menu.Item key="2">
                2nd menu item
          </Menu.Item>
            <Menu.Item key="3">
                3rd menu item
          </Menu.Item>
        </Menu>
    );

    const columns = [
        { title: 'No.', width: 80, dataIndex: 'no', key: 'no', fixed: 'left' },
        {
            title: '회원등급',
            dataIndex: '회원등급',
            key: '회원등급',
            render: record => (
                <Dropdown overlay={menu}>
                    <Button>
                        Button <DownOutlined />
                    </Button>
                </Dropdown>
            ),
        },
        { title: '마이디', dataIndex: '마이디', key: '마이디' },
        { title: '이름', dataIndex: '이름', key: '이름' },
        { title: '성별', dataIndex: '성별', key: '성별' },
        { title: '생년월일', dataIndex: '생년월일', key: '생년월일' },
        { title: '연락처', dataIndex: '연락처', key: '연락처' },
        { title: '관심분야', dataIndex: '관심분야', key: '관심분야' },
        { title: '가입날짜', dataIndex: '가입날짜', key: '가입날짜' },
        { title: '달되날짜', dataIndex: '달되날짜', key: '달되날짜' },
    ];

    const data = [
        {no: '1', 마이디: 'abc@gmail.com', 이름: '총길동', 성별: '남', 생년월일: '20.00.00', 연락처: '010.1234.5678', 관심분야: 'Lift style, Fashion', 가입날짜: '20.00.00', 달되날짜: '' }
    ]



    const onSearch = (e) => {
        console.log(e)
    }
    return (
        <div>
            <Row className="margin-bottom-10">
                <Col className="search-input" xs={24} sm={6} md={6} lg={6} xl={6} >
                    <Input
                        suffix={<SearchOutlined style={{ color: '#004BD2' }} />}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
                </Col>
            </Row>
        </div>
    )
}

export default MemberManagement
