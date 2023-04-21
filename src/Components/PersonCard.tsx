import React from 'react';
import { Card } from 'antd';
import './PersonCard.css';
import { DeleteFilled, EditOutlined, HeartOutlined } from '@ant-design/icons';
import Description from './Description';

export interface IPersonCardProps {
    id: number;
    name: string; 
    email: string; 
    website: string; 
    phone: string; 
}

const PersonCard = (props:IPersonCardProps) => {
    const {  id,  name, email, website, phone } = props;
    const { Meta } = Card;
    return (
        <div key={id}>
            <Card
                style={{ width: 300 }}
                className='card'
                cover={
                    <div style={{backgroundColor:"#f5f5f5",justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <img
                            alt="example"
                            src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
                            className='image'
                        />
                    </div>
                }
                actions={[
                    <HeartOutlined style={{fontSize:"20px", color: "red"}} key="heart" />,
                    <EditOutlined style={{fontSize:"20px"}} key="edit" />,
                    <DeleteFilled style={{fontSize:"20px"}} key="delete" />,
                ]}
            >
                <h3>{name}</h3>
                <Description {...{email,website,phone}}/>
            </Card>
        </div>
    );
};

export default PersonCard;