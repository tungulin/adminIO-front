import React, { FC } from 'react'
import { Button, Card, FloatButton, Layout, Typography, Space } from 'antd';
import { BulbFilled, GithubFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toogleTheme } from 'store/slice/defaultSlice';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;


export const Navbar: FC = () => {
    const dispatch = useDispatch()

    const onClickTheme = () => dispatch(toogleTheme())

    return (
        <Header style={{ height: 65, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Title level={3} style={{ margin: 0 }}>AdminIO</Title>
            <Space>
                <Button onClick={onClickTheme} icon={<BulbFilled />} />
                <Link to='https://github.com/tungulin' target="_blank" >
                    <Button icon={<GithubFilled />} />
                </Link>
            </Space>
        </Header >
    )
}
