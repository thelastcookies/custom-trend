import type { QueryFormField } from '@/components/common/query-form/types';
import type { Dayjs } from 'dayjs';

export const customTrendFields: QueryFormField[] = [
  {
    field: 'time',
    component: 'RangePicker',
    colSpan: 8,
    wrapperCol: { span: 24, offset: 2 },
    compProps: {
      disabledDate: (current: Dayjs) => {
        return current && (current.isAfter(dayjs(), 'day') || current.isBefore(dayjs('2024-11-01'), 'day'));
      },
      disabledTime: (current: Dayjs, type: 'start' | 'end') => {
        const now = dayjs();
        if (current && current.isSame(now, 'day')) {
          return {
            disabledHours: () => Array.from({ length: 24 }, (_, i) => i).filter((h) => h > now.hour()),
            disabledMinutes: (hour: number) => {
              if (hour === now.hour()) {
                return Array.from({ length: 60 }, (_, i) => i).filter((m) => m > now.minute());
              }
              return [];
            },
            disabledSeconds: (hour: number, minute: number) => {
              if (hour === now.hour() && minute === now.minute()) {
                return Array.from({ length: 60 }, (_, i) => i).filter((s) => s > now.second());
              }
              return [];
            },
          };
        }
        return {};
      },
      placeholder: ['请选择开始时间', '请选择结束时间'],
      showTime: { defaultValue: dayjs('00:00:00', 'HH:mm:ss') },
      presets: [
        { label: '近15分钟', value: [dayjs().subtract(15, 'm'), dayjs()] },
        { label: '近一小时', value: [dayjs().subtract(1, 'h'), dayjs()] },
        { label: '近八小时', value: [dayjs().subtract(8, 'h'), dayjs()] },
        { label: '近一天', value: [dayjs().subtract(1, 'd'), dayjs()] },
        { label: '近三天', value: [dayjs().subtract(3, 'd'), dayjs()] },
        { label: '近一周', value: [dayjs().subtract(7, 'd'), dayjs()] },
        { label: '近十五天', value: [dayjs().subtract(15, 'd'), dayjs()] },
        { label: '近一个月', value: [dayjs().subtract(1, 'M'), dayjs()] },
      ],
    },
  },
  {
    field: 'multiCheck',
    component: 'Checkbox',
    colSpan: 2,
    // wrapperCol: { offset: 8 },
    compProps: {
      options: [{
        label: '多坐标轴',
        value: 'multiCheck',
      }],
    },
  },
];
