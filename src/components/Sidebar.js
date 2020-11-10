import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from "react-router-dom";


const Sidebar = (props) => {
    const { collapsed } = props;

    return (
        <Layout.Sider className="sidebar-left-menu" collapsedWidth="0" trigger={null} collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item className="app-menu-item" key="/home">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/home">Home</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page1">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/page1">Page 1</NavLink>
                </Menu.Item>
                <Menu.Item className="app-menu-item" key="/page2">
                    {/* <Icon type="search" /> */}
                    <NavLink to="/page2">Page 2</NavLink>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}
export default Sidebar;