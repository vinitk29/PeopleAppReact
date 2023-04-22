import React from 'react';
import './Description.css';
import { GlobalOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

export interface IDescriptionProps {
    email: string; 
    website: string; 
    phone: string; 
    name: string;
}

const Description = (props:IDescriptionProps) => {
    const {  email,  website, phone,name } = props;
    return (
        <div>
            <h3>{name}</h3>
            <div className='row'><MailOutlined style={{fontSize: "18px"}}/><p>{email}</p></div>
            <div className='row'><PhoneOutlined style={{fontSize: "18px"}}/><p>{phone}</p></div>
            <div className='row'><GlobalOutlined style={{fontSize: "18px"}}/><p>{website}</p></div>
        </div>
    );
};

export default Description;