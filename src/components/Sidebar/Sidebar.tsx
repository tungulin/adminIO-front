import React, { FC } from 'react'
import { Menu, Layout, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { toogleTheme } from 'store/slice/defaultSlice';

import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

const { Header, Sider } = Layout;
const { Title } = Typography;

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    position: 'fixed',
    left: 0,
    top: 60,
    bottom: 60
}

const itemsMenu = [
    {
        key: '1',
        label: 'Docker',
        target: '/docker'
    },
    {
        key: '2',
        label: 'Databases',
        target: '/databases'
    },
]

export const Sidebar: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        const selectedItem = itemsMenu.find((item) => item?.key === e.key)
        if(selectedItem) navigate(selectedItem.target)
    }

    return (
        <Layout>
            <Sider style={siderStyle}>
                <Menu
                    onClick={onClick}
                    mode="inline"
                    items={itemsMenu}
                />
            </Sider >
        </Layout>
    )
}
