export type LoginBodyType = {
  email: string;
  password: string;
}

export type LoginResponseType = {
  data: {
    account: {
      id: number;
      name: string;
      email: string;
    };
    expiresAt: string;
    token: string;
  };
  message: string;
}