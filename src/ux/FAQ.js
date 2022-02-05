
import React from 'react';
import { Typography ,Button , Collapse} from 'antd';


const { Title } = Typography;
const { Panel } = Collapse;



function FAQ() {
  return(
    <div classname="main">
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          
        </div>
        <Collapse >
          <Panel header="How to setup the theme?" key="1">
            <p>Ans </p>
          </Panel>
          <Panel header="Can I change plan or cancel at any time?" key="2">
            <p> ans</p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>yes</p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>yes</p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>yes</p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>yes</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>

          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>  
    </div>
  );
}

export default FAQ;