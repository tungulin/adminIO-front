import React, { FC } from 'react'
import { Button, Card, Layout, Space, Typography } from 'antd';
import Fields from 'components/Fields';
import { useForm } from 'react-hook-form';

const { Content } = Layout;
const { Title } = Typography;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "calc(100vh - 140px)",
    lineHeight: '120px',
};

const cardStyle: React.CSSProperties = {
    width: 500,
    height: 400,
};


export const Auth: FC = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        mode: "onSubmit",
        shouldUnregister: true,
    });


    const onLogin = (data: any) => {
        console.log('data', data);
    }

    return (
        <Content style={contentStyle} >
            <Card style={cardStyle}>
                <form onSubmit={handleSubmit(onLogin)}>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <>
                            <Title level={2}>Sign in</Title>
                            <Fields.input
                                control={control}
                                placeholder='Server'
                                required
                                label='server'
                                error={errors.server} />
                            <Fields.input
                                control={control}
                                placeholder='Username'
                                required
                                label='username'
                                error={errors.username} />
                            <Fields.input
                                control={control}
                                placeholder='Password'
                                required
                                label='password'
                                error={errors.password} />
                            <Fields.input
                                control={control}
                                placeholder='Database'
                                required
                                label='database'
                                error={errors.database} />
                            <Button block key="submit" htmlType="submit" type='primary'>Sign in</Button>
                        </>
                    </Space>
                </form>
            </Card>
        </Content>
    )
}
