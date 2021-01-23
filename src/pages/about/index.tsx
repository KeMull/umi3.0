/*
 * @Author: KeMull
 * @Date: 2021-01-20 09:53:01
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-23 11:32:13
 */
import React, { Component } from 'react';

function Descriptor(constructor: any) {
  console.log(constructor);
}
// @Descriptor
class index extends Component {
  render() {
    return <div>about</div>;
  }
}
export default index;
