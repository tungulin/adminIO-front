import React, { FC } from 'react'
import { Button, Card, Layout, Space, Typography } from 'antd';
import { useDispatch } from 'react-redux';

const { Content, Sider } = Layout;
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 120px)",
    padding: 20
};

export const Databases: FC = () => {
    const dispatch = useDispatch()

    return (
        <Content style={contentStyle} >
            <Title level={2}>Databases</Title>
        </Content >
    )
}
