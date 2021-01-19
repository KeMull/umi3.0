/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification, message } from 'antd';
import Env from './env';
import { history  } from 'umi';
// import Fingerprint from '@/utils/ump.js';
// const history =  useHistory()
message.config({
  top: '48%',
  duration: 2,
  maxCount: 1,
});

let _token: any = ''; // 用于判断是否更换token

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */

const request = extend({
  errorHandler, // 默认错误处理
  prefix: Env.apiUrl,
  data: '',
});

/**
 * 对于状态码实际是 200 的错误
 */
request.interceptors.response.use(async response => {
  const data = await response.clone().json();

  if (
    data.status === 4112 ||
    data.status === 4110 ||
    data.status === 10007 ||
    data.status === 10011 ||
    data.status === 10010
  ) {
    message.error(data.msg);
    setTimeout(() => {
      window.location.href = `${Env.employeeUrl}/login?type=2&url=${encodeURIComponent(
        window.location.href,
      )}`;
    }, 2000);
    return false;
  }
  // 学校被平台禁用
  if (data.status === 10006) {
    // window.location.href = 'http://localhost:8002/personcenter/common/no_limits?type=7';
    window.location.href = `${Env.employeeUrl}/personcenter/common/no_limits?type=7`;
    return false;
  }

  // 正式套餐到期
  if (data.status === 10001) {
    history.push('/platform_services_end/common_error?type=1');
    return false;
  }
  // 试用套餐到期
  if (data.status === 10009) {
    history.push('/platform_services_end/common_error?type=2');
    return false;
  }
  // 机构余额已欠费
  if (data.status === 10017) {
    history.push('/platform_services/package_renewal');
    return false;
  }
  if (data.status === 10002) {
    // 机构需要降级处理
    history.push('/account_set/abnormal_set');
    return false;
  }
  if (data.status === 10000) {
    history.push('/403?type=1');
    return false;
  }
  if (data.status === 10003) {
    history.push('/403?type=2');
    return false;
  }
  // 无权限访问
  if (data.status === 6085 || data.status === 4196) {
    message.error(data.msg);
    history.push('/home');
    return false;
  }

  if (
    data.status >= 4000 &&
    data.status <= 9999 &&
    data.status !== 4215 &&
    data.status !== 4112 &&
    data.status !== 4110 &&
    data.status !== 10007 &&
    data.status !== 4020 &&
    data.status !== 6079 &&
    data.status !== 5065 &&
    data.status !== 5080 &&
    data.status !== 10001 &&
    data.status !== 10009
  ) {
    message.error(data.msg);
  }
  return response;
});
request.interceptors.request.use(async (url: any, options: any) => {
  const token = localStorage.getItem('token');
  const orgId = localStorage.getItem('orgId');

  // if (!token) {
  //   window.location.href = `${Env.employeeUrl}/login?type=2&url=${encodeURIComponent(
  //     window.location.href,
  //   )}`;
  // } else if (_token != token && _token !== '') {
  //   window.location.reload();
  // } else {
  //   _token = token;
  // }

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    token,
    orgId,
    // devicecode: new Fingerprint().get() || 1234567,
  };
  return {
    url,
    options: { ...options, headers },
  };
});

export default request;
