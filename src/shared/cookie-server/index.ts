import { ACCESS_TOKEN_KEY } from "@/shared/constants";
import { cookies } from "next/headers";

export const CookieServer = {
  getAccessToken: () => cookies().get(ACCESS_TOKEN_KEY)?.value,
  setAccessToken: (token: string) => {
    cookies().set(ACCESS_TOKEN_KEY, token);
  },
  removeAccessToken: () => {
    cookies().delete(ACCESS_TOKEN_KEY);
  }
}

