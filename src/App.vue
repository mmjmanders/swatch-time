<script setup lang="ts">
import SwatchClock from './components/SwatchClock.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { minutesPerSwatch } from '@/util';
import { DateTime } from 'luxon';

const interval = ref<number | null>(null);
const time = ref<DateTime>(DateTime.now());

onMounted(() => {
  interval.value = setInterval(() => {
    time.value = DateTime.now();
  }, minutesPerSwatch / 100);
});

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
    interval.value = null;
  }
});
</script>

<template>
  <main>
    <SwatchClock :time="time" />
  </main>
</template>

<style scoped>
main {
  width: 100vmin;
  height: 100vmin;
  margin: auto;
}
</style>
