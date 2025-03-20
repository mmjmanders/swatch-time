<script setup lang="ts">
import { computed, ref } from 'vue';
import type { DateTime } from 'luxon';
import { calculateSwatch } from '@/util';

const markers = ref<number[]>(
  Array(1000)
    .fill(0)
    .map((_, i) => (360 / 1000) * i)
    .filter((_, i) => i % 20 === 0),
);

const props = defineProps<{ time: DateTime }>();

const swatchTime = computed(() => calculateSwatch(props.time).toFixed(2));
const { VITE_BUILD_SHA: version } = import.meta.env;
</script>

<template>
  <svg viewBox="-500 -500 1000 1000">
    <defs>
      <path id="marker" d="M 0,-490 l 5,0 0,40 -5,0 z" />
    </defs>
    <text class="time" x="0" y="250" text-anchor="middle">{{ swatchTime }}</text>
    <text class="version" x="0" y="300" text-anchor="middle">{{ version }}</text>
    <g id="markers">
      <use
        xlink:href="#marker"
        v-for="marker in markers"
        :key="marker"
        :transform="'rotate(' + marker + ')'"
      />
    </g>
  </svg>
</template>

<style scoped>
.time {
  font-size: 4rem;
}

.version {
  font-size: 2rem;
}
</style>
