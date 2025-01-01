import type { QueryFormField } from '@/components/common/query-form/types';

export const customTrendFields: QueryFormField[] = [
  {
    label: '已选测点',
    field: 'selectedPoints',
    component: 'Select',
    colSpan: 8,
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    compProps: {
      placeholder: '请在左侧树中选择测点',
      mode: 'multiple',
      maxTagCount: 6,
      maxTagTextLength: 10,
      options: [],
      allowClear: false,
    },
  },
  {
    field: 'time',
    component: 'RangePicker',
    colSpan: 8,
    wrapperCol: { span: 24, offset: 2 },
    compProps: {
      placeholder: ['请选择开始时间', '请选择结束时间'],
      showTime: { defaultValue: dayjs('00:00:00', 'HH:mm:ss') },
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
