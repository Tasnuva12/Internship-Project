import React from 'react';

import { Typography ,Divider, DatePicker, Select,Button,Space} from 'antd';


const { RangePicker } = DatePicker;
const { Option } = Select;

const { Title } = Typography;
const orderHistory = () => (
    <div >
        

        <Title  level={2}> Order History</Title>
        <Divider></Divider>
        <Space direction="horizontal"><RangePicker />
        <Select placeholder ="Select Status"  style={{ width: 150 }} >
      <Option value="all">All</Option>
      <Option value="a">A</Option>
      
       </Select>
       <Button type="primary"  style={{ background: "#95de64", borderColor: "#389e0d" }}>Search</Button>
       <Button type="primary"  style={{ background: "#95de64", borderColor: "#389e0d"}}>Download Excel</Button> &nbsp;&nbsp;&nbsp;
       <Button type="primary"  style={{ background: "#95de64", borderColor: "#389e0d" }}>Bult Print</Button>  &nbsp;&nbsp;&nbsp;
       <Button  style={{  borderColor: "#389e0d" }}>Advance Tracker</Button></Space>





       

      
    </div>
);

export default orderHistory;