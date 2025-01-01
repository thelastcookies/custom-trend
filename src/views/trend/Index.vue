<script setup lang="ts">
import type { TreeNode } from '@/utils/tree';
import type { TagConstructRecord } from '@/api/base/tag/types';

const currentSelectTags = ref<TreeNode<TagConstructRecord>[]>();

</script>

<template>
  <div class="w-full h-full p-3 flex gap-3">
    <div class="w-25% h-full bg-ant.bg-container rounded-ant.br p-3">
      <PointTree v-model:value="currentSelectTags" />
    </div>
    <div class="w-75%">
      <TrendChart
        v-model:tags="currentSelectTags"
      ></TrendChart>
    </div>
  </div>
</template>
