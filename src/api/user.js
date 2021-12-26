import request from './request';

export function login(params) {
  return request.post('passport/login', params);
}

export function loginOut() {}
