<script setup lang="ts">
import type { Recordable } from '@/types';
import type { TagConstructRecord } from '@/api/base/tag/types';
import type { TreeNode } from '@/utils/tree';

const props = defineProps<{
  tags?: TreeNode<TagConstructRecord>[];
}>();

const emit = defineEmits<{
  (e: 'submit'): void
}>();

const tagStatList = ref<{
  nodeTag: string;
  max: number;
  min: number;
  avg: number;
}[]>([]);

const qForm = ref<Recordable<any>>({
  selectedPoints: [],
  time: [dayjs().subtract(2, 'hours'), dayjs()],
  multiCheck: [],
});

const fields = ref(customTrendFields);

watch(() => props.tags, (tags) => {
  fields.value[0].compProps.options = tags?.map(tag => {
    return {
      label: tag.description,
      value: tag.getId(),
    };
  });
  qForm.value.selectedPoints = tags?.map(tag => tag.getId());
});

const onQuery = (form: Record<string, string>) => {
  qForm.value = form;
  fetch()
};

// ECharts 初始化
const chartRef = ref<ComponentPublicInstance>();
const { renderECharts, setEChartsLoading } = useECharts(chartRef!);

renderECharts(generalLineChartOption);

const fetch = async () => {
  if (!props.tags) return;
  setEChartsLoading(true);
  const data = await getTrendData({
    tags: props.tags.join('|'),
    st: qForm.value.time[0],
    ed: qForm.value.time[1],
    interval: 60,
    type: HisDataType.TIME_VALUE_ARR,
  });

  tagStatList.value = [];
  props.tags.forEach((item, index) => {
    const tagValue = data.map((it: string[]) => isNaN(Number(it[index + 1])) ? 0 : Number(it[index + 1]));
    const sm = sum(tagValue);
    const avg = unref(usePrecision(sm / tagValue.length, 2));
    tagStatList.value.push({
      nodeTag: item.getId() as string,
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
      left: multiCheck ? 40 + (props.tags.length - 1) * 30 + 'px' : '40px',
    },
    legend: {
      data: props.tags.map(item => {
        return { name: item, icon: 'rect' };
      }),
    },
    yAxis: multiCheck ? props.tags.map((_, index) => {
      return Object.assign({}, yAxisItem, {
        // name: item,
        offset: 30 * index,
      });
    }) : [yAxisItem],
    series: props.tags.map((item, index) => {
      let series = {
        name: item,
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
  setEChartsLoading(false);
};

</script>

<template>
  <QueryForm
    :fields="fields"
    v-model:form="qForm"
    @query="onQuery"
  >
  </QueryForm>
  <ECharts class="h-600px" ref="chartRef" />
  <a-descriptions v-if="tagStatList.length"
    mt-3 bordered :column="4"
  >
    <template v-for="item in tagStatList">
      <a-descriptions-item label="测点">{{ item.nodeTag }}</a-descriptions-item>
      <a-descriptions-item label="平均值">{{ item.avg }}</a-descriptions-item>
      <a-descriptions-item label="最大值">{{ item.max }}</a-descriptions-item>
      <a-descriptions-item label="最小值">{{ item.min }}</a-descriptions-item>
    </template>
  </a-descriptions>
</template>
