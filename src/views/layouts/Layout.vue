<script setup lang="ts">
</script>
<template>
  <a-layout w-full h-full>
    <RouterView v-slot="{ Component, route }">
      <Transition appear name="slide-fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </a-layout>
</template>
