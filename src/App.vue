<script setup lang="ts">
import SwatchClock from './components/SwatchClock.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { minutesPerSwatch } from '@/util';
import { DateTime } from 'luxon';

const swatchInterval = ref<number | null>(null);
const swatch = ref<DateTime>(DateTime.now());

const localTimeInterval = ref<number | null>(null);
const localTime = ref<DateTime>(DateTime.now());

onMounted(() => {
  swatchInterval.value = setInterval(() => {
    swatch.value = DateTime.now();
  }, minutesPerSwatch / 100);
  localTimeInterval.value = setInterval(() => {
    localTime.value = DateTime.now();
  }, 1000);
});

onUnmounted(() => {
  if (swatchInterval.value) {
    clearInterval(swatchInterval.value);
    swatchInterval.value = null;
  }
  if (localTimeInterval.value) {
    clearInterval(localTimeInterval.value);
    localTimeInterval.value = null;
  }
});
</script>

<template>
  <main>
    <SwatchClock :time="swatch" :local-time="localTime" />
  </main>
</template>

<style scoped>
main {
  width: 100vmin;
  height: 100vmin;
  margin: auto;
}
</style>
