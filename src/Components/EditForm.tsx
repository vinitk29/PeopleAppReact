import React from 'react';
import './EditForm.css';
import { Button, Form, Input, Modal } from 'antd';
import { IPersonCardProps } from './PersonCard';

export interface IEditFormProps {
    email: string; 
    website: string; 
    phone: string; 
    name: string;
    id: number;
    isModalOpen: boolean;
    closeModal: () => void;
    updatePersonInfo: (fields:IPersonCardProps) => void;
}

const EditForm = (props:IEditFormProps) => {
    const {  email,  website, phone, name, isModalOpen, closeModal, updatePersonInfo } = props;
    
    const [form] = Form.useForm();
    const onFinish = (values: IPersonCardProps) => {
       closeModal();
       updatePersonInfo(values);
    };
      
    const onFinishFailed = (errorInfo: any) => {
       console.log("Failed:", errorInfo);
    };
    
    const handleOk = () => {
        form.submit();
    };
    
    const handleCancel = () => {
        closeModal();
    };

    return (
        
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600}} 
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{ email,  website, phone, name }}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Website"
                    name="website"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                
            </Form>
        </Modal>
    );
};

export default EditForm;