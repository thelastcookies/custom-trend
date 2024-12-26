export interface BaseResponseBody<T = any> {
  code: number;
  msg: string;
  data: ? T;
}

export interface TagsRequestBody {
  tags: string;
}

export interface ValueResponseBody {
  values: string;
}

export interface TagTimeRequestBody extends TagsRequestBody {
  time: string;
  interval: number;
}

