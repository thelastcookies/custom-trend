<script setup lang="ts">
import type { Key, Recordable } from '@/types';
import type { TagConstructRecord } from '@/api/base/tag/types';
import type { TreeNode as TreeNodeType } from '@/utils/tree';
import type { DefaultOptionType } from 'ant-design-vue/es/vc-select/Select';
import type { Rule } from 'ant-design-vue/es/form';

const tags = defineModel<TreeNodeType<TagConstructRecord>[]>('tags', { default: () => [] });

const selectedPoints = ref<Key[]>([]);
const selectedPointOptions = ref<DefaultOptionType>([]);

const tagStatList = ref<{
  tag: string;
  desc: string;
  max: number;
  min: number;
  avg: number;
}[]>([]);

const qForm = ref<Recordable<any>>({
  selectedPoints: [],
  time: [dayjs().subtract(8, 'hours'), dayjs()],
  multiCheck: [],
});

const rules: Record<string, Rule[]> = {
  selectedPoints: [{ required: true, message: '请至少选择一个测点以查询' }],
  time: [{
    validator(_, value) {
      if (!value || value.length !== 2) {
        return Promise.reject('请选择时间范围');
      }
      const [start, end] = value;
      if (dayjs(start).isSame(end, 'month')) {
        return Promise.resolve();
      }
      return Promise.reject('起止时间不可跨月');
    },
  }],
};

const fields = ref(customTrendFields);

watch(tags, (tags) => {
  selectedPointOptions.value = tags?.map(tag => {
    return {
      label: tag.description,
      value: tag.getId(),
    };
  });
  selectedPoints.value = tags?.map(tag => tag.getId()!);
});

const handleDeselect = (value: Key) => {
  tags.value = tags.value.filter(tag => tag.getId() !== value);
};

const onQuery = (form: Record<string, string>) => {
  qForm.value = form;
  fetch();
};

const onClear = () => {
  tags.value = [];
  renderECharts(generalLineChartOption, true);
  tagStatList.value = [];
};

// ECharts 初始化
const chartRef = ref<ComponentPublicInstance>();
const { renderECharts, setEChartsLoading } = useECharts(chartRef!);

tryOnMounted(() => {
  renderECharts(generalLineChartOption);
});

const fetch = async () => {
  if (!tags.value) return;
  setEChartsLoading(true);
  try {
    const data = await getTrendData({
      tags: tags.value.map(tag => tag.getId()).join('|'),
      st: qForm.value.time[0],
      ed: qForm.value.time[1],
      interval: 300,
      type: HisDataType.TIME_VALUE_ARR,
    });

    tagStatList.value = [];
    tags.value.forEach((item, index) => {
      const tagValue = data.map((it: string[]) => isNaN(Number(it[index + 1])) ? 0 : Number(it[index + 1]));
      const sm = sum(tagValue);
      const avg = unref(usePrecision(sm / tagValue.length, 2));
      tagStatList.value.push({
        tag: item.getId() as string,
        desc: item.description as string,
        max: max(tagValue),
        min: min(tagValue),
        avg,
      });
    });

    const multiCheck = qForm.value.multiCheck?.includes('multiCheck');

    const yAxisItem = {
      type: 'value',
      position: 'left',
      axisTick: { show: false },
      alignTicks: true,
      axisLabel: {
        hideOverlap: true,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
        },
      },
    };

    await renderECharts(merge({}, generalLineChartOption, {
      grid: {
        left: multiCheck ? 40 + (tags.value.length - 1) * 30 + 'px' : '40px',
        top: tags.value.length > 6 ? 60 + Math.floor(tags.value.length / 6) * 20 + 'px' : '60px',
      },
      legend: {
        data: tags.value.map(item => {
          return { name: item.description, icon: 'rect' };
        }),
      },
      yAxis: multiCheck ? tags.value.map((_, index) => {
        return Object.assign({}, yAxisItem, {
          // name: item,
          offset: 30 * index,
        });
      }) : [yAxisItem],
      series: tags.value.map((item, index) => {
        let series = {
          name: item.description,
          type: 'line',
          symbol: 'none',
        };
        if (multiCheck) {
          series = Object.assign(series, {
            yAxisIndex: index,
          });
        }
        return series;
      }),
      dataset: {
        source: data,
      },
    }), true);
  } catch (e) {
    message.error('数据请求失败，请检查是否含有非法测点');
  } finally {
    setEChartsLoading(false);
  }
};

</script>

<template>
  <div class="h-full flex flex-col overflow-y-auto">
    <QueryForm
      :fields="fields"
      :rules="rules"
      v-model:form="qForm"
      @query="onQuery"
      @clear="onClear"
    >
      <a-col :span="8">
        <a-form-item
          label="已选测点"
          name="selectedPoints"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
          validateStatus="success"
          help=""
        >
          <BaseSelect
            v-model:value="selectedPoints"
            placeholder="请在左侧树中选择测点"
            mode="multiple"
            :maxTagCount="6"
            :maxTagTextLength="8"
            :options="selectedPointOptions"
            :allow-clear="false"
            @deselect="handleDeselect"
          />
        </a-form-item>
      </a-col>
    </QueryForm>
    <ECharts class="h-600px bg-ant.bg-container rounded-ant.br" ref="chartRef" />
    <a-descriptions title="测点统计" bordered :column="5"
      class="bg-ant.bg-container rounded-ant.br flex-1 p-3 mt-3">
      <template v-for="item in tagStatList">
        <a-descriptions-item label="测点">{{ item.tag }}</a-descriptions-item>
        <a-descriptions-item label="描述">{{ item.desc }}</a-descriptions-item>
        <a-descriptions-item label="平均值">{{ item.avg }}</a-descriptions-item>
        <a-descriptions-item label="最大值">{{ item.max }}</a-descriptions-item>
        <a-descriptions-item label="最小值">{{ item.min }}</a-descriptions-item>
      </template>
    </a-descriptions>
  </div>
</template>
