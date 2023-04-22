import React from 'react';
import { Card } from 'antd';
import './PersonCard.css';
import { DeleteFilled, EditOutlined, HeartOutlined,HeartFilled } from '@ant-design/icons';
import Description from './Description';
import { generate } from '@ant-design/colors';

export interface IPersonCardProps {
    id: number;
    name: string; 
    email: string; 
    website: string; 
    phone: string; 
}

const PersonCard = (props:IPersonCardProps) => {
    const {  id,  name, email, website, phone } = props;
    const gray = generate('#f5f5f5')[5];
    const red = generate('#ff0000')[5];
    const [isLiked, setIsLiked] = React.useState(false);
    const HeartComponent = isLiked? HeartFilled : HeartOutlined;
    const onHeartClick = () => {
        setIsLiked(!isLiked);
    }
    return (
        <div key={id}>
            <Card
                style={{ width: 420 }}
                className='card'
                cover={
                    <div style={{backgroundColor:gray,justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <img
                            alt="example"
                            src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
                            className='image'
                        />
                    </div>
                }
                actions={[
                    <HeartComponent onClick={()=>setIsLiked(!isLiked)} style={{fontSize:"20px", color: red}} key="heart" />,
                    <EditOutlined style={{fontSize:"20px"}} key="edit" />,
                    <DeleteFilled style={{fontSize:"20px"}} key="delete" />,
                ]}
            >
                <Description {...{email,website,phone,name}}/>
            </Card>
        </div>
    );
};

export default PersonCard;