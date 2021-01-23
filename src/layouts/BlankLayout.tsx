/*
 * @Author: KeMull
 * @Date: 2021-01-20 09:53:01
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-23 11:27:19
 */
import React from 'react';
// import brow_less from '@/assets/images/brow_less.png';
/**判断是否是低版本浏览器 */
const isHightVersion = () => {
  // 取得浏览器的userAgent字符串
  const userAgent = navigator.userAgent;
  // 判断是否为小于IE11的浏览器
  const isLessIE11 =
    userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 判断是否为IE的Edge浏览器
  const isEdge = userAgent.indexOf('Edge') > -1 && !isLessIE11;
  // 判断是否为IE11浏览器
  const isIE11 =
    userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (
    isLessIE11 ||
    (isEdge && parseInt(userAgent.split('Edge/')[1].split('.')[0]) < 18)
  ) {
    return false;
  } else {
    return true;
  }
};
let Layout: React.FC;
if (!isHightVersion()) {
  Layout = (props, { children }) => {
    console.log(
      '%c 🍿 props: ',
      'font-size:20px;background-color: #F5CE50;color:#fff;',
      props,
    );
    return (
      <>
        <div className="error_brow">
          {/* <img src={brow_less} /> */}
          <div className="error_text">
            抱歉，当前浏览器版本过低~无法正常访问
          </div>
          <div className="error_proposal">
            请使用浏览器自带的极速模式，或尝试其他浏览器，推荐使用Chrome浏览器
          </div>
        </div>
      </>
    );
  };
} else {
  Layout = ({ children }) => <>{children}</>;
}

export default Layout;
