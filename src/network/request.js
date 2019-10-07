/* 引入axios */
import axios from 'axios';

// 这里不适用default是因为我们可能会导出多个实例
export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });
  // 拦截器使用
  instance.interceptors.request.use(config => { // config名字随意
    return config; // 注意最终必须把配置对象返回
  }, error => {
    // 对请求错误做些什么[断网]
    console.log(error);
  });

  instance.interceptors.response.use(res => {
    return res.data; // 注意最终必须把结果返回，一般返回res.data即可
  }, error => { // 比如路径不存在
    console.log(error);
  });

  // 发送网络请求
  return instance(config); // instance的类型就是Promise
}
