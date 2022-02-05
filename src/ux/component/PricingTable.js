import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
const columns = [
  {
    title: 'Packaging Type',
    dataIndex: 'packagingType',
  
  },
  {
    title: 'Length',
    dataIndex: 'length',
  },
  {
    title: 'Width',
    dataIndex: 'width',
  },
  {
    title: 'Height',
    dataIndex: 'height',
  },
  {
    title: '1 color',
    dataIndex: 'color1',
  },
  {
    title: '2 color',
    dataIndex: 'color2',
  },
  {
    title: '4 color',
    dataIndex: 'color4',
  },
  
];
const data = [
  {
    key: '1',
    packagingType: 'Cartoon Box',
     length: '14 inches',
    width: '12 inches',
    height:'6 inches',
    color1:'BDT 35.00',
    color2: 'BDT 55.00',
    color4:'BDT 59.00',

  },

  {
    key: '2',
    packagingType: 'Cartoon Box',
     length: '8 inches',
    width: '6 inches',
    height:'3.5 inches',
    color1:'BDT 23.00',
    color2: 'BDT 24.25',
    color4:'BDT 26.75',
  },
  
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const PricingTable = () => {
  const [selectionType, setSelectionType] = useState('radio');
  return (
    <>
    
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
       
        
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};
export default PricingTable;