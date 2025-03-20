<script setup lang="ts">
import { computed, ref } from 'vue';
import type { DateTime } from 'luxon';
import { calculateSwatch } from '@/util';
import ClockHand from '@/components/ClockHand.vue';
import SecondHand from '@/components/SecondHand.vue';

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
      <path id="marker" d="M -2.5,-490 l 5,0 0,40 -5,0 z" />
      <g id="clock-hand">
        <path d="M -5,30 l 10,0 0,-505 -10,0 z" fill="red" />
        <circle cx="0" cy="0" r="15" fill="red" />
      </g>
      <path id="second-hand" d="M -1,45 l 2,0 0,-510 -2,0 z" fill="black" />
    </defs>
    <g>
      <text class="time" x="0" y="250" text-anchor="middle">{{ swatchTime }}</text>
      <text class="version" x="0" y="300" text-anchor="middle">{{ version }}</text>
    </g>
    <g>
      <use
        xlink:href="#marker"
        v-for="marker in markers"
        :key="marker"
        :transform="'rotate(' + marker + ')'"
      />
    </g>
    <g>
      <ClockHand :time="time" />
      <SecondHand :time="time" />
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
