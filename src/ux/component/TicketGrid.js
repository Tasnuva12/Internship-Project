import React from 'react';
import { Row, Col,Typography} from 'antd';


const style1= { background: '#73d13d', padding: '8px 0' };
const style2=  { background: '#fa8c16', padding: '8px 0' };
const { Title } = Typography;




const TicketGrid=()=>{
    return(
        <>
        <Row gutter={[16, 24]}>

<Col className="gutter-row" span={6}>

  <div style={style1}>5<br/>Total Ticket</div>
</Col>
<Col className="gutter-row" span={6}>
  <div style={style1}>5<br/>Total Open</div>
</Col>
<Col className="gutter-row" span={6}>
  <div style={style1}>5<br/>Total Pending</div>
</Col>
<Col className="gutter-row" span={6}>
  <div style={style1}>5<br/>Total Resolved</div>
</Col>
<Col className="gutter-row" span={6}>
  <div style={style2}>5<br/>Billing</div>
</Col>
<Col className="gutter-row" span={6}>
  <div style={style2}>5<br/>Complain</div>
</Col>
<Col className="gutter-row" span={6}>
  <div style={style2}>5<br/>General Query</div>
</Col>
<Col className="gutter-row" span={6}>
  <div style={style2}>5<br/>Others</div>
</Col>
</Row>


        </>

    );
};

export  default TicketGrid;