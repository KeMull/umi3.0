/*
 * @Author: KeMull
 * @Date: 2021-01-23 08:52:51
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-23 12:32:19
 */
export interface listItemProps {
  id: number | undefined;
  name: string;
  age: number;
}
export interface publicListProps {
  id: number | undefined;
  name: string;
  age: number;
  state: number;
}
// type listItemType = Omit<listItemProps, 'id'>;
// type listItem = Exclude<listItemProps, 'name' | 'asbjda' | 'dasd'>;
// interface Dictionary<T> {
//   [index: string]: T;
// }
type AB = 'b' | '2';
type BC = 'b' | 'c' | 'd';
type Demo = Exclude<AB, BC>;
