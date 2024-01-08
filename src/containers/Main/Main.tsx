import React, { FC } from 'react'
import { Layout, Typography } from 'antd';
import { useDispatch } from 'react-redux';

const { Content } = Layout;
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 120px)",
    padding: 20
};

export const Main: FC = () => {
    const dispatch = useDispatch()

    return (
        <Content style={contentStyle} >
            <Title level={2}>Main</Title>
        </Content >
    )
}
