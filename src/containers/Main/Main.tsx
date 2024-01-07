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
    minHeight: "calc(100vh - 130px)",
    lineHeight: '120px',
};

const cardStyle: React.CSSProperties = {
    width: 500,
    height: 400,
};


export const Main: FC = () => {
    const dispatch = useDispatch()

    return (
        <Content style={contentStyle} >
        </Content >
    )
}
