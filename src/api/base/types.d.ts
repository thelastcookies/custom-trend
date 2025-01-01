export interface BaseResponseBody<T = any> {
  code: number;
  msg: string;
  data: ? T;
}

export interface ValueResponseBody {
  values: string;
}

export interface LogicalTagTimeRequestBody {
  logicalTags: string;
  time: string;
  interval: number;
}
