/*
 * @Author: KeMull
 * @Date: 2021-01-22 18:01:42
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-23 11:38:46
 */
import React from 'react';
import { useLocation, IRouteComponentProps } from 'umi';
import BlankLayout from './BlankLayout';
const Layout: React.FC = ({ children }) => <>{children}</>;
const index = (props: IRouteComponentProps) => {
  const location = useLocation();
  const { pathname } = location;

  const reg = RegExp(/\/user/g);
  if (pathname.match(reg)) {
    console.log(
      '%c 🍹 pathname: ',
      'font-size:20px;background-color: #7F2B82;color:#fff;',
      pathname,
    );
    return <Layout>{props.children}</Layout>;
  } else {
    console.log(
      '%c 🍹 pathname: ',
      'font-size:20px;background-color: #7F2B82;color:#fff;',
      pathname,
    );
    return <Layout>{props.children}</Layout>;
  }
};

export default index;
