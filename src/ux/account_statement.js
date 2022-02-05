import React from 'react';
import { Card, DatePicker, Space,Button, Input,Table} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Search } = Input;
const onSearch = value => console.log(value);
function onChange(date, dateString) {
  console.log(date, dateString);
}


const columns =[

    {
      title: 'Payment Date',
      dataIndex: 'paymentDate',
      key: 'paymentDate',
      
    },
    
    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNumber',
      key: 'invoiceNumber',
    },
    {
        title: 'No. Of ORder',
        dataIndex: 'noOfOrder',
        key: 'noOfOrder',
      },
    {
      title: 'Collected',
      dataIndex: 'collected',
      key: 'collected',
    },
    {
      title: 'Delivery Charge',
      dataIndex: 'deliveryCharge',
      key: 'deliveryCharge',
    },
    {
      title: 'COD Charge',
      dataIndex: 'codCharge',
      key: 'codCharge',
    },
    {
      title: 'Total Charged',
      dataIndex: 'totalCharged',
      key: 'totalCharged',
    },
    {
      title :  'Payable',
      dataIndex:'payable',
      key:'payable',
  
    },
    {
        title :  'Print',
        dataIndex:'print',
        key:'print',
    
      },
      {
        title :  'Download',
        dataIndex:'download',
        key:'download',
    
      },
  
  ];
  const dataSource = [
    {
      key: '1',
      paymentDate: '2020-11-30',
      invoiceNumber:  '30-11-2020-M-1-1298-18',
      noOfOrder: 2,
      collected: 0,
      deliveryCharge: 120,
      codCharge :7,
      totalCharged: 120 ,
     payable: 120,
      print: <Button type="primary" icon={<DownloadOutlined />}  style={{ background: "#95de64", borderColor: "#389e0d" }}>Invoice</Button>,
      download : <Button  type="primary"  icon={<DownloadOutlined />} style={{ background: "#95de64", borderColor: "#389e0d" }}>Excel</Button>,
  
 
      
    },
    {
        key: '1',
        paymentDate: '2020-11-30',
        invoiceNumber:  '30-11-2020-M-1-1298-18',
        noOfOrder: 2,
        collected: 0,
        deliveryCharge: 120,
        codCharge :7,
        totalCharged: 120 ,
       payable: 120,
        print: <Button type="primary" icon={<DownloadOutlined />}  style={{ background: "#95de64", borderColor: "#389e0d" }}>Invoice</Button>,
        download : <Button  type="primary"  icon={<DownloadOutlined />} style={{ background: "#95de64", borderColor: "#389e0d" }}>Excel</Button>,
    
   
        
      },
      {
        key: '1',
        paymentDate: '2020-11-30',
        invoiceNumber:  '30-11-2020-M-1-1298-18',
        noOfOrder: 2,
        collected: 0,
        deliveryCharge: 120,
        codCharge :7,
        totalCharged: 120 ,
       payable: 120,
        print: <Button type="primary" icon={<DownloadOutlined />}  style={{ background: "#95de64", borderColor: "#389e0d" }}>Invoice</Button>,
        download : <Button  type="primary"  icon={<DownloadOutlined />} style={{ background: "#95de64", borderColor: "#389e0d" }}>Excel</Button>,
    
   
        
      },
  ];

const account_statement = () => (
    <div>
     <Card>
     


<div align ="left">
<Space direction="vertical" size={12}><DatePicker  placeholder="Start Date" onChange={onChange} /></Space>  &nbsp;&nbsp;&nbsp;
<Space direction="vertical" size={12}><DatePicker  placeholder="End Date" onChange={onChange} /></Space>  &nbsp;&nbsp;&nbsp;
<Button  type="primary" style={{ background: "#95de64", borderColor: "#389e0d" }}>Show Payment History</Button> &nbsp;&nbsp;&nbsp;
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;

 {/*I had to do it for the space between buttons */}









<div align="right">
 
<Button type="primary"  
style={{ background: "#95de64", borderColor: "#389e0d" }}>Download Excel</Button></div> 

<div align="left">
<Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> </div>

<br/> 




  <Table dataSource={dataSource} columns={columns} />;

  
  </Card></div>
);

export default account_statement;