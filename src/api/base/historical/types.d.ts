import type { Dayjs } from 'dayjs';
import type { HisDataType } from '@/enums';

export interface HisTagParams {
  tags: string,
  st: Dayjs,
  ed?: Dayjs,
  interval?: number,
  type?: HisDataType,
  decimal?: number
}
