import { ACCESS_TOKEN_KEY } from '@/shared/constants';
import Cookies from 'js-cookie';

export const CookieClient = {
  getAccessToken: () => Cookies.get(ACCESS_TOKEN_KEY),
  setAccessToken: (token: string) => {
    Cookies.set(ACCESS_TOKEN_KEY, token);
  },
  removeAccessToken: () => {
    Cookies.remove(ACCESS_TOKEN_KEY);
  }
}

