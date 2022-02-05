import { Form, Input, Button, Checkbox, Select } from 'antd';
import React from 'react';
const { TextArea } = Input;

const TicketForm = () => {
    
  
    
  
    return (
        
      <Form
        name="basic"
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        
      >
        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: 'This field is mandatory',
              
            },
          ]}
        >
          <TextArea   placeholder="Input Message" rows={4} />
        </Form.Item>
  
        <Form.Item
          label="Ticket Type"
          name="ticket_type"
          rules={[
            {
              required: true,
              message: 'This field is mandatory',
            },
          ]}
          
        >
        
            

<Select  placeholder="Ticket Type" >
          <Select.Option value="billing">Billing</Select.Option>
          <Select.Option value="complain">Complain</Select.Option>
          <Select.Option value="general query">General Query</Select.Option>
          <Select.Option value="others">Others</Select.Option>
        
            
          </Select>
        
         
        </Form.Item>
  
        
        
  
        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 16,
          }}
        >
          <Button   type="primary" style={{ background: "#95de64", borderColor: "#389e0d" }} htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
     
      </Form>
     
    );
  };

  

  export default TicketForm ;