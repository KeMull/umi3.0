/*
 * @Author: hexinyu
 * @Date: 2020-11-10 21:28:12
 * @LastEditors: hexinyu
 * @LastEditTime: 2020-11-26 16:33:23
 */
import request from '@/utils/request';
import { liveschoolListProps } from './data.d';
// 学校直播-列表
export async function getLiveschoolList(params: liveschoolListProps) {
  return request('/college/v2/liveschool/list', {
    method: 'GET',
    params,
  });
}


// 学校直播-删除直播-检查
export async function getBroadcasDeleteCheck(params: { super_id: number }) {
  return request('/college/v2/liveschool/delete_check', {
    method: 'GET',
    params,
  });
}
// 学校直播-删除直播
export async function getBroadcastDelete(params: { super_id: number }) {
  return request('/college/v2/liveschool/delete', {
    method: 'POST',
    data: params,
  });
}
// 学校直播-删除回放-检查
export async function getPlaybackDeleteCheck(params: { super_id: number }) {
  return request('/college/v2/liveschool/delete_playback_check', {
    method: 'GET',
    params,
  });
}
// 学校直播-删除回放
export async function getPlaybackDelete(params: { super_id: number }) {
  return request('/college/v2/liveschool/delete_playback', {
    method: 'POST',
    data: params,
  });
}
// 查看回放
export async function getPlaybackUrl(params: { super_id: number }) {
  return request('/college/v2/live/playback_url', {
    method: 'GET',
    params,
  });
}
// 学校直播-获取上课链接
export async function getLiveUrl(params: { super_id: number }) {
  return request('/college/v2/live/live_url', {
    method: 'GET',
    params,
  });
}
