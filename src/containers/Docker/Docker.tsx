import React, { FC } from 'react'
import { Button, Card, Layout, List, Space, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { CardInfo } from 'components/Cards/CardInfo';

const { Content, Sider } = Layout;
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 120px)",
    padding: 20
};

export const Docker: FC = () => {
    const dispatch = useDispatch()

    const cards = [
        {
            title: 'Images',
            description: "All images docker",
            link:'/docker/images'
        },
        {
            title: 'Containers',
            description: "All containers docker",
            hoverable: true,
            link:'/docker/containers'
        }
    ]

    return (
        <Content style={contentStyle} >
            <Title level={2}>Docker</Title>

            <List
                dataSource={cards}
                grid={{ gutter: 8 }}
                renderItem={(item) => (
                    <List.Item>
                        <CardInfo {...item} />
                    </List.Item>
                )}
            />
        </Content >
    )
}
