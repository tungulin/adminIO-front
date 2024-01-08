import React, { FC } from 'react'
import { Button, Card, Layout, Space, Typography } from 'antd';
import Fields from 'components/Fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const { Content } = Layout;
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "calc(100vh - 120px)",
    lineHeight: '120px',
};

const cardStyle: React.CSSProperties = {
    width: 500,
    height: 400,
};


export const Auth: FC = () => {
    const dispatch = useDispatch()

    const methodsForm = useForm({ mode: "onSubmit" });


    const onLogin = (data: any) => {
        console.log('data', data)
    }

    return (
        <Content style={contentStyle} >
            <Card style={cardStyle}>
                <FormProvider {...methodsForm}>
                    <form onSubmit={methodsForm.handleSubmit(onLogin)}>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Title level={2}>Connect</Title>
                            <Fields.input title='Login' placeholder='your login...' label='login' />
                            <Fields.input title='Password' placeholder='your password...' label='password' />
                            <Button block htmlType="submit" type='primary'>Sign in</Button>
                        </Space>
                    </form>
                </FormProvider>
            </Card>
        </Content >
    )
}
