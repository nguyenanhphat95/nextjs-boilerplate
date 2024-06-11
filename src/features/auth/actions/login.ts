'use server'
import { http } from "@/shared/http";
import { LoginBodyType, LoginResponseType } from "../login/types";
import { BASE_URL } from "./constants";

export async function login(data: LoginBodyType) {
  return http.post<LoginResponseType>('/auth/login', data, {
    baseUrl: BASE_URL
  });
}
