import React from 'react';
import { Card } from 'antd';
import './PersonCard.css';
import { DeleteFilled, EditOutlined, HeartOutlined,HeartFilled } from '@ant-design/icons';
import Description, { IDescriptionProps } from './Description';
import { generate } from '@ant-design/colors';
import EditForm from './EditForm';
import { IPerson } from '../Interfaces/IPerson';

export interface IPersonCardProps {
    id: number;
    name: string; 
    email: string; 
    website: string; 
    phone: string; 
    username: string;
    onDeleteClick: () => void;
}

const PersonCard = (props:IPersonCardProps) => {
    const { id, username, onDeleteClick } = props;
    const gray = generate('#f5f5f5')[5];
    const red = generate('#ff0000')[5];

    const [isLiked, setIsLiked] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [personFields, setPersonFields ] = React.useState<IDescriptionProps>(props); 
    const { name, email, website, phone } = personFields;

    const HeartComponent = isLiked? HeartFilled : HeartOutlined;

    const onHeartClick = () => {
        setIsLiked(!isLiked);
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const updatePersonInfo = (fields:IPerson) => {
        setPersonFields(fields);
    }

    const editFormProps = {
        id,
        name,
        email,website,
        phone,
        isModalOpen,
        closeModal,
        updatePersonInfo
    }

    return (
        <div className="card-container" key={id}>
            <Card
                style={{ userSelect: "none", border: "1px solid #e8e8e8" }}
                className='card'
                cover={
                    <div style={{backgroundColor:gray,justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <img
                            alt="example"
                            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                            className='image'
                        />
                    </div>
                }
                actions={[
                    <HeartComponent onClick={onHeartClick} style={{fontSize:"20px", color: red, height:"25.5px"}} key="heart" />,
                    <EditOutlined onClick={showModal} style={{fontSize:"18px",height:"24px"}} key="edit" />,
                    <DeleteFilled onClick={onDeleteClick} style={{fontSize:"18px",height:"24px"}} key="delete" />,
                ]}
            >
                <Description {...{email,website,phone,name}}/>
            </Card>
            <EditForm {...editFormProps}/>
        </div>
    );
};

export default PersonCard;