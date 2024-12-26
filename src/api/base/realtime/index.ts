import type { BaseResponseBody, TagsRequestBody, ValueResponseBody } from '@/api/base/types';

export const getRealtime = (tags: string) => {
  return usePost<BaseResponseBody<ValueResponseBody>, TagsRequestBody>(
    `${BASE_URL}/taos/real`,
    { tags },
  );
};

export const getDesc = (tags: string) => {
  return usePost<BaseResponseBody<Record<string, string>>, TagsRequestBody>(
    `${BASE_URL}/taos/real`,
    { tags },
  );
};
