export type METHOD_TYPE = 'POST' | 'GET' | 'PUT' | 'DELETE';

export type CONTENT_TYPE = 'form-data' | 'json';

export type FetcherResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type FetcherParams = {
  apiEndpoint: string;
  requestData?: Record<string, any>;
  method?: METHOD_TYPE;
  contentType?: CONTENT_TYPE;
  revalidate?: number;
  headers?: HeadersInit;
}