/*
 * @Author: hexinyu
 * @Date: 2020-12-21 09:51:38
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-25 16:29:52
 */

import React from 'react';
import 'antd/dist/antd.css';
import { Input, InputNumber, Form } from 'antd';
import { Consumer } from '../index';
import { FormProps } from 'antd/lib/form';
import { Record } from '../index';
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Record;
  index: number;
  children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
export default EditableCell;
