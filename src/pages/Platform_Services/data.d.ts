/*
 * @Author: hexinyu
 * @Date: 2020-11-10 21:07:00
 * @LastEditors: 龙露
 * @LastEditTime: 2020-11-23 11:08:17
 */
export interface TableDataPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableData {
  list: TableItemProps[];
  pagination: Partial<TableDataPagination>;
}

export interface TableItemProps extends liveschool {
  super_id: number;
  room_id: number;
  author_name: string;
}
export interface liveschool {
  live_title: string;
  live_start_at: string;
  live_end_at: string;
  live_status: number;
  play_back_status: number;
  play_back_name: string;
}
// list请求参数
export interface liveschoolListProps {
  currentPage: number;
  pageSize: number;
  live_title?: string;
  live_start_at?: string;
  live_end_at?: string;
  live_status?: string;
  play_back_status?: string;
}

// Table表格渲染数据

// 删除直播回放还有被引用的数据
export interface publicListProps {
  list: publicList[];
  pagination: Partial<TableDataPagination>;
}
export interface publicList {
  org_plan_id: number;
  org_plan_name: number;
  nickname: string;
}

export interface liveschoolCreate {
  live_title: string;
  cover_url: string;
  author_id: number;
  live_time: Array<string>;
  overtime_close: number;
  overtime_close_time: number;
  earlier_time: number;
  most_student: number;
  live_content: string;
}
export interface liveschoolEdit extends liveschoolCreate {
  super_id: number;
}
