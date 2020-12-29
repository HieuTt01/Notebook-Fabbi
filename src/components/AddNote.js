import React from 'react';
import { Form, Modal, Button, Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import './AddForm.css'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

function AddNote(props) {

    const {openModal, closeModal, isModalVisible } = props
    const showModal = () => {
        openModal();
    };

    const handleOk = () => {
        closeModal();
    };

    const handleCancel = () => {
        closeModal();
    };


    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    

    return (
        <>
            <Button className="title-button" icon={<FormOutlined />} onClick={showModal}>
            </Button>
            <Modal title="Add A Note" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Category name"
                        name="name"
                        rules={[{ required: true, message: 'Please input name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Content"
                        name="content"
                        rules={[{ required: true, message: 'Please input content!' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default AddNote;