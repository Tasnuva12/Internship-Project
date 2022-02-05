import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { CardHeader } from '@material-ui/core';
import { PageHeader, Steps,Typography   } from 'antd';
import DateTime from './component/DateTime';
import {HomeOutlined} from '@ant-design/icons';

const { Step } = Steps;
const { Title } = Typography;








const OrderTrack =()=>{
 
    
    return(
      <>
      <Card  style={{ width: '25rem' }}>
        <CardContent>
     <Title  level={2}> Track Order</Title>

  <div>
      <DateTime>

      </DateTime>
      <Steps direction="vertical" current={0}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
  
  </div> 
  <Card style={{ width: '22rem' }}>
  
    <CardContent> 

    
    </CardContent>
  </Card>
  
    </CardContent> 

  </Card>


      </>
    );
  
    };



export default     OrderTrack;
  
  