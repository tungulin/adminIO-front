import React, { FC } from 'react'
import { Menu, Layout, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { toogleTheme } from 'store/slice/defaultSlice';

const { Header, Sider } = Layout;
const { Title } = Typography;

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    position: 'fixed',
    left: 0,
    top: 65,
    bottom: 65
}

const itemsMenu = [
    {
        key: '1',
        // icon: < /,
        label: 'nav 1',
    },
    {
        key: '2',
        // icon: < /,
        label: 'nav 2',
    },
    {
        key: '3',
        // icon: < /,
        label: 'nav 3',
    }
]

export const Sidebar: FC = () => {
    const dispatch = useDispatch()

    const onClickTheme = () => dispatch(toogleTheme())

    return (
        <Layout>
            <Sider style={siderStyle}>
                <Menu
                    mode="inline"
                    items={itemsMenu}
                />
            </Sider >
        </Layout>
    )
}
