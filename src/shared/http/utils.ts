import { isClient } from "@/shared/utils";
import { CookieClient } from "../cookie-client";
import { CookieServer } from "../cookie-server";

export const normalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}

export const isFormData = (body: any) => {
  if (!body) {
    return false;
  }

  return body instanceof FormData;
}

export const getAccessToken = () => {
  if (isClient()) {
    return CookieClient.getAccessToken();
  } else {
    return CookieServer.getAccessToken();
  }
}