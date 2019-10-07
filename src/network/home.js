import {request} from "./request";
/* 首页全部的请求都在这里面 */
export function getHomeMultiData() {
  return request({
    url: 'api/v1/home/multidata'
  })
}
