export const isClient = () => typeof window !== 'undefined';

export const normalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}

export const isFormData = (body: any) => {
  if (!body) {
    return false;
  }

  return body instanceof FormData;
}