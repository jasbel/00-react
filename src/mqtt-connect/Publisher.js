import React, { useState } from 'react';
import { Card, Form, Input } from 'antd';
import { Button } from 'reactstrap';

const Publisher = ({ publish }) => {
  const [form] = Form.useForm();

  const record = {
    payload: '45',
    topic: 'testtopic/react',
    qos: 0,
  };

  // const [payload, setPayload] = useState('45')

  const onFinish = (values) => {

    console.log( values)

    publish(values)
  };
  const onPublish = () => {
    publish(record)
  }
  

  const PublishForm = (
    <Form
      form={form}
      initialValues={record}
      onFinish={onFinish}
    >
          <Form.Item
            name="topic"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="qos"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="payload"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button color="primary" htmlType="submit">
              Publish
            </Button>
          </Form.Item>
    </Form>
  )
 

  return (
    <>
      <Card
        title="Publisher"
      >
        {PublishForm}
        <hr/>
        {/* <Button type="primary" onClick= {onPublish}>
            Publish
        </Button> */}
      </Card>
      <hr/>
    </>
  );
}

export default Publisher;
