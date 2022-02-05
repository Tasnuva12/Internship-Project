import React,{ useState } from 'react';
import Box from '@material-ui/core/Box';
import { Form, Input,  Select,Card,Popover,Layout,Typography,Button} from 'antd';
import PricingTable from './component/PricingTable'


const { Header, Footer, Sider, Content } = Layout;

const { Title,Text } = Typography;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);





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

const Pricing = () => {
  
  
  return (
    <>
    <Box  color="white" bgcolor="#d9d9d9" p={1}>
    <div>
    <div className="btn_div">
    <Title  level={2}> Calculate your cost </Title>
    <Popover content={content} title="Terms and Conditions">
  <a href="">Terms and Conditions</a>
  </Popover>
  <br /><br/>
  
  </div>
   
    
    <Form 
     {...layout}
     name="basic"> 
     
    
   
  
  
      
    

    
    <Form.Item label="Height(CM)" className="align-left">
        <Input placeholder="" />
    </Form.Item>
    
    <Form.Item label="Width(CM)" className="align-left">
        <Input placeholder="" />
    </Form.Item>

    <Form.Item label="Depth(CM)" className="align-left">
        <Input placeholder="" />
    </Form.Item>

    <Form.Item label="Weight(kg)" className="align-left">
        <Input placeholder="" />
    </Form.Item>
    <Form.Item label="Location" className="align-left"> 
    <Input.Group compact>
      <Input style={{width: '50%' }} defaultValue="" placeholder="FROM" />
      <Input style={{ width: '50%' }} defaultValue=""  placeholder="TO" />
    </Input.Group>
    </Form.Item>
    <Form.Item label ="Parcel">
          <Select>
          <Select.Option value="standard">Standard</Select.Option>
          <Select.Option value="express">Express</Select.Option>
          <Select.Option value="door to door">Door to Door</Select.Option>
          <Select.Option value="pallet">Pallet</Select.Option>
          <Select.Option value="international">International</Select.Option>
            
          </Select>

        
    </Form.Item >
    <Form.Item label="Packaging Material">  <Text>*Packaging Service  BDT 35 per order*</Text> <PricingTable></PricingTable><br/>
   

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
    


    

 
    

</Form><br /><br/>


    </div>
    </Box>
    </>
   

  );

 
  
};

export default Pricing ;