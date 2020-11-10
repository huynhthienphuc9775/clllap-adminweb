import React from 'react';
import { Tabs, Layout, Menu } from 'antd';

const LoginLayout = (props) => {
    const { Header, Content } = Layout;
    const { TabPane } = Tabs;
    const { SubMenu } = Menu;

    return (
        <Layout className="login-layout-container">
            <Header className="login-layout-header">
                <Menu className="header-menu" style={{position: 'relative', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent'}} mode="horizontal">
                    <Menu.Item disabled>
                        <div className="login-layout-header-menu-item">Home</div> 
                    </Menu.Item>
                    <Menu.Item disabled>
                        <div className="login-layout-header-menu-item">챌린지 운영 관리</div>
                    </Menu.Item>
                    <Menu.Item disabled>
                        <div className="login-layout-header-menu-item">회원관리</div>
                    </Menu.Item>
                    <Menu.Item disabled>
                        <div className="login-layout-header-menu-item">콘텐츠 등록 관리</div>
                    </Menu.Item>
                    <Menu.Item disabled>
                        <div className="login-layout-header-menu-item">다운로드관리</div>
                    </Menu.Item>
                    <Menu.Item disabled>
                        <div className="login-layout-header-menu-item">매출관리</div>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content className="login-layout-content" style={{ padding: '0 50px', marginTop: 64 }}>
                {props.children}
            </Content>
        </Layout>
    )
}
export default LoginLayout;