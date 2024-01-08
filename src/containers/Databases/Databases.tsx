import React, { FC } from 'react'
import { Button, Card, Layout, Space, Typography } from 'antd';
import { useDispatch } from 'react-redux';

const { Content, Sider } = Layout;
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "calc(100vh - 120px)",
    lineHeight: '120px',
};

export const Databases: FC = () => {
    const dispatch = useDispatch()

    return (
        <Content style={contentStyle} >
            <Title>Databases</Title>
        </Content >
    )
}
