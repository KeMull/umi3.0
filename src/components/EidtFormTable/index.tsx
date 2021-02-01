import React, {
  useState,
  createContext,
  useEffect,
  useImperativeHandle,
  forwardRef,
  ReactNode,
} from 'react';
import 'antd/dist/antd.css';
import { Table, Popconfirm, Form, Typography } from 'antd';
import EditableCell from './components/SearchForm';
import { ColumnsType } from 'antd/lib/table';
import RadioDome from './components/RadioDome';
const PersonContext = createContext(Form);
const { Consumer, Provider } = PersonContext;
export { Consumer, Provider, PersonContext };
const datas: any = [];
for (let i = 0; i < 100; i++) {
  datas.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export interface columnsProps {
  title?: string;
  dataIndex?: string;
  width?: string | number;
  editable?: true;
  render?: (_: any, record: Record) => ReactNode;
}
interface Iprops {
  columns?: columnsProps[];
}
interface currentProps {
  isEditing: () => boolean;
  isEditingKey: () => boolean;
  save: (key: React.Key) => void;
  edit: (record: Partial<Record> & { key: React.Key }) => void;
  cancel: () => void;
}
export interface RefProps {
  current: currentProps | any | null;
}
export interface Record {
  key: string;
  name: string;
  age: number;
  address: string;
}
const EditableTable = (props: Iprops, ref: RefProps) => {
  useImperativeHandle(ref, () => ({
    isEditing: (record: Record) => record.key === editingKey,
    edit: (record: Partial<Record> & { key: React.Key }) => {
      form.setFieldsValue({ name: '', age: '', address: '', ...record });
      console.log(
        '%c 🍏 record: ',
        'font-size:20px;background-color: #2EAFB0;color:#fff;',
        record,
      );
      setEditingKey(record.key);
    },
    cancel: () => {
      setEditingKey('');
    },
    isEditingKey: () => editingKey !== '',
    save: async (key: React.Key) => {
      try {
        const row = (await form.validateFields()) as Record;

        const newData = [...data];
        const index = newData.findIndex(item => key === item.key);
        if (index > -1) {
          const item = newData[index];

          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          console.log(
            '%c 🥥 row: ',
            'font-size:20px;background-color: #33A5FF;color:#fff;',
            row,
          );
          setData(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    },
  }));
  const { columns } = props;
  const [form] = Form.useForm();
  const [data, setData] = useState(datas);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Record) => record.key === editingKey;

  const edit = (record: Partial<Record> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  // const columns = [
  //   {
  //     title: 'name',
  //     dataIndex: 'name',
  //     width: '25%',
  //     editable: true,
  //   },
  //   {
  //     title: 'age',
  //     dataIndex: 'age',
  //     width: '15%',
  //     editable: true,
  //   },
  //   {
  //     title: 'address',
  //     dataIndex: 'address',
  //     width: '40%',
  //     editable: true,
  //   },
  //   {
  //     title: 'operation',
  //     dataIndex: 'operation',
  //     render: (_: any, record: Record) => {
  //       const editable = isEditing(record);
  //       return editable ? (
  //         <span>
  //           <a
  //             href="javascript:;"
  //             onClick={() => save(record.key)}
  //             style={{ marginRight: 8 }}
  //           >
  //             Save
  //           </a>
  //           <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
  //             <a>Cancel</a>
  //           </Popconfirm>
  //         </span>
  //       ) : (
  //         <Typography.Link
  //           disabled={editingKey !== ''}
  //           onClick={() => edit(record)}
  //         >
  //           Edit
  //         </Typography.Link>
  //       );
  //     },
  //   },
  // ];

  const mergedColumns =
    columns &&
    columns.map((col: columnsProps) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Record) => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });

  return (
    <Form ref={ref} form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default forwardRef(EditableTable);
