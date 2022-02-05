import React from 'react';
import {Table} from 'antd';


const columns =[

  {
    title: 'Ticket ID',
    dataIndex: 'ticketid',
    key: 'ticketid',
  },
  
  {
    title: 'Merchant',
    dataIndex: 'merchant',
    key: 'merchant',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Creation Date and Time',
    dataIndex: 'creation_date_and_time',
    key: 'creation_date_and_time',
  },
  {
    title: 'Ticket Type',
    dataIndex: 'ticket_type',
    key: 'ticket_type',
  },
  {
    title: 'Monitoring Agent',
    dataIndex: 'monitoring_agent',
    key: 'monitoring_agent',
  },
  {
    title : 'Resolved Date ',
    dataIndex:'resolved_date',
    key:'resolved_date',

  }

];

const dataSource = [
  {
    key: '1',
    ticketid: 2,
    merchant:  'John',
    status: 'open',
    creation_date_and_time : '21.1.1',
    ticket_type : 'complain' ,
    monitoring_agent: 'NA',
    resolved_date: '1.1.1',


    
  },
];

  
  

  const TicketTable=()=>{
    return(
        <>
        <Table dataSource={dataSource} columns={columns} />;
        </>

    );
    
   

  };
  export default  TicketTable; 