export interface Env {
  employeeUrl: string;
  apiUrl: string;
  manageUrl: string;
  bucketname: string;
  username: string;
  password: string;
  domain: string;
  bucketnameV: string;
  usernameV: string;
  passwordV: string;
  domainV: string;
  upyunApi: string;
}

let apiUrl = 'https://ceduv2.langpedu.com';
let manageUrl = 'https://beduv2.langpedu.com';
let employeeUrl = 'https://learnv2.langpedu.com';
let upyunImg = 'https://cc-imgs.langpedu.com/';
// 又拍云图片上传
const upyunApi = 'https://v0.api.upyun.com/';
let bucketname = 'pre-cc-imgs';
let username = 'preccimgs';
let password = 'NGXjdDpGcrxm5sQ5REKW6Gaj0eBQ0Gk2';
let domain = 'cc-imgs.langpedu.com';
// 又拍云文件上传
let bucketnameV = 'pre-cc-dl';
let usernameV = 'preccdl';
let passwordV = 'mwsSYUmU3iLOqlPw0W1TglY43dZWL99n';
let domainV = 'cc-dl.langpedu.com';

if (process.env.MY_NODE_ENV === 'test') {
  apiUrl = 'https://ceduv2.test.langpedu.com';
  manageUrl = 'https://beduv2.test.langpedu.com';
  employeeUrl = 'https://learnv2.test.langpedu.com';
  upyunImg = 'https://cc-imgs.langpedu.com/';
  // 又拍云图片上传
  bucketname = 'pre-cc-imgs';
  username = 'preccimgs';
  password = 'NGXjdDpGcrxm5sQ5REKW6Gaj0eBQ0Gk2';
  domain = 'cc-imgs.langpedu.com';
  // 又拍云文件上传
  bucketnameV = 'pre-cc-dl';
  usernameV = 'preccdl';
  passwordV = 'mwsSYUmU3iLOqlPw0W1TglY43dZWL99n';
  domainV = 'cc-dl.langpedu.com';
} else if (process.env.MY_NODE_ENV === 'master') {
  apiUrl = 'https://cedu.51jiaoyujia.com';
  manageUrl = 'https://bedu.51jiaoyujia.com';
  employeeUrl = 'https://learn.51jiaoyujia.com';
  upyunImg = 'https://companycollege-imgs.51jiaoyujia.com/';
  // 又拍云图片上传
  bucketname = 'companycollege-imgs';
  username = 'companycollegeimgs';
  password = '';
  domain = 'companycollege-imgs.51jiaoyujia.com';

  // 又拍云文件上传
  bucketnameV = 'companycollege-dl';
  usernameV = 'companycollegedl';
  passwordV = '';
  domainV = 'companycollege-dl.51jiaoyujia.com';
} else if (process.env.MY_NODE_ENV === 'mock') {
  apiUrl = '';
  manageUrl = '';
  employeeUrl = '';
  upyunImg = '';
}

export default {
  apiUrl,
  manageUrl,
  employeeUrl,
  upyunImg,
  bucketname,
  username,
  password,
  domain,
  bucketnameV,
  usernameV,
  passwordV,
  domainV,
  upyunApi,
} as Env;
