import React from 'react';
import { ICard } from '../Interfaces/ICard';
import { Avatar,Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const Entity = (props:ICard) => {
    const { phone, id, email, name, website } = props;
    const { Meta } = Card;
    return (
        <div key={id}>
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    title={name}
                    description="This is the description"
                />
            </Card>
        </div>
    );
};

export default Entity;