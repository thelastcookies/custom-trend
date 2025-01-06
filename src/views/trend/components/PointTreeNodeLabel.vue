<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string;
  query?: RegExp;
  reload?: boolean;
}>(), {});

const emit = defineEmits<{
  (e: 'reload'): void;
}>();

const groups = computed(() => props.query ? Array.from(props.label.matchAll(props.query)).map(match => ({
  match: match[0],
  index: match.index,
  indexEnd: match.index + match[0].length,
})): []);

</script>

<template>
  <div class="flex tree-node-title">
    <div v-if="label && query && groups.length">
      <template v-for="({ match, index, indexEnd }, i) in groups">
        <template v-if="i === 0">
          {{ label.substring(0, index) }}
        </template>
        <span class="c-ant.error">{{ match }}</span>
        <template v-if="i === groups.length - 1">
          {{ label.substring(indexEnd) }}
        </template>
        <template v-else>
          {{ label.substring(indexEnd, groups[i + 1].index) }}
        </template>
      </template>
    </div>
    <div v-else-if="reload" class="c-ant.link" @click="emit('reload')">
      <BaseIcon class="mr-2" icon="i-mdi-reload" />
      <span class="">{{ label }}</span>
    </div>
    <div v-else>{{ label }}</div>
  </div>
</template>
