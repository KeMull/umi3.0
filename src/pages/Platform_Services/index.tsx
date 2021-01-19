import React, { useEffect } from 'react';
import styles from './index.less';
import { getLiveschoolList } from './service';
export default () => {
  useEffect(() => {
    getLiveschoolList({
      currentPage: 1,
      pageSize: 10,
    });
    return () => {};
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page Platform_Services/index</h1>
    </div>
  );
};
