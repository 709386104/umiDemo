import request from '../utils/request';

export function query() {
  console.log("-------------")
  return request('/api/users');
}
