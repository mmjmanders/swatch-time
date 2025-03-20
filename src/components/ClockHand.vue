<script setup lang="ts">
import { computed } from 'vue';
import type { DateTime } from 'luxon';
import { calculateSwatch } from '@/util';

const props = defineProps<{
  time: DateTime;
}>();

const rotation = computed(() => (Math.floor(calculateSwatch(props.time)) / 1000) * 360);
</script>

<template>
  <use xlink:href="#clock-hand" :transform="'rotate(' + rotation + ')'" />
</template>

<style scoped></style>
