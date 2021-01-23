/*
 * @Author: KeMull
 * @Date: 2021-01-20 09:53:01
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-23 11:20:37
 */
import React from 'react';
import styles from './index.less';
import { listItemProps, Dictionary } from './data.d';

let isAProps = (props: any): props is listItemProps =>
  typeof (props as listItemProps)['id'] !== 'undefined';
const datasss: Dictionary<number> = {
  id: 1,
  name: 1,
  age: 1,
};
const index = () => {
  console.log(isAProps({ id: 'ssss' }));
  console.log(
    '%c 🌭 data: ',
    'font-size:20px;background-color: #ED9EC7;color:#fff;',
    datasss,
  );
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
export default index;
