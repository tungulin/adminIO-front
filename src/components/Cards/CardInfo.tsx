import React, { FC } from 'react'
import { Avatar, Card, Layout, Space, Typography } from 'antd';
import { ICardInfo } from './ICards';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;
const { Meta } = Card;

const titleStyle: React.CSSProperties = {
    width: '100%',
    justifyContent: 'space-between'
};
export const CardInfo: FC<ICardInfo> = ({ img, title, description, link }) => {
    const navigate = useNavigate();

    const Title: FC = () => {
        return <Space style={titleStyle}>
            <Text>{title}</Text>
            {!!link && < RightOutlined />}
        </Space>
    }

    const onClick = () => {
        if(link) navigate(link)
    }

    return (
        <Card onClick={onClick} hoverable={!!link} style={{ width: 220, height: 150 }}>
            <Meta
                avatar={img && <Avatar src={img} />}
                title={<Title />}
                description={description}
            />
        </Card>
    )
}
