import React, { FC } from 'react'
import { Button, Card, Layout, Menu, Space, Table, Typography } from 'antd';
import Fields from 'components/Fields';
import { useForm } from 'react-hook-form';
import { ColumnsType } from 'antd/es/table';

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


const sideStyle: React.CSSProperties = {
    position: 'fixed',
    left: 0,
    top: 70,
    bottom: 70,
}

interface DataType {
    tableName: string,
    typeTable: string,
    matchMode: string
}


const data: DataType[] = [
    {
        tableName: 'Admin',
        typeTable: 'InnoDB',
        matchMode: 'utf8_general_ci'
    },
    {
        tableName: 'Admin2',
        typeTable: 'InnoDB2',
        matchMode: 'utf8_general_ci2'
    },
    {
        tableName: 'Admin3',
        typeTable: 'InnoDB3',
        matchMode: 'utf8_general_ci3'
    }
]


export const PanelTable: FC = () => {

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'tableName',
            key: 'tableName',
        },
        {
            title: 'Type',
            dataIndex: 'typeTable',
            key: 'typeTable',
        },
        {
            title: 'Match model',
            dataIndex: 'matchMode',
            key: 'matchMode',
            ellipsis: true,
        },
    ];


    return (
        <Layout style={contentStyle}>
            <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <Sider
                    width={300}
                    style={sideStyle}
                /> */}
                <Content style={{ textAlign: 'start' }}>
                    <Title level={2}>Database: TestDB</Title>
                    <Table style={{ width: 700 }} columns={columns} dataSource={data} />
                    <Space >
                        <Button>Create table</Button>
                        <Button>Clear</Button>
                        <Button>Delete</Button>
                    </Space>
                </Content>

            </Content>

        </Layout >
    )
}
