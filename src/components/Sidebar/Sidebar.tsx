import React, { FC } from 'react'
import { Menu, Layout, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const itemsMenu = [
    {
        key: '1',
        label: 'Main',
        target: '/main'
    },
    {
        key: '2',
        label: 'Docker',
        target: '/docker'
    },
    {
        key: '3',
        label: 'Databases',
        target: '/databases'
    },
]

export const Sidebar: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        const selectedItem = itemsMenu.find((item) => item?.key === e.key)
        if (selectedItem) navigate(selectedItem.target)
    }

    return (
        <Sider>
            <Menu
                onClick={onClick}
                mode="inline"
                items={itemsMenu}
            />
        </Sider >
    )
}
