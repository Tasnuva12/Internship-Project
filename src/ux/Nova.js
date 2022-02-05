import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const Nova = () => (
    <div>
        <h3>This is Nova's demo page</h3>
        <div>
            <Space direction="vertical" size={12}>
                <RangePicker />
            </Space>
        </div>
    </div>
);

export default Nova;