import { API_DOMAIN, REVALIDATE } from "./constants";
import { FetcherParams, FetcherResponse } from "./types";

const buildToFormData = (params?: Record<string, any>) => {
  if (!window.FormData || !params) {
    console.log('FormData does not supported');
    return null;
  }

  let form = new window.FormData();
  for (let name in params) {
    form.append(name, params[name]);
  }
  return form;
};

export const fetcher = async <T>({
  apiEndpoint,
  requestData,
  method = 'GET',
  contentType = 'json',
  revalidate = REVALIDATE,
  headers = {
    'Content-Type': '*',
  },
}: FetcherParams): Promise<FetcherResponse<T>> => {
  try {
    // Determine if the request should be sent as form-data
    const isFormData = contentType === 'form-data';
    let innerRequestData;
    let innerHeaders: HeadersInit = {
      ...headers,
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    };

    if (isFormData) {
      innerRequestData = buildToFormData(requestData);
    } else {
      innerHeaders = {
        ...innerHeaders,
        'Accept': 'application/json, text/plain, */*',
      };
      innerRequestData = JSON.stringify(requestData);
    }

    const response = await fetch(`${API_DOMAIN}${apiEndpoint}`, {
      method,
      body: innerRequestData,
      headers: innerHeaders,
      next: {
        revalidate,
      },
    });

    if (!response.ok) {
      throw new Error(
        `fetcher failed: ${response.status}/${response.statusText} - ${apiEndpoint}`
      );
    }

    const data = (await response.json()) as T;
    return { success: true, data };
  } catch (error) {
    console.error('Fetch error:', error);
    return { success: false, error: (error as Error).message };
  }
};
