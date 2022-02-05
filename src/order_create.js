import { Form, Input,Upload, message, Button, Select,Radio } from 'antd';
import {EditOutlined ,UploadOutlined } from '@ant-design/icons';
import Grid from '@material-ui/core/Grid'
import { DatePicker } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
{/* for uploading file of image  */}
const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };


{/* for date picker  */}
function onChange(date, dateString) {
  console.log(date, dateString);
}


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const order_create=()=>
{
    return (
        <>
        <Form  className="mb-3" controlId="exampleForm.ControlInput1"
     {...layout}
     name="basic"> 
     <Grid container>
     <Grid item xs={6}> 
      <Form.Item name="pickAddress"  label="Pick Address" rules={[{required: true,},]}>     
                  <Select placeholder="Pick Address"  allowClear>
                      <Option value="dhanmondi">Dhanmondi</Option>
                      <Option value="banani">Banani</Option>
                      <Option value="mirpur">Mirpur</Option>  
                  </Select>
      </Form.Item>
      <Form.Item name="recipientNumber"label="Recipient  number" rules={[ {required: true, },  ]}>   
       <Input placeholder="Input Recipient Number"  prefix={<EditOutlined />}/>
      </Form.Item>
      <Form.Item name="recipientName" label="Recipient  name" rules={[{required: true,   }, ]} >
        <Input placeholder="Input Recipient Name" prefix={<EditOutlined />}/>         
      </Form.Item>
      <Form.Item name="alternativeNumber" label="Alternative mobile  number"><Input placeholder="Input Alternative Number" prefix={<EditOutlined />}/>   
      </Form.Item>

      <Form.Item name="recipientDistrict" label="Recipient  District" rules={[{ required: true, },]}>
                     
                      
                  <Select placeholder="Recipient District" allowClear>
                   <Option value="dhanmondi">Dhaka</Option>
                   <Option value="banani">Chittagong</Option>
                   <Option value="mirpur">Sylhet</Option>
                  </Select>   
      </Form.Item>   
                        

      <Form.Item name="recipientArea" label="Recipient  Area" rules={[{required: true,}, ]}>
                    <Select placeholder="Recipient Area" allowClear>
                        <Option value="dhanmondi">A</Option>
                        <Option value="banani">B</Option>
                        <Option value="mirpur">C</Option>

                     </Select>


      </Form.Item>
      <Form.Item name="recipientThana" label="Recipient  Thana" rules={[{ required: true,},]}>

                <Select placeholder="Recipient Thana" allowClear>
                        <Option value="dhanmondi">A</Option>
                        <Option value="banani">B</Option>
                        <Option value="mirpur">C</Option>

                     </Select>
      </Form.Item>
      <Form.Item name="recipientPostcode"  label="Recipient  Postcode"  rules={[{required: true, }, ]}>
                <Input placeholder="Input Recipient Postcode"  prefix={<EditOutlined />}/>
                
      </Form.Item>
      <Form.Item name="recipientAddress" label="Recipient  Address"  rules={[{required: true,},]}>
                <Input placeholder="Input Recipient Address"  prefix={<EditOutlined />}/>
      </Form.Item>
      <Form.Item name="deliveryWay" label="Delivery Way">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                     <Radio value={1}>Home Delivery</Radio>
                     <Radio value={2}>Pickup Point</Radio></Radio.Group>
      </Form.Item>    


      <Form.Item name="sendingType" label="Sending Type" rules={[{required: true,},]}>     
                  <Radio.Group name="radiogroup" defaultValue={1}>
                     <Radio value={1}>General</Radio>
                     <Radio value={2}>Exchange</Radio></Radio.Group>
      </Form.Item>       
      <Form.Item name="parcelType"label="Parcel Type"rules={[{required: true,},]}>     
                  <Radio.Group name="radiogroup" defaultValue={1}>
                     <Radio value={1}>Parcel</Radio>
                     <Radio value={2}>Document</Radio></Radio.Group>
      </Form.Item>   </Grid>
      <Grid item xs={6}>
      <Form.Item name="DeliveryType" label="Delivery Type" rules={[{required: true,},]} > 

                     <Select placeholder="Pick Delivery Type"  allowClear>
                      <Option value="standard">Standard(24-48 hrs)</Option>
                      <Option value="a">A</Option></Select>
      </Form.Item>     

      <Form.Item name="Paymentmethod" label="Payment Method"  rules={[{required: true,},]} > 

            <Select placeholder="Pick Payment Method"  allowClear>
                  <Option value="bkash">Bkash</Option><Option value="a">A</Option>
                     
            </Select>
      </Form.Item>    
      <Form.Item name="package"label="Package"rules={[{required: true,},]}> 

            <Select placeholder="Package"  allowClear><Option value="bkash">Bkash</Option><Option value="a">A</Option></Select>
      </Form.Item>     
      <Form.Item name="shippingPrice" label="Shipping Price" rules={[{required: true,},]}>    
            <Input placeholder="Input Shipping Price"  prefix={<EditOutlined />}/>
      </Form.Item> 
      <Form.Item name="invoiceNo" label="Invoice No">    
            <Input placeholder="Input Envoice No"  prefix={<EditOutlined />}/>
      </Form.Item>     
      <Form.Item name="productPrice" label="Product Price" rules={[{required: true,},]}>    
            <Input placeholder="Input Product  Price"  prefix={<EditOutlined />}/>
      </Form.Item>  
      <Form.Item name="actualproductPrice" label="Actual Product Price" rules={[{required: true,},]}>    
            <Input placeholder="Input Actual Product Price"  prefix={<EditOutlined />}/>
      </Form.Item>  
      <Form.Item name="deliveryDate" label="Delivery Date"><DatePicker   onChange={onChange} /></Form.Item>  

      <Form.Item name="numberofitems" label="Number of Items" rules={[{required: true,},]}>    
            <Input placeholder="Input Number of Items"  prefix={<EditOutlined />}/>
      </Form.Item>  

      <Form.Item name="itemType" label="Item Type" rules={[{required: true,},]}
                >    
                 <Input placeholder="Item Type"  prefix={<EditOutlined />}/>
                 </Form.Item>  
                 <Form.Item 
                  name="instructions"
                  label="instructions"
                  rules={[{required: true,},]}>
                 <TextArea   placeholder="Instructions" rows={4} /> </Form.Item>

                 <Form.Item 
                  name="uploadImage"
                  label="Upload Image (Optional)"
                  >
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                              </Upload>,
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
        </Form.Item> </Grid></Grid> </Form>
        
                

        </>

    );

};
 export default order_create