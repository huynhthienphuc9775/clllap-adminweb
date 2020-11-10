import React, { useState } from 'react';
import './DownloadManagement.scss'
import moment from 'moment';
import * as _ from 'lodash';
import { Input, Row, Col, Table, Menu, Dropdown, Button, Badge } from 'antd';
import { SearchOutlined, DownOutlined, PlusOutlined } from '@ant-design/icons';

const DownloadManagement = (props) => {

    const [ countSelected, setCountSelected ] = useState(0)

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
        { key: 1, no: '1', 마이디: 'abc@gmail.com', 이름: '총길동', 성별: '남', 생년월일: '20.00.00', 연락처: '010.1234.5678', 관심분야: 'Lift style, Fashion', 가입날짜: '20.00.00', 달되날짜: '' },
        { key: 2, no: '2', 마이디: 'abc@gmail.com', 이름: '총길동', 성별: '남', 생년월일: '20.00.00', 연락처: '010.1234.5678', 관심분야: 'Lift style, Fashion', 가입날짜: '20.00.00', 달되날짜: '' },
        { key: 3, no: '3', 마이디: 'abc@gmail.com', 이름: '총길동', 성별: '남', 생년월일: '20.00.00', 연락처: '010.1234.5678', 관심분야: 'Lift style, Fashion', 가입날짜: '20.00.00', 달되날짜: '' },

    ]



    const onSearch = (e) => {
        console.log(e)
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setCountSelected(selectedRows.length)

        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
            setCountSelected(selectedRows.length)
        },
    };
    const [checkStrictly, setCheckStrictly] = useState(false);
    return (
        <div>
            <Row className="margin-bottom-10">
                <Col className="search-input" span={24}>
                    <Button className="new-content" type="primary"> <PlusOutlined />New Content Registration</Button>
                    <Input
                        style={{ width: '250px', marginTop: '10px' }}
                        suffix={<SearchOutlined style={{ color: '#004BD2' }} />}
                    />
                </Col>
                <Col span={24}>
                    <Badge count={countSelected}>
                        <Button className="select-modification">Select Modification</Button>

                    </Badge>

                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        scroll={{ x: 1300 }}
                        rowSelection={{ ...rowSelection, checkStrictly }}

                    />
                </Col>
            </Row>
        </div>
    )
}

export default DownloadManagement