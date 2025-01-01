export interface TagConstructRecord {
  id: number;
  pid: number;
  description: string;
  hierarchy: number;
}

export interface TagPointParams {
  //分页参数每页条数
  size?: string;
  //当前页
  current?: string;
  //测点名称模糊查询
  tagdesc?: string;
  //结构id
  classificationId?: string;
}

export interface TagPointRecord {
  id: number;
  taglogicid: string;
  tagid: string;
  tagdesc: string;
  tagdescsec: null,
  classificationId: number;
}
