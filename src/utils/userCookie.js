import Cookies from 'js-cookie';

/**
 * 设置 用户Cookie
 * @param {Object} info
 */
export function setCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}

/**
 * 删除指定的用户cookie
 * @param {String} name
 * @returns
 */
export function removeUserCookie(name) {
  return Cookies.remove(name);
}

/**
 * 删除所有的cookie
 * @returns
 */
export function removeAllUserCookie() {
  const cookies = Object.entries(Cookies.get());
  for (let i = 0; i < cookies.length; i += 1) {
    Cookies.remove(cookies[i][0]);
  }
  return true;
}

/**
 * 获得指定名称的Cookie
 * @param {String} name
 * @returns
 */
export function getUserCookie(name) {
  return Cookies.get(name);
}

/**
 * 获得所有的Cookie
 * @returns
 */
export function getAllUserCookie() {
  return Cookies.get();
}
