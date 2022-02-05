import React from 'react';
import {Card, Form, Input,  Select, Button ,Typography,Checkbox} from 'antd';
const { Option } = Select;
const { Title,Text } = Typography;
const style1= { background: '#002329'}
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  

const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset:14,
      span: 4,
      
    },
  };




const merchant_register = () => {
    return(
        

        <>   
        <Title  level={2}> Register as Merchant</Title>
        <Form  className="mb-3" controlId="exampleForm.ControlInput1"
     {...layout}
     name="basic"> 


<Form.Item label="Business Name" column sm="2">
        <Input placeholder="" />
    </Form.Item>
    <Form.Item label="Merchant Name">
        <Input placeholder="" />
    </Form.Item>    
    <Form.Item label="Contact Number">
        <Input placeholder="" />
    </Form.Item>
    <Form.Item label="Email" column sm="2">
        <Input placeholder="" />
    </Form.Item>

    <Form.Item label="Address">
        <Input placeholder="" />
    </Form.Item>
    <Form.Item label="District">
    <Select   allowClear>
                      <Option value="dhaka">Dhaka</Option>
                      <Option value="chittagong">Chittagong</Option>
                      
                  </Select>
    </Form.Item>
    <Form.Item label="Thana">
    <Select   allowClear>
                      <Option value="A">A</Option>
                      <Option value="B">B</Option>
                      
                  </Select>
    </Form.Item>
    <Form.Item label="Business Type">
    <Select allowClear>
                      <Option value="facebookshop">Facebook Shop</Option>
                      <Option value="marketplace">Marketplace</Option>
                      
                  </Select>
    </Form.Item>
    <Form.Item label="Product Nature">
    <Select allowClear>
                      <Option value="a">A</Option>
                      <Option value="b">B</Option>
                      
                  </Select>
    </Form.Item>
    <Form.Item label="Website">
        <Input placeholder="" />
    </Form.Item>
    <Form.Item label="Facebook Page ">
        <Input placeholder="" />
    </Form.Item>
    <Form.Item label="Company Phone">
        <Input placeholder="" />
    </Form.Item>
    
    
    
    <Form.Item label="Designation">
        <Input placeholder="" />
    </Form.Item>
    <Form.Item label="Payment Method">
    <Select   allowClear>
                      <Option value="bkash">bKash</Option>
                      <Option value="nagad">Nagad</Option>
                      <Option value="bankTransfer">Bank Transfer</Option>  
                      <Option value="rocket">Rocket</Option>  

                  </Select>
    </Form.Item>
 
    <Checkbox onChange={onChange}>I agree to the  <Text underline> Terms & Conditions</Text></Checkbox>

     </Form>     <br/><br/>   

    
          <Button   type="primary" style={{ background: "#95de64", borderColor: "#389e0d" }} htmlType="submit" >
            Submit
          </Button>
        
  

   
    </>
    );


    
};

export default merchant_register;