import React, { useState } from 'react';
import './Home.scss'
import { Row, Col, Divider, Card, Radio, DatePicker, Space, Button } from 'antd'
import moment from 'moment';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as _ from 'lodash';
import excel from '../../images/icons/excel.png'


const Home = (props) => {
    const [value, setValue] = useState('1개월')

    const options = [
        { label: '1주일 ', value: '1주일' },
        { label: '1개월', value: '1개월' },
        { label: '3개월', value: '3개월' },
    ];


    const onChange3 = e => {
        setValue(e.target.value)
    };

    const optionsChart = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'My chart'
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6]
            }
        ]
    };

    const renderItemList = () => {
        const result = [];
        for (let i = 0; i < 10; i++) {
            result.push(
                <div key={i} className="list-area">
                    <div>{i + 1}위 0000000C</div>
                    <div>
                        <Space>
                            <Button>연령별</Button>
                            <Button>성별</Button>
                        </Space>
                    </div>
                </div>
            )
        }
        return result
    }


    return (
        <div>
            <div className="backgroud-white main-border" style={{ padding: '24px', marginBottom: '40px' }}>
                <Row style={{ marginBottom: '20px' }}>
                    <Col span={24} className="backgroud-dark-grey" style={{ borderRadius: '10px' }}>
                        <div className="header-title">[운영 현황]</div>
                    </Col>
                </Row>
                <Row type="flex" gutter={[16, 16]} style={{ padding: '0 20px' }}>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card title="APP 다운로드 현황" className="home-card" bordered={false}>
                            <div className="list-item">
                                <div className="item total-title">TOTAL</div>
                                <div className="item total-cal">00</div>
                            </div>
                            <Divider className="big-divider" />
                            <div className="list-item">
                                <div className="item">오늘</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">어제</div>
                                <div className="item">00</div>
                            </div>
                            <Divider className="small-divider" />
                            <div className="list-item">
                                <div className="item">주간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">월간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">년간</div>
                                <div className="item">00</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card title="회원가입현황" className="home-card" bordered={false}>
                            <div className="list-item">
                                <div className="item total-title">TOTAL</div>
                                <div className="item total-cal">00</div>
                            </div>
                            <Divider className="big-divider" />
                            <div className="list-item">
                                <div className="item">오늘</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">어제</div>
                                <div className="item">00</div>
                            </div>
                            <Divider className="small-divider" />
                            <div className="list-item">
                                <div className="item">주간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">월간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">년간</div>
                                <div className="item">00</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card title="콘텐츠 다운로드 현황" className="home-card" bordered={false}>
                            <div className="list-item">
                                <div className="item total-title">TOTAL</div>
                                <div className="item total-cal">00</div>
                            </div>
                            <Divider className="big-divider" />
                            <div className="list-item">
                                <div className="item">오늘</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">어제</div>
                                <div className="item">00</div>
                            </div>
                            <Divider className="small-divider" />
                            <div className="list-item">
                                <div className="item">주간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">월간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">년간</div>
                                <div className="item">00</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card title="콘텐츠 다운로드 현황" className="home-card" bordered={false}>
                            <div className="list-item">
                                <div className="item total-title">TOTAL</div>
                                <div className="item total-cal">00</div>
                            </div>
                            <Divider className="big-divider" />
                            <div className="list-item">
                                <div className="item">오늘</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">어제</div>
                                <div className="item">00</div>
                            </div>
                            <Divider className="small-divider" />
                            <div className="list-item">
                                <div className="item">주간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">월간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">년간</div>
                                <div className="item">00</div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="backgroud-white main-border" style={{ padding: '24px', marginBottom: '40px' }}>
                <Row style={{ marginBottom: '20px' }}>
                    <Col span={24} className="backgroud-dark-grey" style={{ borderRadius: '10px' }}>
                        <div className="header-title">[통계 현황]</div>
                    </Col>
                </Row>
                <Row type="flex" gutter={[16, 16]} style={{ padding: '0 20px' }}>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card title="유형별 회원 현황" className="home-card" bordered={false}>
                            <div className="list-item">
                                <div className="item total-title">TOTAL</div>
                                <div className="item total-cal">00</div>
                            </div>
                            <Divider className="big-divider" />
                            <div className="list-item">
                                <div className="item">오늘</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">어제</div>
                                <div className="item">00</div>
                            </div>
                            <Divider className="small-divider" />
                            <div className="list-item">
                                <div className="item">주간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">월간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">년간</div>
                                <div className="item">00</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card title="연령별 이용 현황" className="home-card" bordered={false}>
                            <div className="list-item">
                                <div className="item total-title">TOTAL</div>
                                <div className="item total-cal">00</div>
                            </div>
                            <Divider className="big-divider" />
                            <div className="list-item">
                                <div className="item">오늘</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">어제</div>
                                <div className="item">00</div>
                            </div>
                            <Divider className="small-divider" />
                            <div className="list-item">
                                <div className="item">주간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">월간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">년간</div>
                                <div className="item">00</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card title="성별 이용 현황" className="home-card" bordered={false}>
                            <div className="list-item">
                                <div className="item total-title">TOTAL</div>
                                <div className="item total-cal">00</div>
                            </div>
                            <Divider className="big-divider" />
                            <div className="list-item">
                                <div className="item">오늘</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">어제</div>
                                <div className="item">00</div>
                            </div>
                            <Divider className="small-divider" />
                            <div className="list-item">
                                <div className="item">주간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">월간</div>
                                <div className="item">00</div>
                            </div>
                            <div className="list-item">
                                <div className="item">년간</div>
                                <div className="item">00</div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="backgroud-white main-border" style={{ padding: '24px', marginBottom: '40px' }}>
                <Row style={{ marginBottom: '20px' }}>
                    <Col span={24} className="backgroud-dark-grey" style={{ borderRadius: '10px' }}>
                        <div className="header-title">[이용자 지역별 현황]</div>
                    </Col>
                </Row>
                <Row type="flex" gutter={[16, 16]} style={{ padding: '0 10px', marginBottom: '40px' }}>
                    <Col className="text-center" xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="setting-time">
                            <Radio defaultChecked={true}><span>역별 보기</span></Radio>
                            <div className="margin-y-10">
                                <DatePicker defaultValue={moment(new Date(), 'YYYY/MM/DD')} format={'YYYY/MM/DD'} />

                            </div>
                            <Radio defaultChecked={true}><span>기간별 보기 </span></Radio>
                        </div>
                    </Col>
                    <Col className="text-center" xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Space direction="horizontal" size={24}>
                            <Radio.Group
                                options={options}
                                onChange={onChange3}
                                value={value}
                                optionType="button"
                                buttonStyle="solid"
                            />
                        </Space>
                    </Col>
                </Row>
                <Row type="flex" gutter={[16, 16]} style={{ padding: '0 10px' }}>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                        <div className="main-border">
                            <HighchartsReact highcharts={Highcharts} options={optionsChart} />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                        <div className="main-border" style={{ padding: '10px', backgroundColor: '#F2FEFF', marginBottom: '10px' }}>
                            <Row>
                                <Col span={24} className="backgroud-dark-grey" style={{ borderRadius: '10px' }}>
                                    <div className="header-title">이용 상위 지역</div>
                                </Col>
                                <Col span={24}>
                                    <h3>2020.02.12</h3>
                                </Col>
                                <Divider className="small-divider" />
                                <Col span={24}>
                                    {
                                        renderItemList()
                                    }

                                </Col>
                            </Row>
                        </div>

                        <div className="main-border" style={{ padding: '10px', backgroundColor: '#FFFFFF' }}>
                            <Row className="margin-bottom-10">
                                <Col className="export-excel" span={24}>
                                    <div className="text-excel">* 통계 인포그래픽</div>
                                    <img src={excel} className="icon-excel" alt="excel" />

                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div className="setting-time">
                                        <div>기간설정</div>
                                        <div><DatePicker defaultValue={moment(new Date(), 'YYYY/MM/DD')} format={'YYYY/MM/DD'} /></div>
                                        <div>~</div>
                                        <div><DatePicker defaultValue={moment(new Date(), 'YYYY/MM/DD')} format={'YYYY/MM/DD'} /></div>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>



    )

}

export default Home