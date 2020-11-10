import React, { useState } from 'react';
import './SaleManagement.scss'
import moment from 'moment';
import * as _ from 'lodash';
import { Input, Row, Col, Table, Menu, Dropdown, Button, Badge } from 'antd';
import { SearchOutlined, DownOutlined, PlusOutlined } from '@ant-design/icons';
import excel from '../../images/icons/excel.png';

const { Column, ColumnGroup } = Table;

const SaleManagement = (props) => {

    const data = []
    return (
        <div>
            <Row className="margin-bottom-10">
                <Col className="search-input" span={24}>
                    <Input
                        style={{ width: '250px' }}
                        suffix={<SearchOutlined style={{ color: '#004BD2' }} />}
                    />
                    <div className="export-excel">
                        <div className="text-excel">* 통계 인포그래픽</div>
                        <img src={excel} className="icon-excel" alt="excel" />
                    </div>

                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Table dataSource={data} scroll={{ x: 1300 }}>
                        <ColumnGroup className="col-group" title="다운로드 기록">
                            <Column title="No." dataIndex="no" key="no" />
                            <Column title="다운로드 날짜" dataIndex="다운로드 날짜" key="다운로드 날짜" />
                            <Column title="콘텐츠등록번호" dataIndex="콘텐츠등록번호" key="콘텐츠등록번호" />
                            <Column title="콘텐츠명" dataIndex="콘텐츠명" key="콘텐츠명" />
                        </ColumnGroup>

                        <ColumnGroup className="col-group" title="사용자">
                            <Column title="아이디" dataIndex="아이디" key="아이디" />
                            <Column title="성별" dataIndex="성별" key="성별" />
                            <Column title="생년월일" dataIndex="생년월일" key="생년월일" />
                            <Column title="누적다운로드 수" dataIndex="누적다운로드 수" key="누적다운로드 수" />
                        </ColumnGroup>

                        <ColumnGroup className="col-group" title="제작자">
                            <Column title="소속" dataIndex="소속" key="소속" />
                            <Column title="이름" dataIndex="이름" key="이름" />
                            <Column title="아이디" dataIndex="아이디" key="아이디" />
                        </ColumnGroup>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default SaleManagement