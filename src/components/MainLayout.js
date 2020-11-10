import React, { useState } from 'react';
import { Layout, Menu, Input } from 'antd';

const { Header, Content } = Layout;


const MainLayout = (props) => {
    const [current, setCurrent] = useState('/home');

    const handleClick = (e) =>{
        setCurrent(e.key)
        props.children.props.history.push(e.key)

    }
    return (
        <Layout className="login-layout-container" style={{height: '100%'}}>
            <Header className="login-layout-header">
                <Menu onClick={handleClick} selectedKeys={current} className="header-menu" style={{ position: 'relative', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent' }} mode="horizontal">
                    <Menu.Item key="/home">
                        <span className="login-layout-header-menu-item color-white">Home</span>
                    </Menu.Item>
                    <Menu.Item key="/challenge-perational-management">
                        <span className="login-layout-header-menu-item color-white">챌린지 운영 관리</span>
                    </Menu.Item>
                    <Menu.Item key="/member-management">
                        <span className="login-layout-header-menu-item color-white">회원관리</span>
                    </Menu.Item>
                    <Menu.Item key="/download-management">
                        <span className="login-layout-header-menu-item color-white">콘텐츠 등록 관리</span>
                    </Menu.Item>
                    <Menu.Item key="/sale-management">
                        <span className="login-layout-header-menu-item color-white">다운로드관리</span>
                    </Menu.Item>
                    <Menu.Item key="/administrator-id">
                        <span className="login-layout-header-menu-item color-white">매출관리</span>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '50px', marginTop: 64 }}>
                {props.children}
            </Content>
        </Layout>
    )
}
export default MainLayout;