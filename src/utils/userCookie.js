import Cookies from 'js-cookie';

let arr = [];
/**
 *
 * @param {Object} info
 */
export function setCookie(info) {
  arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}
export function removeUserCookie(name) {
  return Cookies.remove(name);
}
export function removeAllUserCookie() {
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.remove(arr[i][0]);
  }
  return true;
}

export function getUserCookie(name) {
  return Cookies.get(name);
}

export function getAllUserCookie() {
  return Cookies.get();
}
