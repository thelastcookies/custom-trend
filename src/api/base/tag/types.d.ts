export interface TagConstructRecord {
  id: number;
  pid: number;
  description: string;
  hierarchy: number;
}

export interface TagPointParams {
  //分页参数每页条数
  size?: number;
  //当前页
  current?: number;
  //测点名称模糊查询
  tagdesc?: string;
  //结构id
  classificationId?: number;
}

export interface TagPointRecord {
  id: number;
  taglogicid: string;
  tagid: string;
  tagdesc: string;
  tagdescsec: null,
  classificationId: number;
}
