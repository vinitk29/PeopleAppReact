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

    const onKeyPressHandle = (event: React.KeyboardEvent<{}>,fun: () => void) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            fun();
        }
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
                    <div 
                        className='button-container' 
                        role='button'
                        tabIndex={0} 
                        onClick={onHeartClick}
                        onKeyDown={(event)=>onKeyPressHandle(event,onHeartClick)}
                    >
                        <HeartComponent style={{fontSize:"20px", color: red, height:"25.5px"}} key="heart" />
                    </div>,
                    <div 
                        className='button-container' 
                        role='button' 
                        tabIndex={0} 
                        onClick={showModal} 
                        onKeyDown={(event)=>onKeyPressHandle(event,showModal)}
                    >
                        <EditOutlined style={{fontSize:"18px",height:"24px"}} key="edit" />
                    </div>,
                    <div 
                        className='button-container' 
                        role='button' 
                        tabIndex={0} 
                        onClick={onDeleteClick} 
                        onKeyDown={(event)=>onKeyPressHandle(event,onDeleteClick)}
                    >
                        <DeleteFilled style={{fontSize:"18px",height:"24px"}} key="delete" />
                    </div>,
                ]}
            >
                <Description {...{email,website,phone,name}}/>
            </Card>
            <EditForm {...editFormProps}/>
        </div>
    );
};

export default PersonCard;