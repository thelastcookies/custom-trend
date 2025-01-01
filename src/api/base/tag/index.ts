import type { BaseResponseBody } from '@/api/base/types';
import type { TagConstructRecord, TagPointParams, TagPointRecord } from '@/api/base/tag/types';

export const getTagConstruct = () => {
  return useGet<BaseResponseBody<TagConstructRecord[]>>(
    `${BASE_URL}/tag/allClassifications`,
  );
};

export const getTagPoint = (data: TagPointParams) => {
  return usePost<BaseResponseBody<TagPointRecord[]>, TagPointParams>(
    `${BASE_URL}/tag/pointsByCondition`,
    data,
  );
};
