import React from 'react';
import { Card,Button,Divider} from 'antd';
import { createTheme } from '@material-ui/core/styles';
import TicketTable from './component/TicketTable'
import TicketGrid from './component/TicketGrid';
import TicketForm  from './component/TicketForm';
import { FilterOutlined ,PlusOutlined ,DownloadOutlined } from '@ant-design/icons';




const Ticket= () => (
<>
<div>
<Card  title ="Ticket"> 
 
 
  
  
<div class="ui raised segment">
<div className="btn_div">
<div style={{ display: "flex" }}><Button type="primary" icon={<FilterOutlined />}  style={{ background: "#95de64", borderColor: "#389e0d" , marginRight: "auto",height: 40 }}>Filter</Button><div>

<div style={{ display: "flex" }}><Button padding={10} margin={5} type="primary" 
icon={<PlusOutlined /> }  style={{ background: "#95de64", borderColor: "#389e0d"
 ,marginLeft: "auto",height: 40}}>New</Button>  &nbsp;&nbsp;&nbsp;</div>
</div>

<div style={{ display: "flex" }}><Button  type="primary"  icon={<DownloadOutlined />} style={{ background: "#ffa940", borderColor: "#fa8c16",marginLeft: "auto",height: 40 }}>Export</Button></div>
</div>
</div >
</div>
<br/> <br/> 









  


<TicketGrid></TicketGrid><br/> <br/>   


  <TicketTable></TicketTable>

    <TicketForm></TicketForm>
      
 

    </Card>





</div>
</>

);

export default Ticket;
