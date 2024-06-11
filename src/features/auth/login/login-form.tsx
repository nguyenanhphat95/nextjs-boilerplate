'use client';
import { MyButton, MyInput } from "@/features/ui";
import { useState } from "react";
import { login } from "../actions";
import { useRouter } from "next/navigation";
import { CookieClient } from "@/shared/cookie-client";

export function LoginForm() {
  const router = useRouter();

  const [data, setName] = useState({
    email: 'u1@gmail.com',
    password: '123123'
  });

  const handleLogin = async () => {
    const { payload } = await login(data);
    if (payload) {
      CookieClient.setAccessToken(payload.data.token)
      router.replace('/');
      router.refresh();
    }
  }

  return (
    <form action={handleLogin} className="flex flex-col space-y-2">
      <h1>Username:</h1>
      <MyInput value={data.email} />

      <h1>Password:</h1>
      <MyInput value={data.password} />

      <div className="pt-4 flex justify-center">
        <MyButton htmlType="submit">Login</MyButton>
      </div>
    </form>
  )
}

