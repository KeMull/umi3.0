/*
 * @Author: KeMull
 * @Date: 2021-01-20 09:53:01
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-25 17:22:57
 */
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './index.less';
import { Popconfirm, Typography, Button } from 'antd';
import { getLiveschoolList } from './service';
import { ColumnsType } from 'antd/lib/table';

import EidtFormTable, {
  Record,
  RefProps,
  columnsProps,
} from '@/components/EidtFormTable';

export default () => {
  const [editingKey, setEditingKey] = useState('');
  const EitdFormRef: RefProps = useRef(null);
  useEffect(() => {
    getLiveschoolList({
      currentPage: 1,
      pageSize: 10,
    });
    return () => {};
  }, []);

  const columns: columnsProps[] = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Record) => {
        const editable = EitdFormRef.current?.isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => EitdFormRef.current?.save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </a>
            <Popconfirm
              title="Sure to cancel?"
              onConfirm={EitdFormRef.current?.cancel}
            >
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={!EitdFormRef.current?.isEditingKey}
            onClick={() => EitdFormRef.current?.edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const handleClick = () => {
    console.log(1);
    console.log(
      '%c 🥤 EitdFormRef: ',
      'font-size:20px;background-color: #33A5FF;color:#fff;',
      EitdFormRef.current.edit,
    );
  };
  return (
    <div>
      <h1 className={styles.title}>Page Platform_Services/index</h1>
      <EidtFormTable columns={columns} ref={EitdFormRef} />
      <Button onClick={handleClick}>11111</Button>
    </div>
  );
};
